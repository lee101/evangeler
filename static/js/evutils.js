window.evutils = new (function () {
	"use strict";
	var self = this;

	var isfetching = false;


	self.loadmore = function (pathName, templateName) {
		if (!isfetching) {

			isfetching = true;
			$('.load-more').attr('disabled', 'disabled');
			$.ajax({
				'url': '/' + pathName + '?cursor=' + CURR_CURSOR,
				'success': function (data) {
					$('.load-more').removeAttr('disabled');
					a = $('<div></div>');
					a.html(data);
					CURR_CURSOR = a.find('#cursor').attr('data-cursor');
					//append things
					$('.mm-grid').append(nunjucks.render('templates/shared/' + templateName + '.jinja2'))
					isfetching = false;
				},
				'error': function (data) {
					var $load = $('.load-more');
					$load.html('No More Results');
				},
				cache: false
			});
		}
		return false;
	}

})();
