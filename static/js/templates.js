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
var macro_t_3 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += "\n    <div class=\"footer\">\n        <p>\n            ";
if("/contact" undefined runtime.contextOrFrameLookup(context, frame, "url")) {
output += "\n                <span>Contact</span>\n            ";
;
}
else {
output += "\n                <a class=\"footer__link\" href=\"/contact\" title=\"Contact Us\">Contact</a>\n            ";
;
}
output += "\n            ";
if("/about" undefined runtime.contextOrFrameLookup(context, frame, "url")) {
output += "\n                <span>About Us</span>\n            ";
;
}
else {
output += "\n                <a class=\"footer__link\" href=\"/about\" title=\"About Evangeler\">About</a>\n            ";
;
}
output += "\n            ";
if("/terms" undefined runtime.contextOrFrameLookup(context, frame, "url")) {
output += "\n                <span>Terms &amp; Conditions</span>\n            ";
;
}
else {
output += "\n                <a class=\"footer__link\" href=\"/terms\" title=\"Terms &amp; Conditions\">Terms &amp; Conditions</a>\n            ";
;
}
output += "\n            ";
if("/privacy-policy" undefined runtime.contextOrFrameLookup(context, frame, "url")) {
output += "\n                <span>Privacy Policy</span>\n            ";
;
}
else {
output += "\n                <a class=\"footer__link\" href=\"/privacy\" title=\"Privacy\">Privacy</a>\n            ";
;
}
output += "\n\n            <span>© 2013 <a class=\"footer__link\" href=\"http://www.evangeler.com\" title=\"Evangeler\"\n                            target=\"_blank\">Evangeler</a></span>\n            <a href=\"http://www.facebook.com/evangeler\" title=\"Evangeler on Facebook\" target=\"_blank\">\n                <img src=\"/static/img/facebook.jpg\" alt=\"Evangeler on Facebook\" width=\"144\" height=\"44\"/>\n            </a>\n\n        <div class=\"g-plus\" data-href=\"//plus.google.com/116949277834973226564\" data-rel=\"publisher\"></div>\n\n        <!-- Place this tag after the last badge tag. -->\n        <script type=\"text/javascript\">\n            (function () {\n                var po = document.createElement('script');\n                po.type = 'text/javascript';\n                po.async = true;\n                po.src = 'https://apis.google.com/js/plusone.js';\n                var s = document.getElementsByTagName('script')[0];\n                s.parentNode.insertBefore(po, s);\n            })();\n        </script>\n        <br/>\n        <a href=\"https://twitter.com/evangeler\" class=\"twitter-follow-button\" data-show-count=\"false\" data-size=\"large\">Follow\n            @evangeler</a>\n        <script>!function (d, s, id) {\n            var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';\n            if (!d.getElementById(id)) {\n                js = d.createElement(s);\n                js.id = id;\n                js.src = p + '://platform.twitter.com/widgets.js';\n                fjs.parentNode.insertBefore(js, fjs);\n            }\n        }(document, 'script', 'twitter-wjs');</script>\n        </p>\n    </div>";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("footer");
context.setVariable("footer", macro_t_3);
output += "\n\n";
var macro_t_4 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += "<div class=\"mm-logo\">\n        ";
output += runtime.suppressValue((lineno = 77, colno = 13, runtime.callWrap(macro_t_2, "logo", [])), env.autoesc);
output += "\n    </div>\n    <div class=\"mm-hero\">\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-success btn-lg\" onclick=\"views.difficulties()\">Play Now!\n        </button>\n    </div>\n    <div class=\"mm-secondary\">\n        <button type=\"button\" class=\"gameon-btn-hg btn btn-info btn-lg\" onclick=\"views.options()\">Options</button>\n    </div>\n    ";
output += runtime.suppressValue((lineno = 86, colno = 11, runtime.callWrap(macro_t_3, "footer", [])), env.autoesc);
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("start");
context.setVariable("start", macro_t_4);
output += "\n\n\n";
var macro_t_5 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
frame = frame.push();
kwargs = kwargs || {};
var output= "";
output += runtime.suppressValue((lineno = 92, colno = 12, runtime.callWrap(macro_t_1, "backbtn", [])), env.autoesc);
output += "\n    <div class=\"mm-logo\">\n        ";
output += runtime.suppressValue((lineno = 94, colno = 13, runtime.callWrap(macro_t_2, "logo", [])), env.autoesc);
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
output += runtime.suppressValue((lineno = 126, colno = 12, runtime.callWrap(macro_t_1, "backbtn", [])), env.autoesc);
output += "\n    <div class=\"mm-logo\">\n        ";
output += runtime.suppressValue((lineno = 128, colno = 13, runtime.callWrap(macro_t_2, "logo", [])), env.autoesc);
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
output += runtime.suppressValue((lineno = 136, colno = 12, runtime.callWrap(macro_t_1, "backbtn", [])), env.autoesc);
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
output += runtime.suppressValue((lineno = 193, colno = 12, runtime.callWrap(macro_t_1, "backbtn", [])), env.autoesc);
output += "\n    <div class=\"mm-logo\">\n        ";
output += runtime.suppressValue((lineno = 195, colno = 13, runtime.callWrap(macro_t_2, "logo", [])), env.autoesc);
output += "\n    </div>\n    <div class=\"mm-difficulty\">\n        <a href=\"/terms\" class=\"mm-difficulty__btn gameon-btn-hg btn btn-success btn-lg\"\n           onclick=\"return gameon.gotoLink(this)\" target=\"_blank\">\n            Terms\n        </a>\n    </div>\n    <div class=\"mm-difficulty\">\n        <a href=\"/privacy\" class=\"mm-difficulty__btn gameon-btn-hg btn btn-success btn-lg\"\n           onclick=\"return gameon.gotoLink(this)\" target=\"_blank\">\n            Privacy\n        </a>\n    </div>";
frame = frame.pop();
return new runtime.SafeString(output);
});
context.addExport("options");
context.setVariable("options", macro_t_9);
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
