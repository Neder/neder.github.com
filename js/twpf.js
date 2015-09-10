var ref = document.referrer;
if (ref.match(/http(s?):\/\/t.co(.*)/i)) { // Twitter t.co URL match Regex
    jQuery('#twpf').show();
}