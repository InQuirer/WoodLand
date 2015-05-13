/*$(".items").hover(function() {
	$("#item1").fadeIn(100);
	$("#item2").fadeIn(150);
	$("#item3").fadeIn(200);
}, function() {
	$("#item1").delay(300).fadeOut();
	$("#item2").delay(250).fadeOut();
	$("#item3").delay(200).fadeOut();
})*/

$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "slide"
	});
});

$("#regBtn").click(function() {
	$("#hover").width($("#grid").width());
	$("#hover").height($("body").height());
	$("#hover").fadeIn();
	$("#popup").fadeIn();
});

$("#hover, #cancel").click(function(){
	$("#hover").fadeOut();
	$("#popup").fadeOut();
});
//$(".flex-next").html("none");

$(function(){
	$(".items").hover(function(){
		$(this).addClass("hover");
		$('.link:first',this).css('visibility', 'visible');
	}, function(){
		$(this).removeClass("hover");
		$('a:first',this).css('visibility', 'hidden');
	});
});

$("#menu").menu();

function initialize() {
	var mapOptions = {
		zoom: 17,
		center: new google.maps.LatLng(59.396695, 24.664854)
	}
	var map = new google.maps.Map(document.getElementById('gMap'),mapOptions);
	var image = 'images/beachflag.png';
	var myLatLng = new google.maps.LatLng(59.396695, 24.664854);
	var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
	});
}