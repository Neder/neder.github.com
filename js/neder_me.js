// goo.gl/tsa3oc
Date.prototype.yymmdd = function() {
    var yy = this.getFullYear().toString().substr(2,2);
    var mm = (this.getMonth() + 1).toString();
    var dd = this.getDate().toString();
    return yy + "/" + (mm[1] ? mm : '0'+mm[0]) + "/" + (dd[1] ? dd : '0'+dd[0]);
}

$(document).ready(function() {
	// handle profile for twitter
	var ref = document.referrer;
	if (ref.match(/http(s?):\/\/t.co(.*)/i)) { // Twitter t.co URL match Regex
		jQuery('#twpf').show();
	}

	// handle military service progress bar
	// http://blog.naver.com/chsmanager/220305377502
	var today      = new Date();
	var start_date = new Date(2019, 1, 18, 0, 0, 0); // 2019-02-18
	var end_date   = new Date(2020, 11, 17, 23, 59, 59); // 2020-12-17
	
	var total_days  = (end_date - start_date) / 86400000;
	var remain_days = (end_date - today) / 86400000;
	if (remain_days >= total_days)
		remain_days = total_days
	var progress    = (100*(total_days-remain_days)/total_days).toFixed(2);
	
	// jQuery('#ms_days').text(start_date.yymmdd() + " ~ " + end_date.yymmdd());
	
	jQuery('#prgbar_label').text(progress + "%");
	jQuery('#ms_prgbar').attr("aria-valuenow", progress);
	jQuery('#ms_prgbar').attr("style", "width: " + progress + "%;");
	
	if ((today - start_date) >= 0 && (end_date - today) >= 0) {
		jQuery('#ms_status').show();
	}
});
