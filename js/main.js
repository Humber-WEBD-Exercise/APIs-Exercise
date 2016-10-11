
// map
var map;
function initMap() {
  var myLatLng = {lat: 43.726203, lng: -79.606302};
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 16,
    scrollwheel: false,
    styles: [{"featureType":"road","stylers":[{"hue":"#5e00ff"},{"saturation":-79}]},{"featureType":"poi","stylers":[{"saturation":-78},{"hue":"#6600ff"},{"lightness":-47},{"visibility":"off"}]},{"featureType":"road.local","stylers":[{"lightness":22}]},{"featureType":"landscape","stylers":[{"hue":"#6600ff"},{"saturation":-11}]},{},{},{"featureType":"water","stylers":[{"saturation":-65},{"hue":"#1900ff"},{"lightness":8}]},{"featureType":"road.local","stylers":[{"weight":1.3},{"lightness":30}]},{"featureType":"transit","stylers":[{"visibility":"simplified"},{"hue":"#5e00ff"},{"saturation":-16}]},{"featureType":"transit.line","stylers":[{"saturation":-72}]},{}]
  });

  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Humber College',
      icon: 'images/about.png'
  });

  var contentString = '<div>'+
        '<h1><img src="images/marker.png" alt="">Humber College</h1>'+
        '<p>203 Humber College Blvd.<br>Toronto, Ontario<br>Canada, M9W 6V3</p>'+
        '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
    });

  map.addListener('click', function() {
    infowindow.close();
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

$(document).ready(function(){
  // hide and show socail widgets
  // when click twitter link
  $('.twitter-link').click(function(e){
    e.preventDefault();
    $(this).css('opacity',1);
    $('.facebook-link').css('opacity',0.3);

    $('.fb-page').fadeOut().promise().done(function(){
      $('.twitter').fadeIn();
    });

    $(".timeline-Widget").css('border-radius', 0);
  })

  // when click facebook link
  $('.facebook-link').click(function(e){
    e.preventDefault();
    $(this).css('opacity',1);
    $('.twitter-link').css('opacity',0.3);
    $('.twitter').fadeOut().promise().done(function(){
      $('.fb-page').fadeIn();
    });
  })
})
