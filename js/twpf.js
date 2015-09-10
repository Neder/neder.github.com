var ref = document.referrer;
alert(ref.match("/https:\/\/t.co(.*)/i")); // TEST
if (ref.match("/https:\/\/t.co(.*)/i")){ // Twitter t.co URL match Regex
    jQuery('#twpf').show();
	alert("Twitter!"); // TEST
} else {
	alert("Not Twitter!"); // TEST
}