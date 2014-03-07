(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["macros"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var macro_t_1 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += "<button type=\"button\" class=\"back-btn gameon-btn-hg btn btn-info btn-lg\"><span\n            class=\"glyphicon glyphicon-arrow-left\"></span></button>";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("backbtn");
context.setVariable("backbtn", macro_t_1);
output += "\n\n";
var macro_t_2 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += "<a href=\"/\" class=\"mm-logo__link\" title=\"Evangeler - Social Marketing For The Masses!\">\n        <img src=\"/static/img/evangeler-logo64.png\" class=\"mm-logo__image\" width=\"64\" height=\"64\"\n             alt=\"Evangeler\">\n\n        <h1 class=\"mm-logo__text\">Evangeler</h1>\n    </a>";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("logo");
context.setVariable("logo", macro_t_2);
output += "\n\n";
var macro_t_3 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += "<div class=\"mm-header\">\n        <div class=\"mm-logo\">\n            ";
output += runtime.suppressValue((lineno = 17, colno = 17, runtime.callWrap(macro_t_2, "logo", [])), env.autoesc);
output += "\n        </div>\n        <div class=\"mm-header__nav\">\n            <a class=\"mm-header__link\" href=\"/how-it-works\" title=\"How It Works\">\n                How It Works\n            </a>\n        </div>\n    </div>";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("header");
context.setVariable("header", macro_t_3);
output += "\n\n\n\n";
var macro_t_4 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += runtime.suppressValue((lineno = 30, colno = 11, runtime.callWrap(macro_t_3, "header", [])), env.autoesc);
output += "\n    <div class=\"mm-hero\">\n        <h2 class=\"mm-marketing-text\">\n            Promote your product with the power of the people!\n        </h2>\n\n        <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n            Create viral marketing campaigns and appeal to the masses!\n        </h3>\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-warning btn-lg\">Get Started Now!\n        </button>\n    </div>\n    <div class=\"mm-hero mm-hero--light\">\n        <h2 class=\"mm-marketing-text mm-marketing-text--black\">\n            Become an Evangeler!\n        </h2>\n\n        <h3 class=\"mm-marketing-text mm-marketing-text--smaller mm-marketing-text--black\">\n            Make Money talking about products you love!\n        </h3>\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-success btn-lg\">Browse Contests\n        </button>\n    </div>\n    <div class=\"mm-hero mm-hero--secondary\">\n        <h2 class=\"mm-marketing-text\">\n            Run an Evangeler contest Free!\n        </h2>\n\n        <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n            Only For A Limited Time!\n        </h3>\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-warning btn-lg\">Get Started Now!\n        </button>\n    </div>\n    ";
output += runtime.suppressValue((lineno = 64, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "footer"), "footer", [])), env.autoesc);
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("start");
context.setVariable("start", macro_t_4);
output += "\n\n";
var macro_t_5 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += runtime.suppressValue((lineno = 68, colno = 11, runtime.callWrap(macro_t_3, "header", [])), env.autoesc);
output += "\n    <div class=\"mm-hero\">\n        <h2 class=\"mm-marketing-text\">\n            1: Sign up with Facebook!\n        </h2>\n\n        <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n            We'll create a page for you business on Evangeler.com!\n        </h3>\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-warning btn-lg\">Login With Facebook\n        </button>\n    </div>\n    <div class=\"mm-hero mm-hero--light\">\n        <h2 class=\"mm-marketing-text mm-marketing-text--black\">\n            2: Pick &amp; run a viral marketing contest you like!\n        </h2>\n\n        <h3 class=\"mm-marketing-text mm-marketing-text--smaller mm-marketing-text--black\">\n            Evangelers from all over the world compete to promote your product and win cash prizes\n        </h3>\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-success btn-lg\">Browse Categories\n        </button>\n    </div>\n    <div class=\"mm-hero mm-hero--secondary\">\n        <h2 class=\"mm-marketing-text\">\n            3: Award a winner!\n        </h2>\n\n        <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n            For best results share your contest at every stage!\n        </h3>\n    </div>\n    ";
output += runtime.suppressValue((lineno = 100, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "footer"), "footer", [])), env.autoesc);
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("how_it_works");
context.setVariable("how_it_works", macro_t_5);
var macro_t_6 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += "\n    <div class=\"mm-footer\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"mm-footer__section\">\n\n                    <h4 class=\"mm-footer__heading\">Company</h4>\n                    ";
if("/contact" undefined runtime.contextOrFrameLookup(context, frame, "url")) {
output += "\n                        <span>Contact</span>\n                    ";
;
}
else {
output += "\n                        <a class=\"footer__link\" href=\"/contact\" title=\"Contact Us\">Contact</a>\n                    ";
;
}
output += "\n                    ";
if("/about" undefined runtime.contextOrFrameLookup(context, frame, "url")) {
output += "\n                        <span>About Us</span>\n                    ";
;
}
else {
output += "\n                        <a class=\"footer__link\" href=\"/about\" title=\"About Evangeler\">About</a>\n                    ";
;
}
output += "\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"mm-footer__section\">\n\n                    <h4 class=\"mm-footer__heading\">Social</h4>\n                    <a class=\"footer__link\" href=\"http://www.facebook.com/evangeler\" title=\"Evangeler on Facebook\" target=\"_blank\">\n                        <span class=\"fa fa-facebook-square mm-share-btn mm-share-btn--facebook\"></span><span\n                            class=\"footer__social-link-text\"> Facebook</span>\n                    </a>\n                    <a class=\"footer__link\" href=\"http://www.twitter.com/evangeler\" title=\"Evangeler on Twitter\" target=\"_blank\">\n                        <span class=\"fa fa-twitter-square mm-share-btn mm-share-btn--twitter\"></span><span\n                            class=\"footer__social-link-text\"> Twitter</span>\n                    </a>\n                    <a class=\"footer__link\" href=\"http://www.pinterest.com/evangeler\" title=\"Evangeler on Pinterest\" target=\"_blank\">\n                        <span class=\"fa fa-pinterest-square mm-share-btn mm-share-btn--pinterest\"></span><span\n                            class=\"footer__social-link-text\"> Pinterest</span>\n                    </a>\n                    <a class=\"footer__link\" href=\"https://plus.google.com/104379684009420242235\" rel=\"publisher\" title=\"Evangeler on Google Plus\" target=\"_blank\">\n                        <span class=\"fa fa-google-plus-square mm-share-btn mm-share-btn--google-plus\"></span><span\n                            class=\"footer__social-link-text\"> Google+</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n        <br/>\n\n        <div class=\"mm-tc pull-left\">\n            <span>© 2014 Evangeler</span>\n            ";
if("/terms" undefined runtime.contextOrFrameLookup(context, frame, "url")) {
output += "\n                <span>Terms &amp; Conditions</span>\n            ";
;
}
else {
output += "\n                <a href=\"/terms\" title=\"Terms &amp; Conditions\">Terms &amp; Conditions</a>\n            ";
;
}
output += "\n            |\n\n            ";
if("/privacy-policy" undefined runtime.contextOrFrameLookup(context, frame, "url")) {
output += "\n                <span>Privacy</span>\n            ";
;
}
else {
output += "\n                <a href=\"/privacy\" title=\"Privacy\">Privacy</a>\n            ";
;
}
output += "\n        </div>\n\n    </div>";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("footer");
context.setVariable("footer", macro_t_6);
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
