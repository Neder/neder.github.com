var ref = document.referrer;
if (ref.match(/https:\/\/t.co(.*)/i)) { // Twitter t.co URL match Regex
	alert("Twitter!");
    jQuery('#twpf').show();
} else {
	alert("Not Twitter!");
}