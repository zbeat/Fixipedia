var lat, lng, mapWidget, mapWidgetSrc, thisGovType;
var supportedGovTypes = ['Federal district','State Capital','City and county','City','Borough','Town','Village','Hamlet','CDP','Ghost town','Unincorporated community','Autonomous City'];
//var supportedGovCats = ['Member states of the United Nations','Provinces and territories of Canada','States of the United States'];
$(document).ready(function(){
	lat = $(".geo").html().split(';')[0];
	lng = $(".geo").html().split(';')[1];
	mapWidgetSrc = 'http://seeclickfix.com/issues/iframe?token=f4a72ef691cdab12f3f665b8c1b2886c71c3c2df&lat=' + lat + '&lng=' + lng + '&num_results=50&zoom=13';
	mapWidget = '<iframe width="100%" height="300" src="' + mapWidgetSrc + '" scrolling="no" marginheight="0" frameborder="0" marginwidth="0" allowtransparency="true" hspace="0" vspace="0"></iframe>';
	//thisGovType = $(".category a").text();
	thisGovType = $(".category").text();
	if($.inArray(thisGovType, supportedGovTypes) !== -1) {
		$('table.vcard tr:last').after('<tr class="mergedtoprow"><th colspan="2">SeeClickFix Issues<br/>' + mapWidget + '<br/><a href="' + mapWidgetSrc + '" target="_blank" style="font-weight:normal;">large map</a></th></tr>');
	}
});