#! /usr/bin/env pike

string salt = "Salted!";

string hash(string email) {
  return String.string2hex(Crypto.MD5.hash(salt + lower_case(email)));
}

string map_csv_line(string csv) {
  array(string) fields = csv / ",";
  return sprintf("\"%s\": \"%s\"", hash(fields[0]), fields[1]);
}

int main(int argc, array(string) argv) {
  array(string) lines = Stdio.stdin.read() / "\n" - ({""});
  string json = "{ " + Array.map(lines, map_csv_line) * "\n, " + "\n}\n";
  write(json);
}
