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
    }

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
        var history = [window.location.pathname];
        var historyIdx = 0;
        hself.goingback = false;
        hself.add = function () {
            var state = window.location.pathname;
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

        return hself;
    })();

})();
