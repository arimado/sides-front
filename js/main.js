
var map;

var appState = {
    isDropping: false,
    evacSites: [],
}

var getSchools = function () {
    return [
        {
            school: 'Killara High School',
            capacity: 400,
            lat: -33.860427,
            long: 151.204871,
        },
        {
            school: 'Hornsby Girls' ,
            capacity: 400,
            lat: -33.860863,
            long: 151.204832,
        },
        {
            school: 'North Sydney Boys' ,
            capacity: 400,
            lat: -33.863407,
            long: 151.21408,
        },
    ]
}

var getResults = function () {
    var results = [{'dst': {'id': 'Adamstown Public School',
   'lat': -32.932213,
   'lng': 151.730971,
   'num_students': 235},
  'src': {'id': 'Abbotsford Public School',
   'lat': -33.852728,
   'lng': 151.131206,
   'num_students': 589},
  'value': 0.0},
 {'dst': {'id': 'Adelong Public School',
   'lat': -35.312333,
   'lng': 148.062802,
   'num_students': 76},
  'src': {'id': 'Abbotsford Public School',
   'lat': -33.852728,
   'lng': 151.131206,
   'num_students': 589},
  'value': 76.0},
 {'dst': {'id': 'Albion Park Public School',
   'lat': -34.570257,
   'lng': 150.77262,
   'num_students': 425},
  'src': {'id': 'Abbotsford Public School',
   'lat': -33.852728,
   'lng': 151.131206,
   'num_students': 589},
  'value': 425.0},
 {'dst': {'id': 'Albury Public School',
   'lat': -36.082454,
   'lng': 146.919253,
   'num_students': 593},
  'src': {'id': 'Abbotsford Public School',
   'lat': -33.852728,
   'lng': 151.131206,
   'num_students': 589},
  'value': 88.0},
 {'dst': {'id': 'Albury West Public School',
   'lat': -36.07783,
   'lng': 146.895548,
   'num_students': 104},
  'src': {'id': 'Abbotsford Public School',
   'lat': -33.852728,
   'lng': 151.131206,
   'num_students': 589},
  'value': 0.0},
 {'dst': {'id': 'Timbumburi Public School',
   'lat': -31.203781,
   'lng': 150.915629,
   'num_students': 131},
  'src': {'id': 'Abbotsford Public School',
   'lat': -33.852728,
   'lng': 151.131206,
   'num_students': 589},
  'value': 0.0},
 {'dst': {'id': 'Adamstown Public School',
   'lat': -32.932213,
   'lng': 151.730971,
   'num_students': 235},
  'src': {'id': 'Aberdeen Public School',
   'lat': -32.166098,
   'lng': 150.888095,
   'num_students': 220},
  'value': 7.0},
 {'dst': {'id': 'Adelong Public School',
   'lat': -35.312333,
   'lng': 148.062802,
   'num_students': 76},
  'src': {'id': 'Aberdeen Public School',
   'lat': -32.166098,
   'lng': 150.888095,
   'num_students': 220},
  'value': 0.0},
 {'dst': {'id': 'Albion Park Public School',
   'lat': -34.570257,
   'lng': 150.77262,
   'num_students': 425},
  'src': {'id': 'Aberdeen Public School',
   'lat': -32.166098,
   'lng': 150.888095,
   'num_students': 220},
  'value': 0.0},
 {'dst': {'id': 'Albury Public School',
   'lat': -36.082454,
   'lng': 146.919253,
   'num_students': 593},
  'src': {'id': 'Aberdeen Public School',
   'lat': -32.166098,
   'lng': 150.888095,
   'num_students': 220},
  'value': 82.0},
 {'dst': {'id': 'Albury West Public School',
   'lat': -36.07783,
   'lng': 146.895548,
   'num_students': 104},
  'src': {'id': 'Aberdeen Public School',
   'lat': -32.166098,
   'lng': 150.888095,
   'num_students': 220},
  'value': 0.0},
 {'dst': {'id': 'Timbumburi Public School',
   'lat': -31.203781,
   'lng': 150.915629,
   'num_students': 131},
  'src': {'id': 'Aberdeen Public School',
   'lat': -32.166098,
   'lng': 150.888095,
   'num_students': 220},
  'value': 131.0},
 {'dst': {'id': 'Adamstown Public School',
   'lat': -32.932213,
   'lng': 151.730971,
   'num_students': 235},
  'src': {'id': 'Abermain Public School',
   'lat': -32.80892,
   'lng': 151.426499,
   'num_students': 228},
  'value': 228.0},
 {'dst': {'id': 'Adelong Public School',
   'lat': -35.312333,
   'lng': 148.062802,
   'num_students': 76},
  'src': {'id': 'Abermain Public School',
   'lat': -32.80892,
   'lng': 151.426499,
   'num_students': 228},
  'value': 0.0},
 {'dst': {'id': 'Albion Park Public School',
   'lat': -34.570257,
   'lng': 150.77262,
   'num_students': 425},
  'src': {'id': 'Abermain Public School',
   'lat': -32.80892,
   'lng': 151.426499,
   'num_students': 228},
  'value': 0.0},
 {'dst': {'id': 'Albury Public School',
   'lat': -36.082454,
   'lng': 146.919253,
   'num_students': 593},
  'src': {'id': 'Abermain Public School',
   'lat': -32.80892,
   'lng': 151.426499,
   'num_students': 228},
  'value': 0.0},
 {'dst': {'id': 'Albury West Public School',
   'lat': -36.07783,
   'lng': 146.895548,
   'num_students': 104},
  'src': {'id': 'Abermain Public School',
   'lat': -32.80892,
   'lng': 151.426499,
   'num_students': 228},
  'value': 0.0},
 {'dst': {'id': 'Timbumburi Public School',
   'lat': -31.203781,
   'lng': 150.915629,
   'num_students': 131},
  'src': {'id': 'Abermain Public School',
   'lat': -32.80892,
   'lng': 151.426499,
   'num_students': 228},
  'value': 0.0}]

  return results;
}

