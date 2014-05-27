window.evutils = new (function () {
    "use strict";
    var self = this;

    var isfetching = false;


    self.loadmore = function (pathName, templateName) {
        if (!isfetching) {

            isfetching = true;
            var $loadMore = $('.load-more');
            $loadMore.attr('disabled', 'disabled')
                .html('<i class="fa fa-spinner fa-spin"></i>');
            $.ajax({
                'url': '/' + pathName + '?cursor=' + CURR_CURSOR,
                'success': function (data) {
                    $loadMore.removeAttr('disabled')
                        .html('Load More...');
                    a = $('<div></div>');
                    a.html(data);
                    CURR_CURSOR = a.find('#cursor').attr('data-cursor');
                    //append things
                    var $renderedTemplate = $(nunjucks.render('templates/shared/' + templateName + '.jinja2'));
                    $('.mm-grid').append($renderedTemplate.find('.mm-grid').html());
                    isfetching = false;
                },
                'error': function (data) {
                    $loadMore.html('No More Results');
                },
                cache: false
            });
        }
        return false;
    };

    //Modals
    self.modalHidden = true;
    $(document).ready(function () {

        var $modal = $('#modal');
        $modal.on('hide.bs.modal', function (e) {
            self.modalHidden = true;
        });

        $modal.on('show.bs.modal', function (e) {
            self.modalHidden = false;
        });
    });
    self.showModal = function () {
        $('#modal').modal('show');
    };
    self.hideModal = function () {
        $('#modal').modal('hide');
    };
    self.setModal = function (content) {
        $('#modal').find('.modal-body').html(content);
        self.showModal();
    };

    //History
    self.history = new (function () {
        var hself = this;
        var history = [window.location.pathname + window.location.hash];
        var historyIdx = 0;
        hself.goingback = false;
        hself.add = function () {
            var state = window.location.pathname + window.location.hash;
            if (historyIdx >= 1 && history[historyIdx - 1] == state) {
                historyIdx -= 1;
                hself.goingback = true;
            } else {
                hself.goforward(state);
            }
        };
        hself.goforward = function (state) {
            historyIdx++;
            history[historyIdx] = state;
            hself.goingback = false;
        };
        hself.previousState = function () {
            if (historyIdx >= 1) {
                return history[historyIdx - 1];
            }
            return null;
        };
        hself.currentState = function () {
            if (historyIdx >= 0) {
                return history[historyIdx];
            }
            return null;
        };

        return hself;
    })();

    self.urlencode = function (name) {
        return name.replace(/\s/g, '-')
            .replace(/[\.\t\,\:;\(\)'@!\\\?#/<>&]/g, '')
            .replace(/[^\x00-\x7F]/g, "")
            .toLowerCase();
    };

    //share buttons
    $(document).on('click', '.facebook-share-btn', function () {
        FB.ui({
            method: 'share',
            href: window.location.href
        }, function (response) {
        });
    });


    self.render = function (template, opts) {
//TODO on load?
        if (typeof opts === 'undefined') {
            opts = {};
        }
        $.extend(opts, {
            url: window.location.href,
            urlencode: encodeURIComponent,
            window: window,
            client_side: true
        });
        return nunjucks.render(template, opts);
    };


    self.formatTags = function (obj) {
        if (obj.tags) {
            obj.tags = obj.tags.split(/\s*,\s*/);
        }
    };


    self.guid = (function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return function () {
            return s4() + s4();
        };
    })();

    (function () {
        if (window.__twitterIntentHandler) return;
        var intentRegex = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,
            windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes',
            width = 550,
            height = 420,
            winHeight = screen.height,
            winWidth = screen.width;

        function handleIntent(e) {
            e = e || window.event;
            var target = e.target || e.srcElement,
                m, left, top;

            while (target && target.nodeName.toLowerCase() !== 'a') {
                target = target.parentNode;
            }

            if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
                m = target.href.match(intentRegex);
                if (m) {
                    left = Math.round((winWidth / 2) - (width / 2));
                    top = 0;

                    if (winHeight > height) {
                        top = Math.round((winHeight / 2) - (height / 2));
                    }

                    window.open(target.href, 'intent', windowOptions + ',width=' + width +
                        ',height=' + height + ',left=' + left + ',top=' + top);
                    e.returnValue = false;
                    e.preventDefault && e.preventDefault();
                }
            }
        }

        if (document.addEventListener) {
            document.addEventListener('click', handleIntent, false);
        } else if (document.attachEvent) {
            document.attachEvent('onclick', handleIntent);
        }
        window.__twitterIntentHandler = true;
    }());

})();

$.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function () {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
