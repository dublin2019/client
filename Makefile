VT = \033[$(1)m
VT0 := $(call VT,0)
VT_DIM := $(call VT,2)
VT_HL := $(call VT,33;1)
CHK := $(call VT,32;1)✓${VT0}
ERR := $(call VT,31;1)✖${VT0}

DIST_DIR = dist
REL_BRANCH = gh-pages

release: release-master

release-%:
	git checkout $*
	@if ! git diff-index --quiet HEAD; then echo "$(ERR) Git working directory is not clean!\n"; exit 1; fi
	$(eval HEAD = $(shell git rev-parse --short $*))
	@echo "Building $(VT_HL)$*$(VT0) release from commit $(VT_HL)$(HEAD)$(VT0)"
	rm -rf $(DIST_DIR)
	npm run build:prod
	git checkout $(REL_BRANCH)
	git merge -s ours --log --no-edit $*
	git rm -r --ignore-unmatch $*
	mv $(DIST_DIR) $*
	git add $*
	git commit --amend -C HEAD
	git checkout $*
	@echo "$(CHK) Done! New merge commit pushed to branch $(VT_HL)$(REL_BRANCH)$(VT0)"

# emails.txt:
# a file with (optional empty lines and) lines like " email@address      | loginkey"

# takes the kind of output Arnaud copy-pastes from postgres and spits out wanted csv format
emails.all: emails.txt emails.csv Makefile
	(awk '/[a-z]/ {print $$1 "," $$NF}' < $< ; cat emails.csv) | sort | uniq > $@
	cp $@ emails.csv

instaloginkeys.json: emails.all Makefile
	./make-emailHashToLoginKey.pike < $< > $@

instaloginkeys.js: emails.json Makefile
	(/bin/echo -n 'export default ' ; cat $<) > $@
