/* 
Toaster  - a jQuery slidedown alert notifier	
2011 Billy Coover
Copyrights are lame!
www.coovtech.com	
*/
(function ($) {
	$.fn.extend({
		//plugin name - toaster
		toaster: function (options, arg) {
			//Check that options is an object and not a method name
			if (options && typeof (options) == 'object') {
				options = $.extend({}, $.toaster.defaults, options);
			} else if (!options) { //If options is a methiod name, use the default settings
				options = $.extend({}, $.toaster.defaults, null);
			}
			this.each(function () {
				new $.toaster(this, options, arg);
			});
			return;
		}
	});

	$.toaster = function (elem, options, arg) {
		if (options && typeof (options) == 'string') {
			if (options == 'show') {
			    show(elem, arg, $.toaster.defaults);
			}
			return;
		} else {
			var showToaster = false;
			var text = $(elem).html();
			if (text != null && text != '') {
				$(elem).html('');
				showToaster = true;
			}
			init(elem, arg, options);
			if (showToaster) {
				show(elem, text, options);
			}
		}

		function init(elem, arg, options) {
			$(elem).html($.toaster.defaults.toasterHtml);
			$(".toaster-bar-bkg").css('backgroundColor', options.backgroundColor);
		}

		function show(elem, arg, options) {
		    $(".toaster-bar-bkg").css('backgroundColor', options.backgroundColor);
			$(".toast-info").html(arg);
			$(".toaster-bar-container").show('slide', { direction: 'up' }, 1000).delay(2500).hide('slide', { direction: 'up' }, 1000);
			return false;
		}
	};

	$.toaster.defaults = {
		backgroundColor: '#fff',
		color: '#000',
		toasterHtml: '\
			<div id="toaster-area"> \
				<div class="toaster-bar-container" style="display:none;"> \
					<div class="toaster-bar-bkg" style="display: block; height: 22px; "></div> \
					<div class="toaster-bar" style="display: block; "> \
						<div class="toaster-bar-contents"> \
							<div class="toast toast-info" ></div> \
						</div> \
					</div> \
				</div> \
			</div>'
	};
})(jQuery);