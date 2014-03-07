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
output += "<a href=\"/\" class=\"mm-logo__link\" title=\"Evangeler - Social Marketing For The Masses!\"\n       onclick=\"return gameon.gotoLink(this)\" target=\"_blank\">\n        <img src=\"/static/img/evangeler-logo64.png\" class=\"mm-logo__image\" width=\"64\" height=\"64\"\n             alt=\"Evangeler\">\n\n        <h1 class=\"mm-logo__text\">Evangeler</h1>\n    </a>";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("logo");
context.setVariable("logo", macro_t_2);
output += "\n\n\n\n";
var macro_t_3 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += "<div class=\"mm-header\">\n        <div class=\"mm-logo\">\n            ";
output += runtime.suppressValue((lineno = 20, colno = 17, runtime.callWrap(macro_t_2, "logo", [])), env.autoesc);
output += "\n        </div>\n    </div>\n    <div class=\"mm-hero\">\n        <p class=\"mm-marketing-text\">\n            Promote your product with the power of the people!\n        </p>\n\n        <p class=\"mm-marketing-text mm-marketing-text--smaller\">\n            Create viral marketing campaigns and appeal to the masses!\n        </p>\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-success btn-lg\">Get Started Now!\n        </button>\n    </div>\n    <div class=\"mm-hero mm-hero--light\">\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-info btn-lg\" onclick=\"views.options()\">Options</button>\n    </div>\n    <div class=\"mm-hero mm-hero--secondary\">\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-info btn-lg\" onclick=\"views.options()\">Options</button>\n    </div>\n    ";
output += runtime.suppressValue((lineno = 40, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "footer"), "footer", [])), env.autoesc);
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("start");
context.setVariable("start", macro_t_3);
output += "\n\n";
var macro_t_4 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += "<div class=\"mm-header\">\n        <div class=\"mm-logo\">\n            ";
output += runtime.suppressValue((lineno = 46, colno = 17, runtime.callWrap(macro_t_2, "logo", [])), env.autoesc);
output += "\n        </div>\n    </div>\n    <div class=\"mm-hero\">\n        <p class=\"mm-marketing-text\">\n            Promote your product with the power of the people!\n        </p>\n\n        <p class=\"mm-marketing-text mm-marketing-text--smaller\">\n            Create viral marketing campaigns and appeal to the masses!\n        </p>\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-success btn-lg\">Get Started Now!\n        </button>\n    </div>\n    <div class=\"mm-hero mm-hero--light\">\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-info btn-lg\" onclick=\"views.options()\">Options</button>\n    </div>\n    <div class=\"mm-hero mm-hero--secondary\">\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-info btn-lg\" onclick=\"views.options()\">Options</button>\n    </div>\n    ";
output += runtime.suppressValue((lineno = 66, colno = 11, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "footer"), "footer", [])), env.autoesc);
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("howitworks");
context.setVariable("howitworks", macro_t_4);
output += "\n\n\n";
var macro_t_5 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += runtime.suppressValue((lineno = 72, colno = 12, runtime.callWrap(macro_t_1, "backbtn", [])), env.autoesc);
output += "\n    <div class=\"mm-logo\">\n        ";
output += runtime.suppressValue((lineno = 74, colno = 13, runtime.callWrap(macro_t_2, "logo", [])), env.autoesc);
output += "\n    </div>\n    <div class=\"mm-difficulty mm-difficulty--";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "fixtures")),"EASY", env.autoesc), env.autoesc);
output += "\">\n        <button type=\"button\" class=\"mm-difficulty__btn gameon-btn-hg btn btn-success btn-lg\"\n                onclick=\"views.levels(EASY)\">Easy\n        </button>\n    </div>\n    <div class=\"mm-difficulty mm-difficulty--";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "fixtures")),"MEDIUM", env.autoesc), env.autoesc);
output += "\">\n        <button type=\"button\" class=\"mm-difficulty__btn gameon-btn-hg btn btn-success btn-lg\"\n                onclick=\"views.levels(MEDIUM)\"\n                disabled=\"disabled\"><span\n                class=\"glyphicon glyphicon-lock\"></span>Medium\n        </button>\n    </div>\n    <div class=\"mm-difficulty mm-difficulty--";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "fixtures")),"HARD", env.autoesc), env.autoesc);
output += "\">\n        <button type=\"button\" class=\"mm-difficulty__btn gameon-btn-hg btn btn-success btn-lg\"\n                onclick=\"views.levels(HARD)\"\n                disabled=\"disabled\"><span\n                class=\"glyphicon glyphicon-lock\"></span>Hard\n        </button>\n    </div>\n    <div class=\"mm-difficulty mm-difficulty--";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "fixtures")),"EXPERT", env.autoesc), env.autoesc);
output += "\">\n        <button type=\"button\" class=\"mm-difficulty__btn gameon-btn-hg btn btn-success btn-lg\"\n                onclick=\"views.levels(EXPERT)\"\n                disabled=\"disabled\"><span\n                class=\"glyphicon glyphicon-lock\"></span>Expert\n        </button>\n    </div>";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("difficulties");
context.setVariable("difficulties", macro_t_5);
output += "\n\n\n";
var macro_t_6 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += runtime.suppressValue((lineno = 106, colno = 12, runtime.callWrap(macro_t_1, "backbtn", [])), env.autoesc);
output += "\n    <div class=\"mm-logo\">\n        ";
output += runtime.suppressValue((lineno = 108, colno = 13, runtime.callWrap(macro_t_2, "logo", [])), env.autoesc);
output += "\n    </div>\n    <div class=\"mm-levels gameon-board\">\n\n    </div>";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("levels");
context.setVariable("levels", macro_t_6);
output += "\n\n";
var macro_t_7 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += runtime.suppressValue((lineno = 116, colno = 12, runtime.callWrap(macro_t_1, "backbtn", [])), env.autoesc);
output += "\n    <div class=\"mm-logo\">\n        <div class=\"mm-level-controls\">\n            <div class=\"mm-end-condition\">\n                <p>Time: <span class=\"gameon-clock\"></span></p>\n            </div>\n            <div class=\"mm-volume\">\n\n            </div>\n            <div class=\"clear\"></div>\n            <div class=\"mm-starbar\">\n\n            </div>\n        </div>\n    </div>\n    <div class=\"mm-level gameon-board\">\n\n    </div>\n    <div class=\"mm-equation gameon-board\">\n\n    </div>";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("level");
context.setVariable("level", macro_t_7);
output += "\n\n";
var macro_t_8 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += "<div class=\"mm-logo\">\n        <div class=\"mm-starbar mm-starbar--center\">\n\n        </div>\n        <div class=\"mm-end-message\">\n            <p>Excellent!</p>\n        </div>\n        <div class=\"mm-level-controls\">\n            <div class=\"left\">\n                <button id=\"mm-replay\" type=\"button\" class=\"mm-difficulty__btn gameon-btn-hg btn btn-success btn-lg\"\n                        >Replay\n                </button>\n            </div>\n            <div class=\"right\">\n                <button id=\"mm-next-level\" type=\"button\" class=\"mm-difficulty__btn gameon-btn-hg btn btn-success btn-lg\"\n                        disabled=\"disabled\"><span\n                        class=\"glyphicon glyphicon-lock\"></span>Next\n                </button>\n            </div>\n            <div class=\"clear\"></div>\n            <div class=\"text-center\">\n                <button type=\"button\" class=\"mm-difficulty__btn gameon-btn-hg btn btn-success btn-lg\"\n                        onclick=\"views.difficulties()\"\n                        >Menu\n                </button>\n            </div>\n        </div>\n    </div>";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("donelevel");
context.setVariable("donelevel", macro_t_8);
output += "\n\n\n";
var macro_t_9 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += runtime.suppressValue((lineno = 173, colno = 12, runtime.callWrap(macro_t_1, "backbtn", [])), env.autoesc);
output += "\n    <div class=\"mm-logo\">\n        ";
output += runtime.suppressValue((lineno = 175, colno = 13, runtime.callWrap(macro_t_2, "logo", [])), env.autoesc);
output += "\n    </div>\n    <div class=\"mm-difficulty\">\n        <a href=\"/terms\" class=\"mm-difficulty__btn gameon-btn-hg btn btn-success btn-lg\"\n           onclick=\"return gameon.gotoLink(this)\" target=\"_blank\">\n            Terms\n        </a>\n    </div>\n    <div class=\"mm-difficulty\">\n        <a href=\"/privacy\" class=\"mm-difficulty__btn gameon-btn-hg btn btn-success btn-lg\"\n           onclick=\"return gameon.gotoLink(this)\" target=\"_blank\">\n            Privacy\n        </a>\n    </div>";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("options");
context.setVariable("options", macro_t_9);
var macro_t_10 = runtime.makeMacro(
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
context.setVariable("footer", macro_t_10);
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
