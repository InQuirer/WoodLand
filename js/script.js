$("#dropDown, #items").hover(function () {
	$("#items").css("z-index", "1");
	$("#item1").fadeIn(100);
	$("#item2").fadeIn(150);
	$("#item3").fadeIn(200);
}, function () {
	if (this.id === "items") {
		$("#item1").delay(300).fadeOut();
		$("#item2").delay(250).fadeOut();
		$("#item3").delay(200).fadeOut();
	}
});

$(window).load(function () {
	$('.flexslider').flexslider({
		animation: "slide"
	});
});

$("#regBtn").click(function () {
	$("#hover").width($("#grid").width());
	$("#hover").height($("body").height());
	$("#hover").fadeIn();
	$("#popup").fadeIn();
});

$("#hover, #cancel").click(function () {
	$("#hover").fadeOut();
	$("#popup").fadeOut();
});

$(function () {
	var countries = [
		"Australia",
		"Austria",
		"Estonia"
	];
	$("#search").autocomplete({
		source: countries
	});
});

$(function() {
	$("#startDate").datepicker();
	$("#endDate").datepicker();
});

function initialize() {
	var mapOptions = {
		zoom: 17,
		center: new google.maps.LatLng(59.396695, 24.664854)
	}
	var map = new google.maps.Map(document.getElementById('gMap'), mapOptions);
	var image = 'images/beachflag.png';
	var myLatLng = new google.maps.LatLng(59.396695, 24.664854);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
	});
}