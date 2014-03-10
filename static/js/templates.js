(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/about.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-hero\">\n    <h2 class=\"mm-marketing-text\">\n        Evangeler Helps Companies Create Viral and Social Marketing Campaigns.\n    </h2>\n\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        We'll create a page for your business on Evangeler.com!\n    </h3>\n    <button type=\"button\" class=\"gameon-btn-hg btn btn-warning btn-lg\">Login With Facebook\n    </button>\n</div>\n<div class=\"mm-hero mm-hero--light\">\n    <h2 class=\"mm-marketing-text mm-marketing-text--black\">\n        2: Pick &amp; run a viral marketing contest you like!\n    </h2>\n\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller mm-marketing-text--black\">\n        Evangelers from all over the world compete to promote your product and win cash prizes\n    </h3>\n    <button type=\"button\" class=\"gameon-btn-hg btn btn-success btn-lg\">Browse Categories\n    </button>\n</div>\n<div class=\"mm-hero mm-hero--secondary\">\n    <h2 class=\"mm-marketing-text\">\n        3: Award a winner!\n    </h2>\n\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        For best results share your contest at every stage!\n    </h3>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/contact.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-hero\">\n    <h2 class=\"mm-marketing-text\">\n        Evangeler Helps Companies Create Viral and Social Marketing Campaigns.\n    </h2>\n\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        Give us an email at leepenkman@evangeler.com\n    </h3>\n    <a href=\"mailto:leepenkman@evangeler.com\" type=\"button\" class=\"gameon-btn-hg btn btn-warning btn-lg\">Email Us\n    </a>\n</div>\n<div class=\"mm-hero mm-hero--light\">\n    <h2 class=\"mm-marketing-text mm-marketing-text--black mm-marketing-text--smaller\">\n        Call us on +61 421 922 842 In Australia<br>\n        Call us on +64 21 296 4467 in New Zealand.\n    </h2>\n\n\n</div>\n<div class=\"mm-hero mm-hero--secondary\">\n    <h2 class=\"mm-marketing-text\">\n        Business Address;\n    </h2>\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        Unit 507/815 Bourke Street,<br>\n        Docklands,<br>\n        Melbourne<br>\n        Australia.<br>\n        <br>\n        4 Thornlea Drive,<br>\n        Welcome Bay,<br>\n        Tauranga,\n        New Zealand<br>\n    </h3>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/footer.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n<div class=\"mm-footer\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"mm-footer__section\">\n\n                <h4 class=\"mm-footer__heading\">Company</h4>\n                ";
if("/contact" == runtime.contextOrFrameLookup(context, frame, "path")) {
output += "\n                    <span>Contact</span>\n                ";
;
}
else {
output += "\n                    <a class=\"footer__link\" href=\"/contact\" title=\"Contact Us\"\n                       onclick=\"return APP.goto('contact')\">Contact</a>\n                ";
;
}
output += "\n                ";
if("/about" == runtime.contextOrFrameLookup(context, frame, "path")) {
output += "\n                    <span>About Us</span>\n                ";
;
}
else {
output += "\n                    <a class=\"footer__link\" href=\"/about\" title=\"About Evangeler\"\n                       onclick=\"return APP.goto('about')\">About</a>\n                ";
;
}
output += "\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"mm-footer__section\">\n\n                <h4 class=\"mm-footer__heading\">Social</h4>\n                <a class=\"footer__link\" href=\"https://www.facebook.com/pages/Evangeler/721564427863714\" title=\"Evangeler on Facebook\"\n                   target=\"_blank\">\n                    <span class=\"fa fa-facebook-square mm-share-btn mm-share-btn--facebook\"></span><span\n                        class=\"footer__social-link-text\"> Facebook</span>\n                </a>\n                <a class=\"footer__link\" href=\"http://www.twitter.com/evangelersays\" title=\"Evangeler on Twitter\"\n                   target=\"_blank\">\n                    <span class=\"fa fa-twitter-square mm-share-btn mm-share-btn--twitter\"></span><span\n                        class=\"footer__social-link-text\"> Twitter</span>\n                </a>\n                <a class=\"footer__link\" href=\"http://www.pinterest.com/evangeler\" title=\"Evangeler on Pinterest\"\n                   target=\"_blank\">\n                    <span class=\"fa fa-pinterest-square mm-share-btn mm-share-btn--pinterest\"></span><span\n                        class=\"footer__social-link-text\"> Pinterest</span>\n                </a>\n                <a class=\"footer__link\" href=\"https://plus.google.com/+Evangeler\" rel=\"publisher\"\n                   title=\"Evangeler on Google Plus\" target=\"_blank\">\n                    <span class=\"fa fa-google-plus-square mm-share-btn mm-share-btn--google-plus\"></span><span\n                        class=\"footer__social-link-text\"> Google+</span>\n                </a>\n            </div>\n        </div>\n    </div>\n    <br/>\n\n    <div class=\"mm-tc pull-left\">\n        <span>© 2014 Evangeler</span>\n        ";
if("/terms" == runtime.contextOrFrameLookup(context, frame, "path")) {
output += "\n            <span>Terms &amp; Conditions</span>\n        ";
;
}
else {
output += "\n            <a href=\"/terms\" title=\"Terms &amp; Conditions\" onclick=\"return APP.goto('terms')\">Terms &amp; Conditions</a>\n        ";
;
}
output += "\n        |\n\n        ";
if("/privacy" == runtime.contextOrFrameLookup(context, frame, "path")) {
output += "\n            <span>Privacy</span>\n        ";
;
}
else {
output += "\n            <a href=\"/privacy\" title=\"Privacy\" onclick=\"return APP.goto('privacy')\">Privacy</a>\n        ";
;
}
output += "\n    </div>\n\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/header.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n\n<div class=\"mm-header\">\n    <div class=\"mm-logo\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "path") == "/") {
output += "\n            <span class=\"mm-logo__link\" title=\"Evangeler - Social Marketing For The Masses!\"\n               onclick=\"return APP.goto('')\">\n                <img src=\"/static/img/evangeler-logo64.png\" class=\"mm-logo__image\" width=\"64\" height=\"64\"\n                     alt=\"Evangeler\">\n\n                <h1 class=\"mm-logo__text\">Evangeler</h1>\n            </span>\n        ";
;
}
else {
output += "\n        <a href=\"/\" class=\"mm-logo__link\" title=\"Evangeler - Social Marketing For The Masses!\"\n           onclick=\"return APP.goto('')\">\n            <img src=\"/static/img/evangeler-logo64.png\" class=\"mm-logo__image\" width=\"64\" height=\"64\"\n                 alt=\"Evangeler\">\n\n            <h1 class=\"mm-logo__text\">Evangeler</h1>\n        </a>\n        ";
;
}
output += "\n    </div>\n    <div class=\"mm-header__nav\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "path") == "/how-it-works") {
output += "\n            <span class=\"mm-header__link active\">\n                How It Works\n            </span>\n        ";
;
}
else {
output += "\n            <a class=\"mm-header__link\" href=\"/how-it-works\" title=\"How It Works\"\n               onclick=\"return APP.goto('how-it-works')\">\n                How It Works\n            </a>\n        ";
;
}
output += "\n    </div>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/how-it-works.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n<div class=\"mm-hero\">\n    <h2 class=\"mm-marketing-text\">\n        1: Sign up with Facebook!\n    </h2>\n\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        We'll create a page for your business on Evangeler.com!\n    </h3>\n    <button type=\"button\" class=\"gameon-btn-hg btn btn-warning btn-lg\" onclick=\"fb_login();return false\">Login With Facebook\n    </button>\n</div>\n<div class=\"mm-hero mm-hero--light\">\n    <h2 class=\"mm-marketing-text mm-marketing-text--black\">\n        2: Pick &amp; run a viral marketing contest you like!\n    </h2>\n\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller mm-marketing-text--black\">\n        Evangelers from all over the world compete to promote your product and win cash prizes!\n    </h3>\n    <button type=\"button\" class=\"gameon-btn-hg btn btn-success btn-lg\">Browse Categories\n    </button>\n</div>\n<div class=\"mm-hero mm-hero--secondary\">\n    <h2 class=\"mm-marketing-text\">\n        3: Award a winner!\n    </h2>\n\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        For best results share your contest at every stage!\n    </h3>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/macros.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "\n\n";
var macro_t_1 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("start");
context.setVariable("start", macro_t_1);
output += "\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/privacy.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-privacy mm-article-theme\">\n\n    <h1>Privacy policy</h1>\n\n    <strong>What information do we collect?</strong><br>\n    <br>\n\n    <p style=\"margin-left:15px\">\n        Google, as a third party vendor, uses cookies to serve ads on your site. Google's\n        use of the DART cookie enables it to serve ads to your users based on their visit\n        to your sites and other sites on the Internet. Users may opt out of the use of the\n        DART cookie by visiting the Google ad and content network privacy policy..\n    </p><br>\n    <br>\n    <strong>What do we use your information for?</strong>\n    <br>\n    <br>\n\n    <p style=\"margin-left:15px\">\n        Any of the information we collect from you may be used in one of the following ways:\n        <br>\n        <br>\n        To personalize your experience<br>\n        (your information helps us to better respond to your individual needs)<br>\n        <br>\n        To improve our website<br>\n        (we continually strive to improve our website offerings based on the information\n        and feedback we receive from you)<br></p>\n    <br>\n    <strong>Do we use cookies?</strong>\n    <br>\n    <br>\n\n    <p style=\"margin-left:15px\">\n        Yes (Cookies are small files that a site or its service provider transfers to your\n        computers hard drive through your Web browser (if you allow) that enables the sites\n        or service providers systems to recognize your browser and capture and remember\n        certain information<br>\n        <br>\n        We use cookies to compile aggregate data about site traffic and site interaction\n        so that we can offer better site experiences and tools in the future. We may contract\n        with third-party service providers to assist us in better understanding our site\n        visitors. These service providers are not permitted to use the information collected\n        on our behalf except to help us conduct and improve our business.<br></p>\n    <br>\n    <strong>Do we disclose any information to outside parties?</strong>\n    <br>\n    <br>\n\n    <p style=\"margin-left:15px\">\n        We do not sell, trade, or otherwise transfer to outside parties your personally\n        identifiable information. This does not include trusted third parties who assist\n        us in operating our website, conducting our business, or servicing you, so long\n        as those parties agree to keep this information confidential. We may also release\n        your information when we believe release is appropriate to comply with the law,\n        enforce our site policies, or protect ours or others rights, property, or safety.\n        However, non-personally identifiable visitor information may be provided to other\n        parties for marketing, advertising, or other uses.<br></p>\n    <br>\n    <strong>Third party links</strong>\n    <br>\n    <br>\n\n    <p style=\"margin-left:15px\">\n        Occasionally, at our discretion, we may include or offer third party products or\n        services on our website. These third party sites have separate and independent privacy\n        policies. We therefore have no responsibility or liability for the content and activities\n        of these linked sites. Nonetheless, we seek to protect the integrity of our site\n        and welcome any feedback about these sites.<br></p>\n    <br>\n    <strong>California Online Privacy Protection Act Compliance</strong><br>\n    <br>\n\n    <p style=\"margin-left:15px\">\n        Because we value your privacy we have taken the necessary precautions to be in compliance\n        with the California Online Privacy Protection Act. We therefore will not distribute\n        your personal information to outside parties without your consent.<br></p>\n    <br>\n    <strong>Childrens Online Privacy Protection Act Compliance</strong>\n    <br>\n    <br>\n\n    <p style=\"margin-left:15px\">\n        We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection\n        Act), we do not collect any information from anyone under 13 years of age. Our website,\n        products and services are all directed to people who are at least 13 years old or\n        older.<br></p>\n    <br>\n    <strong>Terms and Conditions</strong>\n    <br>\n    <br>\n\n    <p style=\"margin-left:15px\">\n        Please also visit our Terms and Conditions section establishing the use, disclaimers,\n        and limitations of liability governing the use of our website at <a href=\"/terms\"\n                                                                            title=\"Evangeler Terms\">\n        http://www.evangeler.com/terms</a><br></p>\n    <br>\n    <strong>Your Consent</strong>\n    <br>\n    <br>\n\n    <p style=\"margin-left:15px\">\n        By using our site, you consent to our online privacy policy.<br></p>\n    <br>\n    <strong>Changes to our Privacy Policy</strong>\n    <br>\n    <br>\n\n    <p style=\"margin-left:15px\">\n        If we decide to change our privacy policy, we will post those changes on this page.\n        <br>\n        <br>\n        This policy was last modified on 20/05/2013</p>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/start.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-hero\">\n    <h2 class=\"mm-marketing-text\">\n        Promote your product with the power of the people!\n    </h2>\n\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        Create viral marketing campaigns and appeal to the masses!\n    </h3>\n    <button type=\"button\" class=\"gameon-btn-hg btn btn-warning btn-lg\">Get Started Now!\n    </button>\n</div>\n<div class=\"mm-hero mm-hero--light\">\n    <h2 class=\"mm-marketing-text mm-marketing-text--black\">\n        Become an Evangeler!\n    </h2>\n\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller mm-marketing-text--black\">\n        Make Money talking about products you love!\n    </h3>\n    <button type=\"button\" class=\"gameon-btn-hg btn btn-success btn-lg\">Browse Contests\n    </button>\n</div>\n<div class=\"mm-hero mm-hero--secondary\">\n    <h2 class=\"mm-marketing-text\">\n        Run an Evangeler contest Free!\n    </h2>\n\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        Only For A Limited Time!\n    </h3>\n    <button type=\"button\" class=\"gameon-btn-hg btn btn-warning btn-lg\">Get Started Now!\n    </button>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/terms.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-terms mm-article-theme\">\n    <h1>evangeler.com Terms and Conditions (\"Agreement\")</h1>\n\n    <p>This Agreement was last modified on March 10, 2014.</p>\n\n    <p>Please read these Terms and Conditions (\"Agreement\", \"Terms and Conditions\") carefully before using\n        http://www.evangeler.com (\"the Site\") operated by Word Smashing (ABN 29537306446) (\"us\", \"we\", or \"our\"). This Agreement sets\n        forth the legally binding terms and conditions for your use of the Site at http://www.evangeler.com.</p>\n\n    <p>By accessing or using the Site in any manner, including, but not limited to, visiting or browsing the Site or\n        contributing content or other materials to the Site, you agree to be bound by these Terms and Conditions.\n        Capitalized terms are defined in this Agreement.</p>\n\n    <p><strong>Intellectual Property</strong><br/>The Site and its original content, features and functionality are\n        owned by Word Smashing and are protected by international copyright, trademark, patent, trade secret and other\n        intellectual property or proprietary rights laws.</p>\n\n    <p><strong>Termination</strong><br/>We may terminate your access to the Site, without cause or notice, which may\n        result in the forfeiture and destruction of all information associated with you. All provisions of this\n        Agreement that by their nature should survive termination shall survive termination, including, without\n        limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>\n\n    <p><strong>Links To Other Sites</strong><br/>Our Site may contain links to third-party sites that are not owned or\n        controlled by Word Smashing.</p>\n\n    <p>Word Smashing has no control over, and assumes no responsibility for, the content, privacy policies, or practices\n        of any third party sites or services. We strongly advise you to read the terms and conditions and privacy policy\n        of any third-party site that you visit.</p>\n\n    <p><strong>Governing Law</strong><br/>This Agreement (and any further rules, polices, or guidelines incorporated by\n        reference) shall be governed and construed in accordance with the laws of Australia, without giving effect to\n        any principles of conflicts of law.</p>\n\n    <p><strong>Changes To This Agreement</strong><br/>We reserve the right, at our sole discretion, to modify or replace\n        these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any\n        such changes constitutes your acceptance of the new Terms and Conditions.</p>\n\n    <p>Please review this Agreement periodically for changes. If you do not agree to any of this Agreement or any\n        changes to this Agreement, do not use, access or continue to access the Site or discontinue any use of the Site\n        immediately.</p>\n\n    <p><strong>Contact Us</strong><br/>If you have any questions about this Agreement, please contact us.</p>\n</div>\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};
})();
})();