var showSchoolsOnMap = function (schools) {
    schools.forEach(function(school) {
        var marker = new google.maps.Marker({
         position: { lat: school.lat, lng: school.long },
         map: map,
         title: 'Hello World!'
       });
    })
}

var showSitesOnMap = function (results) {
    results.forEach(function(result){



        var srcMarker = new google.maps.Marker({
             position: { lat: result.src.lat, lng: result.src.lng },
             map: map,
       });

       var dstMarker = new google.maps.Marker({
           position: { lat: result.dst.lat, lng: result.dst.lng },
           map: map,
       })




    })
}

var navigateTo = function (positionString) {
    var geocoder = new google.maps.Geocoder();
    geocodeAddress(geocoder, map, positionString);

}

var geocodeAddress = function (geocoder, resultsMap, positionString) {
      geocoder.geocode({'address': positionString}, function(results, status) {
        if (status === 'OK') {
          resultsMap.setCenter(results[0].geometry.location);
          resultsMap.setZoom(14);
          var marker = new google.maps.Marker({
            map: resultsMap,
            position: results[0].geometry.location
          });
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      });
}

var addEvacSite = function (latLng, map) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map
    });
    marker.meta = {
        type: 'evac',
        id: appState.evacSites.length
    }
    appState.evacSites.push(marker);
}

var addListeners = function (map) {
    map.addListener('click', function (e) {
        console.log(e.latLng.lat(), e.latLng.lng());
        if (!appState.isDropping) return;
        addEvacSite(e.latLng, map);

    })
}

var initMap = function () {

    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });

    addListeners(map)
}


$('#mainInput').submit(function (e) {
    e.preventDefault();

    var formValue = $('#inputContent').val();

    // $.ajax({
    //       url: 'test-string',
    //       dataType: 'json',
    //       cache: false,
    //       success: function(response) {
    //       },
    //       error: function(xhr, status, err) {
    //       }
    // });

    // on submit draw pointers

    // jsonData


    var schools = getSchools();

    showSchoolsOnMap(schools);

    navigateTo(formValue + ' Australia');

})

$('#addSite').on('click', function(e) {

    appState.isDropping = appState.isDropping ? false : true;

    if ( appState.isDropping ) {
        $('#addSite').val('Dropping');

    } else {
        $('#addSite').val('Add evac site');
    }

})

$('#run').on('click', function(e) {

    showSitesOnMap(getResults());


})
