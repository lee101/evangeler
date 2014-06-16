(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/about.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-hero\">\n    <h1 class=\"mm-marketing-text\">\n        Evangeler Helps Companies Create Viral and Social Marketing Campaigns.\n    </h1>\n\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        Companies offer cash prizes on evangeler.com in exchange for people promoting there products\n    </h2>\n</div>\n<div class=\"mm-hero mm-hero--light\">\n    <h1 class=\"mm-marketing-text mm-marketing-text--black\">\n        Social Marketing Helps Business!\n    </h1>\n\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller mm-marketing-text--black\">\n        Evangeler gives businesses direct access to millions of marketers!\n    </h2>\n    <a href=\"/contest-categories\" class=\"mm-btn-hg btn btn-success btn-lg\" title=\"Create a Viral Marketing Campaign!\"\n      >Create Social Marketing Campaign!\n    </a>\n</div>\n<div class=\"mm-hero mm-hero--secondary\">\n    <h1 class=\"mm-marketing-text\">\n        Social Marketing Helps People!\n    </h1>\n\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        Win cash prizes for promoting products you love!\n    </h2>\n    <button type=\"button\" class=\"mm-btn-hg btn btn-warning btn-lg\">Browse Marketing Contests\n    </button>\n</div>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/account.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-hero pistachio\">\n\n    <h2 class=\"media-heading mm-marketing-text mm-marketing-text--smaller\">\n        <div class=\"icon-container icon-container--white\">\n            <i class=\"fa fa-trophy icon-container__icon\"></i>\n        </div> My Contests.\n    </h2>\n</div>\n<div class=\"contest-thumbs\">\n\n</div>\n\n\n<div class=\"mm-hero mm-hero--secondary morange\">\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        <div class=\"icon-container icon-container--white\">\n            <i class=\"fa fa-university icon-container__icon\"></i>\n        </div>\n        My Pages.\n    </h2>\n</div>\n<div class=\"company-thumbs\">\n\n</div>\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/companies.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-hero pistachio\">\n\n    <h1 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        <div class=\"icon-container icon-container--white\">\n            <i class=\"fa fa-university icon-container__icon\"></i>\n        </div>\n        Businesses On Evangeler\n    </h1>\n</div>\n\n";
output += "\n<div class=\"mm-grid\">\n    <div class=\"row\">\n\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "companies");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("company", t_4);
output += "\n            <div class=\"col-md-6\">\n                <div class=\"mm-grid__section\">\n\n                    <div class=\"media\">\n\n                        <a class=\"pull-left\" href=\"/companies/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url_title", env.autoesc), env.autoesc);
output += "\">\n                            <img class=\"media-object\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"pic", env.autoesc), env.autoesc);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name", env.autoesc), env.autoesc);
output += " Logo\" width=\"100\"\n                                 height=\"100\">\n                        </a>\n\n                        <div class=\"media-body\">\n                            <a class=\"media-heading mm-footer__heading\" href=\"/companies/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url_title", env.autoesc), env.autoesc);
output += "\"\n                              >";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name", env.autoesc), env.autoesc);
output += "</a>\n\n                            <p class=\"text-smaller\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"about", env.autoesc), env.autoesc);
output += "</p>\n                            ";
if(runtime.contextOrFrameLookup(context, frame, "showEditButtons")) {
output += "\n                                <a class=\"btn\" href=\"/companies/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url_title", env.autoesc), env.autoesc);
output += "\" title=\"View ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name", env.autoesc), env.autoesc);
output += "\"\n                                  >View</a>\n                                |\n                                <a class=\"btn\" href=\"/companies/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url_title", env.autoesc), env.autoesc);
output += "/edit\"\n                                   title=\"Edit ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name", env.autoesc), env.autoesc);
output += "\"\n                                  >Edit</a>\n                            ";
;
}
output += "\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        ";
;
}
}
frame = frame.pop();
output += "\n\n        ";
if(runtime.contextOrFrameLookup(context, frame, "createcompany")) {
output += "\n            <div class=\"col-md-6\">\n                <a href=\"/new-page\" class=\"mm-grid__section mm-highlighted-new\"\n                   title=\"Create a New Page On Evangeler.com\"\n                  >\n                    <h4 class=\"mm-highlighted-new__text\">New</h4>\n                </a>\n            </div>\n        ";
;
}
output += "\n    </div>\n</div>\n\n";
output += "\n\n<div class=\"mm-grid\">\n    <a href=\"#\" class=\"mm-btn-hg btn btn-info btn-lg load-more \" onclick=\"evutils.loadmore('companies');return false;\">Load\n        More...\n    </a>\n</div>\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/company-thumbs.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var t_1;
t_1 = "companies";
frame.set("link", t_1);
if(!frame.parent) {
context.setVariable("link", t_1);
context.addExport("link");
}
output += "\n";
if(runtime.contextOrFrameLookup(context, frame, "newPage")) {
output += "\n    ";
t_1 = "new-page";
frame.set("link", t_1);
if(!frame.parent) {
context.setVariable("link", t_1);
context.addExport("link");
}
output += "\n";
;
}
output += "\n<div class=\"mm-grid\">\n    <div class=\"row\">\n\n        ";
frame = frame.push();
var t_4 = runtime.contextOrFrameLookup(context, frame, "companies");
if(t_4) {for(var t_2=0; t_2 < t_4.length; t_2++) {
var t_5 = t_4[t_2];
frame.set("company", t_5);
output += "\n            <div class=\"col-md-6\">\n                <div class=\"mm-grid__section\">\n\n                    <div class=\"media\">\n\n                        <a class=\"pull-left\" href=\"/";
output += runtime.suppressValue(t_1, env.autoesc);
output += "/";
output += runtime.suppressValue(runtime.memberLookup((t_5),"url_title", env.autoesc), env.autoesc);
output += "\">\n                            <img class=\"media-object\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_5),"pic", env.autoesc), env.autoesc);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_5),"name", env.autoesc), env.autoesc);
output += " Logo\" width=\"100\"\n                                 height=\"100\">\n                        </a>\n\n                        <div class=\"media-body\">\n                            <a class=\"media-heading mm-footer__heading\" href=\"/";
output += runtime.suppressValue(t_1, env.autoesc);
output += "/";
output += runtime.suppressValue(runtime.memberLookup((t_5),"url_title", env.autoesc), env.autoesc);
output += "\"\n                              >";
output += runtime.suppressValue(runtime.memberLookup((t_5),"name", env.autoesc), env.autoesc);
output += "</a>\n\n                            <p class=\"text-smaller\">";
output += runtime.suppressValue(runtime.memberLookup((t_5),"about", env.autoesc), env.autoesc);
output += "</p>\n                            ";
if(runtime.contextOrFrameLookup(context, frame, "showEditButtons")) {
output += "\n                                <a class=\"btn\" href=\"/companies/";
output += runtime.suppressValue(runtime.memberLookup((t_5),"url_title", env.autoesc), env.autoesc);
output += "\" title=\"View ";
output += runtime.suppressValue(runtime.memberLookup((t_5),"name", env.autoesc), env.autoesc);
output += "\">View</a>\n                                |\n                                <a class=\"btn\" href=\"/companies/";
output += runtime.suppressValue(runtime.memberLookup((t_5),"url_title", env.autoesc), env.autoesc);
output += "/edit\" title=\"Edit ";
output += runtime.suppressValue(runtime.memberLookup((t_5),"name", env.autoesc), env.autoesc);
output += "\"\n                                  >Edit</a>\n                            ";
;
}
output += "\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        ";
;
}
}
frame = frame.pop();
output += "\n\n        ";
if(runtime.contextOrFrameLookup(context, frame, "createcompany")) {
output += "\n            <div class=\"col-md-6\">\n                <a href=\"/new-page\" class=\"mm-grid__section mm-highlighted-new\"\n                   title=\"Create a New Page On Evangeler.com\"\n                  >\n                    <h4 class=\"mm-highlighted-new__text\">New</h4>\n                </a>\n            </div>\n        ";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/company.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-grid\">\n    <div class=\"row\">\n\n        <div class=\"col-md-12\">\n            <div class=\"mm-grid__section\">\n\n                <p class=\"mm-sharing-btns\">\n                    ";
var t_1;
t_1 = (lineno = 7, colno = 49, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "urlencode"), "urlencode", ["Check out " + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc) + " on Evangeler! " + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"about", env.autoesc)]));
frame.set("encoded_desc", t_1);
if(!frame.parent) {
context.setVariable("encoded_desc", t_1);
context.addExport("encoded_desc");
}
var t_2;
t_2 = (lineno = 8, colno = 55, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "urlencode"), "urlencode", ["Check out " + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc) + " on Evangeler!"]));
frame.set("encoded_desc_short", t_2);
if(!frame.parent) {
context.setVariable("encoded_desc_short", t_2);
context.addExport("encoded_desc_short");
}
output += "Share <a href=\"#\" class=\"facebook-share-btn\" title=\"Share ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " on Facebook\"><i\n                        class=\"fa fa-facebook-square mm-share-btn\"></i> </a>\n                    <a href=\"https://twitter.com/intent/tweet?url=";
output += runtime.suppressValue((lineno = 11, colno = 76, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "urlencode"), "urlencode", [runtime.contextOrFrameLookup(context, frame, "url")])), env.autoesc);
output += "&text=";
output += runtime.suppressValue(t_2, env.autoesc);
output += "\"\n                       target=\"_blank\" rel=\"nofollow\" title=\"Tweet ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " on Twitter\">\n                        <i class=\"fa fa-twitter-square mm-share-btn mm-share-btn--twitter\"></i>\n                    </a>\n                    <a href=\"https://pinterest.com/pin/create/bookmarklet/?url=";
output += runtime.suppressValue((lineno = 15, colno = 89, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "urlencode"), "urlencode", [runtime.contextOrFrameLookup(context, frame, "url")])), env.autoesc);
output += "&description=";
output += runtime.suppressValue(t_1, env.autoesc);
output += "\"\n                       target=\"_blank\" rel=\"nofollow\" title=\"Pin ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " on pinterest\">\n                        <i class=\"fa fa-pinterest-square mm-share-btn mm-share-btn--pinterest\"></i>\n                    </a>\n                    <a href=\"https://plus.google.com/share?url=";
output += runtime.suppressValue((lineno = 19, colno = 73, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "urlencode"), "urlencode", [runtime.contextOrFrameLookup(context, frame, "url")])), env.autoesc);
output += "\"\n                       target=\"_blank\" rel=\"nofollow\" title=\"Share ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " on Google Plus\">\n                        <i class=\"fa fa-google-plus-square mm-share-btn mm-share-btn--google-plus\"></i>\n                    </a>\n                    <a href=\"http://www.linkedin.com/shareArticle?url=";
output += runtime.suppressValue((lineno = 23, colno = 80, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "urlencode"), "urlencode", [runtime.contextOrFrameLookup(context, frame, "url")])), env.autoesc);
output += "&title=";
output += runtime.suppressValue(t_1, env.autoesc);
output += "\"\n                       target=\"_blank\" rel=\"nofollow\" title=\"Share ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " on Linkedin\">\n                        <i class=\"fa fa-linkedin-square mm-share-btn mm-share-btn--linked-in\"></i>\n                    </a>\n                    <a href=\"http://www.stumbleupon.com/submit?url=";
output += runtime.suppressValue((lineno = 27, colno = 77, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "urlencode"), "urlencode", [runtime.contextOrFrameLookup(context, frame, "url")])), env.autoesc);
output += "&title=";
output += runtime.suppressValue(t_1, env.autoesc);
output += "\"\n                       target=\"_blank\" rel=\"nofollow\" title=\"Share ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " on Stumble Upon\">\n                        <i class=\"fa fa-stumbleupon-circle mm-share-btn mm-share-btn--stumbleupon\"></i>\n                    </a>\n                    <a href=\"http://reddit.com/submit?url=";
output += runtime.suppressValue((lineno = 31, colno = 68, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "urlencode"), "urlencode", [runtime.contextOrFrameLookup(context, frame, "url")])), env.autoesc);
output += "&title=";
output += runtime.suppressValue(t_2, env.autoesc);
output += "\"\n                       target=\"_blank\" rel=\"nofollow\" title=\"Share ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " on reddit\">\n                        <i class=\"fa fa-reddit mm-share-btn\"></i>\n                    </a>\n                </p>\n\n                <div class=\"media\">\n\n                    <a class=\"pull-left\" href=\"/companies/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"url_title", env.autoesc), env.autoesc);
output += "\">\n                        <img class=\"media-object\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"pic", env.autoesc), env.autoesc);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " Logo\" width=\"100\"\n                             height=\"100\">\n                    </a>\n\n                    <div class=\"media-body\">\n                        <a class=\"media-heading mm-footer__heading\"\n                           href=\"/companies/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"url_title", env.autoesc), env.autoesc);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += "</a>\n\n                        <p class=\"text-smaller\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"about", env.autoesc), env.autoesc);
output += "</p>\n                    </div>\n                </div>\n\n                ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"facebook_link", env.autoesc)) {
output += "\n                    <p class=\"text-smaller\">\n                        <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"facebook_link", env.autoesc), env.autoesc);
output += "\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " on Facebook\"\n                           target=\"_blank\" rel=\"nofollow\">\n                            <span class=\"fa fa-facebook-square mm-share-btn mm-share-btn--facebook\"></span><span\n                                class=\"footer__social-link-text\"> Facebook</span>\n                        </a>\n                    </p>\n                ";
;
}
output += "\n\n                ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"website_link", env.autoesc)) {
output += "\n                    <p class=\"text-smaller\">\n                        <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"website_link", env.autoesc), env.autoesc);
output += "\" title=\"Visit ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += "\"\n                           target=\"_blank\" rel=\"nofollow\">\n                            <span class=\"fa fa-globe mm-share-btn mm-share-btn--twitter\"></span><span\n                                class=\"footer__social-link-text\"> Website</span>\n                        </a>\n                    </p>\n                ";
;
}
output += "\n\n                ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"twitter_name", env.autoesc)) {
output += "\n                    <p class=\"text-smaller\">\n                        <a href=\"https://twitter.com/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"twitter_name", env.autoesc), env.autoesc);
output += "\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " on Twitter\"\n                           target=\"_blank\" rel=\"nofollow\">\n                            <span class=\"fa fa-twitter-square mm-share-btn mm-share-btn--twitter\"></span><span\n                                class=\"footer__social-link-text\"> Twitter</span>\n                        </a>\n                    </p>\n                ";
;
}
output += "\n\n                ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"google_link", env.autoesc)) {
output += "\n                    <p class=\"text-smaller\">\n                        <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"google_link", env.autoesc), env.autoesc);
output += "\" title=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " on Google Plus\"\n                           target=\"_blank\" rel=\"nofollow\">\n                            <span class=\"fa fa-google-plus-square mm-share-btn mm-share-btn--google-plus\"></span><span\n                                class=\"footer__social-link-text\"> Google Plus</span>\n                        </a>\n                    </p>\n                ";
;
}
output += "\n\n                <p class=\"text-smaller\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"description", env.autoesc), env.autoesc);
output += "</p>\n\n            </div>\n        </div>\n    </div>\n</div>\n";
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
output += "<div class=\"mm-hero\">\n    <h1 class=\"mm-marketing-text\">\n        Evangeler Helps Companies Create Viral and Social Marketing Campaigns.\n    </h1>\n\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        Give us an email at leepenkman@evangeler.com\n    </h2>\n    <a href=\"mailto:leepenkman@evangeler.com\" type=\"button\" class=\"mm-btn-hg btn btn-warning btn-lg\">Email Us\n    </a>\n</div>\n<div class=\"mm-hero mm-hero--light\">\n    <h1 class=\"mm-marketing-text mm-marketing-text--black mm-marketing-text--smaller\">\n        Call us on +61 421 922 842 In Australia<br>\n        Call us on +64 21 029 453 09 in New Zealand.\n    </h1>\n\n\n</div>\n<div class=\"mm-hero mm-hero--secondary\">\n    <h1 class=\"mm-marketing-text\">\n        Business Address;\n    </h1>\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        Unit 507/815 Bourke Street,<br>\n        Docklands,<br>\n        Melbourne<br>\n        Australia.<br>\n        <br>\n        4 Thornlea Drive,<br>\n        Welcome Bay,<br>\n        Tauranga,\n        New Zealand<br>\n    </h2>\n</div>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/contest-categories.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-hero pistachio\">\n\n    <h1 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        <div class=\"icon-container icon-container--white\">\n            <i class=\"fa fa-trophy icon-container__icon\"></i>\n        </div>\n        Social Marketing Contest Categories\n    </h1>\n</div>\n<div class=\"mm-grid\">\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <a class=\"mm-grid__section\" href=\"/launch/reshare\" title=\"Launch a Reshare contest!\">\n                <h4 class=\"mm-footer__heading\">Reshare Contest</h4>\n                <p class=\"normal-text\">People share your facebook post and compete to get the most likes on their share!</p>\n                <p class=\"normal-text\"><b>Benefits:</b> cost effective, reach large audiences, brand awareness, increase facebook page activity.</p>\n            </a>\n        </div>\n        <div class=\"col-md-6\">\n            <a class=\"mm-grid__section\" href=\"/launch/hashtag\" title=\"Launch a Hashtag contest!\">\n                <h4 class=\"mm-footer__heading\"># Hashtag Contest</h4>\n                <p class=\"normal-text\">People create pictures or videos promoting your brand and hashtag them!</p>\n                <p class=\"normal-text\"><b>Benefits:</b> affordable marketing content, customer engagement, brand awareness, brand authority.</p>\n            </a>\n        </div>\n    </div>\n</div>\n<div class=\"mm-grid lighter-gray\">\n\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <a class=\"mm-grid__section\" href=\"/launch/article-marketing\" title=\"Launch a Reshare contest!\">\n                <h4 class=\"mm-footer__heading\">Article Marketing Contest</h4>\n                <p class=\"normal-text\">People compete to create the best article about your brand!</p>\n                <p class=\"normal-text\"><b>Benefits:</b> affordable marketing content, brand awareness, Increased search rankings.</p>\n            </a>\n        </div>\n        <div class=\"col-md-6\">\n            <a class=\"mm-grid__section\" href=\"/launch/review\" title=\"Launch a Hashtag contest!\">\n                <h4 class=\"mm-footer__heading\">Review Contest</h4>\n                <p class=\"normal-text\">People compete to give your product the best reviews!</p>\n                <p class=\"normal-text\"><b>Benefits:</b> customer engagement, brand awareness, authority &amp; trust, increased sales and reputation with 3rd party stores and resellers.</p>\n            </a>\n        </div>\n    </div>\n</div>\n\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/contest-thumbs.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-grid\">\n    <div class=\"row\">\n\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "contests");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("contest", t_4);
output += "\n            ";
var t_5;
t_5 = "/contests/" + runtime.memberLookup((t_4),"uid", env.autoesc) + "/" + runtime.memberLookup((t_4),"url_title", env.autoesc);
frame.set("link", t_5);
if(!frame.parent) {
context.setVariable("link", t_5);
context.addExport("link");
}
output += "\n            ";
if(runtime.memberLookup((t_4),"status", env.autoesc) == runtime.memberLookup((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "fixtures")),"STATUS", env.autoesc)),"DRAFT", env.autoesc)) {
output += "\n                ";
t_5 = "/contests/" + runtime.memberLookup((t_4),"uid", env.autoesc) + "/" + runtime.memberLookup((t_4),"url_title", env.autoesc) + "/edit";
frame.set("link", t_5);
if(!frame.parent) {
context.setVariable("link", t_5);
context.addExport("link");
}
output += "\n            ";
;
}
output += "\n            <div class=\"col-md-6\">\n                <div class=\"mm-grid__section\">\n\n                    <div class=\"media\">\n\n                        <a class=\"pull-left\" href=\"";
output += runtime.suppressValue(t_5, env.autoesc);
output += "\">\n                            <img class=\"media-object\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"pic", env.autoesc), env.autoesc);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title", env.autoesc), env.autoesc);
output += " Logo\" width=\"100\"\n                                 height=\"100\">\n                        </a>\n\n                        <div class=\"media-body\">\n                            <a class=\"media-heading mm-footer__heading\" href=\"";
output += runtime.suppressValue(t_5, env.autoesc);
output += "\"\n                                    >";
output += runtime.suppressValue(runtime.memberLookup((t_4),"title", env.autoesc), env.autoesc);
output += "</a>\n\n                            <p class=\"text-smaller\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"about", env.autoesc), env.autoesc);
output += "</p>\n                            ";
if(runtime.contextOrFrameLookup(context, frame, "showEditButtons")) {
output += "\n                                <a class=\"btn\" href=\"/contests/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uid", env.autoesc), env.autoesc);
output += "/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url_title", env.autoesc), env.autoesc);
output += "\"\n                                   title=\"View ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name", env.autoesc), env.autoesc);
output += "\">View</a>\n                                |\n                                <a class=\"btn\" href=\"/contests/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"uid", env.autoesc), env.autoesc);
output += "/";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url_title", env.autoesc), env.autoesc);
output += "/edit\"\n                                   title=\"Edit ";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name", env.autoesc), env.autoesc);
output += "\"\n                                        >Edit</a>\n                            ";
;
}
output += "\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ";
;
}
}
frame = frame.pop();
output += "\n\n        ";
if(runtime.contextOrFrameLookup(context, frame, "createcontest")) {
output += "\n            <div class=\"col-md-6\">\n                <a href=\"/contest-categories\" class=\"mm-grid__section mm-highlighted-new\"\n                   title=\"Create a New Contest!\"\n                        >\n                    <h4 class=\"mm-highlighted-new__text\">New</h4>\n                </a>\n            </div>\n        ";
;
}
output += "\n\n    </div>\n</div>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/edit-page.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-hero morange\">\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        <div class=\"icon-container icon-container--white\">\n            <i class=\"fa fa-university icon-container__icon\"></i>\n        </div>\n        Create a page for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " on Evangeler\n    </h2>\n</div>\n<div class=\"company-thumbs\">\n    <div class=\"mm-grid\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"mm-grid__section\">\n                    <form id=\"create-company-form\" role=\"form\">\n\n                        <div class=\"media\">\n\n                            <img class=\"pull-left media-object\" src=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"pic", env.autoesc), env.autoesc);
output += "\" alt=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += " Logo\"\n                                 width=\"100\"\n                                 height=\"100\">\n\n                            <div class=\"media-body\">\n                                <p class=\"media-heading mm-footer__heading\"\n                                        >";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"name", env.autoesc), env.autoesc);
output += "</p>\n\n                                <div class=\"form-group\">\n                                    <label for=\"companyAbout\" class=\"sr-only\">About</label>\n                                    <textarea id=\"companyAbout\" class=\"text-smaller form-control\"\n                                              rows=\"4\" name=\"about\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"about", env.autoesc), env.autoesc);
output += "</textarea>\n                                </div>\n\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"companyWebsite\"><i\n                                    class=\"fa fa-globe mm-share-btn mm-share-btn--twitter\"></i> Website</label>\n                            <input id=\"companyWebsite\" class=\"text-smaller form-control\"\n                                   value=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"website_link", env.autoesc), env.autoesc);
output += "\" name=\"website_link\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"companyTwitter\"><i\n                                    class=\"fa fa-twitter-square mm-share-btn mm-share-btn--twitter\"></i> Twitter</label>\n                            <input id=\"companyTwitter\" class=\"text-smaller form-control\"\n                                   placeholder=\"@evangelersays\"\n                                   name=\"twitter_link\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"companyGooglePlus\"><i\n                                    class=\"fa fa-google-plus-square mm-share-btn mm-share-btn--google-plus\"></i>\n                                Google Plus Link</label>\n                            <input id=\"companyGooglePlus\" class=\"text-smaller form-control\"\n                                   placeholder=\"https://plus.google.com/+Evangeler\" name=\"google_link\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"companyDescription\">Description</label>\n                            <textarea id=\"companyDescription\" class=\"text-smaller form-control\"\n                                      rows=\"6\" name=\"description\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "company")),"description", env.autoesc), env.autoesc);
output += "</textarea>\n                        </div>\n                        ";
if(runtime.contextOrFrameLookup(context, frame, "creating")) {
output += "\n                            <button type=\"submit\" class=\"create-btn btn btn-lg btn-warning\">Create!</button>\n                        ";
;
}
else {
output += "\n                            <button type=\"submit\" class=\"create-btn btn btn-lg btn-warning\">Save</button>\n                            <button class=\"btn btn-lg btn-primary\" onclick=\"window.history.back();return false;\">\n                                Cancel\n                            </button>\n                        ";
;
}
output += "\n                    </form>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n";
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
output += "\n<div class=\"mm-footer\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <div class=\"mm-grid__section\">\n\n                <h4 class=\"mm-footer__heading\">Company</h4>\n                ";
if("/contact" == runtime.contextOrFrameLookup(context, frame, "path")) {
output += "\n                    <span>Contact</span>\n                ";
;
}
else {
output += "\n                    <a class=\"footer__link\" href=\"/contact\" title=\"Contact Us\"\n                      >Contact</a>\n                ";
;
}
output += "\n                ";
if("/about" == runtime.contextOrFrameLookup(context, frame, "path")) {
output += "\n                    <span>About Us</span>\n                ";
;
}
else {
output += "\n                    <a class=\"footer__link\" href=\"/about\" title=\"About Evangeler\"\n                      >About</a>\n                ";
;
}
output += "\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"mm-grid__section\">\n\n                <h4 class=\"mm-footer__heading\">Social</h4>\n                <a class=\"footer__link\" href=\"https://www.facebook.com/pages/Evangeler/721564427863714\" title=\"Evangeler on Facebook\"\n                   target=\"_blank\">\n                    <span class=\"fa fa-facebook-square mm-share-btn mm-share-btn--facebook\"></span><span\n                        class=\"footer__social-link-text\"> Facebook</span>\n                </a>\n                <a class=\"footer__link\" href=\"http://www.twitter.com/evangelersays\" title=\"Evangeler on Twitter\"\n                   target=\"_blank\">\n                    <span class=\"fa fa-twitter-square mm-share-btn mm-share-btn--twitter\"></span><span\n                        class=\"footer__social-link-text\"> Twitter</span>\n                </a>\n                <a class=\"footer__link\" href=\"http://www.pinterest.com/evangeler\" title=\"Evangeler on Pinterest\"\n                   target=\"_blank\">\n                    <span class=\"fa fa-pinterest-square mm-share-btn mm-share-btn--pinterest\"></span><span\n                        class=\"footer__social-link-text\"> Pinterest</span>\n                </a>\n                <a class=\"footer__link\" href=\"https://plus.google.com/+Evangeler\" rel=\"publisher\"\n                   title=\"Evangeler on Google Plus\" target=\"_blank\">\n                    <span class=\"fa fa-google-plus-square mm-share-btn mm-share-btn--google-plus\"></span><span\n                        class=\"footer__social-link-text\"> Google+</span>\n                </a>\n            </div>\n        </div>\n    </div>\n    <br/>\n\n    <div class=\"mm-tc pull-left\">\n        <span>© 2014 Evangeler</span>\n        ";
if("/terms" == runtime.contextOrFrameLookup(context, frame, "path")) {
output += "\n            <span>Terms &amp; Conditions</span>\n        ";
;
}
else {
output += "\n            <a href=\"/terms\" title=\"Terms &amp; Conditions\">Terms &amp; Conditions</a>\n        ";
;
}
output += "\n        |\n\n        ";
if("/privacy" == runtime.contextOrFrameLookup(context, frame, "path")) {
output += "\n            <span>Privacy</span>\n        ";
;
}
else {
output += "\n            <a href=\"/privacy\" title=\"Privacy\">Privacy</a>\n        ";
;
}
output += "\n        |\n\n        ";
if("/refunds" == runtime.contextOrFrameLookup(context, frame, "path")) {
output += "\n            <span>Refunds</span>\n        ";
;
}
else {
output += "\n            <a href=\"/refunds\" title=\"Money Back Guarantee\">Refunds</a>\n        ";
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
output += "\n            <span class=\"mm-logo__link\" title=\"Evangeler - Social Marketing For The Masses!\"\n              >\n                <img src=\"/static/img/evangeler-logo64.png\" class=\"mm-logo__image\" width=\"64\" height=\"64\"\n                     alt=\"Evangeler\">\n\n                <h1 class=\"mm-logo__text\">Evangeler</h1>\n            </span>\n        ";
;
}
else {
output += "\n        <a href=\"/\" class=\"mm-logo__link\" title=\"Evangeler - Social Marketing For The Masses!\"\n          >\n            <img src=\"/static/img/evangeler-logo64.png\" class=\"mm-logo__image\" width=\"64\" height=\"64\"\n                 alt=\"Evangeler\">\n\n            <h1 class=\"mm-logo__text\">Evangeler</h1>\n        </a>\n        ";
;
}
output += "\n    </div>\n    <div class=\"mm-header__nav\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "path") == "/how-it-works") {
output += "\n            <span class=\"mm-header__link active\">\n                How It Works\n            </span\n        ";
;
}
else {
output += "\n            <a class=\"mm-header__link\" href=\"/how-it-works\" title=\"How It Works\"\n              >\n                How It Works\n            </a\n        ";
;
}
output += "\n        ";
if(runtime.contextOrFrameLookup(context, frame, "path") == "/companies") {
output += "\n            ><span class=\"mm-header__link active\">\n                Companies\n            </span>\n        ";
;
}
else {
output += "\n            ><a class=\"mm-header__link\" href=\"/companies\" title=\"Businesses using Evangeler\"\n              >\n                Companies\n            </a>\n        ";
;
}
output += "\n        ";
if(runtime.contextOrFrameLookup(context, frame, "client_side")) {
output += "\n            ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"facebook_access_token", env.autoesc)) {
output += "\n                <a class=\"mm-header__link mm-header__profile-link pull-right\" href=\"/account\" title=\"My Account\"\n                  >\n                    <img src=\"https://graph.facebook.com/";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "user")),"facebook_id", env.autoesc), env.autoesc);
output += "/picture\" width=\"50\" height=\"50\">\n                </a>\n            ";
;
}
output += "\n        ";
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
output += "\n<div class=\"mm-hero\">\n    <h1 class=\"mm-marketing-text\">\n        1: Sign up with Facebook!\n    </h1>\n\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        We'll create a page for your business on Evangeler.com!\n    </h2>\n    <button type=\"button\" class=\"mm-btn-hg btn btn-warning btn-lg\" onclick=\"window.facebookWrapper.fb_login();return false\">Login With Facebook\n    </button>\n</div>\n<div class=\"mm-hero mm-hero--light\">\n    <h1 class=\"mm-marketing-text mm-marketing-text--black\">\n        2: Create &amp; run a viral marketing contest you like!\n    </h1>\n\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller mm-marketing-text--black\">\n        Evangelers from all over the world compete to promote your product and win cash prizes!\n    </h2>\n    <a class=\"mm-btn-hg btn btn-success btn-lg\" href=\"/contest-categories\" title=\"Create A Viral Marketing Contest!\"\n      >Create Contest!\n    </a>\n</div>\n<div class=\"mm-hero mm-hero--secondary\">\n    <h1 class=\"mm-marketing-text\">\n        3: Award a winner!\n    </h1>\n\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        For best results share your contest at every stage!\n    </h2>\n</div>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/launch-reshare.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-hero pistachio\">\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        <div class=\"icon-container icon-container--white\">\n            <i class=\"fa fa-trophy icon-container__icon\"></i>\n        </div>\n        Contest Details\n    </h2>\n</div>\n<div class=\"company-thumbs\">\n    <div class=\"mm-grid\">\n        <div class=\"row\">\n\n            <div class=\"col-md-12\">\n                <div class=\"mm-grid__section\">\n\n                    <form id=\"contest-details-form\" role=\"form\">\n\n                        <div class=\"form-group\">\n                            <label for=\"contestTitle\"\n                                   title=\"Sell your contest to potential customers, people will see this when your contest is shared on social networks\">Title</label>\n                            <input id=\"contestTitle\" class=\"text-smaller form-control\"\n                                   placeholder=\"Dunkin' Donuts like competition! Win a lifetime supply of donuts!\"\n                                   name=\"title\">\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"contestAbout\" class=\"sr-only\">About</label>\n                            <textarea id=\"contestAbout\" class=\"text-smaller form-control\"\n                                      rows=\"4\" name=\"about\"\n                                      placeholder=\"Dunkin' Donuts is giving away free donuts for life! Share this, get the most likes on your share and you'll be rolling in a lifetime supply of delicious Dunkin' Donuts delivered to your door!\"></textarea>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"contestDescription\">Description</label>\n                            <textarea id=\"contestDescription\" class=\"text-smaller form-control\"\n                                      rows=\"8\" name=\"description\"\n                                      placeholder=\"For 1st place Dunkin' Donuts is giving away free donuts for life! People in 2nd and 3rd place will win a $100 Dunkin' Donuts Delicious Donut card!\"></textarea>\n                        </div>\n\n                        <div class=\"media\">\n                            <div class=\"pull-left icon-container\">\n                                <i class=\"media-object fa fa-tags icon-container__icon\"></i>\n                            </div>\n\n                            <div class=\"media-body\">\n                                <div class=\"form-group\">\n                                    <label for=\"contestTags\"\n                                           title=\"3+ Keywords to help people find your contest\">Tags</label>\n                                    <input id=\"contestTags\" class=\"text-smaller form-control\"\n                                           placeholder=\"Donuts, confectioneries, sweets, lifetime donut supply, Heaven on Earth\"\n                                           name=\"tags\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"media\">\n                            <div class=\"pull-left icon-container\">\n                                <i class=\"media-object fa fa-forward icon-container__icon icon-container__icon--forward\"></i>\n                            </div>\n\n                            <div class=\"media-body\">\n                                <div class=\"form-group\">\n                                    <label for=\"contestDuration\"\n                                           title=\"How long would you like your contest to run for?\">Duration</label>\n                                    <br/>\n                                    <input id=\"contestDuration\" class=\"mm-form-control-inline text-smaller form-control\"\n                                           value=\"12\"\n                                           name=\"duration\"> Days\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"media\">\n                            <div class=\"pull-left icon-container\">\n                                <i class=\"media-object fa fa-university icon-container__icon\"></i>\n                            </div>\n\n                            <div class=\"media-body\">\n                                <div class=\"form-group\">\n                                    <label for=\"contestCompany\" title=\"Which evangeler page is this contest about?\">Company</label>\n                                    <select id=\"contestCompany\" name=\"page_id\"\n                                            class=\"text-smaller form-control\">\n                                        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "companies");
if(t_3) {for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("company", t_4);
output += "\n                                            <option value=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"page_id", env.autoesc), env.autoesc);
output += "\">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"name", env.autoesc), env.autoesc);
output += "</option>\n                                        ";
;
}
}
frame = frame.pop();
output += "\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"media\">\n                            <div class=\"pull-left icon-container\">\n                                <i class=\"media-object fa fa-globe icon-container__icon icon-container__icon--globe\"></i>\n                            </div>\n\n                            <div class=\"media-body\">\n                                <div class=\"form-group\">\n                                    <label for=\"contestWebsiteLink\" title=\"A link to a promotional web page about this contest\">\n                                        Website link\n                                    </label>\n                                    <input id=\"contestWebsiteLink\" name=\"website_link\"\n                                            class=\"text-smaller form-control\"\n                                            placeholder=\"http://www.dunkindonuts.com/\">\n\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <button type=\"submit\" class=\"mm-launch-btn btn btn-lg btn-warning\">Launch!</button>\n                    </form>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n</div>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/new-page.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-hero\">\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        Create a new page on Evangeler from a facebook page you manage\n    </h2>\n</div>\n<div class=\"company-thumbs\">\n\n</div>\n";
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
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["templates/shared/refunds.jinja2"] = (function() {function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
output += "<div class=\"mm-article-theme\">\n\n    <h1>Returns & Refunds</h1>\n\n    <p>Thanks for using Evangeler.com.</p>\n\n    <p>If you are not entirely satisfied with your purchase, we're here to help.</p>\n\n    <p><strong>Refunds</strong><br/>You have 60 calendar days to refund a contest from the date you launched it.</p>\n\n    <p>Your item needs to have proof of purchase (You have to be the one who launched it).</p>\n\n    <p>If your refund is approved, we will initiate a refund to your credit card (or original method of payment). You\n        will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>\n\n    <p><strong>How To Refund Your Contest</strong><br/>To refund you contest, change the title to include the text \"[refunded]\"\n        and\n        <a href=\"mailto:leepenkman@evangeler.com\" type=\"button\" class=\"mm-btn-hg btn btn-warning btn-lg\">\n            Email Us\n        </a>\n    </p>\n\n    <p>Please remember to email us with the same email address used on your evangeler account.</p>\n\n    <p><strong>Your refunded contest will remain a publicly visible record.</strong></p>\n\n    <p><strong>Contact Us</strong><br/>If you have any questions on how to refund your contest, contact us.</p>\n</div>\n";
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
output += "<div class=\"mm-hero\">\n    <h1 class=\"mm-marketing-text\">\n        Promote your product with the power of the people!\n    </h1>\n\n    <h2 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        Create viral marketing campaigns and appeal to the masses!\n    </h2>\n    <a href=\"how-it-works\" class=\"mm-btn-hg btn btn-warning btn-lg\">Get Started Now!\n    </a>\n</div>\n<div class=\"mm-hero mm-hero--light\">\n    <h2 class=\"mm-marketing-text mm-marketing-text--black\">\n        Become an Evangeler!\n    </h2>\n\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller mm-marketing-text--black\">\n        Make Money talking about products you love!\n    </h3>\n    <a href=\"/contests\" class=\"mm-btn-hg btn btn-success btn-lg\">Browse Contests\n    </a>\n</div>\n<div class=\"mm-hero mm-hero--secondary\">\n    <h2 class=\"mm-marketing-text\">\n        Run an Evangeler contest Free!\n    </h2>\n\n    <h3 class=\"mm-marketing-text mm-marketing-text--smaller\">\n        Only For A Limited Time!\n    </h3>\n    <a href=\"/how-it-works\" class=\"mm-btn-hg btn btn-warning btn-lg\">Get Started Now!\n    </a>\n</div>\n";
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
output += "<div class=\"mm-terms mm-article-theme\">\n    <h1>evangeler.com Terms and Conditions (\"Agreement\")</h1>\n\n    <p>This Agreement was last modified on March 10, 2014.</p>\n\n    <p>Please read these Terms and Conditions (\"Agreement\", \"Terms and Conditions\") carefully before using\n        http://www.evangeler.com (\"the Site\") operated by Word Smashing (ABN 29537306446) (\"us\", \"we\", or \"our\"). This Agreement sets\n        forth the legally binding terms and conditions for your use of the Site at http://www.evangeler.com.</p>\n\n    <p>By accessing or using the Site in any manner, including, but not limited to, visiting or browsing the Site or\n        contributing content or other materials to the Site, you agree to be bound by these Terms and Conditions.\n        Capitalized terms are defined in this Agreement.</p>\n\n    <p><strong>1.1 General.</strong><br>\n    Evangeler provides an online platform that helps connect customers who wish to purchase marketing (“Customers”) and\n    marketers who wish to provide such services (“Marketers”), including, for example, through Social Marketing Contests,\n     (the “Services”). “User”\n    means any user of the Site or Service, and may be a Marketer or a Customer. If you are a User, the provisions in\n    this Agreement regarding Users apply to you. If you are also a Customer, further the provisions in this Agreement\n    regarding Customers apply to you. If you are also a Marketer, further the provisions in this Agreement regarding\n    Marketers apply to you. “Marketing Contest Winner” means the applicable winning Marketer. “Sale” means the applicable sale.\n    “IPR” means all trade secrets, copyrights, trademarks, mask work rights, patents and other intellectual property\n    rights recognized by the laws of any country.</p>\n\n    <p><strong>1.2 Service.</strong><br>\n        (a) Customer may create a social marketing contest (“social marketing contest”) by creating a brief (“Marketing Brief”), paying\n        the Customer Payment and following the other instructions on the Site. The Marketing Brief must clearly specify the\n        requirements for the social marketing contest, such that Marketers clearly know the rules and criteria on which their\n        Marketing Work will be judged. There are currently two types of social marketing contests: (1) the default Pre-Paid\n        Contest and (2) the Guaranteed Contest. Marketers invited by Evangeler (in Evangeler’ sole discretion) to enter\n        a social marketing contest may submit Marketing Work (“Marketing Work”) in the format specified by Evangeler by\n        following the instructions on the Site. Marketing Work must comply with the Marketing Brief. (b) For Guaranteed\n        Contests, Customer must select one or more winning Marketing Work by a certain time specified by Evangeler. If\n        no winner is selected in the qualifying round of a Guaranteed Contest, Evangeler will retain the Customer\n        Payment, Evangeler will distribute the Marketer Fee equally among the Marketers who participated in the\n        Guaranteed Contest and who have won a social marketing contest in the past and who have not breached this Agreement, and\n        Customer will have no right to a refund or to use the Marketing Work. If no winner is selected in the final\n        round of a Guaranteed Contest, Evangeler will retain the Customer Payment, Evangeler will distribute the\n        Marketer Fee equally among the finalists who satisfy criteria determined by Evangeler’ in its sole discretion,\n        in the final round of the Guaranteed Contest, and Customer will have no right to a refund or to use the Marketing Work\n        Concepts. (c) For Pre-Paid Contests, Customer must select one or more winning Marketing Work by the time the\n        Pre-Paid Contest closes. Customer may withdraw Pre-Paid Contest (but not a Guaranteed Contest) for a refund of\n        the Customer Payment before 60 days after he start of the Contest. Customer may\n        additionally seek a refund of the Customer Payment for a Pre-Paid Contest (but not a Guaranteed Contest) at any\n        time up to 60 days after the date of payment for the Pre-Paid Contest, but only if winners were not chosen by\n        Customer. (d) For the avoidance of doubt, Customer has no right or license to use any Marketing Work other than\n        the Winning Marketing Work. Customer may not: (a) run a social marketing contest if Customer is tendering the creation of the same\n        Marketing Work through a service other than the Site (this Section (a) does not apply to customers located in the EEA);\n        (b) allow or request Marketers to submit Marketing Work to Customer via any means other than via the Site; and\n        (c) collude in relation to the awarding of a winner in a social marketing contest or awarding a separate account held by\n        Customer as the successful Marketer in a social marketing contest. Customers and Marketers must deal on an arm’s length\n        basis Customer may not cancel any social marketing contest for the purpose of contracting separately with a Marketer who\n        Customer meets through the Site which results in Customer avoiding paying Evangeler any Customer Payment or any\n        fees and charges of Evangeler. (e) Some jurisdictions provide Customer certain mandatory statutory rights (e.g.,\n        right to supplementary performance (e.g., rectification or replacement), right for a refund, right to\n        withdrawal, right to reduce the price and right to damages in case the Marketing Work are defective)\n        (collectively, “Mandatory Statutory Rights”) which remain unaffected.</p>\n\n    <p><strong>2. Payment Terms.</strong><br>\n\n    The following terms apply to Customers who have purchased Marketing Work and Marketers who have sold Marketing Work.\n    </p>\n\n    <p><strong>2.1 Payment and Delivery.</strong><br>\n\n    For the Social Marketing Contest, (a) Customer will pay the Customer Payment to Evangeler and\n    Evangeler will pay the Marketer the Prize (subject to first receiving payment from Customer), and (b) Marketer\n    will upload the Marketing Work and Evangeler will deliver the Marketing Work to the Customer, in a format specified by\n    Evangeler. The “Customer Payment” means (i) the price selected by Customer\n    when Customer created a Social Marketing Contest as set forth at http://www.evangeler.com/how-it-works</p>\n\n    <p><strong>2.3 General Payment Terms.</strong><br>\n    All payment will be in the local currency based on the location of the Site. You agree that you are responsible for\n    the collection and/or payment of all Taxes which you may be liable for in any jurisdiction arising from your sale or\n    purchase of any Winning Marketing Works via the Site. Evangeler is not responsible for collecting, reporting, paying, or\n    remitting to you any such Taxes. “Taxes” means any applicable duties, sales taxes, GST, VAT or other taxes which may\n    be levied in respect of a transaction contemplated by this Agreement.</p>\n\n    <p><strong>Intellectual Property</strong><br/>The Site and its original content, features and functionality are\n        owned by Word Smashing and are protected by international copyright, trademark, patent, trade secret and other\n        intellectual property or proprietary rights laws.</p>\n\n    <p><strong>Termination</strong><br/>We may terminate your access to the Site, without cause or notice, which may\n        result in the forfeiture and destruction of all information associated with you. All provisions of this\n        Agreement that by their nature should survive termination shall survive termination, including, without\n        limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</p>\n\n    <p><strong>Links To Other Sites</strong><br/>Our Site may contain links to third-party sites that are not owned or\n        controlled by Word Smashing.</p>\n\n    <p>Word Smashing has no control over, and assumes no responsibility for, the content, privacy policies, or practices\n        of any third party sites or services. We strongly advise you to read the terms and conditions and privacy policy\n        of any third-party site that you visit.</p>\n\n    <p><strong>Governing Law</strong><br/>This Agreement (and any further rules, polices, or guidelines incorporated by\n        reference) shall be governed and construed in accordance with the laws of Australia, without giving effect to\n        any principles of conflicts of law.</p>\n\n    <p><strong>Changes To This Agreement</strong><br/>We reserve the right, at our sole discretion, to modify or replace\n        these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any\n        such changes constitutes your acceptance of the new Terms and Conditions.</p>\n\n    <p>Please review this Agreement periodically for changes. If you do not agree to any of this Agreement or any\n        changes to this Agreement, do not use, access or continue to access the Site or discontinue any use of the Site\n        immediately.</p>\n\n    <p><strong>Disclaimers</strong><br>\n\n    The Site and Services are provided “AS-IS” and “AS AVAILABLE” and we (and our suppliers) expressly disclaim any\n    warranties and conditions of any kind, whether express or implied, including the warranties or conditions of\n    merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement. We (and\n    our suppliers) make no warranty that the Site or Services: (a) will meet your requirements; (b) will be available on\n    an uninterrupted, timely, secure, or error-free basis; or (c) will be accurate, reliable, free of viruses or other\n    harmful code, complete, legal, or safe. Some states do not allow the exclusion of implied warranties, so the above\n    exclusion may not apply to you.<br><br>\n\n    The following Section applies to users in the EEA and Switzerland: Evangeler is liable for defects in accordance\n    with the applicable statutory provisions. With regard to companies, the warranty period is limited to twelve (12)\n    months. An additional warranty is only provided if this has been expressly agreed.**</p>\n\n    <p><strong>Contact Us</strong><br/>If you have any questions about this Agreement, please contact us.</p>\n</div>\n";
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
