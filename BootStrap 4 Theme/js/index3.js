/*
+ This file is part of Brainz Tech Inc. +

*Author : Edwin Asare

*Copyright(C) 2018 Brainz Tech Inc.
+
* License: Licensed under the Apache License, Version 2.0.

*License url :; http://www.apache.org/licenses/LICENSE-2.0.

   + you free to copy and use this theme but .Show appreciation by adding our name at the bottom of your website.

*/

$(document).ready(function () {
	// body...
	$(window).scroll(function () {
		// body...
		var scroll = $(window).scrollTop();
		if (scroll > 50) {
			$('.navbar').css('background', '#21252999');
		} else {
			$('.navbar').css('background', 'transparent');
		}
	});
});