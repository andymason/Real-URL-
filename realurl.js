/*
	Title: Real URL 

	Description:
		Shortened URLs are useful for Twitter and other social networks
		but they mask the final destination. This bookmarklet parses
		the HTML and converts all shortened URLs into their full length
		versions.
	
	Author: Andrew Mason
	Contact: andrew at coderonfire.com
	URL: http://coderonfire.com

	Version: 0.1

*/

var lu = {
    services : new RegExp("^(http(s?)://(307\.to|adjix\.com|b23\.ru|bacn\.me|bit\.ly|bloat\.me|budurl\.com|cli\.gs|clipurl\.us|cort\.as|digg\.com|dwarfurl\.com|fb\.me|ff\.im|fff\.to|href\.in|idek\.net|is\.gd|j\.mp|kl\.am|korta\.nu|lin\.cr|ln\-s\.net|loopt\.us|lost\.in|memurl\.com|merky\.de|migre\.me|moourl\.com|nanourl\.se|om\.ly|ow\.ly|peaurl\.com|ping\.fm|piurl\.com|plurl\.me|pnt\.me|poprl\.com|post\.ly|rde\.me|reallytinyurl\.com|redir\.ec|retwt\.me|rubyurl\.com|short\.ie|short\.to|smallr\.com|sn\.im|sn\.vc|snipr\.com|snipurl\.com|snurl\.com|su\.pr|tiny\.cc|tinysong\.com|tinyurl\.com|togoto\.us|tr\.im|tra\.kz|trg\.li|twurl\.cc|twurl\.nl|u\.mavrev\.com|u\.nu|ur1\.ca|url\.az|url\.ie|urlx\.ie|w34\.us|xrl\.us|yep\.it|zi\.ma|zurl\.ws)/[a-zA-Z0-9_-]+)$|((^http(s?)://[a-zA-Z0-9_-]+\.notlong\.com)|(^http(s?)://[a-zA-Z0-9_-]+\.qlnk\.net)|(^http(s?)://chilp\.it/[?][a-zA-Z0-9_-]+)|(^http(s?)://goo\.gl/fb/[a-zA-Z0-9_-]+)|(^http(s?)://trim\.li/nk/[a-zA-Z0-9_-]+)|(^http(s?)://url4\.eu/[a-zA-Z0-9_-]+))[/]?$"),

	lookupUrl: function(url) {
		var test = 34;
		var bob = 'rrj';
	},

    init: function() {
        var links = document.getElementsByTagName('a');
        for(var i=0; i < links.length; i++) {
            console.log(links[i].href.match(lu.services));
        }
    },


}

window.onload = function() {
    lu.init();
}
