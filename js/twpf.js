alert("Loaded!"); // TEST
var ref = document.referrer;
if (ref.match("/https:\/\/t.co(.*)/i")){ // Twitter t.co URL match Regex
    jQuery('#twpf').show();
	alert("Twitter!"); // TEST
}