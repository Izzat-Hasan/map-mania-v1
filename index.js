var gMap;

function initMap(){

    gMap = new google.maps.Map(document.getElementById('myMapId'),{
    center: {lat:41.878, lng: -50}, zoom :3});

    google.maps.event.addListener(gMap, 'click',
    function(event){
      addMarker({coords:event.latLng});
    });

    var loc1 =  {lat:45.842829962,lng: -84.617997528};
    var loc2 =  {lat:32.7157,lng: -117.1611};
    var marker = new google.maps.Marker({position: loc1,map:gMap});

    var marker2 = new google.maps.Marker({position: {lat:21.17429,lng:-86.84656},map:gMap});
    marker2.setIcon('http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png');

    var marker3=  new google.maps.Marker({position: loc2,map:gMap});
    marker3.setIcon('http://maps.google.com/mapfiles/kml/pal4/icon30.png');

    var infoWindow = new google.maps.InfoWindow({content: 'cancun, mexico'});
    marker2.addListener('click', function(){
      infoWindow.open(gMap,marker2);
    });
    google.maps.event.addListener(gMap,'idle', function(){
      updateGame()
    });

    var infoWindow2 = new google.maps.InfoWindow({content: 'San Diego, California'});
    marker3.addListener('click', function(){
      infoWindow2.open(gMap,marker3);
    });
    google.maps.event.addListener(gMap,'idle', function(){
      updateGame()
    });
    ///
  }
function addMarker(props){
  var marker = new google.maps.Marker({
    position:props.coords,
    map:gMap,
  });
}
function updateGame(){
  var loc1 =  {lat:45.3306,lng:-91.4918};
  console.log('function UpdateGame()!');
  var zoomlevel = gMap.getZoom()
  var inBounds = false;

  if(gMap.getBounds().contains(loc1)){
    inBounds = true;
  }

  console.log("inBounds:"+inBounds+" zoomlevel:" +zoomlevel)
}


function initApplication(){
  console.log('Map Mania version 2 - Starting');
}
