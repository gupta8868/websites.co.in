//Nav
var btn = document.getElementById('navbtn');
var isOpen = false;



function openNav() {
    document.getElementById("mySidenav").style.width = "120px";
    document.getElementById("main").style.marginLeft = "120px";
    document.getElementById("navbtn").style.marginLeft = "130px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("navbtn").style.marginLeft = "10px";

}

// Map
jQuery(function ($) {
        function init_map1() {
            var myLocation = new google.maps.LatLng(38.885516, -77.09327200000001);
            var mapOptions = {
                center: myLocation,
                zoom: 16
            };
            var marker = new google.maps.Marker({
                position: myLocation,
                title: "Property Location"
            });
            var map = new google.maps.Map(document.getElementById("map1"),
                mapOptions);
            marker.setMap(map);
        }
        init_map1();
    });


btn.addEventListener('click', function(e) {
  if (isOpen) {
    closeNav(); 
    isOpen=false;
    e.stopPropagation();

  } else {
    openNav();
    isOpen=true;
     e.stopPropagation();
  }
});

$(document.body).click( function(e) {
     closeNav();
});


