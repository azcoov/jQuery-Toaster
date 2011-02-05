# Toaster

Toaster is a Twitter-like implementation of a notification slide-down. If you have ever changed a setting on your Twitter profile and seen the notification toaster, then you'll know exactly what this is. 

Toaster can be launched automatically, or on demand.

[See an example](http://www.coovtech.com/projects/toaster/).

## Usage

Include jQuery, /toaster.js and .toaster.css.

Add an empty div with an id of toaster just after the body tag of your page.

	<div id="toaster"></div>

Initialize the toaster.

	$('#toaster').toaster();

The toaster will automatically side-down if it detects any text inside the toaster div. So if you want the notification to automatically display when a page first loads, make sure to add text insde that div. Here is an example of that using asp.net mvc:

	<div id="toaster"><%: TempData["notification"]%></div>

If you want to pop the toaster later on after the toaster has been initialized, you can call toaster on an element, calling the show method and supplying it with a message:

	$('#somelink').click(function() {
		$(this).toaster('show', 'Hello world!');
	});
	
### Customization

You can change the default color of the toaster by supplying a backgroundColor.

    $('#toaster').toaster({ backgroundColor: '#666699' });	
	
you can change the opacity as well.

    $('#toaster').toaster({ backgroundColor: '#666699', opacity: '.30' });	
	
### Currently working on

I'm going to add more default options, such as opacity & font	

## Dependencies

[jQuery](http://jquery.com/) & [jQuery UI](http://jqueryui.com/) are required.