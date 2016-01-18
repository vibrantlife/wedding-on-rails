// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require lodash
//= require foundation
//= require turbolinks
//= require datetimepicker
//= require select2
//= require checkBo
//= require Justified-Gallery
//= require blueimp-file-upload/vendor/jquery.ui.widget
//= require blueimp-file-upload/jquery.iframe-transport
//= require blueimp-file-upload/jquery.fileupload
//= require nprogress
//= require lightbox2


//= require_tree .

$(function(){ $(document).foundation(); });

$('a[href^="#"').on('click', function(event)
{
	var target = $($(this).attr('href'));
	if(target.length)
	{
		event.preventDefault();
		$('html, body').animate(
		{
			scrollTop: target.offset().top - 200
		}, 1000);
	}
})
