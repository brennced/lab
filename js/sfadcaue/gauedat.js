function gauedat() {
	var screensize = screen.width + ';' + screen.height;
	
	document.getElementById('sr').value = screensize
	document.getElementById('ost').value = jsudat.os;
	document.getElementById('osv').value = jsudat.osVersion;
	document.getElementById('brwsr').value = jsudat.browser + ' ' + jsudat.browserVersion;
	document.getElementById('ce').value = jsudat.cookies;
	document.getElementById('ua').value = window.btoa(navigator.userAgent);
	
	document.getElementById('jsdc').innerHTML = 'Screen size: ' + screensize + '<br/>\n' + 'OS: ' + jsudat.os + ' ' + jsudat.osVersion + '<br/>\n' + 'Browser: ' + jsudat.browser + ' ' + jsudat.browserVersion + '<br/>\n' + 'Cookies enabled: ' + jsudat.cookies + '<br/>\n' + 'User agent: ' + navigator.userAgent;
}
