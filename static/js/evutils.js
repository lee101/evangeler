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

})();
