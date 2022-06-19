var MyLatLng = new google.maps.LatLng(35.67946, 139.39411); //日野駅の座標
  var Options = {
   zoom: 15,      //地図の縮尺値
   center: MyLatLng,    //地図の中心座標
   mapTypeId: 'roadmap'   //地図の種類
  };
  var map = new google.maps.Map(document.getElementById('map'), Options);
  map.data.loadGeoJson('twilight.geojson')