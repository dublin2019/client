https://api.dublin2019.com/ index page:

Change:

Young Adult membership (€100)
-Born on or after 15 August 1994
+Born between 16 Aug 1993 and 15 Aug 2009 inclusive

Adult membership (€160)
-
+Born on or after 15 August 1993

Child membership (€60)
-Born on or after 14 August 2006
+Born between 16 Aug 2009 and 15 Aug 2013 inclusive

Infant membership (€5)
-Born on or after 14 August 2013
+Born on or after 16 August 2013

Inject new tag before:
+<p>People that voted in Site Selection in Helsinki or were Dublin BID Presupporters / Backers / Friends / Super Friends, or are members of Dublin 2019 Worldcon, will need to use a login link sent to you via email.</p>

-To access our services, you'll need to use a login link sent to you via email. To request a new login link, please enter your email address below, and it'll be sent to you. The address you enter will need to match the one we have in our database for you; it's the one that you provided when signing up, and at which you've previously received messages from us.
+To request a new login link, please enter your email address below, and it'll be sent to you. The address you enter will need to match the one we have in our database for you; it's the one that you provided when signing up, and at which you've previously received messages from us.

.bg-text style attribute additions for the div around the two <p>:s "If you're not able to enter a valid address, or if you do not receive the login link within 30 minutes or so, please get in touch with us at registrar@dublin2019.com and we'll help you get sorted." + below <p>:
{
padding: 0.5em 16px;
margin-top: 1em;
background-color: rgba(0,0,0,0.66);
}

-For further assistance with Hugo nominations, please e-mail hugohelp@dublin2019.com.
+Hugo nominations will open in early 2018.



To access our services, you'll need to use a login link sent to you via email. To request a new login link, please enter your email address below, and it'll be sent to you. The address you enter will need to match the one we have in our database for you; it's the one that you provided when signing up, and at which you've previously received messages from us. 






https://api.dublin2019.com/new/Child

CSS changes to accommodate for the class set up as follows (likely done in React style={}, or code):
    color: rgb(128, 128, 128);
    font-size: 13px;
    margin-bottom: 24px;
change to
    margin: 12px 0 24px;

Autocomplete notice: add margin-bottom: 1em on input[text] fields so they don't hide descriptive texts:



-We'll need to check this against an official ID at the con, but otherwise it'll stay confidential.
+We'll need you to bring something with your legal name on it to pick up your badge at con, but otherwise it'll stay confidential.


{these two are on the same line}

-Public First Name
+Given Name For Publications

-Public Last Name
+Family Name For Publications

{their help text}

-How shall we list you in public? Leave these fields blank if you'd prefer we don't list you at all on our website or elsewhere. If you give us two names, we'll use the second for alphabetization (either can contain spaces). A few months before the con, you'll be able to separately customize the text of your badge.
+How shall we list you in public? Leave these fields blank if you'd prefer we don't list you at all on our website or elsewhere. If you give us two names, we'll use the second for alphabetization (either can contain spaces).


{add another pair of fields here:}

Badge Name

Street Address

{no help text}



{this is three fields on a line; turn it to 2+2, adding Zip / Postal Code

-City
+City / Town

-State/province
+State / Province / Region



-Where you're from. Not strictly speaking necessary, but we'd love to know how much world is coming to our Worldcon. Be as specific as you wish; not all fields will apply to everyone.
+{nothing}








After payment (411111*, 11/11 111 11111)
help text:

don't 
-and/or add paper publications
+and/or add paper progress reports


-Add paper publications (€10)
+Add paper progress reports (€10)

-By default, we'll be in touch with you electronically to let you know how our preparations are progressing. If you'd prefer to receive our progress reports and other publications by post, select this option (note the additional fee).
+<p>...</p>
+<p>If paper progress reports are needed for Access, please email registrar@dublin2019.com, and we will provide them at no charge.</p>
