/* jshint devel:true */

'use strict';

// List of projects
var projects = [ 'http://butwhy.org', 'http://hipsterberg.com', 'http://thinking.bike' ];

window.onload = function() {

	// Show random project
	var randomProject = projects[Math.floor(Math.random() * projects.length)];
	console.log('Good to see you here. Why don\'t you have a look at ' + randomProject + '?');

	// Smooth reveal transitions
	var scrollReveal;
	window.sr = new scrollReveal({ scale: { power:'0%'} });
};
