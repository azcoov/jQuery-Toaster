/* 
Toaster  - a jQuery slidedown alert notifier	
2011 Billy Coover
Copyrights are lame!
www.coovtech.com	
*/
(function ($) {
	var $bkg, $contents, $container, $info, $area;
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
			$area      = $('#toaster-area');
			$bkg       = $area.find('.toaster-bar-bkg').css({ backgroundColor: options.backgroundColor, opacity: options.opacity });
			$container = $area.find('.toaster-bar-container');
			$contents  = $container.find('.toaster-bar-contents').css({ color: options.color });
			$info      = $contents.find(".toast-info");
		}
		
		function sync() {
			$bkg.css({ top: $container.css('top') });
		}

		function show(elem, arg, options) {
		    $contents.css('color', options.color);
			$area.stop().css({ top: -9000 });
			$info.html(arg);
			$bkg.css({ backgroundColor: options.backgroundColor, opacity: options.opacity, height: $container.css('height') });
			$area
				.css({ top: -$container.height() })
				.animate( { top: 0 }, { duration: 1000, step: sync, complete: sync } )
				.delay( 2500 )
				.animate( { top: -$container.height() }, { duration: 1000, step: sync, complete: sync });
			return false;
		}
	};

	$.toaster.defaults = {
		backgroundColor: '#fff',
		color: '#000',
		opacity: '.95',
		toasterHtml: '\
			<div id="toaster-area">\
				<div class="toaster-bar-bkg"></div>\
				<div class="toaster-bar-container">\
					<div class="toaster-bar">\
						<div class="toaster-bar-contents">\
							<div class="toast toast-info"></div>\
						</div>\
					</div>\
				</div>\
			</div>'
	};
})(jQuery);