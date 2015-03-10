var southWest = L.latLng(40.93634, -82.394714),
    northEast = L.latLng(41.887966, -80.779724),
    bounds = L.latLngBounds(southWest, northEast);

L.mapbox.accessToken = 'pk.eyJ1IjoiY2xldmVsYW5kLW1ldHJvcGFya3MiLCJhIjoiWHRKaDhuRSJ9.FGqNSOHwiCr2dmTH2JTMAA';
var map = L.mapbox.map('map');

	
var cmparks = L.tileLayer('http://maps1.clemetparks.com/tilestache/tilestache.cgi/basemap/{z}/{x}/{y}.jpg',
	{
		 attribution: 'Map data <a href="http://clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a>, Imagery <a href="http://maps.clevelandmetroparks.com" target="_blank">Cleveland Metroparks</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		 maxBounds: bounds,
		 maxZoom: 17,
		 minZoom: 11
}).addTo(map);



var myLayer = L.mapbox.featureLayer().addTo(map);

var geojson = (

{
  "type": "FeatureCollection",
  "crs": {
    "type": "name",
    "properties": {
      "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
    }
  },
  "features": [
    {
      "type": "Feature",
      "properties": {
        "uid": "BE23",
        "waypoint": 119,
        "res": "Bedford",
        "Latitude": 41.3833,
        "Longitude": -81.54573,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54573,
          41.3833
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE40",
        "waypoint": 136,
        "res": "Bedford",
        "Latitude": 41.37639,
        "Longitude": -81.54531,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54531,
          41.37639
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE50",
        "waypoint": 147,
        "res": "Bedford",
        "Latitude": 41.372094,
        "Longitude": -81.548521,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.548521,
          41.372094
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE58",
        "waypoint": 156,
        "res": "Bedford",
        "Latitude": 41.37027,
        "Longitude": -81.55267,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55267,
          41.37027
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE70",
        "waypoint": 169,
        "res": "Bedford",
        "Latitude": 41.37493,
        "Longitude": -81.55564,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55564,
          41.37493
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE89",
        "waypoint": 188,
        "res": "Bedford",
        "Latitude": 41.37243,
        "Longitude": -81.56528,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56528,
          41.37243
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE92",
        "waypoint": 191,
        "res": "Bedford",
        "Latitude": 41.370877,
        "Longitude": -81.565665,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.565665,
          41.370877
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE93",
        "waypoint": 192,
        "res": "Bedford",
        "Latitude": 41.370381,
        "Longitude": -81.565836,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.565836,
          41.370381
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE100",
        "waypoint": 144,
        "res": "Bedford",
        "Latitude": 41.36304,
        "Longitude": -81.56705,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56705,
          41.36304
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE115",
        "waypoint": 206,
        "res": "Bedford",
        "Latitude": 41.38405,
        "Longitude": -81.5283,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5283,
          41.38405
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE117",
        "waypoint": 208,
        "res": "Bedford",
        "Latitude": 41.38364,
        "Longitude": -81.52699,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.52699,
          41.38364
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE124",
        "waypoint": 215,
        "res": "Bedford",
        "Latitude": 41.38405,
        "Longitude": -81.52216,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.52216,
          41.38405
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE129",
        "waypoint": 220,
        "res": "Bedford",
        "Latitude": 41.38371,
        "Longitude": -81.51868,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.51868,
          41.38371
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE135",
        "waypoint": 226,
        "res": "Bedford",
        "Latitude": 41.3835,
        "Longitude": -81.51466,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.51466,
          41.3835
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE139",
        "waypoint": 230,
        "res": "Bedford",
        "Latitude": 41.3832,
        "Longitude": -81.51106,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.51106,
          41.3832
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE141",
        "waypoint": 232,
        "res": "Bedford",
        "Latitude": 41.38286,
        "Longitude": -81.50948,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50948,
          41.38286
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE164",
        "waypoint": 255,
        "res": "Bedford",
        "Latitude": 41.37639,
        "Longitude": -81.49211,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49211,
          41.37639
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW2",
        "waypoint": 13,
        "res": "Bradley Woods",
        "Latitude": 41.40693,
        "Longitude": -81.96284,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96284,
          41.40693
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW3",
        "waypoint": 14,
        "res": "Bradley Woods",
        "Latitude": 41.40742,
        "Longitude": -81.96274,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96274,
          41.40742
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW4",
        "waypoint": 15,
        "res": "Bradley Woods",
        "Latitude": 41.40783,
        "Longitude": -81.96281,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96281,
          41.40783
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW7",
        "waypoint": 18,
        "res": "Bradley Woods",
        "Latitude": 41.40889,
        "Longitude": -81.96269,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96269,
          41.40889
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW12",
        "waypoint": 23,
        "res": "Bradley Woods",
        "Latitude": 41.41096,
        "Longitude": -81.96239,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96239,
          41.41096
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW30",
        "waypoint": 41,
        "res": "Bradley Woods",
        "Latitude": 41.42068,
        "Longitude": -81.94357,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94357,
          41.42068
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW33",
        "waypoint": 44,
        "res": "Bradley Woods",
        "Latitude": 41.41945,
        "Longitude": -81.94361,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94361,
          41.41945
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW43",
        "waypoint": 59,
        "res": "Bradley Woods",
        "Latitude": 41.41495,
        "Longitude": -81.94369,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94369,
          41.41495
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW45",
        "waypoint": 61,
        "res": "Bradley Woods",
        "Latitude": 41.41415,
        "Longitude": -81.94373,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94373,
          41.41415
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK8",
        "waypoint": 8,
        "res": "Brecksville",
        "Latitude": 41.31783,
        "Longitude": -81.59589,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.59589,
          41.31783
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK22",
        "waypoint": 24,
        "res": "Brecksville",
        "Latitude": 41.31774,
        "Longitude": -81.60381,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60381,
          41.31774
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK23",
        "waypoint": 25,
        "res": "Brecksville",
        "Latitude": 41.31795,
        "Longitude": -81.60436,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60436,
          41.31795
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK24",
        "waypoint": 26,
        "res": "Brecksville",
        "Latitude": 41.31831,
        "Longitude": -81.6048,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.6048,
          41.31831
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK30",
        "waypoint": 32,
        "res": "Brecksville",
        "Latitude": 41.31948,
        "Longitude": -81.60818,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60818,
          41.31948
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK33",
        "waypoint": 35,
        "res": "Brecksville",
        "Latitude": 41.31963,
        "Longitude": -81.61008,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61008,
          41.31963
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK36",
        "waypoint": 38,
        "res": "Brecksville",
        "Latitude": 41.31988,
        "Longitude": -81.61191,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61191,
          41.31988
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK37",
        "waypoint": 39,
        "res": "Brecksville",
        "Latitude": 41.31987,
        "Longitude": -81.61247,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61247,
          41.31987
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK48",
        "waypoint": 50,
        "res": "Brecksville",
        "Latitude": 41.318437,
        "Longitude": -81.619341,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.619341,
          41.318437
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK50",
        "waypoint": 52,
        "res": "Brecksville",
        "Latitude": 41.31844,
        "Longitude": -81.62069,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62069,
          41.31844
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK51",
        "waypoint": 53,
        "res": "Brecksville",
        "Latitude": 41.31855,
        "Longitude": -81.62122,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62122,
          41.31855
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK52",
        "waypoint": 54,
        "res": "Brecksville",
        "Latitude": 41.31895,
        "Longitude": -81.62176,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62176,
          41.31895
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK57",
        "waypoint": 59,
        "res": "Brecksville",
        "Latitude": 41.31435,
        "Longitude": -81.6005,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.6005,
          41.31435
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK59",
        "waypoint": 61,
        "res": "Brecksville",
        "Latitude": 41.313517,
        "Longitude": -81.600919,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.600919,
          41.313517
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK60",
        "waypoint": 62,
        "res": "Brecksville",
        "Latitude": 41.31315,
        "Longitude": -81.60142,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60142,
          41.31315
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK66",
        "waypoint": 68,
        "res": "Brecksville",
        "Latitude": 41.31082,
        "Longitude": -81.60329,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60329,
          41.31082
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK68",
        "waypoint": 70,
        "res": "Brecksville",
        "Latitude": 41.30991,
        "Longitude": -81.60407,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60407,
          41.30991
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK69",
        "waypoint": 71,
        "res": "Brecksville",
        "Latitude": 41.30951,
        "Longitude": -81.60416,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60416,
          41.30951
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK70",
        "waypoint": 72,
        "res": "Brecksville",
        "Latitude": 41.3091,
        "Longitude": -81.60452,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60452,
          41.3091
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK71",
        "waypoint": 73,
        "res": "Brecksville",
        "Latitude": 41.30877,
        "Longitude": -81.60499,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60499,
          41.30877
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK77",
        "waypoint": 80,
        "res": "Brecksville",
        "Latitude": 41.306322,
        "Longitude": -81.607438,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.607438,
          41.306322
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK84",
        "waypoint": 87,
        "res": "Brecksville",
        "Latitude": 41.30379,
        "Longitude": -81.61056,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61056,
          41.30379
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK93",
        "waypoint": 97,
        "res": "Brecksville",
        "Latitude": 41.30234,
        "Longitude": -81.61606,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61606,
          41.30234
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK94",
        "waypoint": 98,
        "res": "Brecksville",
        "Latitude": 41.30211,
        "Longitude": -81.61665,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61665,
          41.30211
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK97",
        "waypoint": 101,
        "res": "Brecksville",
        "Latitude": 41.30167,
        "Longitude": -81.61839,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61839,
          41.30167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK104",
        "waypoint": 108,
        "res": "Brecksville",
        "Latitude": 41.30137,
        "Longitude": -81.62287,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62287,
          41.30137
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK119",
        "waypoint": 124,
        "res": "Brecksville",
        "Latitude": 41.30806,
        "Longitude": -81.60471,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60471,
          41.30806
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK123",
        "waypoint": 128,
        "res": "Brecksville",
        "Latitude": 41.358249,
        "Longitude": -81.566262,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.566262,
          41.358249
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS18",
        "waypoint": 9,
        "res": "Mill Stream Run",
        "Latitude": 41.31829,
        "Longitude": -81.80529,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80529,
          41.31829
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS31",
        "waypoint": 23,
        "res": "Mill Stream Run",
        "Latitude": 41.31783,
        "Longitude": -81.8007,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8007,
          41.31783
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS39",
        "waypoint": 41,
        "res": "Mill Stream Run",
        "Latitude": 41.31209,
        "Longitude": -81.79549,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79549,
          41.31209
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS41",
        "waypoint": 43,
        "res": "Mill Stream Run",
        "Latitude": 41.3116,
        "Longitude": -81.79446,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79446,
          41.3116
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS46",
        "waypoint": 48,
        "res": "Mill Stream Run",
        "Latitude": 41.3114,
        "Longitude": -81.79186,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79186,
          41.3114
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS61",
        "waypoint": 38,
        "res": "Mill Stream Run",
        "Latitude": 41.313588,
        "Longitude": -81.796284,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.796284,
          41.313588
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS92",
        "waypoint": 93,
        "res": "Mill Stream Run",
        "Latitude": 41.302559,
        "Longitude": -81.771867,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.771867,
          41.302559
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS93",
        "waypoint": 94,
        "res": "Mill Stream Run",
        "Latitude": 41.302401,
        "Longitude": -81.771331,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.771331,
          41.302401
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS94",
        "waypoint": 95,
        "res": "Mill Stream Run",
        "Latitude": 41.302324,
        "Longitude": -81.7707,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.7707,
          41.302324
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR8",
        "waypoint": 8,
        "res": "Mill Stream Run",
        "Latitude": 41.36198,
        "Longitude": -81.8566,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8566,
          41.36198
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR20",
        "waypoint": 20,
        "res": "Mill Stream Run",
        "Latitude": 41.357772,
        "Longitude": -81.856868,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.856868,
          41.357772
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR25",
        "waypoint": 25,
        "res": "Mill Stream Run",
        "Latitude": 41.356021,
        "Longitude": -81.856522,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.856522,
          41.356021
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR26",
        "waypoint": 26,
        "res": "Mill Stream Run",
        "Latitude": 41.35575,
        "Longitude": -81.85619,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85619,
          41.35575
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR45",
        "waypoint": 45,
        "res": "Mill Stream Run",
        "Latitude": 41.35164,
        "Longitude": -81.84743,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84743,
          41.35164
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR51",
        "waypoint": 51,
        "res": "Mill Stream Run",
        "Latitude": 41.35077,
        "Longitude": -81.8447,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8447,
          41.35077
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR60",
        "waypoint": 60,
        "res": "Mill Stream Run",
        "Latitude": 41.34453,
        "Longitude": -81.83458,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83458,
          41.34453
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR73",
        "waypoint": 73,
        "res": "Mill Stream Run",
        "Latitude": 41.34661,
        "Longitude": -81.83974,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83974,
          41.34661
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR74",
        "waypoint": 74,
        "res": "Mill Stream Run",
        "Latitude": 41.346576,
        "Longitude": -81.840391,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.840391,
          41.346576
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR88",
        "waypoint": 88,
        "res": "Mill Stream Run",
        "Latitude": 41.34114,
        "Longitude": -81.83633,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83633,
          41.34114
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR93",
        "waypoint": 93,
        "res": "Mill Stream Run",
        "Latitude": 41.33918,
        "Longitude": -81.83571,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83571,
          41.33918
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR97",
        "waypoint": 97,
        "res": "Mill Stream Run",
        "Latitude": 41.33762,
        "Longitude": -81.8348,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8348,
          41.33762
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR98",
        "waypoint": 98,
        "res": "Mill Stream Run",
        "Latitude": 41.33734,
        "Longitude": -81.83459,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83459,
          41.33734
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR110",
        "waypoint": 110,
        "res": "Mill Stream Run",
        "Latitude": 41.3341,
        "Longitude": -81.83251,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83251,
          41.3341
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR114",
        "waypoint": 114,
        "res": "Mill Stream Run",
        "Latitude": 41.33258,
        "Longitude": -81.83335,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83335,
          41.33258
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR115",
        "waypoint": 115,
        "res": "Mill Stream Run",
        "Latitude": 41.3322,
        "Longitude": -81.83362,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83362,
          41.3322
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR118",
        "waypoint": 118,
        "res": "Mill Stream Run",
        "Latitude": 41.33213,
        "Longitude": -81.83192,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83192,
          41.33213
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR121",
        "waypoint": 121,
        "res": "Mill Stream Run",
        "Latitude": 41.33429,
        "Longitude": -81.83104,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83104,
          41.33429
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR122",
        "waypoint": 122,
        "res": "Mill Stream Run",
        "Latitude": 41.33392,
        "Longitude": -81.83107,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83107,
          41.33392
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR138",
        "waypoint": 138,
        "res": "Mill Stream Run",
        "Latitude": 41.33088,
        "Longitude": -81.82652,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82652,
          41.33088
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR140",
        "waypoint": 140,
        "res": "Mill Stream Run",
        "Latitude": 41.33091,
        "Longitude": -81.82548,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82548,
          41.33091
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR152",
        "waypoint": 152,
        "res": "Mill Stream Run",
        "Latitude": 41.32975,
        "Longitude": -81.8194,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8194,
          41.32975
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR163",
        "waypoint": 163,
        "res": "Mill Stream Run",
        "Latitude": 41.325759,
        "Longitude": -81.817757,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.817757,
          41.325759
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR164",
        "waypoint": 164,
        "res": "Mill Stream Run",
        "Latitude": 41.32542,
        "Longitude": -81.81801,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81801,
          41.32542
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR165",
        "waypoint": 165,
        "res": "Mill Stream Run",
        "Latitude": 41.325,
        "Longitude": -81.81777,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81777,
          41.325
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR166",
        "waypoint": 166,
        "res": "Mill Stream Run",
        "Latitude": 41.32462,
        "Longitude": -81.8173,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8173,
          41.32462
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR172",
        "waypoint": 172,
        "res": "Mill Stream Run",
        "Latitude": 41.32429,
        "Longitude": -81.81395,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81395,
          41.32429
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR193",
        "waypoint": 193,
        "res": "Mill Stream Run",
        "Latitude": 41.31989,
        "Longitude": -81.80682,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80682,
          41.31989
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR195",
        "waypoint": 195,
        "res": "Mill Stream Run",
        "Latitude": 41.319323,
        "Longitude": -81.806962,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.806962,
          41.319323
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR196",
        "waypoint": 196,
        "res": "Mill Stream Run",
        "Latitude": 41.318843,
        "Longitude": -81.807317,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.807317,
          41.318843
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR211",
        "waypoint": 211,
        "res": "Mill Stream Run",
        "Latitude": 41.36962,
        "Longitude": -81.85596,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85596,
          41.36962
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR213",
        "waypoint": 213,
        "res": "Mill Stream Run",
        "Latitude": 41.36891,
        "Longitude": -81.85519,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85519,
          41.36891
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR221",
        "waypoint": 221,
        "res": "Mill Stream Run",
        "Latitude": 41.365993,
        "Longitude": -81.856984,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.856984,
          41.365993
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR224",
        "waypoint": 224,
        "res": "Mill Stream Run",
        "Latitude": 41.36517,
        "Longitude": -81.85682,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85682,
          41.36517
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC1",
        "waypoint": 1,
        "res": "North Chagrin",
        "Latitude": 41.55987,
        "Longitude": -81.43188,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43188,
          41.55987
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC2",
        "waypoint": 2,
        "res": "North Chagrin",
        "Latitude": 41.559864,
        "Longitude": -81.432333,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.432333,
          41.559864
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC39",
        "waypoint": 39,
        "res": "North Chagrin",
        "Latitude": 41.58538,
        "Longitude": -81.42832,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42832,
          41.58538
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC41",
        "waypoint": 41,
        "res": "North Chagrin",
        "Latitude": 41.5863,
        "Longitude": -81.42818,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42818,
          41.5863
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC44",
        "waypoint": 44,
        "res": "North Chagrin",
        "Latitude": 41.587827,
        "Longitude": -81.428796,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.428796,
          41.587827
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC45",
        "waypoint": 45,
        "res": "North Chagrin",
        "Latitude": 41.583424,
        "Longitude": -81.428608,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.428608,
          41.583424
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC69",
        "waypoint": 69,
        "res": "North Chagrin",
        "Latitude": 41.57732,
        "Longitude": -81.43489,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43489,
          41.57732
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC78",
        "waypoint": 78,
        "res": "North Chagrin",
        "Latitude": 41.56966,
        "Longitude": -81.43401,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43401,
          41.56966
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC79",
        "waypoint": 79,
        "res": "North Chagrin",
        "Latitude": 41.56909,
        "Longitude": -81.43445,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43445,
          41.56909
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC82",
        "waypoint": 82,
        "res": "North Chagrin",
        "Latitude": 41.568,
        "Longitude": -81.43562,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43562,
          41.568
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC89",
        "waypoint": 89,
        "res": "North Chagrin",
        "Latitude": 41.56305,
        "Longitude": -81.43322,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43322,
          41.56305
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC91",
        "waypoint": 91,
        "res": "North Chagrin",
        "Latitude": 41.56017,
        "Longitude": -81.431535,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.431535,
          41.56017
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC94",
        "waypoint": 94,
        "res": "North Chagrin",
        "Latitude": 41.56417,
        "Longitude": -81.437135,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.437135,
          41.56417
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC101",
        "waypoint": 101,
        "res": "North Chagrin",
        "Latitude": 41.55821,
        "Longitude": -81.42875,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42875,
          41.55821
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC114",
        "waypoint": 114,
        "res": "North Chagrin",
        "Latitude": 41.553177,
        "Longitude": -81.420833,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.420833,
          41.553177
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR3",
        "waypoint": 19,
        "res": "Rocky River",
        "Latitude": 41.37455,
        "Longitude": -81.8634,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8634,
          41.37455
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR15",
        "waypoint": 31,
        "res": "Rocky River",
        "Latitude": 41.37974,
        "Longitude": -81.86591,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86591,
          41.37974
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR29",
        "waypoint": 46,
        "res": "Rocky River",
        "Latitude": 41.38535,
        "Longitude": -81.86613,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86613,
          41.38535
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR34",
        "waypoint": 51,
        "res": "Rocky River",
        "Latitude": 41.3866,
        "Longitude": -81.86841,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86841,
          41.3866
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR38",
        "waypoint": 55,
        "res": "Rocky River",
        "Latitude": 41.38754,
        "Longitude": -81.8702,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8702,
          41.38754
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR57",
        "waypoint": 75,
        "res": "Rocky River",
        "Latitude": 41.389978,
        "Longitude": -81.875747,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.875747,
          41.389978
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR63",
        "waypoint": 82,
        "res": "Rocky River",
        "Latitude": 41.3921,
        "Longitude": -81.8782,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8782,
          41.3921
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR78",
        "waypoint": 97,
        "res": "Rocky River",
        "Latitude": 41.3962,
        "Longitude": -81.8831,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8831,
          41.3962
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR92",
        "waypoint": 112,
        "res": "Rocky River",
        "Latitude": 41.40121,
        "Longitude": -81.88461,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88461,
          41.40121
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR109",
        "waypoint": 137,
        "res": "Rocky River",
        "Latitude": 41.40808,
        "Longitude": -81.88538,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88538,
          41.40808
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR110",
        "waypoint": 138,
        "res": "Rocky River",
        "Latitude": 41.40807,
        "Longitude": -81.88486,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88486,
          41.40807
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR112",
        "waypoint": 140,
        "res": "Rocky River",
        "Latitude": 41.40782,
        "Longitude": -81.88379,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88379,
          41.40782
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR117",
        "waypoint": 145,
        "res": "Rocky River",
        "Latitude": 41.408263,
        "Longitude": -81.88165,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88165,
          41.408263
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR133",
        "waypoint": 161,
        "res": "Rocky River",
        "Latitude": 41.41393,
        "Longitude": -81.87739,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87739,
          41.41393
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR145",
        "waypoint": 174,
        "res": "Rocky River",
        "Latitude": 41.417817,
        "Longitude": -81.873548,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.873548,
          41.417817
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR157",
        "waypoint": 187,
        "res": "Rocky River",
        "Latitude": 41.41965,
        "Longitude": -81.86749,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86749,
          41.41965
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR159",
        "waypoint": 189,
        "res": "Rocky River",
        "Latitude": 41.4194,
        "Longitude": -81.86617,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86617,
          41.4194
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR165",
        "waypoint": 196,
        "res": "Rocky River",
        "Latitude": 41.418857,
        "Longitude": -81.862923,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.862923,
          41.418857
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR169",
        "waypoint": 200,
        "res": "Rocky River",
        "Latitude": 41.41951,
        "Longitude": -81.86118,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86118,
          41.41951
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR171",
        "waypoint": 202,
        "res": "Rocky River",
        "Latitude": 41.419911,
        "Longitude": -81.860182,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.860182,
          41.419911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR172",
        "waypoint": 203,
        "res": "Rocky River",
        "Latitude": 41.42014,
        "Longitude": -81.85972,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85972,
          41.42014
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR175",
        "waypoint": 206,
        "res": "Rocky River",
        "Latitude": 41.42091,
        "Longitude": -81.858668,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.858668,
          41.42091
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR185",
        "waypoint": 217,
        "res": "Rocky River",
        "Latitude": 41.424322,
        "Longitude": -81.856321,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.856321,
          41.424322
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR192",
        "waypoint": 225,
        "res": "Rocky River",
        "Latitude": 41.42727,
        "Longitude": -81.85573,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85573,
          41.42727
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR196",
        "waypoint": 229,
        "res": "Rocky River",
        "Latitude": 41.42891,
        "Longitude": -81.85508,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85508,
          41.42891
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR203",
        "waypoint": 236,
        "res": "Rocky River",
        "Latitude": 41.431008,
        "Longitude": -81.851581,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.851581,
          41.431008
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR215",
        "waypoint": 249,
        "res": "Rocky River",
        "Latitude": 41.43469,
        "Longitude": -81.84662,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84662,
          41.43469
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR224",
        "waypoint": 259,
        "res": "Rocky River",
        "Latitude": 41.43826,
        "Longitude": -81.84557,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84557,
          41.43826
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR228",
        "waypoint": 263,
        "res": "Rocky River",
        "Latitude": 41.44006,
        "Longitude": -81.84536,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84536,
          41.44006
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR229",
        "waypoint": 264,
        "res": "Rocky River",
        "Latitude": 41.44054,
        "Longitude": -81.84527,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84527,
          41.44054
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR231",
        "waypoint": 266,
        "res": "Rocky River",
        "Latitude": 41.44139,
        "Longitude": -81.84498,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84498,
          41.44139
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR232",
        "waypoint": 267,
        "res": "Rocky River",
        "Latitude": 41.44178,
        "Longitude": -81.84484,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84484,
          41.44178
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR235",
        "waypoint": 270,
        "res": "Rocky River",
        "Latitude": 41.44279,
        "Longitude": -81.84383,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84383,
          41.44279
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR238",
        "waypoint": 273,
        "res": "Rocky River",
        "Latitude": 41.443,
        "Longitude": -81.84209,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84209,
          41.443
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR242",
        "waypoint": 277,
        "res": "Rocky River",
        "Latitude": 41.44324,
        "Longitude": -81.8397,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8397,
          41.44324
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR247",
        "waypoint": 282,
        "res": "Rocky River",
        "Latitude": 41.44532,
        "Longitude": -81.84003,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84003,
          41.44532
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR255",
        "waypoint": 291,
        "res": "Rocky River",
        "Latitude": 41.44809,
        "Longitude": -81.83862,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83862,
          41.44809
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR257",
        "waypoint": 293,
        "res": "Rocky River",
        "Latitude": 41.44832,
        "Longitude": -81.83747,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83747,
          41.44832
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR263",
        "waypoint": 299,
        "res": "Rocky River",
        "Latitude": 41.448724,
        "Longitude": -81.833352,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.833352,
          41.448724
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR294",
        "waypoint": 476,
        "res": "Rocky River",
        "Latitude": 41.47942,
        "Longitude": -81.83026,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83026,
          41.47942
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR301",
        "waypoint": 483,
        "res": "Rocky River",
        "Latitude": 41.47863,
        "Longitude": -81.83305,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83305,
          41.47863
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR306",
        "waypoint": 488,
        "res": "Rocky River",
        "Latitude": 41.47747,
        "Longitude": -81.83061,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83061,
          41.47747
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR318",
        "waypoint": 440,
        "res": "Rocky River",
        "Latitude": 41.46901,
        "Longitude": -81.82671,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82671,
          41.46901
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR340",
        "waypoint": 462,
        "res": "Rocky River",
        "Latitude": 41.477561,
        "Longitude": -81.827344,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.827344,
          41.477561
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR345",
        "waypoint": 467,
        "res": "Rocky River",
        "Latitude": 41.47954,
        "Longitude": -81.82977,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82977,
          41.47954
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR346",
        "waypoint": 468,
        "res": "Rocky River",
        "Latitude": 41.480054,
        "Longitude": -81.829961,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.829961,
          41.480054
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR356",
        "waypoint": 422,
        "res": "Rocky River",
        "Latitude": 41.46666,
        "Longitude": -81.83478,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83478,
          41.46666
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR358",
        "waypoint": 424,
        "res": "Rocky River",
        "Latitude": 41.46752,
        "Longitude": -81.83545,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83545,
          41.46752
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR361",
        "waypoint": 427,
        "res": "Rocky River",
        "Latitude": 41.46897,
        "Longitude": -81.83516,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83516,
          41.46897
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR367",
        "waypoint": 347,
        "res": "Rocky River",
        "Latitude": 41.4612,
        "Longitude": -81.82206,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82206,
          41.4612
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR383",
        "waypoint": 363,
        "res": "Rocky River",
        "Latitude": 41.46357,
        "Longitude": -81.81731,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81731,
          41.46357
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR402",
        "waypoint": 382,
        "res": "Rocky River",
        "Latitude": 41.466683,
        "Longitude": -81.821658,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.821658,
          41.466683
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR405",
        "waypoint": 385,
        "res": "Rocky River",
        "Latitude": 41.46611,
        "Longitude": -81.823274,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.823274,
          41.46611
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR419",
        "waypoint": 399,
        "res": "Rocky River",
        "Latitude": 41.46558,
        "Longitude": -81.832141,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.832141,
          41.46558
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR426",
        "waypoint": 406,
        "res": "Rocky River",
        "Latitude": 41.4686,
        "Longitude": -81.83316,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83316,
          41.4686
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR427",
        "waypoint": 407,
        "res": "Rocky River",
        "Latitude": 41.46905,
        "Longitude": -81.83277,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83277,
          41.46905
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR431",
        "waypoint": 411,
        "res": "Rocky River",
        "Latitude": 41.47033,
        "Longitude": -81.830771,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.830771,
          41.47033
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR449",
        "waypoint": 343,
        "res": "Rocky River",
        "Latitude": 41.460222,
        "Longitude": -81.822096,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.822096,
          41.460222
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR450",
        "waypoint": 344,
        "res": "Rocky River",
        "Latitude": 41.460531,
        "Longitude": -81.821634,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.821634,
          41.460531
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC17",
        "waypoint": 17,
        "res": "South Chagrin",
        "Latitude": 41.416788,
        "Longitude": -81.422311,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.422311,
          41.416788
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC26",
        "waypoint": 26,
        "res": "South Chagrin",
        "Latitude": 41.4165,
        "Longitude": -81.41824,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41824,
          41.4165
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC30",
        "waypoint": 30,
        "res": "South Chagrin",
        "Latitude": 41.417079,
        "Longitude": -81.416483,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.416483,
          41.417079
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC38",
        "waypoint": 38,
        "res": "South Chagrin",
        "Latitude": 41.419154,
        "Longitude": -81.413698,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.413698,
          41.419154
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC63",
        "waypoint": 63,
        "res": "South Chagrin",
        "Latitude": 41.41532,
        "Longitude": -81.42336,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42336,
          41.41532
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC69",
        "waypoint": 69,
        "res": "South Chagrin",
        "Latitude": 41.41521,
        "Longitude": -81.42664,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42664,
          41.41521
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC70",
        "waypoint": 70,
        "res": "South Chagrin",
        "Latitude": 41.415312,
        "Longitude": -81.427384,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.427384,
          41.415312
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC80",
        "waypoint": 80,
        "res": "South Chagrin",
        "Latitude": 41.41509,
        "Longitude": -81.43142,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43142,
          41.41509
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC81",
        "waypoint": 81,
        "res": "South Chagrin",
        "Latitude": 41.414911,
        "Longitude": -81.431719,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.431719,
          41.414911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC84",
        "waypoint": 84,
        "res": "South Chagrin",
        "Latitude": 41.414385,
        "Longitude": -81.433409,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.433409,
          41.414385
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC87",
        "waypoint": 87,
        "res": "South Chagrin",
        "Latitude": 41.41431,
        "Longitude": -81.435014,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.435014,
          41.41431
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC98",
        "waypoint": 98,
        "res": "South Chagrin",
        "Latitude": 41.41471,
        "Longitude": -81.44152,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.44152,
          41.41471
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC109",
        "waypoint": 109,
        "res": "South Chagrin",
        "Latitude": 41.41479,
        "Longitude": -81.44819,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.44819,
          41.41479
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC137",
        "waypoint": 137,
        "res": "South Chagrin",
        "Latitude": 41.413309,
        "Longitude": -81.463573,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.463573,
          41.413309
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC148",
        "waypoint": 148,
        "res": "South Chagrin",
        "Latitude": 41.414009,
        "Longitude": -81.469871,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.469871,
          41.414009
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC150",
        "waypoint": 150,
        "res": "South Chagrin",
        "Latitude": 41.41381,
        "Longitude": -81.47102,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47102,
          41.41381
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC158",
        "waypoint": 158,
        "res": "South Chagrin",
        "Latitude": 41.41081,
        "Longitude": -81.47285,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47285,
          41.41081
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC164",
        "waypoint": 164,
        "res": "South Chagrin",
        "Latitude": 41.40836,
        "Longitude": -81.4729,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4729,
          41.40836
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC170",
        "waypoint": 170,
        "res": "South Chagrin",
        "Latitude": 41.40613,
        "Longitude": -81.47421,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47421,
          41.40613
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC173",
        "waypoint": 173,
        "res": "South Chagrin",
        "Latitude": 41.405093,
        "Longitude": -81.474902,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.474902,
          41.405093
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC220",
        "waypoint": 220,
        "res": "South Chagrin",
        "Latitude": 41.38757,
        "Longitude": -81.47971,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47971,
          41.38757
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC221",
        "waypoint": 221,
        "res": "South Chagrin",
        "Latitude": 41.38716,
        "Longitude": -81.47986,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47986,
          41.38716
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC239",
        "waypoint": 239,
        "res": "South Chagrin",
        "Latitude": 41.38119,
        "Longitude": -81.48315,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48315,
          41.38119
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE22",
        "waypoint": 118,
        "res": "Bedford",
        "Latitude": 41.38363,
        "Longitude": -81.54493,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54493,
          41.38363
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE26",
        "waypoint": 122,
        "res": "Bedford",
        "Latitude": 41.3819,
        "Longitude": -81.54708,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54708,
          41.3819
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE29",
        "waypoint": 125,
        "res": "Bedford",
        "Latitude": 41.38058,
        "Longitude": -81.54793,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54793,
          41.38058
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE54",
        "waypoint": 152,
        "res": "Bedford",
        "Latitude": 41.37151,
        "Longitude": -81.55089,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55089,
          41.37151
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE57",
        "waypoint": 155,
        "res": "Bedford",
        "Latitude": 41.37043,
        "Longitude": -81.55207,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55207,
          41.37043
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE61",
        "waypoint": 160,
        "res": "Bedford",
        "Latitude": 41.36969,
        "Longitude": -81.55462,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55462,
          41.36969
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE63",
        "waypoint": 162,
        "res": "Bedford",
        "Latitude": 41.370887,
        "Longitude": -81.555496,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.555496,
          41.370887
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE87",
        "waypoint": 186,
        "res": "Bedford",
        "Latitude": 41.373772,
        "Longitude": -81.565073,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.565073,
          41.373772
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE114",
        "waypoint": 205,
        "res": "Bedford",
        "Latitude": 41.38431,
        "Longitude": -81.52891,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.52891,
          41.38431
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE121",
        "waypoint": 212,
        "res": "Bedford",
        "Latitude": 41.38461,
        "Longitude": -81.52424,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.52424,
          41.38461
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE131",
        "waypoint": 222,
        "res": "Bedford",
        "Latitude": 41.383801,
        "Longitude": -81.517272,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.517272,
          41.383801
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE132",
        "waypoint": 223,
        "res": "Bedford",
        "Latitude": 41.38386,
        "Longitude": -81.51672,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.51672,
          41.38386
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE133",
        "waypoint": 224,
        "res": "Bedford",
        "Latitude": 41.383854,
        "Longitude": -81.516013,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.516013,
          41.383854
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE160",
        "waypoint": 251,
        "res": "Bedford",
        "Latitude": 41.37735,
        "Longitude": -81.4954,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4954,
          41.37735
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE161",
        "waypoint": 252,
        "res": "Bedford",
        "Latitude": 41.37693,
        "Longitude": -81.4946,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4946,
          41.37693
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW11",
        "waypoint": 22,
        "res": "Bradley Woods",
        "Latitude": 41.41058,
        "Longitude": -81.96248,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96248,
          41.41058
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW19",
        "waypoint": 30,
        "res": "Bradley Woods",
        "Latitude": 41.41394,
        "Longitude": -81.96195,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96195,
          41.41394
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW22",
        "waypoint": 33,
        "res": "Bradley Woods",
        "Latitude": 41.415039,
        "Longitude": -81.961985,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.961985,
          41.415039
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW41",
        "waypoint": 57,
        "res": "Bradley Woods",
        "Latitude": 41.41584,
        "Longitude": -81.94367,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94367,
          41.41584
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW42",
        "waypoint": 58,
        "res": "Bradley Woods",
        "Latitude": 41.41541,
        "Longitude": -81.94373,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94373,
          41.41541
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK12",
        "waypoint": 12,
        "res": "Brecksville",
        "Latitude": 41.317108,
        "Longitude": -81.598115,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.598115,
          41.317108
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK20",
        "waypoint": 22,
        "res": "Brecksville",
        "Latitude": 41.31708,
        "Longitude": -81.60301,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60301,
          41.31708
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK21",
        "waypoint": 23,
        "res": "Brecksville",
        "Latitude": 41.3174,
        "Longitude": -81.60337,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60337,
          41.3174
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK31",
        "waypoint": 33,
        "res": "Brecksville",
        "Latitude": 41.31957,
        "Longitude": -81.6088,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.6088,
          41.31957
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK64",
        "waypoint": 66,
        "res": "Brecksville",
        "Latitude": 41.31139,
        "Longitude": -81.60239,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60239,
          41.31139
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK79",
        "waypoint": 82,
        "res": "Brecksville",
        "Latitude": 41.30562,
        "Longitude": -81.60828,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60828,
          41.30562
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK92",
        "waypoint": 96,
        "res": "Brecksville",
        "Latitude": 41.3026,
        "Longitude": -81.61534,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61534,
          41.3026
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK101",
        "waypoint": 105,
        "res": "Brecksville",
        "Latitude": 41.30154,
        "Longitude": -81.62096,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62096,
          41.30154
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK118",
        "waypoint": 123,
        "res": "Brecksville",
        "Latitude": 41.3078,
        "Longitude": -81.60426,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60426,
          41.3078
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK128",
        "waypoint": 133,
        "res": "Brecksville",
        "Latitude": 41.35849,
        "Longitude": -81.56364,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56364,
          41.35849
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK129",
        "waypoint": 134,
        "res": "Brecksville",
        "Latitude": 41.35889,
        "Longitude": -81.56404,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56404,
          41.35889
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK155",
        "waypoint": 115,
        "res": "Brecksville",
        "Latitude": 41.303271,
        "Longitude": -81.760105,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.760105,
          41.303271
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK162",
        "waypoint": 122,
        "res": "Brecksville",
        "Latitude": 41.303252,
        "Longitude": -81.756237,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.756237,
          41.303252
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS10",
        "waypoint": 1,
        "res": "Mill Stream Run",
        "Latitude": 41.319085,
        "Longitude": -81.807176,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.807176,
          41.319085
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS15",
        "waypoint": 6,
        "res": "Mill Stream Run",
        "Latitude": 41.31742,
        "Longitude": -81.80639,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80639,
          41.31742
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS25",
        "waypoint": 17,
        "res": "Mill Stream Run",
        "Latitude": 41.3198,
        "Longitude": -81.80238,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80238,
          41.3198
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS95",
        "waypoint": 96,
        "res": "Mill Stream Run",
        "Latitude": 41.30226,
        "Longitude": -81.77026,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77026,
          41.30226
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR10",
        "waypoint": 10,
        "res": "Mill Stream Run",
        "Latitude": 41.36129,
        "Longitude": -81.8572,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8572,
          41.36129
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR18",
        "waypoint": 18,
        "res": "Mill Stream Run",
        "Latitude": 41.35855,
        "Longitude": -81.85725,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85725,
          41.35855
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR21",
        "waypoint": 21,
        "res": "Mill Stream Run",
        "Latitude": 41.357361,
        "Longitude": -81.856799,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.856799,
          41.357361
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR39",
        "waypoint": 39,
        "res": "Mill Stream Run",
        "Latitude": 41.35268,
        "Longitude": -81.8505,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8505,
          41.35268
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR62",
        "waypoint": 62,
        "res": "Mill Stream Run",
        "Latitude": 41.3453,
        "Longitude": -81.83459,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83459,
          41.3453
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR77",
        "waypoint": 77,
        "res": "Mill Stream Run",
        "Latitude": 41.34657,
        "Longitude": -81.84196,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84196,
          41.34657
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR78",
        "waypoint": 78,
        "res": "Mill Stream Run",
        "Latitude": 41.34665,
        "Longitude": -81.84248,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84248,
          41.34665
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR87",
        "waypoint": 87,
        "res": "Mill Stream Run",
        "Latitude": 41.341534,
        "Longitude": -81.836428,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.836428,
          41.341534
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR129",
        "waypoint": 129,
        "res": "Mill Stream Run",
        "Latitude": 41.33125,
        "Longitude": -81.83025,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83025,
          41.33125
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR137",
        "waypoint": 137,
        "res": "Mill Stream Run",
        "Latitude": 41.3308,
        "Longitude": -81.82712,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82712,
          41.3308
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR145",
        "waypoint": 145,
        "res": "Mill Stream Run",
        "Latitude": 41.33091,
        "Longitude": -81.82294,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82294,
          41.33091
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR151",
        "waypoint": 151,
        "res": "Mill Stream Run",
        "Latitude": 41.329989,
        "Longitude": -81.819823,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.819823,
          41.329989
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR171",
        "waypoint": 171,
        "res": "Mill Stream Run",
        "Latitude": 41.32423,
        "Longitude": -81.81445,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81445,
          41.32423
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR173",
        "waypoint": 173,
        "res": "Mill Stream Run",
        "Latitude": 41.32431,
        "Longitude": -81.81345,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81345,
          41.32431
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR181",
        "waypoint": 181,
        "res": "Mill Stream Run",
        "Latitude": 41.32362,
        "Longitude": -81.8096,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8096,
          41.32362
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR206",
        "waypoint": 206,
        "res": "Mill Stream Run",
        "Latitude": 41.37024,
        "Longitude": -81.85844,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85844,
          41.37024
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC49",
        "waypoint": 49,
        "res": "North Chagrin",
        "Latitude": 41.581988,
        "Longitude": -81.427827,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.427827,
          41.581988
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC60",
        "waypoint": 60,
        "res": "North Chagrin",
        "Latitude": 41.578534,
        "Longitude": -81.429767,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.429767,
          41.578534
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC61",
        "waypoint": 61,
        "res": "North Chagrin",
        "Latitude": 41.57858,
        "Longitude": -81.43047,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43047,
          41.57858
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC62",
        "waypoint": 62,
        "res": "North Chagrin",
        "Latitude": 41.57833,
        "Longitude": -81.43121,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43121,
          41.57833
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC65",
        "waypoint": 65,
        "res": "North Chagrin",
        "Latitude": 41.57774,
        "Longitude": -81.43259,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43259,
          41.57774
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC75",
        "waypoint": 75,
        "res": "North Chagrin",
        "Latitude": 41.57266,
        "Longitude": -81.43365,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43365,
          41.57266
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC81",
        "waypoint": 81,
        "res": "North Chagrin",
        "Latitude": 41.56825,
        "Longitude": -81.43517,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43517,
          41.56825
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC86",
        "waypoint": 86,
        "res": "North Chagrin",
        "Latitude": 41.565135,
        "Longitude": -81.435407,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.435407,
          41.565135
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC92",
        "waypoint": 92,
        "res": "North Chagrin",
        "Latitude": 41.56465,
        "Longitude": -81.43616,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43616,
          41.56465
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC98",
        "waypoint": 98,
        "res": "North Chagrin",
        "Latitude": 41.55989,
        "Longitude": -81.429424,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.429424,
          41.55989
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC99",
        "waypoint": 99,
        "res": "North Chagrin",
        "Latitude": 41.559448,
        "Longitude": -81.428835,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.428835,
          41.559448
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC103",
        "waypoint": 103,
        "res": "North Chagrin",
        "Latitude": 41.5572,
        "Longitude": -81.42887,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42887,
          41.5572
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC111",
        "waypoint": 111,
        "res": "North Chagrin",
        "Latitude": 41.55239,
        "Longitude": -81.42438,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42438,
          41.55239
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC115",
        "waypoint": 115,
        "res": "North Chagrin",
        "Latitude": 41.55381,
        "Longitude": -81.42061,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42061,
          41.55381
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR83",
        "waypoint": 102,
        "res": "Rocky River",
        "Latitude": 41.39805,
        "Longitude": -81.88255,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88255,
          41.39805
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR108",
        "waypoint": 136,
        "res": "Rocky River",
        "Latitude": 41.40788,
        "Longitude": -81.88585,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88585,
          41.40788
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR118",
        "waypoint": 146,
        "res": "Rocky River",
        "Latitude": 41.408568,
        "Longitude": -81.881318,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.881318,
          41.408568
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR126",
        "waypoint": 154,
        "res": "Rocky River",
        "Latitude": 41.41165,
        "Longitude": -81.87984,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87984,
          41.41165
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR138",
        "waypoint": 167,
        "res": "Rocky River",
        "Latitude": 41.4153,
        "Longitude": -81.87538,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87538,
          41.4153
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR140",
        "waypoint": 169,
        "res": "Rocky River",
        "Latitude": 41.415947,
        "Longitude": -81.874659,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.874659,
          41.415947
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR142",
        "waypoint": 171,
        "res": "Rocky River",
        "Latitude": 41.4166,
        "Longitude": -81.87428,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87428,
          41.4166
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR150",
        "waypoint": 180,
        "res": "Rocky River",
        "Latitude": 41.4192,
        "Longitude": -81.871344,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.871344,
          41.4192
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR167",
        "waypoint": 198,
        "res": "Rocky River",
        "Latitude": 41.41905,
        "Longitude": -81.86198,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86198,
          41.41905
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR186",
        "waypoint": 218,
        "res": "Rocky River",
        "Latitude": 41.42474,
        "Longitude": -81.856115,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.856115,
          41.42474
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR188",
        "waypoint": 221,
        "res": "Rocky River",
        "Latitude": 41.425637,
        "Longitude": -81.855969,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.855969,
          41.425637
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR194",
        "waypoint": 227,
        "res": "Rocky River",
        "Latitude": 41.42809,
        "Longitude": -81.85545,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85545,
          41.42809
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR195",
        "waypoint": 228,
        "res": "Rocky River",
        "Latitude": 41.4286,
        "Longitude": -81.85536,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85536,
          41.4286
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR198",
        "waypoint": 231,
        "res": "Rocky River",
        "Latitude": 41.42971,
        "Longitude": -81.85462,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85462,
          41.42971
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR199",
        "waypoint": 232,
        "res": "Rocky River",
        "Latitude": 41.4301,
        "Longitude": -81.85419,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85419,
          41.4301
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR222",
        "waypoint": 256,
        "res": "Rocky River",
        "Latitude": 41.43726,
        "Longitude": -81.84552,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84552,
          41.43726
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR230",
        "waypoint": 265,
        "res": "Rocky River",
        "Latitude": 41.44093,
        "Longitude": -81.84512,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84512,
          41.44093
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR254",
        "waypoint": 290,
        "res": "Rocky River",
        "Latitude": 41.447893,
        "Longitude": -81.839037,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.839037,
          41.447893
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR258",
        "waypoint": 294,
        "res": "Rocky River",
        "Latitude": 41.44829,
        "Longitude": -81.83687,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83687,
          41.44829
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR260",
        "waypoint": 296,
        "res": "Rocky River",
        "Latitude": 41.448498,
        "Longitude": -81.835503,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.835503,
          41.448498
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR275",
        "waypoint": 311,
        "res": "Rocky River",
        "Latitude": 41.45181,
        "Longitude": -81.82942,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82942,
          41.45181
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR279",
        "waypoint": 315,
        "res": "Rocky River",
        "Latitude": 41.45074,
        "Longitude": -81.82766,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82766,
          41.45074
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR283",
        "waypoint": 320,
        "res": "Rocky River",
        "Latitude": 41.45237,
        "Longitude": -81.8271,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8271,
          41.45237
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR308",
        "waypoint": 490,
        "res": "Rocky River",
        "Latitude": 41.478033,
        "Longitude": -81.829587,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.829587,
          41.478033
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR312",
        "waypoint": 434,
        "res": "Rocky River",
        "Latitude": 41.46973,
        "Longitude": -81.83038,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83038,
          41.46973
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR329",
        "waypoint": 451,
        "res": "Rocky River",
        "Latitude": 41.473794,
        "Longitude": -81.824427,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.824427,
          41.473794
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR348",
        "waypoint": 470,
        "res": "Rocky River",
        "Latitude": 41.48106,
        "Longitude": -81.83008,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83008,
          41.48106
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR352",
        "waypoint": 418,
        "res": "Rocky River",
        "Latitude": 41.46534,
        "Longitude": -81.832837,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.832837,
          41.46534
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR353",
        "waypoint": 419,
        "res": "Rocky River",
        "Latitude": 41.465796,
        "Longitude": -81.833211,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.833211,
          41.465796
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR363",
        "waypoint": 429,
        "res": "Rocky River",
        "Latitude": 41.469509,
        "Longitude": -81.834091,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.834091,
          41.469509
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR373",
        "waypoint": 353,
        "res": "Rocky River",
        "Latitude": 41.46364,
        "Longitude": -81.822845,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.822845,
          41.46364
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR391",
        "waypoint": 371,
        "res": "Rocky River",
        "Latitude": 41.466501,
        "Longitude": -81.815555,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.815555,
          41.466501
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR404",
        "waypoint": 384,
        "res": "Rocky River",
        "Latitude": 41.4663,
        "Longitude": -81.82272,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82272,
          41.4663
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR406",
        "waypoint": 386,
        "res": "Rocky River",
        "Latitude": 41.465942,
        "Longitude": -81.823995,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.823995,
          41.465942
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR415",
        "waypoint": 395,
        "res": "Rocky River",
        "Latitude": 41.465396,
        "Longitude": -81.829739,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.829739,
          41.465396
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR430",
        "waypoint": 410,
        "res": "Rocky River",
        "Latitude": 41.470057,
        "Longitude": -81.831323,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.831323,
          41.470057
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR434",
        "waypoint": 414,
        "res": "Rocky River",
        "Latitude": 41.46998,
        "Longitude": -81.82957,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82957,
          41.46998
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC2",
        "waypoint": 2,
        "res": "South Chagrin",
        "Latitude": 41.42242,
        "Longitude": -81.41933,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41933,
          41.42242
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC9",
        "waypoint": 9,
        "res": "South Chagrin",
        "Latitude": 41.420249,
        "Longitude": -81.422197,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.422197,
          41.420249
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC11",
        "waypoint": 11,
        "res": "South Chagrin",
        "Latitude": 41.419269,
        "Longitude": -81.422204,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.422204,
          41.419269
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC13",
        "waypoint": 13,
        "res": "South Chagrin",
        "Latitude": 41.418418,
        "Longitude": -81.422542,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.422542,
          41.418418
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC20",
        "waypoint": 20,
        "res": "South Chagrin",
        "Latitude": 41.41589,
        "Longitude": -81.42172,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42172,
          41.41589
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC22",
        "waypoint": 22,
        "res": "South Chagrin",
        "Latitude": 41.41637,
        "Longitude": -81.42062,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42062,
          41.41637
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC34",
        "waypoint": 34,
        "res": "South Chagrin",
        "Latitude": 41.41761,
        "Longitude": -81.41459,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41459,
          41.41761
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC40",
        "waypoint": 40,
        "res": "South Chagrin",
        "Latitude": 41.41988,
        "Longitude": -81.41449,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41449,
          41.41988
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC47",
        "waypoint": 47,
        "res": "South Chagrin",
        "Latitude": 41.4222,
        "Longitude": -81.41673,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41673,
          41.4222
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC48",
        "waypoint": 48,
        "res": "South Chagrin",
        "Latitude": 41.42251,
        "Longitude": -81.41707,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41707,
          41.42251
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC64",
        "waypoint": 64,
        "res": "South Chagrin",
        "Latitude": 41.41523,
        "Longitude": -81.424,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.424,
          41.41523
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC68",
        "waypoint": 68,
        "res": "South Chagrin",
        "Latitude": 41.415354,
        "Longitude": -81.425992,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.425992,
          41.415354
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC71",
        "waypoint": 71,
        "res": "South Chagrin",
        "Latitude": 41.415456,
        "Longitude": -81.427833,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.427833,
          41.415456
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC73",
        "waypoint": 73,
        "res": "South Chagrin",
        "Latitude": 41.41558,
        "Longitude": -81.42887,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42887,
          41.41558
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC74",
        "waypoint": 74,
        "res": "South Chagrin",
        "Latitude": 41.415582,
        "Longitude": -81.429241,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.429241,
          41.415582
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC82",
        "waypoint": 82,
        "res": "South Chagrin",
        "Latitude": 41.41468,
        "Longitude": -81.43225,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43225,
          41.41468
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC92",
        "waypoint": 92,
        "res": "South Chagrin",
        "Latitude": 41.4144,
        "Longitude": -81.43816,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43816,
          41.4144
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC113",
        "waypoint": 113,
        "res": "South Chagrin",
        "Latitude": 41.41484,
        "Longitude": -81.45047,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.45047,
          41.41484
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC118",
        "waypoint": 118,
        "res": "South Chagrin",
        "Latitude": 41.41489,
        "Longitude": -81.45306,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.45306,
          41.41489
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC129",
        "waypoint": 129,
        "res": "South Chagrin",
        "Latitude": 41.414199,
        "Longitude": -81.459197,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.459197,
          41.414199
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC147",
        "waypoint": 147,
        "res": "South Chagrin",
        "Latitude": 41.414018,
        "Longitude": -81.469296,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.469296,
          41.414018
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC163",
        "waypoint": 163,
        "res": "South Chagrin",
        "Latitude": 41.40878,
        "Longitude": -81.47286,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47286,
          41.40878
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC204",
        "waypoint": 204,
        "res": "South Chagrin",
        "Latitude": 41.39293,
        "Longitude": -81.47586,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47586,
          41.39293
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC212",
        "waypoint": 212,
        "res": "South Chagrin",
        "Latitude": 41.38984,
        "Longitude": -81.47669,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47669,
          41.38984
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC215",
        "waypoint": 215,
        "res": "South Chagrin",
        "Latitude": 41.38893,
        "Longitude": -81.47777,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47777,
          41.38893
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC223",
        "waypoint": 223,
        "res": "South Chagrin",
        "Latitude": 41.386566,
        "Longitude": -81.479803,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.479803,
          41.386566
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC224",
        "waypoint": 224,
        "res": "South Chagrin",
        "Latitude": 41.38628,
        "Longitude": -81.479922,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.479922,
          41.38628
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC225",
        "waypoint": 225,
        "res": "South Chagrin",
        "Latitude": 41.38605,
        "Longitude": -81.48017,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48017,
          41.38605
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC226",
        "waypoint": 226,
        "res": "South Chagrin",
        "Latitude": 41.38568,
        "Longitude": -81.48031,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48031,
          41.38568
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC238",
        "waypoint": 238,
        "res": "South Chagrin",
        "Latitude": 41.38152,
        "Longitude": -81.48289,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48289,
          41.38152
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC242",
        "waypoint": 242,
        "res": "South Chagrin",
        "Latitude": 41.38013,
        "Longitude": -81.48378,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48378,
          41.38013
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC243",
        "waypoint": 243,
        "res": "South Chagrin",
        "Latitude": 41.37989,
        "Longitude": -81.48424,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48424,
          41.37989
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE7",
        "waypoint": 102,
        "res": "Bedford",
        "Latitude": 41.38307,
        "Longitude": -81.536,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.536,
          41.38307
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE8",
        "waypoint": 103,
        "res": "Bedford",
        "Latitude": 41.38265,
        "Longitude": -81.53555,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53555,
          41.38265
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE24",
        "waypoint": 120,
        "res": "Bedford",
        "Latitude": 41.3829,
        "Longitude": -81.54613,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54613,
          41.3829
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE25",
        "waypoint": 121,
        "res": "Bedford",
        "Latitude": 41.38234,
        "Longitude": -81.54675,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54675,
          41.38234
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE88",
        "waypoint": 187,
        "res": "Bedford",
        "Latitude": 41.37325,
        "Longitude": -81.5652,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5652,
          41.37325
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE99",
        "waypoint": 143,
        "res": "Bedford",
        "Latitude": 41.36249,
        "Longitude": -81.56712,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56712,
          41.36249
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE120",
        "waypoint": 211,
        "res": "Bedford",
        "Latitude": 41.38453,
        "Longitude": -81.52493,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.52493,
          41.38453
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE162",
        "waypoint": 253,
        "res": "Bedford",
        "Latitude": 41.3767,
        "Longitude": -81.49388,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49388,
          41.3767
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK27",
        "waypoint": 29,
        "res": "Brecksville",
        "Latitude": 41.31897,
        "Longitude": -81.60651,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60651,
          41.31897
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK38",
        "waypoint": 40,
        "res": "Brecksville",
        "Latitude": 41.31989,
        "Longitude": -81.61325,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61325,
          41.31989
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK39",
        "waypoint": 41,
        "res": "Brecksville",
        "Latitude": 41.31991,
        "Longitude": -81.61386,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61386,
          41.31991
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK67",
        "waypoint": 69,
        "res": "Brecksville",
        "Latitude": 41.31036,
        "Longitude": -81.60363,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60363,
          41.31036
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK82",
        "waypoint": 85,
        "res": "Brecksville",
        "Latitude": 41.30443,
        "Longitude": -81.6096,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.6096,
          41.30443
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK83",
        "waypoint": 86,
        "res": "Brecksville",
        "Latitude": 41.30411,
        "Longitude": -81.6101,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.6101,
          41.30411
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK86",
        "waypoint": 89,
        "res": "Brecksville",
        "Latitude": 41.30334,
        "Longitude": -81.61167,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61167,
          41.30334
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK99",
        "waypoint": 103,
        "res": "Brecksville",
        "Latitude": 41.30159,
        "Longitude": -81.61972,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61972,
          41.30159
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK105",
        "waypoint": 109,
        "res": "Brecksville",
        "Latitude": 41.30157,
        "Longitude": -81.62347,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62347,
          41.30157
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK124",
        "waypoint": 129,
        "res": "Brecksville",
        "Latitude": 41.358254,
        "Longitude": -81.565548,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.565548,
          41.358254
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK132",
        "waypoint": 137,
        "res": "Brecksville",
        "Latitude": 41.3601,
        "Longitude": -81.56509,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56509,
          41.3601
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK161",
        "waypoint": 121,
        "res": "Brecksville",
        "Latitude": 41.303222,
        "Longitude": -81.756725,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.756725,
          41.303222
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS1",
        "waypoint": 54,
        "res": "Mill Stream Run",
        "Latitude": 41.311151,
        "Longitude": -81.788761,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.788761,
          41.311151
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS13",
        "waypoint": 4,
        "res": "Mill Stream Run",
        "Latitude": 41.318,
        "Longitude": -81.80711,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80711,
          41.318
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS44",
        "waypoint": 46,
        "res": "Mill Stream Run",
        "Latitude": 41.31168,
        "Longitude": -81.79271,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79271,
          41.31168
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS45",
        "waypoint": 47,
        "res": "Mill Stream Run",
        "Latitude": 41.31162,
        "Longitude": -81.79224,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79224,
          41.31162
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS73",
        "waypoint": 74,
        "res": "Mill Stream Run",
        "Latitude": 41.30553,
        "Longitude": -81.78126,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78126,
          41.30553
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR46",
        "waypoint": 46,
        "res": "Mill Stream Run",
        "Latitude": 41.35163,
        "Longitude": -81.84695,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84695,
          41.35163
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR48",
        "waypoint": 48,
        "res": "Mill Stream Run",
        "Latitude": 41.35117,
        "Longitude": -81.84613,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84613,
          41.35117
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR59",
        "waypoint": 59,
        "res": "Mill Stream Run",
        "Latitude": 41.34421,
        "Longitude": -81.83461,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83461,
          41.34421
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR72",
        "waypoint": 72,
        "res": "Mill Stream Run",
        "Latitude": 41.346706,
        "Longitude": -81.839192,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.839192,
          41.346706
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR94",
        "waypoint": 94,
        "res": "Mill Stream Run",
        "Latitude": 41.3387,
        "Longitude": -81.83553,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83553,
          41.3387
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR119",
        "waypoint": 119,
        "res": "Mill Stream Run",
        "Latitude": 41.33212,
        "Longitude": -81.83142,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83142,
          41.33212
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR131",
        "waypoint": 131,
        "res": "Mill Stream Run",
        "Latitude": 41.33048,
        "Longitude": -81.83024,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83024,
          41.33048
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR143",
        "waypoint": 143,
        "res": "Mill Stream Run",
        "Latitude": 41.331,
        "Longitude": -81.82386,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82386,
          41.331
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR154",
        "waypoint": 154,
        "res": "Mill Stream Run",
        "Latitude": 41.3293,
        "Longitude": -81.81866,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81866,
          41.3293
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR178",
        "waypoint": 178,
        "res": "Mill Stream Run",
        "Latitude": 41.32396,
        "Longitude": -81.81099,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81099,
          41.32396
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR186",
        "waypoint": 186,
        "res": "Mill Stream Run",
        "Latitude": 41.32249,
        "Longitude": -81.8077,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8077,
          41.32249
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR190",
        "waypoint": 190,
        "res": "Mill Stream Run",
        "Latitude": 41.32093,
        "Longitude": -81.8074,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8074,
          41.32093
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR191",
        "waypoint": 191,
        "res": "Mill Stream Run",
        "Latitude": 41.32064,
        "Longitude": -81.80714,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80714,
          41.32064
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC35",
        "waypoint": 35,
        "res": "North Chagrin",
        "Latitude": 41.58369,
        "Longitude": -81.42879,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42879,
          41.58369
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC38",
        "waypoint": 38,
        "res": "North Chagrin",
        "Latitude": 41.58494,
        "Longitude": -81.42858,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42858,
          41.58494
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC40",
        "waypoint": 40,
        "res": "North Chagrin",
        "Latitude": 41.58588,
        "Longitude": -81.42831,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42831,
          41.58588
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC46",
        "waypoint": 46,
        "res": "North Chagrin",
        "Latitude": 41.58316,
        "Longitude": -81.4285,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4285,
          41.58316
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC47",
        "waypoint": 47,
        "res": "North Chagrin",
        "Latitude": 41.58271,
        "Longitude": -81.42831,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42831,
          41.58271
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC48",
        "waypoint": 48,
        "res": "North Chagrin",
        "Latitude": 41.58228,
        "Longitude": -81.42823,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42823,
          41.58228
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC84",
        "waypoint": 84,
        "res": "North Chagrin",
        "Latitude": 41.56656,
        "Longitude": -81.43625,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43625,
          41.56656
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC90",
        "waypoint": 90,
        "res": "North Chagrin",
        "Latitude": 41.56247,
        "Longitude": -81.43272,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43272,
          41.56247
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC93",
        "waypoint": 93,
        "res": "North Chagrin",
        "Latitude": 41.56433,
        "Longitude": -81.43664,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43664,
          41.56433
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC105",
        "waypoint": 105,
        "res": "North Chagrin",
        "Latitude": 41.55613,
        "Longitude": -81.42879,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42879,
          41.55613
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC106",
        "waypoint": 106,
        "res": "North Chagrin",
        "Latitude": 41.555628,
        "Longitude": -81.428582,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.428582,
          41.555628
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC107",
        "waypoint": 107,
        "res": "North Chagrin",
        "Latitude": 41.555275,
        "Longitude": -81.428341,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.428341,
          41.555275
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC118",
        "waypoint": 118,
        "res": "North Chagrin",
        "Latitude": 41.55122,
        "Longitude": -81.418617,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.418617,
          41.55122
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR35",
        "waypoint": 52,
        "res": "Rocky River",
        "Latitude": 41.386809,
        "Longitude": -81.869078,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.869078,
          41.386809
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR71",
        "waypoint": 90,
        "res": "Rocky River",
        "Latitude": 41.39378,
        "Longitude": -81.88184,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88184,
          41.39378
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR120",
        "waypoint": 148,
        "res": "Rocky River",
        "Latitude": 41.40933,
        "Longitude": -81.88094,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88094,
          41.40933
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR131",
        "waypoint": 159,
        "res": "Rocky River",
        "Latitude": 41.413434,
        "Longitude": -81.878148,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.878148,
          41.413434
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR143",
        "waypoint": 172,
        "res": "Rocky River",
        "Latitude": 41.41696,
        "Longitude": -81.87408,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87408,
          41.41696
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR155",
        "waypoint": 185,
        "res": "Rocky River",
        "Latitude": 41.41978,
        "Longitude": -81.868488,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.868488,
          41.41978
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR173",
        "waypoint": 204,
        "res": "Rocky River",
        "Latitude": 41.42019,
        "Longitude": -81.85927,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85927,
          41.42019
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR191",
        "waypoint": 224,
        "res": "Rocky River",
        "Latitude": 41.426861,
        "Longitude": -81.855778,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.855778,
          41.426861
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR202",
        "waypoint": 235,
        "res": "Rocky River",
        "Latitude": 41.43073,
        "Longitude": -81.85236,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85236,
          41.43073
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR212",
        "waypoint": 246,
        "res": "Rocky River",
        "Latitude": 41.43376,
        "Longitude": -81.84805,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84805,
          41.43376
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR214",
        "waypoint": 248,
        "res": "Rocky River",
        "Latitude": 41.43442,
        "Longitude": -81.8472,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8472,
          41.43442
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR220",
        "waypoint": 254,
        "res": "Rocky River",
        "Latitude": 41.43637,
        "Longitude": -81.84537,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84537,
          41.43637
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR249",
        "waypoint": 284,
        "res": "Rocky River",
        "Latitude": 41.44617,
        "Longitude": -81.84029,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84029,
          41.44617
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR270",
        "waypoint": 306,
        "res": "Rocky River",
        "Latitude": 41.451763,
        "Longitude": -81.832169,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.832169,
          41.451763
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR271",
        "waypoint": 307,
        "res": "Rocky River",
        "Latitude": 41.45202,
        "Longitude": -81.83171,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83171,
          41.45202
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR323",
        "waypoint": 445,
        "res": "Rocky River",
        "Latitude": 41.47089,
        "Longitude": -81.82477,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82477,
          41.47089
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR370",
        "waypoint": 350,
        "res": "Rocky River",
        "Latitude": 41.46237,
        "Longitude": -81.82322,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82322,
          41.46237
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR432",
        "waypoint": 412,
        "res": "Rocky River",
        "Latitude": 41.47042,
        "Longitude": -81.8301,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8301,
          41.47042
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR447",
        "waypoint": 341,
        "res": "Rocky River",
        "Latitude": 41.45938,
        "Longitude": -81.82321,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82321,
          41.45938
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR448",
        "waypoint": 342,
        "res": "Rocky River",
        "Latitude": 41.459774,
        "Longitude": -81.822664,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.822664,
          41.459774
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC12",
        "waypoint": 12,
        "res": "South Chagrin",
        "Latitude": 41.41886,
        "Longitude": -81.42245,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42245,
          41.41886
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC14",
        "waypoint": 14,
        "res": "South Chagrin",
        "Latitude": 41.41807,
        "Longitude": -81.4227,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4227,
          41.41807
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC18",
        "waypoint": 18,
        "res": "South Chagrin",
        "Latitude": 41.416355,
        "Longitude": -81.422338,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.422338,
          41.416355
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC19",
        "waypoint": 19,
        "res": "South Chagrin",
        "Latitude": 41.41562,
        "Longitude": -81.42224,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42224,
          41.41562
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC23",
        "waypoint": 23,
        "res": "South Chagrin",
        "Latitude": 41.4164,
        "Longitude": -81.42028,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42028,
          41.4164
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC32",
        "waypoint": 32,
        "res": "South Chagrin",
        "Latitude": 41.417324,
        "Longitude": -81.41562,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41562,
          41.417324
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC37",
        "waypoint": 37,
        "res": "South Chagrin",
        "Latitude": 41.41867,
        "Longitude": -81.41373,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41373,
          41.41867
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC51",
        "waypoint": 51,
        "res": "South Chagrin",
        "Latitude": 41.42284,
        "Longitude": -81.41821,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41821,
          41.42284
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC72",
        "waypoint": 72,
        "res": "South Chagrin",
        "Latitude": 41.415557,
        "Longitude": -81.428305,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.428305,
          41.415557
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC76",
        "waypoint": 76,
        "res": "South Chagrin",
        "Latitude": 41.415414,
        "Longitude": -81.429859,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.429859,
          41.415414
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC89",
        "waypoint": 89,
        "res": "South Chagrin",
        "Latitude": 41.41441,
        "Longitude": -81.436135,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.436135,
          41.41441
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC99",
        "waypoint": 99,
        "res": "South Chagrin",
        "Latitude": 41.41467,
        "Longitude": -81.44254,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.44254,
          41.41467
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC132",
        "waypoint": 132,
        "res": "South Chagrin",
        "Latitude": 41.41374,
        "Longitude": -81.46102,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.46102,
          41.41374
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC133",
        "waypoint": 133,
        "res": "South Chagrin",
        "Latitude": 41.413662,
        "Longitude": -81.461542,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.461542,
          41.413662
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC156",
        "waypoint": 156,
        "res": "South Chagrin",
        "Latitude": 41.41171,
        "Longitude": -81.47281,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47281,
          41.41171
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC165",
        "waypoint": 165,
        "res": "South Chagrin",
        "Latitude": 41.40795,
        "Longitude": -81.473,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.473,
          41.40795
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC166",
        "waypoint": 166,
        "res": "South Chagrin",
        "Latitude": 41.40757,
        "Longitude": -81.47317,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47317,
          41.40757
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC177",
        "waypoint": 177,
        "res": "South Chagrin",
        "Latitude": 41.4037,
        "Longitude": -81.47595,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47595,
          41.4037
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC181",
        "waypoint": 181,
        "res": "South Chagrin",
        "Latitude": 41.4021,
        "Longitude": -81.47685,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47685,
          41.4021
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC219",
        "waypoint": 219,
        "res": "South Chagrin",
        "Latitude": 41.38788,
        "Longitude": -81.47937,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47937,
          41.38788
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC228",
        "waypoint": 228,
        "res": "South Chagrin",
        "Latitude": 41.38491,
        "Longitude": -81.48043,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48043,
          41.38491
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC230",
        "waypoint": 230,
        "res": "South Chagrin",
        "Latitude": 41.38418,
        "Longitude": -81.48082,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48082,
          41.38418
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC234",
        "waypoint": 234,
        "res": "South Chagrin",
        "Latitude": 41.3828,
        "Longitude": -81.48172,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48172,
          41.3828
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC245",
        "waypoint": 245,
        "res": "South Chagrin",
        "Latitude": 41.37957,
        "Longitude": -81.4852,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4852,
          41.37957
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC249",
        "waypoint": 249,
        "res": "South Chagrin",
        "Latitude": 41.37937,
        "Longitude": -81.48727,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48727,
          41.37937
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE78",
        "waypoint": 177,
        "res": "Bedford",
        "Latitude": 41.377851,
        "Longitude": -81.56115,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 4,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56115,
          41.377851
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE86",
        "waypoint": 185,
        "res": "Bedford",
        "Latitude": 41.37431,
        "Longitude": -81.56521,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56521,
          41.37431
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE97",
        "waypoint": 196,
        "res": "Bedford",
        "Latitude": 41.36785,
        "Longitude": -81.5658,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5658,
          41.36785
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE105",
        "waypoint": 149,
        "res": "Bedford",
        "Latitude": 41.36544,
        "Longitude": -81.56658,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56658,
          41.36544
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE148",
        "waypoint": 239,
        "res": "Bedford",
        "Latitude": 41.38002,
        "Longitude": -81.50375,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50375,
          41.38002
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK11",
        "waypoint": 11,
        "res": "Brecksville",
        "Latitude": 41.31746,
        "Longitude": -81.59772,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.59772,
          41.31746
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK76",
        "waypoint": 79,
        "res": "Brecksville",
        "Latitude": 41.30668,
        "Longitude": -81.60706,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60706,
          41.30668
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK89",
        "waypoint": 93,
        "res": "Brecksville",
        "Latitude": 41.302951,
        "Longitude": -81.613402,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.613402,
          41.302951
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK141",
        "waypoint": 101,
        "res": "Brecksville",
        "Latitude": 41.302609,
        "Longitude": -81.76732,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76732,
          41.302609
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS91",
        "waypoint": 92,
        "res": "Mill Stream Run",
        "Latitude": 41.30281,
        "Longitude": -81.77229,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77229,
          41.30281
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR91",
        "waypoint": 91,
        "res": "Mill Stream Run",
        "Latitude": 41.33991,
        "Longitude": -81.83587,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83587,
          41.33991
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR92",
        "waypoint": 92,
        "res": "Mill Stream Run",
        "Latitude": 41.33957,
        "Longitude": -81.835756,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.835756,
          41.33957
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR105",
        "waypoint": 105,
        "res": "Mill Stream Run",
        "Latitude": 41.3354,
        "Longitude": -81.83178,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83178,
          41.3354
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR106",
        "waypoint": 106,
        "res": "Mill Stream Run",
        "Latitude": 41.335,
        "Longitude": -81.83156,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83156,
          41.335
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR109",
        "waypoint": 109,
        "res": "Mill Stream Run",
        "Latitude": 41.33429,
        "Longitude": -81.83207,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83207,
          41.33429
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR134",
        "waypoint": 134,
        "res": "Mill Stream Run",
        "Latitude": 41.33037,
        "Longitude": -81.82855,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82855,
          41.33037
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR179",
        "waypoint": 179,
        "res": "Mill Stream Run",
        "Latitude": 41.32408,
        "Longitude": -81.81055,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81055,
          41.32408
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC57",
        "waypoint": 57,
        "res": "North Chagrin",
        "Latitude": 41.578702,
        "Longitude": -81.427725,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.427725,
          41.578702
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC58",
        "waypoint": 58,
        "res": "North Chagrin",
        "Latitude": 41.57863,
        "Longitude": -81.42863,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42863,
          41.57863
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC64",
        "waypoint": 64,
        "res": "North Chagrin",
        "Latitude": 41.577815,
        "Longitude": -81.431858,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.431858,
          41.577815
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC95",
        "waypoint": 95,
        "res": "North Chagrin",
        "Latitude": 41.56391,
        "Longitude": -81.43773,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43773,
          41.56391
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC102",
        "waypoint": 102,
        "res": "North Chagrin",
        "Latitude": 41.55769,
        "Longitude": -81.42886,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42886,
          41.55769
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC104",
        "waypoint": 104,
        "res": "North Chagrin",
        "Latitude": 41.55668,
        "Longitude": -81.42883,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42883,
          41.55668
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC110",
        "waypoint": 110,
        "res": "North Chagrin",
        "Latitude": 41.55391,
        "Longitude": -81.42522,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42522,
          41.55391
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR1",
        "waypoint": 17,
        "res": "Rocky River",
        "Latitude": 41.37363,
        "Longitude": -81.86285,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86285,
          41.37363
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR47",
        "waypoint": 65,
        "res": "Rocky River",
        "Latitude": 41.39122,
        "Longitude": -81.87122,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87122,
          41.39122
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR74",
        "waypoint": 93,
        "res": "Rocky River",
        "Latitude": 41.39408,
        "Longitude": -81.88366,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88366,
          41.39408
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR79",
        "waypoint": 98,
        "res": "Rocky River",
        "Latitude": 41.39668,
        "Longitude": -81.88297,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88297,
          41.39668
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR111",
        "waypoint": 139,
        "res": "Rocky River",
        "Latitude": 41.40794,
        "Longitude": -81.88427,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88427,
          41.40794
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR116",
        "waypoint": 144,
        "res": "Rocky River",
        "Latitude": 41.40795,
        "Longitude": -81.88203,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88203,
          41.40795
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR207",
        "waypoint": 240,
        "res": "Rocky River",
        "Latitude": 41.43239,
        "Longitude": -81.85009,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85009,
          41.43239
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR217",
        "waypoint": 251,
        "res": "Rocky River",
        "Latitude": 41.43517,
        "Longitude": -81.8457,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8457,
          41.43517
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR219",
        "waypoint": 253,
        "res": "Rocky River",
        "Latitude": 41.43594,
        "Longitude": -81.84536,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84536,
          41.43594
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR233",
        "waypoint": 268,
        "res": "Rocky River",
        "Latitude": 41.44215,
        "Longitude": -81.84454,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84454,
          41.44215
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR248",
        "waypoint": 283,
        "res": "Rocky River",
        "Latitude": 41.44579,
        "Longitude": -81.84024,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84024,
          41.44579
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR355",
        "waypoint": 421,
        "res": "Rocky River",
        "Latitude": 41.46646,
        "Longitude": -81.83427,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83427,
          41.46646
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC1",
        "waypoint": 1,
        "res": "South Chagrin",
        "Latitude": 41.42278,
        "Longitude": -81.41873,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41873,
          41.42278
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC5",
        "waypoint": 5,
        "res": "South Chagrin",
        "Latitude": 41.421677,
        "Longitude": -81.420764,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.420764,
          41.421677
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC8",
        "waypoint": 8,
        "res": "South Chagrin",
        "Latitude": 41.42075,
        "Longitude": -81.42213,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42213,
          41.42075
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC15",
        "waypoint": 15,
        "res": "South Chagrin",
        "Latitude": 41.4174,
        "Longitude": -81.42258,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 4,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42258,
          41.4174
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC28",
        "waypoint": 28,
        "res": "South Chagrin",
        "Latitude": 41.41678,
        "Longitude": -81.41721,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41721,
          41.41678
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC75",
        "waypoint": 75,
        "res": "South Chagrin",
        "Latitude": 41.415515,
        "Longitude": -81.429543,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.429543,
          41.415515
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC100",
        "waypoint": 100,
        "res": "South Chagrin",
        "Latitude": 41.41478,
        "Longitude": -81.4431,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4431,
          41.41478
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC108",
        "waypoint": 108,
        "res": "South Chagrin",
        "Latitude": 41.41475,
        "Longitude": -81.44765,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.44765,
          41.41475
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC115",
        "waypoint": 115,
        "res": "South Chagrin",
        "Latitude": 41.41487,
        "Longitude": -81.45152,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.45152,
          41.41487
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC130",
        "waypoint": 130,
        "res": "South Chagrin",
        "Latitude": 41.414116,
        "Longitude": -81.459765,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.459765,
          41.414116
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC136",
        "waypoint": 136,
        "res": "South Chagrin",
        "Latitude": 41.413374,
        "Longitude": -81.463135,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.463135,
          41.413374
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC151",
        "waypoint": 151,
        "res": "South Chagrin",
        "Latitude": 41.41362,
        "Longitude": -81.47157,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47157,
          41.41362
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC171",
        "waypoint": 171,
        "res": "South Chagrin",
        "Latitude": 41.40574,
        "Longitude": -81.47443,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47443,
          41.40574
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC174",
        "waypoint": 174,
        "res": "South Chagrin",
        "Latitude": 41.40472,
        "Longitude": -81.47534,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47534,
          41.40472
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC191",
        "waypoint": 191,
        "res": "South Chagrin",
        "Latitude": 41.39817,
        "Longitude": -81.47754,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47754,
          41.39817
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC201",
        "waypoint": 201,
        "res": "South Chagrin",
        "Latitude": 41.39407,
        "Longitude": -81.47643,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47643,
          41.39407
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC206",
        "waypoint": 206,
        "res": "South Chagrin",
        "Latitude": 41.39217,
        "Longitude": -81.47587,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47587,
          41.39217
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC209",
        "waypoint": 209,
        "res": "South Chagrin",
        "Latitude": 41.39097,
        "Longitude": -81.47603,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47603,
          41.39097
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC213",
        "waypoint": 213,
        "res": "South Chagrin",
        "Latitude": 41.38951,
        "Longitude": -81.47699,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47699,
          41.38951
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC236",
        "waypoint": 236,
        "res": "South Chagrin",
        "Latitude": 41.38211,
        "Longitude": -81.48222,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48222,
          41.38211
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC237",
        "waypoint": 237,
        "res": "South Chagrin",
        "Latitude": 41.38186,
        "Longitude": -81.48266,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48266,
          41.38186
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE108",
        "waypoint": 199,
        "res": "Bedford",
        "Latitude": 41.38207,
        "Longitude": -81.53188,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53188,
          41.38207
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE146",
        "waypoint": 237,
        "res": "Bedford",
        "Latitude": 41.38068,
        "Longitude": -81.50491,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50491,
          41.38068
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK18",
        "waypoint": 20,
        "res": "Brecksville",
        "Latitude": 41.31645,
        "Longitude": -81.60204,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60204,
          41.31645
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK19",
        "waypoint": 21,
        "res": "Brecksville",
        "Latitude": 41.31678,
        "Longitude": -81.60246,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60246,
          41.31678
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK53",
        "waypoint": 55,
        "res": "Brecksville",
        "Latitude": 41.3194,
        "Longitude": -81.62202,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62202,
          41.3194
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK80",
        "waypoint": 83,
        "res": "Brecksville",
        "Latitude": 41.305244,
        "Longitude": -81.608632,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.608632,
          41.305244
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK107",
        "waypoint": 111,
        "res": "Brecksville",
        "Latitude": 41.301576,
        "Longitude": -81.62486,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62486,
          41.301576
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK121",
        "waypoint": 126,
        "res": "Brecksville",
        "Latitude": 41.35822,
        "Longitude": -81.56761,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56761,
          41.35822
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK126",
        "waypoint": 131,
        "res": "Brecksville",
        "Latitude": 41.35838,
        "Longitude": -81.56443,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56443,
          41.35838
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK130",
        "waypoint": 135,
        "res": "Brecksville",
        "Latitude": 41.35931,
        "Longitude": -81.56432,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56432,
          41.35931
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK135",
        "waypoint": 140,
        "res": "Brecksville",
        "Latitude": 41.36126,
        "Longitude": -81.56638,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56638,
          41.36126
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS16",
        "waypoint": 7,
        "res": "Mill Stream Run",
        "Latitude": 41.31756,
        "Longitude": -81.80588,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80588,
          41.31756
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS40",
        "waypoint": 42,
        "res": "Mill Stream Run",
        "Latitude": 41.31178,
        "Longitude": -81.79507,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79507,
          41.31178
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR113",
        "waypoint": 113,
        "res": "Mill Stream Run",
        "Latitude": 41.33295,
        "Longitude": -81.83302,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83302,
          41.33295
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR116",
        "waypoint": 116,
        "res": "Mill Stream Run",
        "Latitude": 41.3322,
        "Longitude": -81.83313,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83313,
          41.3322
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR150",
        "waypoint": 150,
        "res": "Mill Stream Run",
        "Latitude": 41.330221,
        "Longitude": -81.820233,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.820233,
          41.330221
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR157",
        "waypoint": 157,
        "res": "Mill Stream Run",
        "Latitude": 41.32812,
        "Longitude": -81.81815,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81815,
          41.32812
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC100",
        "waypoint": 100,
        "res": "North Chagrin",
        "Latitude": 41.55888,
        "Longitude": -81.42866,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42866,
          41.55888
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR91",
        "waypoint": 111,
        "res": "Rocky River",
        "Latitude": 41.40073,
        "Longitude": -81.8846,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8846,
          41.40073
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR170",
        "waypoint": 201,
        "res": "Rocky River",
        "Latitude": 41.419683,
        "Longitude": -81.860627,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.860627,
          41.419683
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR187",
        "waypoint": 219,
        "res": "Rocky River",
        "Latitude": 41.425208,
        "Longitude": -81.85598,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85598,
          41.425208
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR205",
        "waypoint": 238,
        "res": "Rocky River",
        "Latitude": 41.43167,
        "Longitude": -81.85067,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85067,
          41.43167
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR239",
        "waypoint": 274,
        "res": "Rocky River",
        "Latitude": 41.44303,
        "Longitude": -81.84155,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84155,
          41.44303
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR245",
        "waypoint": 280,
        "res": "Rocky River",
        "Latitude": 41.44445,
        "Longitude": -81.83977,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83977,
          41.44445
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR403",
        "waypoint": 383,
        "res": "Rocky River",
        "Latitude": 41.46651,
        "Longitude": -81.82222,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82222,
          41.46651
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC41",
        "waypoint": 41,
        "res": "South Chagrin",
        "Latitude": 41.4201,
        "Longitude": -81.4148,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4148,
          41.4201
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC78",
        "waypoint": 78,
        "res": "South Chagrin",
        "Latitude": 41.415222,
        "Longitude": -81.430616,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.430616,
          41.415222
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC85",
        "waypoint": 85,
        "res": "South Chagrin",
        "Latitude": 41.414304,
        "Longitude": -81.433972,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.433972,
          41.414304
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC86",
        "waypoint": 86,
        "res": "South Chagrin",
        "Latitude": 41.414295,
        "Longitude": -81.434451,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.434451,
          41.414295
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC91",
        "waypoint": 91,
        "res": "South Chagrin",
        "Latitude": 41.41439,
        "Longitude": -81.437449,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.437449,
          41.41439
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC96",
        "waypoint": 96,
        "res": "South Chagrin",
        "Latitude": 41.41456,
        "Longitude": -81.44025,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.44025,
          41.41456
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC114",
        "waypoint": 114,
        "res": "South Chagrin",
        "Latitude": 41.41481,
        "Longitude": -81.451,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.451,
          41.41481
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC125",
        "waypoint": 125,
        "res": "South Chagrin",
        "Latitude": 41.41468,
        "Longitude": -81.45712,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.45712,
          41.41468
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC131",
        "waypoint": 131,
        "res": "South Chagrin",
        "Latitude": 41.413969,
        "Longitude": -81.460403,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.460403,
          41.413969
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC157",
        "waypoint": 157,
        "res": "South Chagrin",
        "Latitude": 41.4113,
        "Longitude": -81.47282,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47282,
          41.4113
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC159",
        "waypoint": 159,
        "res": "South Chagrin",
        "Latitude": 41.41044,
        "Longitude": -81.47288,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 5,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47288,
          41.41044
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC160",
        "waypoint": 160,
        "res": "South Chagrin",
        "Latitude": 41.41004,
        "Longitude": -81.47285,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47285,
          41.41004
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC168",
        "waypoint": 168,
        "res": "South Chagrin",
        "Latitude": 41.40688,
        "Longitude": -81.47371,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47371,
          41.40688
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC169",
        "waypoint": 169,
        "res": "South Chagrin",
        "Latitude": 41.40648,
        "Longitude": -81.47402,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47402,
          41.40648
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC190",
        "waypoint": 190,
        "res": "South Chagrin",
        "Latitude": 41.39845,
        "Longitude": -81.47739,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47739,
          41.39845
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC194",
        "waypoint": 194,
        "res": "South Chagrin",
        "Latitude": 41.39681,
        "Longitude": -81.47733,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47733,
          41.39681
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC195",
        "waypoint": 195,
        "res": "South Chagrin",
        "Latitude": 41.39641,
        "Longitude": -81.47736,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47736,
          41.39641
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC232",
        "waypoint": 232,
        "res": "South Chagrin",
        "Latitude": 41.38353,
        "Longitude": -81.48121,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48121,
          41.38353
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE5",
        "waypoint": 100,
        "res": "Bedford",
        "Latitude": 41.38366,
        "Longitude": -81.53712,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 6,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 6,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53712,
          41.38366
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE55",
        "waypoint": 153,
        "res": "Bedford",
        "Latitude": 41.37116,
        "Longitude": -81.55122,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 6,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55122,
          41.37116
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE79",
        "waypoint": 178,
        "res": "Bedford",
        "Latitude": 41.377749,
        "Longitude": -81.561877,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.561877,
          41.377749
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE95",
        "waypoint": 194,
        "res": "Bedford",
        "Latitude": 41.36922,
        "Longitude": -81.56606,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 5,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56606,
          41.36922
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE106",
        "waypoint": 150,
        "res": "Bedford",
        "Latitude": 41.3655,
        "Longitude": -81.56596,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56596,
          41.3655
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK157",
        "waypoint": 117,
        "res": "Brecksville",
        "Latitude": 41.30321,
        "Longitude": -81.75895,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.75895,
          41.30321
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS20",
        "waypoint": 11,
        "res": "Mill Stream Run",
        "Latitude": 41.31911,
        "Longitude": -81.80459,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80459,
          41.31911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR37",
        "waypoint": 37,
        "res": "Mill Stream Run",
        "Latitude": 41.35295,
        "Longitude": -81.85155,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85155,
          41.35295
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR41",
        "waypoint": 41,
        "res": "Mill Stream Run",
        "Latitude": 41.35231,
        "Longitude": -81.84946,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84946,
          41.35231
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR66",
        "waypoint": 66,
        "res": "Mill Stream Run",
        "Latitude": 41.346315,
        "Longitude": -81.836149,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 3,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.836149,
          41.346315
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR108",
        "waypoint": 108,
        "res": "Mill Stream Run",
        "Latitude": 41.33451,
        "Longitude": -81.8315,
        "year": 2011,
        "rul_L": 6,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8315,
          41.33451
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR123",
        "waypoint": 123,
        "res": "Mill Stream Run",
        "Latitude": 41.33353,
        "Longitude": -81.83097,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83097,
          41.33353
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR132",
        "waypoint": 132,
        "res": "Mill Stream Run",
        "Latitude": 41.33025,
        "Longitude": -81.8298,
        "year": 2011,
        "rul_L": 6,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8298,
          41.33025
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR160",
        "waypoint": 160,
        "res": "Mill Stream Run",
        "Latitude": 41.32697,
        "Longitude": -81.81816,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81816,
          41.32697
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC56",
        "waypoint": 56,
        "res": "North Chagrin",
        "Latitude": 41.57908,
        "Longitude": -81.42717,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 3,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42717,
          41.57908
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC116",
        "waypoint": 116,
        "res": "North Chagrin",
        "Latitude": 41.55373,
        "Longitude": -81.4195,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4195,
          41.55373
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC3",
        "waypoint": 3,
        "res": "South Chagrin",
        "Latitude": 41.42219,
        "Longitude": -81.41986,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 4,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41986,
          41.42219
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC16",
        "waypoint": 16,
        "res": "South Chagrin",
        "Latitude": 41.417089,
        "Longitude": -81.422455,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.422455,
          41.417089
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC29",
        "waypoint": 29,
        "res": "South Chagrin",
        "Latitude": 41.416973,
        "Longitude": -81.416818,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.416818,
          41.416973
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC36",
        "waypoint": 36,
        "res": "South Chagrin",
        "Latitude": 41.41825,
        "Longitude": -81.413794,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.413794,
          41.41825
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC45",
        "waypoint": 45,
        "res": "South Chagrin",
        "Latitude": 41.42149,
        "Longitude": -81.4162,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4162,
          41.42149
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC67",
        "waypoint": 67,
        "res": "South Chagrin",
        "Latitude": 41.415416,
        "Longitude": -81.425574,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.425574,
          41.415416
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC77",
        "waypoint": 77,
        "res": "South Chagrin",
        "Latitude": 41.415333,
        "Longitude": -81.430192,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.430192,
          41.415333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC90",
        "waypoint": 90,
        "res": "South Chagrin",
        "Latitude": 41.414449,
        "Longitude": -81.436757,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.436757,
          41.414449
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC95",
        "waypoint": 95,
        "res": "South Chagrin",
        "Latitude": 41.41446,
        "Longitude": -81.43999,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43999,
          41.41446
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC111",
        "waypoint": 111,
        "res": "South Chagrin",
        "Latitude": 41.414828,
        "Longitude": -81.449286,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.449286,
          41.414828
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC120",
        "waypoint": 120,
        "res": "South Chagrin",
        "Latitude": 41.414835,
        "Longitude": -81.454257,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.454257,
          41.414835
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC122",
        "waypoint": 122,
        "res": "South Chagrin",
        "Latitude": 41.41488,
        "Longitude": -81.45556,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 5,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 5,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.45556,
          41.41488
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC135",
        "waypoint": 135,
        "res": "South Chagrin",
        "Latitude": 41.413516,
        "Longitude": -81.462622,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.462622,
          41.413516
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC140",
        "waypoint": 140,
        "res": "South Chagrin",
        "Latitude": 41.4136,
        "Longitude": -81.46561,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.46561,
          41.4136
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC143",
        "waypoint": 143,
        "res": "South Chagrin",
        "Latitude": 41.4138,
        "Longitude": -81.46713,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 6,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.46713,
          41.4138
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC152",
        "waypoint": 152,
        "res": "South Chagrin",
        "Latitude": 41.41328,
        "Longitude": -81.47191,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 5,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47191,
          41.41328
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC178",
        "waypoint": 178,
        "res": "South Chagrin",
        "Latitude": 41.40328,
        "Longitude": -81.47619,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 5,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47619,
          41.40328
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC192",
        "waypoint": 192,
        "res": "South Chagrin",
        "Latitude": 41.39764,
        "Longitude": -81.47739,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47739,
          41.39764
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC216",
        "waypoint": 216,
        "res": "South Chagrin",
        "Latitude": 41.38856,
        "Longitude": -81.4784,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4784,
          41.38856
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC217",
        "waypoint": 217,
        "res": "South Chagrin",
        "Latitude": 41.38847,
        "Longitude": -81.47868,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47868,
          41.38847
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC233",
        "waypoint": 233,
        "res": "South Chagrin",
        "Latitude": 41.38315,
        "Longitude": -81.48158,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48158,
          41.38315
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE1",
        "waypoint": 96,
        "res": "Bedford",
        "Latitude": 41.38417,
        "Longitude": -81.53957,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53957,
          41.38417
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE157",
        "waypoint": 248,
        "res": "Bedford",
        "Latitude": 41.37854,
        "Longitude": -81.49746,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 6,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49746,
          41.37854
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK85",
        "waypoint": 88,
        "res": "Brecksville",
        "Latitude": 41.303529,
        "Longitude": -81.611054,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.611054,
          41.303529
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK103",
        "waypoint": 107,
        "res": "Brecksville",
        "Latitude": 41.30141,
        "Longitude": -81.62218,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 7,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62218,
          41.30141
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK125",
        "waypoint": 130,
        "res": "Brecksville",
        "Latitude": 41.358258,
        "Longitude": -81.564941,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.564941,
          41.358258
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS12",
        "waypoint": 3,
        "res": "Mill Stream Run",
        "Latitude": 41.31839,
        "Longitude": -81.807,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.807,
          41.31839
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS32",
        "waypoint": 24,
        "res": "Mill Stream Run",
        "Latitude": 41.31747,
        "Longitude": -81.80066,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80066,
          41.31747
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR135",
        "waypoint": 135,
        "res": "Mill Stream Run",
        "Latitude": 41.33055,
        "Longitude": -81.82805,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 5,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82805,
          41.33055
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR136",
        "waypoint": 136,
        "res": "Mill Stream Run",
        "Latitude": 41.33067,
        "Longitude": -81.82751,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 6,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82751,
          41.33067
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR142",
        "waypoint": 142,
        "res": "Mill Stream Run",
        "Latitude": 41.33105,
        "Longitude": -81.82444,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82444,
          41.33105
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR183",
        "waypoint": 183,
        "res": "Mill Stream Run",
        "Latitude": 41.32332,
        "Longitude": -81.80872,
        "year": 2011,
        "rul_L": 7,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80872,
          41.32332
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC36",
        "waypoint": 36,
        "res": "North Chagrin",
        "Latitude": 41.58408,
        "Longitude": -81.42873,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42873,
          41.58408
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR147",
        "waypoint": 176,
        "res": "Rocky River",
        "Latitude": 41.41853,
        "Longitude": -81.872868,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 3,
        "tower_tot": 2,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.872868,
          41.41853
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC31",
        "waypoint": 31,
        "res": "South Chagrin",
        "Latitude": 41.41721,
        "Longitude": -81.416072,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 4,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.416072,
          41.41721
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC35",
        "waypoint": 35,
        "res": "South Chagrin",
        "Latitude": 41.417795,
        "Longitude": -81.41427,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41427,
          41.417795
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC42",
        "waypoint": 42,
        "res": "South Chagrin",
        "Latitude": 41.420477,
        "Longitude": -81.414932,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.414932,
          41.420477
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC123",
        "waypoint": 123,
        "res": "South Chagrin",
        "Latitude": 41.41479,
        "Longitude": -81.45612,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.45612,
          41.41479
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC172",
        "waypoint": 172,
        "res": "South Chagrin",
        "Latitude": 41.40541,
        "Longitude": -81.47474,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 5,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47474,
          41.40541
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC227",
        "waypoint": 227,
        "res": "South Chagrin",
        "Latitude": 41.3853,
        "Longitude": -81.48029,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 7,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 7,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48029,
          41.3853
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC231",
        "waypoint": 231,
        "res": "South Chagrin",
        "Latitude": 41.3838,
        "Longitude": -81.48096,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48096,
          41.3838
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC235",
        "waypoint": 235,
        "res": "South Chagrin",
        "Latitude": 41.38243,
        "Longitude": -81.48193,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48193,
          41.38243
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK120",
        "waypoint": 125,
        "res": "Brecksville",
        "Latitude": 41.35823,
        "Longitude": -81.56829,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56829,
          41.35823
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK136",
        "waypoint": 141,
        "res": "Brecksville",
        "Latitude": 41.36163,
        "Longitude": -81.56686,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56686,
          41.36163
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS28",
        "waypoint": 20,
        "res": "Mill Stream Run",
        "Latitude": 41.319196,
        "Longitude": -81.801048,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.801048,
          41.319196
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS29",
        "waypoint": 21,
        "res": "Mill Stream Run",
        "Latitude": 41.31895,
        "Longitude": -81.80081,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80081,
          41.31895
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS30",
        "waypoint": 22,
        "res": "Mill Stream Run",
        "Latitude": 41.318382,
        "Longitude": -81.800693,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.800693,
          41.318382
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS33",
        "waypoint": 25,
        "res": "Mill Stream Run",
        "Latitude": 41.317061,
        "Longitude": -81.800295,
        "year": 2012,
        "rul_L": 6,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 8,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.800295,
          41.317061
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR133",
        "waypoint": 133,
        "res": "Mill Stream Run",
        "Latitude": 41.33024,
        "Longitude": -81.82912,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82912,
          41.33024
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR162",
        "waypoint": 162,
        "res": "Mill Stream Run",
        "Latitude": 41.32619,
        "Longitude": -81.81811,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 4,
        "tower_tot": 4,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81811,
          41.32619
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR185",
        "waypoint": 185,
        "res": "Mill Stream Run",
        "Latitude": 41.32279,
        "Longitude": -81.80798,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 5,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80798,
          41.32279
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC37",
        "waypoint": 37,
        "res": "North Chagrin",
        "Latitude": 41.58453,
        "Longitude": -81.4287,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4287,
          41.58453
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC96",
        "waypoint": 96,
        "res": "North Chagrin",
        "Latitude": 41.56342,
        "Longitude": -81.43816,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43816,
          41.56342
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC7",
        "waypoint": 7,
        "res": "South Chagrin",
        "Latitude": 41.42107,
        "Longitude": -81.42184,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42184,
          41.42107
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC138",
        "waypoint": 138,
        "res": "South Chagrin",
        "Latitude": 41.41333,
        "Longitude": -81.46416,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.46416,
          41.41333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC146",
        "waypoint": 146,
        "res": "South Chagrin",
        "Latitude": 41.41399,
        "Longitude": -81.46886,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 2,
        "tower_tot": 3,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.46886,
          41.41399
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC167",
        "waypoint": 167,
        "res": "South Chagrin",
        "Latitude": 41.407254,
        "Longitude": -81.47338,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47338,
          41.407254
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC175",
        "waypoint": 175,
        "res": "South Chagrin",
        "Latitude": 41.40435,
        "Longitude": -81.4756,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 5,
        "tower_tot": 2,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4756,
          41.40435
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC176",
        "waypoint": 176,
        "res": "South Chagrin",
        "Latitude": 41.40403,
        "Longitude": -81.47585,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 6,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47585,
          41.40403
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC179",
        "waypoint": 179,
        "res": "South Chagrin",
        "Latitude": 41.40289,
        "Longitude": -81.47638,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47638,
          41.40289
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC180",
        "waypoint": 180,
        "res": "South Chagrin",
        "Latitude": 41.40255,
        "Longitude": -81.47657,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 6,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 6,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47657,
          41.40255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC182",
        "waypoint": 182,
        "res": "South Chagrin",
        "Latitude": 41.40169,
        "Longitude": -81.4769,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 6,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 6,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4769,
          41.40169
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC202",
        "waypoint": 202,
        "res": "South Chagrin",
        "Latitude": 41.39371,
        "Longitude": -81.47617,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47617,
          41.39371
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC208",
        "waypoint": 208,
        "res": "South Chagrin",
        "Latitude": 41.39135,
        "Longitude": -81.4759,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4759,
          41.39135
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC218",
        "waypoint": 218,
        "res": "South Chagrin",
        "Latitude": 41.38815,
        "Longitude": -81.47909,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47909,
          41.38815
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW27",
        "waypoint": 38,
        "res": "Bradley Woods",
        "Latitude": 41.42183,
        "Longitude": -81.94345,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 6,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94345,
          41.42183
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS19",
        "waypoint": 0,
        "res": "Mill Stream Run",
        "Latitude": 41.318666,
        "Longitude": -81.805033,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 6,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.805033,
          41.318666
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS38",
        "waypoint": 40,
        "res": "Mill Stream Run",
        "Latitude": 41.312487,
        "Longitude": -81.795761,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.795761,
          41.312487
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS67",
        "waypoint": 68,
        "res": "Mill Stream Run",
        "Latitude": 41.3078,
        "Longitude": -81.78275,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78275,
          41.3078
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR176",
        "waypoint": 176,
        "res": "Mill Stream Run",
        "Latitude": 41.32443,
        "Longitude": -81.8119,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8119,
          41.32443
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR187",
        "waypoint": 187,
        "res": "Mill Stream Run",
        "Latitude": 41.32214,
        "Longitude": -81.80741,
        "year": 2011,
        "rul_L": 7,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80741,
          41.32214
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC43",
        "waypoint": 43,
        "res": "North Chagrin",
        "Latitude": 41.58726,
        "Longitude": -81.4285,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 6,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4285,
          41.58726
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC50",
        "waypoint": 50,
        "res": "North Chagrin",
        "Latitude": 41.58149,
        "Longitude": -81.42762,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 4,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 5,
        "tower_tot": 2,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42762,
          41.58149
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC4",
        "waypoint": 4,
        "res": "South Chagrin",
        "Latitude": 41.42194,
        "Longitude": -81.4203,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 7,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 7,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4203,
          41.42194
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC33",
        "waypoint": 33,
        "res": "South Chagrin",
        "Latitude": 41.417478,
        "Longitude": -81.415005,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 7,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.415005,
          41.417478
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC43",
        "waypoint": 43,
        "res": "South Chagrin",
        "Latitude": 41.420748,
        "Longitude": -81.415428,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 8,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 8,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.415428,
          41.420748
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC94",
        "waypoint": 94,
        "res": "South Chagrin",
        "Latitude": 41.4144,
        "Longitude": -81.43941,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43941,
          41.4144
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC134",
        "waypoint": 134,
        "res": "South Chagrin",
        "Latitude": 41.41362,
        "Longitude": -81.4622,
        "year": 2011,
        "rul_L": 7,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4622,
          41.41362
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC197",
        "waypoint": 197,
        "res": "South Chagrin",
        "Latitude": 41.39564,
        "Longitude": -81.47705,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47705,
          41.39564
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC205",
        "waypoint": 205,
        "res": "South Chagrin",
        "Latitude": 41.39253,
        "Longitude": -81.47577,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 6,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47577,
          41.39253
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC222",
        "waypoint": 222,
        "res": "South Chagrin",
        "Latitude": 41.38679,
        "Longitude": -81.47982,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47982,
          41.38679
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC251",
        "waypoint": 251,
        "res": "South Chagrin",
        "Latitude": 41.37942,
        "Longitude": -81.48829,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 5,
        "tower_tot": 1,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48829,
          41.37942
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE110",
        "waypoint": 201,
        "res": "Bedford",
        "Latitude": 41.38285,
        "Longitude": -81.5309,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 8,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5309,
          41.38285
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK78",
        "waypoint": 81,
        "res": "Brecksville",
        "Latitude": 41.30594,
        "Longitude": -81.60787,
        "year": 2012,
        "rul_L": 7,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 10,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60787,
          41.30594
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR161",
        "waypoint": 161,
        "res": "Mill Stream Run",
        "Latitude": 41.32659,
        "Longitude": -81.81798,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 5,
        "tower_tot": 1,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81798,
          41.32659
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR168",
        "waypoint": 168,
        "res": "Mill Stream Run",
        "Latitude": 41.32439,
        "Longitude": -81.8161,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8161,
          41.32439
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR182",
        "waypoint": 182,
        "res": "Mill Stream Run",
        "Latitude": 41.32357,
        "Longitude": -81.80914,
        "year": 2011,
        "rul_L": 9,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80914,
          41.32357
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR184",
        "waypoint": 184,
        "res": "Mill Stream Run",
        "Latitude": 41.32302,
        "Longitude": -81.80832,
        "year": 2011,
        "rul_L": 8,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 8,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80832,
          41.32302
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC102",
        "waypoint": 102,
        "res": "South Chagrin",
        "Latitude": 41.41489,
        "Longitude": -81.44402,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 7,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 7,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.44402,
          41.41489
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC104",
        "waypoint": 104,
        "res": "South Chagrin",
        "Latitude": 41.41481,
        "Longitude": -81.44537,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 8,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.44537,
          41.41481
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC107",
        "waypoint": 107,
        "res": "South Chagrin",
        "Latitude": 41.414737,
        "Longitude": -81.446976,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.446976,
          41.414737
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC112",
        "waypoint": 112,
        "res": "South Chagrin",
        "Latitude": 41.41479,
        "Longitude": -81.44987,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 6,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 7,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.44987,
          41.41479
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC117",
        "waypoint": 117,
        "res": "South Chagrin",
        "Latitude": 41.414987,
        "Longitude": -81.452615,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 5,
        "tower_tot": 2,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.452615,
          41.414987
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC139",
        "waypoint": 139,
        "res": "South Chagrin",
        "Latitude": 41.41347,
        "Longitude": -81.46509,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.46509,
          41.41347
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC193",
        "waypoint": 193,
        "res": "South Chagrin",
        "Latitude": 41.3972,
        "Longitude": -81.47738,
        "year": 2011,
        "rul_L": 7,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47738,
          41.3972
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC199",
        "waypoint": 199,
        "res": "South Chagrin",
        "Latitude": 41.39482,
        "Longitude": -81.47684,
        "year": 2011,
        "rul_L": 7,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 8,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47684,
          41.39482
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC244",
        "waypoint": 244,
        "res": "South Chagrin",
        "Latitude": 41.37973,
        "Longitude": -81.48472,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 6,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48472,
          41.37973
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC246",
        "waypoint": 246,
        "res": "South Chagrin",
        "Latitude": 41.37938,
        "Longitude": -81.48574,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 7,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 7,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48574,
          41.37938
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC250",
        "waypoint": 250,
        "res": "South Chagrin",
        "Latitude": 41.37934,
        "Longitude": -81.48784,
        "year": 2011,
        "rul_L": 6,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.48784,
          41.37934
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS66",
        "waypoint": 67,
        "res": "Mill Stream Run",
        "Latitude": 41.30811,
        "Longitude": -81.78294,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 3,
        "tower_tot": 4,
        "tot_ash": 11,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78294,
          41.30811
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR65",
        "waypoint": 65,
        "res": "Mill Stream Run",
        "Latitude": 41.346184,
        "Longitude": -81.835601,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 6,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 2,
        "tower_tot": 7,
        "tot_ash": 11,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.835601,
          41.346184
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC55",
        "waypoint": 55,
        "res": "North Chagrin",
        "Latitude": 41.57946,
        "Longitude": -81.4267,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 5,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 8,
        "tot_ash": 11,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4267,
          41.57946
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC110",
        "waypoint": 110,
        "res": "South Chagrin",
        "Latitude": 41.41484,
        "Longitude": -81.44876,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 2,
        "tower_tot": 5,
        "tot_ash": 11,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.44876,
          41.41484
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC200",
        "waypoint": 200,
        "res": "South Chagrin",
        "Latitude": 41.394463,
        "Longitude": -81.476644,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 11,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.476644,
          41.394463
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC101",
        "waypoint": 101,
        "res": "South Chagrin",
        "Latitude": 41.414873,
        "Longitude": -81.443567,
        "year": 2011,
        "rul_L": 6,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 4,
        "tower_tot": 1,
        "tot_ash": 12,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.443567,
          41.414873
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC106",
        "waypoint": 106,
        "res": "South Chagrin",
        "Latitude": 41.4148,
        "Longitude": -81.4465,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 7,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 3,
        "tower_tot": 2,
        "tot_ash": 12,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4465,
          41.4148
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC124",
        "waypoint": 124,
        "res": "South Chagrin",
        "Latitude": 41.41471,
        "Longitude": -81.45669,
        "year": 2011,
        "rul_L": 7,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 12,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.45669,
          41.41471
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC214",
        "waypoint": 214,
        "res": "South Chagrin",
        "Latitude": 41.38922,
        "Longitude": -81.47738,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 4,
        "tower_tot": 2,
        "tot_ash": 12,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47738,
          41.38922
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC241",
        "waypoint": 241,
        "res": "South Chagrin",
        "Latitude": 41.38043,
        "Longitude": -81.4835,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 6,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 6,
        "tower_tot": 1,
        "tot_ash": 12,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4835,
          41.38043
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC51",
        "waypoint": 51,
        "res": "North Chagrin",
        "Latitude": 41.5813,
        "Longitude": -81.42735,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 4,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 5,
        "tower_tot": 4,
        "tot_ash": 13,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42735,
          41.5813
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC66",
        "waypoint": 66,
        "res": "South Chagrin",
        "Latitude": 41.41546,
        "Longitude": -81.42509,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 4,
        "tower_tot": 4,
        "tot_ash": 13,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42509,
          41.41546
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC105",
        "waypoint": 105,
        "res": "South Chagrin",
        "Latitude": 41.41483,
        "Longitude": -81.44588,
        "year": 2011,
        "rul_L": 9,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 10,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 13,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.44588,
          41.41483
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC121",
        "waypoint": 121,
        "res": "South Chagrin",
        "Latitude": 41.4149,
        "Longitude": -81.45497,
        "year": 2011,
        "rul_L": 10,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 10,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 13,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.45497,
          41.4149
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC196",
        "waypoint": 196,
        "res": "South Chagrin",
        "Latitude": 41.39608,
        "Longitude": -81.47711,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 7,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 8,
        "tower_tot": 0,
        "tot_ash": 13,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47711,
          41.39608
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC210",
        "waypoint": 210,
        "res": "South Chagrin",
        "Latitude": 41.39061,
        "Longitude": -81.47619,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 7,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 7,
        "tower_tot": 0,
        "tot_ash": 13,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47619,
          41.39061
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC211",
        "waypoint": 211,
        "res": "South Chagrin",
        "Latitude": 41.39024,
        "Longitude": -81.47643,
        "year": 2011,
        "rul_L": 6,
        "rule_DMG_L": 0,
        "hug_L": 6,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 6,
        "tower_tot": 1,
        "tot_ash": 13,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47643,
          41.39024
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC52",
        "waypoint": 52,
        "res": "North Chagrin",
        "Latitude": 41.58099,
        "Longitude": -81.42686,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 8,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 1,
        "tower_tot": 8,
        "tot_ash": 14,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42686,
          41.58099
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC44",
        "waypoint": 44,
        "res": "South Chagrin",
        "Latitude": 41.42112,
        "Longitude": -81.41593,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 4,
        "tower_tot": 3,
        "tot_ash": 14,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.41593,
          41.42112
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC97",
        "waypoint": 97,
        "res": "South Chagrin",
        "Latitude": 41.414604,
        "Longitude": -81.440933,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 6,
        "tower_tot": 4,
        "tot_ash": 14,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.440933,
          41.414604
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC103",
        "waypoint": 103,
        "res": "South Chagrin",
        "Latitude": 41.41489,
        "Longitude": -81.44474,
        "year": 2011,
        "rul_L": 7,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 2,
        "tower_tot": 3,
        "tot_ash": 14,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.44474,
          41.41489
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC198",
        "waypoint": 198,
        "res": "South Chagrin",
        "Latitude": 41.39526,
        "Longitude": -81.47698,
        "year": 2011,
        "rul_L": 9,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 10,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 14,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47698,
          41.39526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC54",
        "waypoint": 54,
        "res": "North Chagrin",
        "Latitude": 41.58004,
        "Longitude": -81.42655,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 7,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 12,
        "tot_ash": 15,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42655,
          41.58004
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC116",
        "waypoint": 116,
        "res": "South Chagrin",
        "Latitude": 41.414989,
        "Longitude": -81.452068,
        "year": 2011,
        "rul_L": 8,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 8,
        "hug_tot": 6,
        "tower_tot": 1,
        "tot_ash": 15,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.452068,
          41.414989
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC145",
        "waypoint": 145,
        "res": "South Chagrin",
        "Latitude": 41.41398,
        "Longitude": -81.46827,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 6,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 6,
        "tower_tot": 5,
        "tot_ash": 15,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.46827,
          41.41398
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC53",
        "waypoint": 53,
        "res": "North Chagrin",
        "Latitude": 41.58053,
        "Longitude": -81.42645,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 6,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 6,
        "tower_tot": 5,
        "tot_ash": 16,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42645,
          41.58053
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC149",
        "waypoint": 149,
        "res": "South Chagrin",
        "Latitude": 41.41395,
        "Longitude": -81.47049,
        "year": 2011,
        "rul_L": 8,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 6,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 8,
        "hug_tot": 2,
        "tower_tot": 6,
        "tot_ash": 16,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47049,
          41.41395
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC207",
        "waypoint": 207,
        "res": "South Chagrin",
        "Latitude": 41.39175,
        "Longitude": -81.47591,
        "year": 2011,
        "rul_L": 6,
        "rule_DMG_L": 0,
        "hug_L": 9,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 9,
        "tower_tot": 0,
        "tot_ash": 16,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47591,
          41.39175
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC188",
        "waypoint": 188,
        "res": "South Chagrin",
        "Latitude": 41.39935,
        "Longitude": -81.47753,
        "year": 2011,
        "rul_L": 8,
        "rule_DMG_L": 0,
        "hug_L": 7,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 8,
        "hug_tot": 7,
        "tower_tot": 2,
        "tot_ash": 17,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47753,
          41.39935
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC189",
        "waypoint": 189,
        "res": "South Chagrin",
        "Latitude": 41.39882,
        "Longitude": -81.4775,
        "year": 2011,
        "rul_L": 11,
        "rule_DMG_L": 0,
        "hug_L": 5,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 11,
        "hug_tot": 5,
        "tower_tot": 1,
        "tot_ash": 17,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4775,
          41.39882
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR169",
        "waypoint": 169,
        "res": "Mill Stream Run",
        "Latitude": 41.32426,
        "Longitude": -81.81552,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 0,
        "hug_L": 8,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 10,
        "hug_tot": 8,
        "tower_tot": 0,
        "tot_ash": 18,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81552,
          41.32426
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC144",
        "waypoint": 144,
        "res": "South Chagrin",
        "Latitude": 41.41386,
        "Longitude": -81.46763,
        "year": 2011,
        "rul_L": 7,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 7,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 3,
        "tower_tot": 8,
        "tot_ash": 18,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.46763,
          41.41386
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR314",
        "waypoint": 436,
        "res": "Rocky River",
        "Latitude": 41.46935,
        "Longitude": -81.82923,
        "year": 2011,
        "rul_L": 8,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 13,
        "hug_tot": 0,
        "tower_tot": 6,
        "tot_ash": 19,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82923,
          41.46935
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC203",
        "waypoint": 203,
        "res": "South Chagrin",
        "Latitude": 41.39334,
        "Longitude": -81.47593,
        "year": 2011,
        "rul_L": 17,
        "rule_DMG_L": 0,
        "hug_L": 6,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 18,
        "hug_tot": 6,
        "tower_tot": 1,
        "tot_ash": 25,
        "group": 3,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47593,
          41.39334
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE19",
        "waypoint": 115,
        "res": "Bedford",
        "Latitude": 41.38379,
        "Longitude": -81.54298,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54298,
          41.38379
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE76",
        "waypoint": 175,
        "res": "Bedford",
        "Latitude": 41.37759,
        "Longitude": -81.559898,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.559898,
          41.37759
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW6",
        "waypoint": 17,
        "res": "Bradley Woods",
        "Latitude": 41.40862,
        "Longitude": -81.96275,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96275,
          41.40862
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW29",
        "waypoint": 40,
        "res": "Bradley Woods",
        "Latitude": 41.42123,
        "Longitude": -81.94359,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94359,
          41.42123
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK65",
        "waypoint": 67,
        "res": "Brecksville",
        "Latitude": 41.31112,
        "Longitude": -81.60281,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60281,
          41.31112
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR153",
        "waypoint": 153,
        "res": "Mill Stream Run",
        "Latitude": 41.32962,
        "Longitude": -81.81891,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81891,
          41.32962
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR159",
        "waypoint": 159,
        "res": "Mill Stream Run",
        "Latitude": 41.32735,
        "Longitude": -81.81816,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81816,
          41.32735
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR129",
        "waypoint": 157,
        "res": "Rocky River",
        "Latitude": 41.41272,
        "Longitude": -81.87876,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87876,
          41.41272
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE18",
        "waypoint": 114,
        "res": "Bedford",
        "Latitude": 41.38377,
        "Longitude": -81.54225,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54225,
          41.38377
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE65",
        "waypoint": 164,
        "res": "Bedford",
        "Latitude": 41.371994,
        "Longitude": -81.555527,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.555527,
          41.371994
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE83",
        "waypoint": 182,
        "res": "Bedford",
        "Latitude": 41.375944,
        "Longitude": -81.564605,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.564605,
          41.375944
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE118",
        "waypoint": 209,
        "res": "Bedford",
        "Latitude": 41.3837,
        "Longitude": -81.5263,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 1,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5263,
          41.3837
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE140",
        "waypoint": 231,
        "res": "Bedford",
        "Latitude": 41.38298,
        "Longitude": -81.51034,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 1,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.51034,
          41.38298
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE145",
        "waypoint": 236,
        "res": "Bedford",
        "Latitude": 41.38103,
        "Longitude": -81.50554,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 1,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50554,
          41.38103
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE155",
        "waypoint": 246,
        "res": "Bedford",
        "Latitude": 41.37863,
        "Longitude": -81.49886,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 1,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49886,
          41.37863
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK16",
        "waypoint": 16,
        "res": "Brecksville",
        "Latitude": 41.31598,
        "Longitude": -81.59955,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.59955,
          41.31598
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR117",
        "waypoint": 117,
        "res": "Mill Stream Run",
        "Latitude": 41.33216,
        "Longitude": -81.8325,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8325,
          41.33216
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR128",
        "waypoint": 128,
        "res": "Mill Stream Run",
        "Latitude": 41.33171,
        "Longitude": -81.83017,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83017,
          41.33171
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR188",
        "waypoint": 188,
        "res": "Mill Stream Run",
        "Latitude": 41.32172,
        "Longitude": -81.8073,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8073,
          41.32172
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE66",
        "waypoint": 165,
        "res": "Bedford",
        "Latitude": 41.372556,
        "Longitude": -81.555491,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.555491,
          41.372556
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE85",
        "waypoint": 184,
        "res": "Bedford",
        "Latitude": 41.37491,
        "Longitude": -81.56511,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56511,
          41.37491
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE143",
        "waypoint": 234,
        "res": "Bedford",
        "Latitude": 41.38182,
        "Longitude": -81.50699,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 4,
        "tow_DMG_R": 1,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50699,
          41.38182
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK15",
        "waypoint": 15,
        "res": "Brecksville",
        "Latitude": 41.315964,
        "Longitude": -81.598729,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.598729,
          41.315964
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR149",
        "waypoint": 149,
        "res": "Mill Stream Run",
        "Latitude": 41.33034,
        "Longitude": -81.82088,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82088,
          41.33034
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE12",
        "waypoint": 108,
        "res": "Bedford",
        "Latitude": 41.38072,
        "Longitude": -81.53432,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53432,
          41.38072
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE107",
        "waypoint": 198,
        "res": "Bedford",
        "Latitude": 41.38166,
        "Longitude": -81.53244,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 1,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53244,
          41.38166
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE149",
        "waypoint": 240,
        "res": "Bedford",
        "Latitude": 41.37978,
        "Longitude": -81.50314,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 1,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50314,
          41.37978
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE159",
        "waypoint": 250,
        "res": "Bedford",
        "Latitude": 41.37776,
        "Longitude": -81.49595,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 4,
        "tow_DMG_R": 1,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49595,
          41.37776
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK17",
        "waypoint": 18,
        "res": "Brecksville",
        "Latitude": 41.31624,
        "Longitude": -81.60139,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 1,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 2,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60139,
          41.31624
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK29",
        "waypoint": 31,
        "res": "Brecksville",
        "Latitude": 41.31928,
        "Longitude": -81.60764,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60764,
          41.31928
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK75",
        "waypoint": 78,
        "res": "Brecksville",
        "Latitude": 41.30702,
        "Longitude": -81.60641,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60641,
          41.30702
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK143",
        "waypoint": 103,
        "res": "Brecksville",
        "Latitude": 41.30259,
        "Longitude": -81.76624,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 1,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76624,
          41.30259
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK154",
        "waypoint": 114,
        "res": "Brecksville",
        "Latitude": 41.303255,
        "Longitude": -81.76063,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76063,
          41.303255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS17",
        "waypoint": 8,
        "res": "Mill Stream Run",
        "Latitude": 41.31783,
        "Longitude": -81.80562,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 4,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 5,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80562,
          41.31783
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS64",
        "waypoint": 65,
        "res": "Mill Stream Run",
        "Latitude": 41.30895,
        "Longitude": -81.78329,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 1,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78329,
          41.30895
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR48",
        "waypoint": 66,
        "res": "Rocky River",
        "Latitude": 41.39132,
        "Longitude": -81.87181,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87181,
          41.39132
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR75",
        "waypoint": 94,
        "res": "Rocky River",
        "Latitude": 41.39465,
        "Longitude": -81.88358,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88358,
          41.39465
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR125",
        "waypoint": 153,
        "res": "Rocky River",
        "Latitude": 41.41132,
        "Longitude": -81.88062,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88062,
          41.41132
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR213",
        "waypoint": 247,
        "res": "Rocky River",
        "Latitude": 41.43405,
        "Longitude": -81.8476,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8476,
          41.43405
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR240",
        "waypoint": 275,
        "res": "Rocky River",
        "Latitude": 41.44301,
        "Longitude": -81.841,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.841,
          41.44301
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE142",
        "waypoint": 233,
        "res": "Bedford",
        "Latitude": 41.38201,
        "Longitude": -81.50758,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 1,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50758,
          41.38201
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE154",
        "waypoint": 245,
        "res": "Bedford",
        "Latitude": 41.37871,
        "Longitude": -81.49963,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49963,
          41.37871
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE156",
        "waypoint": 247,
        "res": "Bedford",
        "Latitude": 41.37865,
        "Longitude": -81.4982,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4982,
          41.37865
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS37",
        "waypoint": 39,
        "res": "Mill Stream Run",
        "Latitude": 41.31284,
        "Longitude": -81.796251,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 1,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 4,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.796251,
          41.31284
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR38",
        "waypoint": 38,
        "res": "Mill Stream Run",
        "Latitude": 41.35288,
        "Longitude": -81.85114,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85114,
          41.35288
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR211",
        "waypoint": 245,
        "res": "Rocky River",
        "Latitude": 41.43354,
        "Longitude": -81.84859,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 1,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84859,
          41.43354
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE52",
        "waypoint": 150,
        "res": "Bedford",
        "Latitude": 41.3717,
        "Longitude": -81.5496,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 4,
        "tow_DMG_R": 1,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 7,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5496,
          41.3717
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK133",
        "waypoint": 138,
        "res": "Brecksville",
        "Latitude": 41.36046,
        "Longitude": -81.5656,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 1,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5656,
          41.36046
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS36",
        "waypoint": 28,
        "res": "Mill Stream Run",
        "Latitude": 41.31633,
        "Longitude": -81.79916,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 5,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79916,
          41.31633
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR148",
        "waypoint": 148,
        "res": "Mill Stream Run",
        "Latitude": 41.33047,
        "Longitude": -81.82128,
        "year": 2011,
        "rul_L": 6,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82128,
          41.33047
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR174",
        "waypoint": 174,
        "res": "Mill Stream Run",
        "Latitude": 41.32454,
        "Longitude": -81.81295,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 1,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81295,
          41.32454
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE13",
        "waypoint": 109,
        "res": "Bedford",
        "Latitude": 41.38018,
        "Longitude": -81.53448,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 6,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 8,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53448,
          41.38018
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE46",
        "waypoint": 143,
        "res": "Bedford",
        "Latitude": 41.37486,
        "Longitude": -81.54827,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 8,
        "tow_DMG_R": 1,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 8,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54827,
          41.37486
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK142",
        "waypoint": 102,
        "res": "Brecksville",
        "Latitude": 41.3026,
        "Longitude": -81.76681,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 8,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 8,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76681,
          41.3026
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK160",
        "waypoint": 120,
        "res": "Brecksville",
        "Latitude": 41.3032,
        "Longitude": -81.75734,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.75734,
          41.3032
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR180",
        "waypoint": 180,
        "res": "Mill Stream Run",
        "Latitude": 41.32397,
        "Longitude": -81.81007,
        "year": 2011,
        "rul_L": 8,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 8,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81007,
          41.32397
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK148",
        "waypoint": 108,
        "res": "Brecksville",
        "Latitude": 41.302394,
        "Longitude": -81.763846,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 7,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 9,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.763846,
          41.302394
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR88",
        "waypoint": 107,
        "res": "Rocky River",
        "Latitude": 41.39939,
        "Longitude": -81.88417,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 1,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 2,
        "tower_tot": 3,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88417,
          41.39939
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR124",
        "waypoint": 152,
        "res": "Rocky River",
        "Latitude": 41.411015,
        "Longitude": -81.880764,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 7,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 7,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.880764,
          41.411015
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE11",
        "waypoint": 106,
        "res": "Bedford",
        "Latitude": 41.38128,
        "Longitude": -81.53443,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 6,
        "tow_DMG_L": 1,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 8,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53443,
          41.38128
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK109",
        "waypoint": 113,
        "res": "Brecksville",
        "Latitude": 41.30141,
        "Longitude": -81.62615,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 6,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 10,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62615,
          41.30141
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK145",
        "waypoint": 105,
        "res": "Brecksville",
        "Latitude": 41.30256,
        "Longitude": -81.7652,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 8,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 10,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.7652,
          41.30256
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR2",
        "waypoint": 18,
        "res": "Rocky River",
        "Latitude": 41.37411,
        "Longitude": -81.86311,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 8,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 8,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86311,
          41.37411
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE10",
        "waypoint": 105,
        "res": "Bedford",
        "Latitude": 41.38184,
        "Longitude": -81.53462,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 9,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 12,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53462,
          41.38184
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK110",
        "waypoint": 114,
        "res": "Brecksville",
        "Latitude": 41.30145,
        "Longitude": -81.62674,
        "year": 2012,
        "rul_L": 14,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 14,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 14,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.62674,
          41.30145
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS55",
        "waypoint": 32,
        "res": "Mill Stream Run",
        "Latitude": 41.31589,
        "Longitude": -81.79695,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 6,
        "rule_DMG_R": 0,
        "hug_R": 5,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 5,
        "tower_tot": 0,
        "tot_ash": 14,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79695,
          41.31589
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS59",
        "waypoint": 36,
        "res": "Mill Stream Run",
        "Latitude": 41.31447,
        "Longitude": -81.79632,
        "year": 2012,
        "rul_L": 12,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 13,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 15,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79632,
          41.31447
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS84",
        "waypoint": 85,
        "res": "Mill Stream Run",
        "Latitude": 41.30404,
        "Longitude": -81.77569,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 10,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 12,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 18,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77569,
          41.30404
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE28",
        "waypoint": 124,
        "res": "Bedford",
        "Latitude": 41.38102,
        "Longitude": -81.54764,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54764,
          41.38102
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE48",
        "waypoint": 145,
        "res": "Bedford",
        "Latitude": 41.37387,
        "Longitude": -81.54806,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54806,
          41.37387
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE72",
        "waypoint": 171,
        "res": "Bedford",
        "Latitude": 41.37593,
        "Longitude": -81.55672,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55672,
          41.37593
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE130",
        "waypoint": 221,
        "res": "Bedford",
        "Latitude": 41.38377,
        "Longitude": -81.51797,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.51797,
          41.38377
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW15",
        "waypoint": 26,
        "res": "Bradley Woods",
        "Latitude": 41.412048,
        "Longitude": -81.962065,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.962065,
          41.412048
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW17",
        "waypoint": 28,
        "res": "Bradley Woods",
        "Latitude": 41.412921,
        "Longitude": -81.961985,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.961985,
          41.412921
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW35",
        "waypoint": 46,
        "res": "Bradley Woods",
        "Latitude": 41.41853,
        "Longitude": -81.9436,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.9436,
          41.41853
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK6",
        "waypoint": 6,
        "res": "Brecksville",
        "Latitude": 41.31818,
        "Longitude": -81.59481,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.59481,
          41.31818
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK34",
        "waypoint": 36,
        "res": "Brecksville",
        "Latitude": 41.31967,
        "Longitude": -81.61067,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61067,
          41.31967
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK88",
        "waypoint": 92,
        "res": "Brecksville",
        "Latitude": 41.30313,
        "Longitude": -81.61272,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61272,
          41.30313
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK96",
        "waypoint": 100,
        "res": "Brecksville",
        "Latitude": 41.30178,
        "Longitude": -81.61785,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.61785,
          41.30178
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK158",
        "waypoint": 118,
        "res": "Brecksville",
        "Latitude": 41.303191,
        "Longitude": -81.758378,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.758378,
          41.303191
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR1",
        "waypoint": 1,
        "res": "Mill Stream Run",
        "Latitude": 41.36482,
        "Longitude": -81.85653,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85653,
          41.36482
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR4",
        "waypoint": 4,
        "res": "Mill Stream Run",
        "Latitude": 41.36362,
        "Longitude": -81.85597,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85597,
          41.36362
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR16",
        "waypoint": 16,
        "res": "Mill Stream Run",
        "Latitude": 41.35934,
        "Longitude": -81.85771,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85771,
          41.35934
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR23",
        "waypoint": 23,
        "res": "Mill Stream Run",
        "Latitude": 41.356638,
        "Longitude": -81.856741,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.856741,
          41.356638
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR24",
        "waypoint": 24,
        "res": "Mill Stream Run",
        "Latitude": 41.356281,
        "Longitude": -81.856645,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.856645,
          41.356281
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR81",
        "waypoint": 81,
        "res": "Mill Stream Run",
        "Latitude": 41.34787,
        "Longitude": -81.84266,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84266,
          41.34787
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR84",
        "waypoint": 84,
        "res": "Mill Stream Run",
        "Latitude": 41.34274,
        "Longitude": -81.83601,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83601,
          41.34274
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR127",
        "waypoint": 127,
        "res": "Mill Stream Run",
        "Latitude": 41.33216,
        "Longitude": -81.83013,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83013,
          41.33216
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR199",
        "waypoint": 199,
        "res": "Mill Stream Run",
        "Latitude": 41.37173,
        "Longitude": -81.86153,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86153,
          41.37173
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR222",
        "waypoint": 222,
        "res": "Mill Stream Run",
        "Latitude": 41.365726,
        "Longitude": -81.856998,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.856998,
          41.365726
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR4",
        "waypoint": 20,
        "res": "Rocky River",
        "Latitude": 41.37489,
        "Longitude": -81.86373,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86373,
          41.37489
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR5",
        "waypoint": 21,
        "res": "Rocky River",
        "Latitude": 41.37519,
        "Longitude": -81.86423,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86423,
          41.37519
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR7",
        "waypoint": 23,
        "res": "Rocky River",
        "Latitude": 41.37634,
        "Longitude": -81.86538,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86538,
          41.37634
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR10",
        "waypoint": 26,
        "res": "Rocky River",
        "Latitude": 41.377546,
        "Longitude": -81.866378,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.866378,
          41.377546
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR18",
        "waypoint": 34,
        "res": "Rocky River",
        "Latitude": 41.38107,
        "Longitude": -81.86566,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86566,
          41.38107
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR24",
        "waypoint": 41,
        "res": "Rocky River",
        "Latitude": 41.38394,
        "Longitude": -81.86502,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86502,
          41.38394
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR25",
        "waypoint": 42,
        "res": "Rocky River",
        "Latitude": 41.38435,
        "Longitude": -81.86494,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86494,
          41.38435
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR31",
        "waypoint": 48,
        "res": "Rocky River",
        "Latitude": 41.38566,
        "Longitude": -81.86707,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86707,
          41.38566
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR32",
        "waypoint": 49,
        "res": "Rocky River",
        "Latitude": 41.3862,
        "Longitude": -81.86745,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86745,
          41.3862
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR41",
        "waypoint": 59,
        "res": "Rocky River",
        "Latitude": 41.38914,
        "Longitude": -81.86997,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86997,
          41.38914
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR50",
        "waypoint": 68,
        "res": "Rocky River",
        "Latitude": 41.3911,
        "Longitude": -81.87302,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87302,
          41.3911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR54",
        "waypoint": 72,
        "res": "Rocky River",
        "Latitude": 41.38932,
        "Longitude": -81.87421,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87421,
          41.38932
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR56",
        "waypoint": 74,
        "res": "Rocky River",
        "Latitude": 41.38969,
        "Longitude": -81.87531,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87531,
          41.38969
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR60",
        "waypoint": 78,
        "res": "Rocky River",
        "Latitude": 41.39106,
        "Longitude": -81.87701,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87701,
          41.39106
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR93",
        "waypoint": 113,
        "res": "Rocky River",
        "Latitude": 41.40182,
        "Longitude": -81.88433,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88433,
          41.40182
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR94",
        "waypoint": 114,
        "res": "Rocky River",
        "Latitude": 41.40226,
        "Longitude": -81.88416,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88416,
          41.40226
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR119",
        "waypoint": 147,
        "res": "Rocky River",
        "Latitude": 41.40893,
        "Longitude": -81.88108,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88108,
          41.40893
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR139",
        "waypoint": 168,
        "res": "Rocky River",
        "Latitude": 41.415599,
        "Longitude": -81.87493,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87493,
          41.415599
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR149",
        "waypoint": 179,
        "res": "Rocky River",
        "Latitude": 41.41907,
        "Longitude": -81.8719,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8719,
          41.41907
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR152",
        "waypoint": 182,
        "res": "Rocky River",
        "Latitude": 41.419439,
        "Longitude": -81.870195,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.870195,
          41.419439
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR161",
        "waypoint": 191,
        "res": "Rocky River",
        "Latitude": 41.41911,
        "Longitude": -81.86517,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86517,
          41.41911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR162",
        "waypoint": 192,
        "res": "Rocky River",
        "Latitude": 41.4188,
        "Longitude": -81.86481,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86481,
          41.4188
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR189",
        "waypoint": 222,
        "res": "Rocky River",
        "Latitude": 41.42597,
        "Longitude": -81.85572,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85572,
          41.42597
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR193",
        "waypoint": 226,
        "res": "Rocky River",
        "Latitude": 41.42769,
        "Longitude": -81.85558,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85558,
          41.42769
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR201",
        "waypoint": 234,
        "res": "Rocky River",
        "Latitude": 41.43054,
        "Longitude": -81.85301,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85301,
          41.43054
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR208",
        "waypoint": 241,
        "res": "Rocky River",
        "Latitude": 41.43268,
        "Longitude": -81.84987,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84987,
          41.43268
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR209",
        "waypoint": 242,
        "res": "Rocky River",
        "Latitude": 41.433,
        "Longitude": -81.84944,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84944,
          41.433
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR253",
        "waypoint": 288,
        "res": "Rocky River",
        "Latitude": 41.447641,
        "Longitude": -81.83964,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83964,
          41.447641
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR337",
        "waypoint": 459,
        "res": "Rocky River",
        "Latitude": 41.4772,
        "Longitude": -81.82539,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82539,
          41.4772
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR372",
        "waypoint": 352,
        "res": "Rocky River",
        "Latitude": 41.46329,
        "Longitude": -81.82324,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82324,
          41.46329
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR379",
        "waypoint": 359,
        "res": "Rocky River",
        "Latitude": 41.46423,
        "Longitude": -81.81895,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81895,
          41.46423
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR385",
        "waypoint": 365,
        "res": "Rocky River",
        "Latitude": 41.46424,
        "Longitude": -81.8166,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8166,
          41.46424
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR438",
        "waypoint": 332,
        "res": "Rocky River",
        "Latitude": 41.45545,
        "Longitude": -81.82288,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 1,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82288,
          41.45545
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE20",
        "waypoint": 116,
        "res": "Bedford",
        "Latitude": 41.38375,
        "Longitude": -81.54353,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54353,
          41.38375
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE21",
        "waypoint": 117,
        "res": "Bedford",
        "Latitude": 41.38378,
        "Longitude": -81.5443,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5443,
          41.38378
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE36",
        "waypoint": 132,
        "res": "Bedford",
        "Latitude": 41.37697,
        "Longitude": -81.54784,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54784,
          41.37697
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE123",
        "waypoint": 214,
        "res": "Bedford",
        "Latitude": 41.38433,
        "Longitude": -81.52276,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.52276,
          41.38433
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW32",
        "waypoint": 43,
        "res": "Bradley Woods",
        "Latitude": 41.41985,
        "Longitude": -81.943356,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.943356,
          41.41985
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW34",
        "waypoint": 45,
        "res": "Bradley Woods",
        "Latitude": 41.41896,
        "Longitude": -81.94357,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94357,
          41.41896
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW40",
        "waypoint": 56,
        "res": "Bradley Woods",
        "Latitude": 41.41628,
        "Longitude": -81.94367,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94367,
          41.41628
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW46",
        "waypoint": 62,
        "res": "Bradley Woods",
        "Latitude": 41.41375,
        "Longitude": -81.94371,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94371,
          41.41375
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR40",
        "waypoint": 40,
        "res": "Mill Stream Run",
        "Latitude": 41.35246,
        "Longitude": -81.85005,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85005,
          41.35246
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR42",
        "waypoint": 42,
        "res": "Mill Stream Run",
        "Latitude": 41.35223,
        "Longitude": -81.84895,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84895,
          41.35223
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR43",
        "waypoint": 43,
        "res": "Mill Stream Run",
        "Latitude": 41.35201,
        "Longitude": -81.84843,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84843,
          41.35201
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR47",
        "waypoint": 47,
        "res": "Mill Stream Run",
        "Latitude": 41.35148,
        "Longitude": -81.84648,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84648,
          41.35148
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR80",
        "waypoint": 80,
        "res": "Mill Stream Run",
        "Latitude": 41.34742,
        "Longitude": -81.84249,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84249,
          41.34742
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR96",
        "waypoint": 96,
        "res": "Mill Stream Run",
        "Latitude": 41.33809,
        "Longitude": -81.83517,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83517,
          41.33809
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR100",
        "waypoint": 100,
        "res": "Mill Stream Run",
        "Latitude": 41.33673,
        "Longitude": -81.83391,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83391,
          41.33673
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR155",
        "waypoint": 155,
        "res": "Mill Stream Run",
        "Latitude": 41.32892,
        "Longitude": -81.81847,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81847,
          41.32892
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR192",
        "waypoint": 192,
        "res": "Mill Stream Run",
        "Latitude": 41.32027,
        "Longitude": -81.80701,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80701,
          41.32027
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR208",
        "waypoint": 208,
        "res": "Mill Stream Run",
        "Latitude": 41.37011,
        "Longitude": -81.85738,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85738,
          41.37011
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC109",
        "waypoint": 109,
        "res": "North Chagrin",
        "Latitude": 41.554843,
        "Longitude": -81.426996,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.426996,
          41.554843
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC117",
        "waypoint": 117,
        "res": "North Chagrin",
        "Latitude": 41.552503,
        "Longitude": -81.418844,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.418844,
          41.552503
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR9",
        "waypoint": 25,
        "res": "Rocky River",
        "Latitude": 41.37722,
        "Longitude": -81.86619,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86619,
          41.37722
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR16",
        "waypoint": 32,
        "res": "Rocky River",
        "Latitude": 41.38023,
        "Longitude": -81.86582,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86582,
          41.38023
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR20",
        "waypoint": 36,
        "res": "Rocky River",
        "Latitude": 41.382,
        "Longitude": -81.86541,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86541,
          41.382
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR28",
        "waypoint": 45,
        "res": "Rocky River",
        "Latitude": 41.38532,
        "Longitude": -81.86549,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86549,
          41.38532
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR81",
        "waypoint": 100,
        "res": "Rocky River",
        "Latitude": 41.39738,
        "Longitude": -81.88229,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88229,
          41.39738
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR86",
        "waypoint": 105,
        "res": "Rocky River",
        "Latitude": 41.39868,
        "Longitude": -81.88372,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88372,
          41.39868
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR97",
        "waypoint": 117,
        "res": "Rocky River",
        "Latitude": 41.403639,
        "Longitude": -81.884056,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.884056,
          41.403639
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR134",
        "waypoint": 162,
        "res": "Rocky River",
        "Latitude": 41.41423,
        "Longitude": -81.87712,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87712,
          41.41423
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR144",
        "waypoint": 173,
        "res": "Rocky River",
        "Latitude": 41.41737,
        "Longitude": -81.87385,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87385,
          41.41737
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR158",
        "waypoint": 188,
        "res": "Rocky River",
        "Latitude": 41.419557,
        "Longitude": -81.866877,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.866877,
          41.419557
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR164",
        "waypoint": 195,
        "res": "Rocky River",
        "Latitude": 41.41882,
        "Longitude": -81.86344,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86344,
          41.41882
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR168",
        "waypoint": 199,
        "res": "Rocky River",
        "Latitude": 41.419319,
        "Longitude": -81.861672,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.861672,
          41.419319
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR183",
        "waypoint": 215,
        "res": "Rocky River",
        "Latitude": 41.423606,
        "Longitude": -81.857001,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.857001,
          41.423606
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR206",
        "waypoint": 239,
        "res": "Rocky River",
        "Latitude": 41.432,
        "Longitude": -81.85035,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85035,
          41.432
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR227",
        "waypoint": 262,
        "res": "Rocky River",
        "Latitude": 41.43966,
        "Longitude": -81.84544,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84544,
          41.43966
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR272",
        "waypoint": 308,
        "res": "Rocky River",
        "Latitude": 41.452321,
        "Longitude": -81.831223,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.831223,
          41.452321
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR276",
        "waypoint": 312,
        "res": "Rocky River",
        "Latitude": 41.45139,
        "Longitude": -81.82912,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82912,
          41.45139
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR290",
        "waypoint": 327,
        "res": "Rocky River",
        "Latitude": 41.454214,
        "Longitude": -81.824341,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.824341,
          41.454214
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR299",
        "waypoint": 481,
        "res": "Rocky River",
        "Latitude": 41.479475,
        "Longitude": -81.83253,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83253,
          41.479475
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR303",
        "waypoint": 485,
        "res": "Rocky River",
        "Latitude": 41.47765,
        "Longitude": -81.83257,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83257,
          41.47765
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR360",
        "waypoint": 426,
        "res": "Rocky River",
        "Latitude": 41.46856,
        "Longitude": -81.83538,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83538,
          41.46856
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR374",
        "waypoint": 354,
        "res": "Rocky River",
        "Latitude": 41.46392,
        "Longitude": -81.82232,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82232,
          41.46392
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR378",
        "waypoint": 358,
        "res": "Rocky River",
        "Latitude": 41.46417,
        "Longitude": -81.819653,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.819653,
          41.46417
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR384",
        "waypoint": 364,
        "res": "Rocky River",
        "Latitude": 41.46394,
        "Longitude": -81.81707,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81707,
          41.46394
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR408",
        "waypoint": 388,
        "res": "Rocky River",
        "Latitude": 41.4659,
        "Longitude": -81.82542,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82542,
          41.4659
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR414",
        "waypoint": 394,
        "res": "Rocky River",
        "Latitude": 41.465497,
        "Longitude": -81.829234,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.829234,
          41.465497
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR439",
        "waypoint": 333,
        "res": "Rocky River",
        "Latitude": 41.45585,
        "Longitude": -81.82266,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82266,
          41.45585
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR440",
        "waypoint": 334,
        "res": "Rocky River",
        "Latitude": 41.456255,
        "Longitude": -81.822613,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.822613,
          41.456255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE15",
        "waypoint": 111,
        "res": "Bedford",
        "Latitude": 41.38425,
        "Longitude": -81.5404,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5404,
          41.38425
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE98",
        "waypoint": 197,
        "res": "Bedford",
        "Latitude": 41.36622,
        "Longitude": -81.56552,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56552,
          41.36622
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE113",
        "waypoint": 204,
        "res": "Bedford",
        "Latitude": 41.38412,
        "Longitude": -81.52943,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.52943,
          41.38412
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE158",
        "waypoint": 249,
        "res": "Bedford",
        "Latitude": 41.37816,
        "Longitude": -81.49652,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49652,
          41.37816
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW24",
        "waypoint": 35,
        "res": "Bradley Woods",
        "Latitude": 41.42308,
        "Longitude": -81.94343,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94343,
          41.42308
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW36",
        "waypoint": 52,
        "res": "Bradley Woods",
        "Latitude": 41.41804,
        "Longitude": -81.94357,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94357,
          41.41804
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW38",
        "waypoint": 54,
        "res": "Bradley Woods",
        "Latitude": 41.41723,
        "Longitude": -81.9436,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.9436,
          41.41723
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK28",
        "waypoint": 30,
        "res": "Brecksville",
        "Latitude": 41.31908,
        "Longitude": -81.6071,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.6071,
          41.31908
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK159",
        "waypoint": 119,
        "res": "Brecksville",
        "Latitude": 41.3032,
        "Longitude": -81.75786,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.75786,
          41.3032
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR44",
        "waypoint": 44,
        "res": "Mill Stream Run",
        "Latitude": 41.35187,
        "Longitude": -81.84794,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84794,
          41.35187
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR49",
        "waypoint": 49,
        "res": "Mill Stream Run",
        "Latitude": 41.35114,
        "Longitude": -81.84556,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84556,
          41.35114
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR99",
        "waypoint": 99,
        "res": "Mill Stream Run",
        "Latitude": 41.33704,
        "Longitude": -81.83431,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83431,
          41.33704
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR220",
        "waypoint": 220,
        "res": "Mill Stream Run",
        "Latitude": 41.366231,
        "Longitude": -81.856871,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.856871,
          41.366231
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC108",
        "waypoint": 108,
        "res": "North Chagrin",
        "Latitude": 41.554977,
        "Longitude": -81.427717,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.427717,
          41.554977
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR22",
        "waypoint": 39,
        "res": "Rocky River",
        "Latitude": 41.383,
        "Longitude": -81.86536,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86536,
          41.383
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR66",
        "waypoint": 85,
        "res": "Rocky River",
        "Latitude": 41.39295,
        "Longitude": -81.87929,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87929,
          41.39295
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR73",
        "waypoint": 92,
        "res": "Rocky River",
        "Latitude": 41.39371,
        "Longitude": -81.88322,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88322,
          41.39371
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR82",
        "waypoint": 101,
        "res": "Rocky River",
        "Latitude": 41.39773,
        "Longitude": -81.88203,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88203,
          41.39773
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR98",
        "waypoint": 118,
        "res": "Rocky River",
        "Latitude": 41.40392,
        "Longitude": -81.88411,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88411,
          41.40392
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR99",
        "waypoint": 119,
        "res": "Rocky River",
        "Latitude": 41.40435,
        "Longitude": -81.88432,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88432,
          41.40435
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR106",
        "waypoint": 134,
        "res": "Rocky River",
        "Latitude": 41.40712,
        "Longitude": -81.88649,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88649,
          41.40712
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR107",
        "waypoint": 135,
        "res": "Rocky River",
        "Latitude": 41.40755,
        "Longitude": -81.88635,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88635,
          41.40755
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR123",
        "waypoint": 151,
        "res": "Rocky River",
        "Latitude": 41.410632,
        "Longitude": -81.880784,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.880784,
          41.410632
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR146",
        "waypoint": 175,
        "res": "Rocky River",
        "Latitude": 41.418157,
        "Longitude": -81.873179,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.873179,
          41.418157
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR166",
        "waypoint": 197,
        "res": "Rocky River",
        "Latitude": 41.41887,
        "Longitude": -81.8625,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8625,
          41.41887
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR241",
        "waypoint": 276,
        "res": "Rocky River",
        "Latitude": 41.44305,
        "Longitude": -81.84026,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84026,
          41.44305
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR244",
        "waypoint": 279,
        "res": "Rocky River",
        "Latitude": 41.444,
        "Longitude": -81.83955,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83955,
          41.444
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR273",
        "waypoint": 309,
        "res": "Rocky River",
        "Latitude": 41.45232,
        "Longitude": -81.83054,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83054,
          41.45232
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR321",
        "waypoint": 443,
        "res": "Rocky River",
        "Latitude": 41.46997,
        "Longitude": -81.82498,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82498,
          41.46997
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR369",
        "waypoint": 349,
        "res": "Rocky River",
        "Latitude": 41.46201,
        "Longitude": -81.82288,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82288,
          41.46201
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR445",
        "waypoint": 339,
        "res": "Rocky River",
        "Latitude": 41.45848,
        "Longitude": -81.82334,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82334,
          41.45848
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR446",
        "waypoint": 340,
        "res": "Rocky River",
        "Latitude": 41.45894,
        "Longitude": -81.82339,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82339,
          41.45894
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE42",
        "waypoint": 138,
        "res": "Bedford",
        "Latitude": 41.37562,
        "Longitude": -81.54572,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54572,
          41.37562
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE62",
        "waypoint": 161,
        "res": "Bedford",
        "Latitude": 41.37043,
        "Longitude": -81.55546,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55546,
          41.37043
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE75",
        "waypoint": 174,
        "res": "Bedford",
        "Latitude": 41.37735,
        "Longitude": -81.55926,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55926,
          41.37735
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE122",
        "waypoint": 213,
        "res": "Bedford",
        "Latitude": 41.38435,
        "Longitude": -81.52338,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.52338,
          41.38435
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW31",
        "waypoint": 42,
        "res": "Bradley Woods",
        "Latitude": 41.42019,
        "Longitude": -81.94357,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94357,
          41.42019
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK1",
        "waypoint": 1,
        "res": "Brecksville",
        "Latitude": 41.31888,
        "Longitude": -81.59197,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.59197,
          41.31888
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK139",
        "waypoint": 99,
        "res": "Brecksville",
        "Latitude": 41.302559,
        "Longitude": -81.768467,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.768467,
          41.302559
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK153",
        "waypoint": 113,
        "res": "Brecksville",
        "Latitude": 41.303232,
        "Longitude": -81.761244,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 1,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.761244,
          41.303232
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR19",
        "waypoint": 19,
        "res": "Mill Stream Run",
        "Latitude": 41.35815,
        "Longitude": -81.85706,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85706,
          41.35815
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR76",
        "waypoint": 76,
        "res": "Mill Stream Run",
        "Latitude": 41.3466,
        "Longitude": -81.84146,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84146,
          41.3466
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR79",
        "waypoint": 79,
        "res": "Mill Stream Run",
        "Latitude": 41.34701,
        "Longitude": -81.84252,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84252,
          41.34701
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR175",
        "waypoint": 175,
        "res": "Mill Stream Run",
        "Latitude": 41.32439,
        "Longitude": -81.81236,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81236,
          41.32439
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR36",
        "waypoint": 53,
        "res": "Rocky River",
        "Latitude": 41.386968,
        "Longitude": -81.869523,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.869523,
          41.386968
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR53",
        "waypoint": 71,
        "res": "Rocky River",
        "Latitude": 41.38957,
        "Longitude": -81.87372,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87372,
          41.38957
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR80",
        "waypoint": 99,
        "res": "Rocky River",
        "Latitude": 41.39706,
        "Longitude": -81.88253,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88253,
          41.39706
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR85",
        "waypoint": 104,
        "res": "Rocky River",
        "Latitude": 41.39838,
        "Longitude": -81.88341,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88341,
          41.39838
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR104",
        "waypoint": 124,
        "res": "Rocky River",
        "Latitude": 41.405703,
        "Longitude": -81.886136,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.886136,
          41.405703
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR113",
        "waypoint": 141,
        "res": "Rocky River",
        "Latitude": 41.40762,
        "Longitude": -81.88335,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88335,
          41.40762
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR141",
        "waypoint": 170,
        "res": "Rocky River",
        "Latitude": 41.41626,
        "Longitude": -81.87436,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87436,
          41.41626
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR163",
        "waypoint": 193,
        "res": "Rocky River",
        "Latitude": 41.41883,
        "Longitude": -81.86419,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86419,
          41.41883
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR302",
        "waypoint": 484,
        "res": "Rocky River",
        "Latitude": 41.4781,
        "Longitude": -81.83285,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83285,
          41.4781
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR319",
        "waypoint": 441,
        "res": "Rocky River",
        "Latitude": 41.46926,
        "Longitude": -81.82608,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82608,
          41.46926
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR362",
        "waypoint": 428,
        "res": "Rocky River",
        "Latitude": 41.46936,
        "Longitude": -81.83472,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83472,
          41.46936
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR409",
        "waypoint": 389,
        "res": "Rocky River",
        "Latitude": 41.465879,
        "Longitude": -81.825975,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.825975,
          41.465879
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE6",
        "waypoint": 101,
        "res": "Bedford",
        "Latitude": 41.38338,
        "Longitude": -81.5365,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5365,
          41.38338
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE17",
        "waypoint": 113,
        "res": "Bedford",
        "Latitude": 41.38401,
        "Longitude": -81.54164,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54164,
          41.38401
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE38",
        "waypoint": 134,
        "res": "Bedford",
        "Latitude": 41.37701,
        "Longitude": -81.54648,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54648,
          41.37701
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS43",
        "waypoint": 45,
        "res": "Mill Stream Run",
        "Latitude": 41.31172,
        "Longitude": -81.79346,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79346,
          41.31172
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR17",
        "waypoint": 17,
        "res": "Mill Stream Run",
        "Latitude": 41.35893,
        "Longitude": -81.85751,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85751,
          41.35893
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR95",
        "waypoint": 95,
        "res": "Mill Stream Run",
        "Latitude": 41.33842,
        "Longitude": -81.83535,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83535,
          41.33842
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR158",
        "waypoint": 158,
        "res": "Mill Stream Run",
        "Latitude": 41.3278,
        "Longitude": -81.81808,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 5,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81808,
          41.3278
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR19",
        "waypoint": 35,
        "res": "Rocky River",
        "Latitude": 41.38153,
        "Longitude": -81.86549,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86549,
          41.38153
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR122",
        "waypoint": 150,
        "res": "Rocky River",
        "Latitude": 41.410341,
        "Longitude": -81.880662,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.880662,
          41.410341
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR156",
        "waypoint": 186,
        "res": "Rocky River",
        "Latitude": 41.419747,
        "Longitude": -81.867907,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.867907,
          41.419747
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR266",
        "waypoint": 302,
        "res": "Rocky River",
        "Latitude": 41.44996,
        "Longitude": -81.83285,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83285,
          41.44996
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC6",
        "waypoint": 6,
        "res": "South Chagrin",
        "Latitude": 41.42138,
        "Longitude": -81.42134,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.42134,
          41.42138
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE16",
        "waypoint": 112,
        "res": "Bedford",
        "Latitude": 41.38422,
        "Longitude": -81.54108,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54108,
          41.38422
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE147",
        "waypoint": 238,
        "res": "Bedford",
        "Latitude": 41.38037,
        "Longitude": -81.50428,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50428,
          41.38037
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK146",
        "waypoint": 106,
        "res": "Brecksville",
        "Latitude": 41.30249,
        "Longitude": -81.76465,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76465,
          41.30249
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK164",
        "waypoint": 124,
        "res": "Brecksville",
        "Latitude": 41.30326,
        "Longitude": -81.75517,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.75517,
          41.30326
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS74",
        "waypoint": 75,
        "res": "Mill Stream Run",
        "Latitude": 41.305287,
        "Longitude": -81.780856,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.780856,
          41.305287
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR53",
        "waypoint": 53,
        "res": "Mill Stream Run",
        "Latitude": 41.350562,
        "Longitude": -81.843818,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.843818,
          41.350562
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR64",
        "waypoint": 83,
        "res": "Rocky River",
        "Latitude": 41.39243,
        "Longitude": -81.87853,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 2,
        "rul_tot": 2,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87853,
          41.39243
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR251",
        "waypoint": 286,
        "res": "Rocky River",
        "Latitude": 41.447065,
        "Longitude": -81.840384,
        "year": 2011,
        "rul_L": 6,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.840384,
          41.447065
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR274",
        "waypoint": 310,
        "res": "Rocky River",
        "Latitude": 41.45205,
        "Longitude": -81.83003,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83003,
          41.45205
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR317",
        "waypoint": 439,
        "res": "Rocky River",
        "Latitude": 41.46904,
        "Longitude": -81.82722,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82722,
          41.46904
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE60",
        "waypoint": 159,
        "res": "Bedford",
        "Latitude": 41.36987,
        "Longitude": -81.55392,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 6,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 6,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55392,
          41.36987
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK122",
        "waypoint": 127,
        "res": "Brecksville",
        "Latitude": 41.35825,
        "Longitude": -81.56703,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 1,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56703,
          41.35825
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS53",
        "waypoint": 30,
        "res": "Mill Stream Run",
        "Latitude": 41.31623,
        "Longitude": -81.79793,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79793,
          41.31623
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS26",
        "waypoint": 18,
        "res": "Mill Stream Run",
        "Latitude": 41.31966,
        "Longitude": -81.80186,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80186,
          41.31966
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS34",
        "waypoint": 26,
        "res": "Mill Stream Run",
        "Latitude": 41.31672,
        "Longitude": -81.79981,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79981,
          41.31672
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS85",
        "waypoint": 86,
        "res": "Mill Stream Run",
        "Latitude": 41.30389,
        "Longitude": -81.77514,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 7,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77514,
          41.30389
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR64",
        "waypoint": 64,
        "res": "Mill Stream Run",
        "Latitude": 41.345909,
        "Longitude": -81.835142,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 4,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.835142,
          41.345909
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR67",
        "waypoint": 67,
        "res": "Mill Stream Run",
        "Latitude": 41.346461,
        "Longitude": -81.836687,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.836687,
          41.346461
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR44",
        "waypoint": 62,
        "res": "Rocky River",
        "Latitude": 41.39038,
        "Longitude": -81.86976,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86976,
          41.39038
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR76",
        "waypoint": 95,
        "res": "Rocky River",
        "Latitude": 41.3953,
        "Longitude": -81.88315,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88315,
          41.3953
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR371",
        "waypoint": 351,
        "res": "Rocky River",
        "Latitude": 41.46292,
        "Longitude": -81.82335,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 4,
        "tower_tot": 2,
        "tot_ash": 8,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82335,
          41.46292
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE51",
        "waypoint": 148,
        "res": "Bedford",
        "Latitude": 41.37171,
        "Longitude": -81.54901,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 6,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 1,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 8,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54901,
          41.37171
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE151",
        "waypoint": 242,
        "res": "Bedford",
        "Latitude": 41.37922,
        "Longitude": -81.50173,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 1,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 1,
        "rul_tot": 4,
        "hug_tot": 1,
        "tower_tot": 4,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50173,
          41.37922
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE153",
        "waypoint": 244,
        "res": "Bedford",
        "Latitude": 41.37885,
        "Longitude": -81.50041,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 1,
        "tower_tot": 3,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50041,
          41.37885
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS81",
        "waypoint": 82,
        "res": "Mill Stream Run",
        "Latitude": 41.30438,
        "Longitude": -81.77725,
        "year": 2012,
        "rul_L": 6,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77725,
          41.30438
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR210",
        "waypoint": 243,
        "res": "Rocky River",
        "Latitude": 41.43332,
        "Longitude": -81.849055,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 2,
        "tower_tot": 4,
        "tot_ash": 9,
        "group": 1,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.849055,
          41.43332
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE150",
        "waypoint": 241,
        "res": "Bedford",
        "Latitude": 41.3795,
        "Longitude": -81.50245,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 7,
        "tow_DMG_L": 2,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 8,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50245,
          41.3795
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK149",
        "waypoint": 109,
        "res": "Brecksville",
        "Latitude": 41.30259,
        "Longitude": -81.76302,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 4,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 8,
        "tot_ash": 10,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76302,
          41.30259
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK72",
        "waypoint": 74,
        "res": "Brecksville",
        "Latitude": 41.30836,
        "Longitude": -81.60529,
        "year": 2012,
        "rul_L": 11,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 11,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 11,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60529,
          41.30836
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS11",
        "waypoint": 2,
        "res": "Mill Stream Run",
        "Latitude": 41.318581,
        "Longitude": -81.807211,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 1,
        "tower_tot": 3,
        "tot_ash": 11,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.807211,
          41.318581
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE112",
        "waypoint": 203,
        "res": "Bedford",
        "Latitude": 41.38371,
        "Longitude": -81.53002,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 6,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 10,
        "tot_ash": 13,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53002,
          41.38371
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK74",
        "waypoint": 77,
        "res": "Brecksville",
        "Latitude": 41.30745,
        "Longitude": -81.60611,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 13,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 13,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 13,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.60611,
          41.30745
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS68",
        "waypoint": 69,
        "res": "Mill Stream Run",
        "Latitude": 41.307405,
        "Longitude": -81.782526,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 6,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 13,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.782526,
          41.307405
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE109",
        "waypoint": 200,
        "res": "Bedford",
        "Latitude": 41.38245,
        "Longitude": -81.53143,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 8,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 6,
        "tow_DMG_R": 1,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 14,
        "tot_ash": 15,
        "group": 2,
        "damage": 0,
        "marker-color": "#7AC77B",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53143,
          41.38245
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE163",
        "waypoint": 254,
        "res": "Bedford",
        "Latitude": 41.37647,
        "Longitude": -81.49321,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 1,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49321,
          41.37647
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR223",
        "waypoint": 223,
        "res": "Mill Stream Run",
        "Latitude": 41.36552,
        "Longitude": -81.85696,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 2,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85696,
          41.36552
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE44",
        "waypoint": 140,
        "res": "Bedford",
        "Latitude": 41.37551,
        "Longitude": -81.5472,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5472,
          41.37551
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR56",
        "waypoint": 56,
        "res": "Mill Stream Run",
        "Latitude": 41.343231,
        "Longitude": -81.835813,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.835813,
          41.343231
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR68",
        "waypoint": 68,
        "res": "Mill Stream Run",
        "Latitude": 41.346591,
        "Longitude": -81.837295,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.837295,
          41.346591
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR95",
        "waypoint": 115,
        "res": "Rocky River",
        "Latitude": 41.40279,
        "Longitude": -81.88398,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88398,
          41.40279
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR121",
        "waypoint": 149,
        "res": "Rocky River",
        "Latitude": 41.40995,
        "Longitude": -81.88084,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88084,
          41.40995
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR148",
        "waypoint": 178,
        "res": "Rocky River",
        "Latitude": 41.41883,
        "Longitude": -81.87241,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87241,
          41.41883
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE77",
        "waypoint": 176,
        "res": "Bedford",
        "Latitude": 41.37775,
        "Longitude": -81.560511,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.560511,
          41.37775
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK140",
        "waypoint": 100,
        "res": "Brecksville",
        "Latitude": 41.30255,
        "Longitude": -81.767917,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 3,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 5,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.767917,
          41.30255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS75",
        "waypoint": 76,
        "res": "Mill Stream Run",
        "Latitude": 41.305002,
        "Longitude": -81.780328,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.780328,
          41.305002
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR85",
        "waypoint": 85,
        "res": "Mill Stream Run",
        "Latitude": 41.34226,
        "Longitude": -81.83614,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83614,
          41.34226
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR21",
        "waypoint": 38,
        "res": "Rocky River",
        "Latitude": 41.38248,
        "Longitude": -81.86546,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86546,
          41.38248
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR184",
        "waypoint": 216,
        "res": "Rocky River",
        "Latitude": 41.423979,
        "Longitude": -81.856642,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 1,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 4,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.856642,
          41.423979
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW9",
        "waypoint": 20,
        "res": "Bradley Woods",
        "Latitude": 41.4097,
        "Longitude": -81.96249,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 4,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96249,
          41.4097
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK152",
        "waypoint": 112,
        "res": "Brecksville",
        "Latitude": 41.303213,
        "Longitude": -81.761801,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.761801,
          41.303213
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS2",
        "waypoint": 55,
        "res": "Mill Stream Run",
        "Latitude": 41.311164,
        "Longitude": -81.788096,
        "year": 2012,
        "rul_L": 6,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.788096,
          41.311164
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS50",
        "waypoint": 52,
        "res": "Mill Stream Run",
        "Latitude": 41.311156,
        "Longitude": -81.789686,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 5,
        "tower_tot": 0,
        "tot_ash": 7,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.789686,
          41.311156
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE103",
        "waypoint": 147,
        "res": "Bedford",
        "Latitude": 41.36452,
        "Longitude": -81.56683,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 1,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 5,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56683,
          41.36452
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE152",
        "waypoint": 243,
        "res": "Bedford",
        "Latitude": 41.37911,
        "Longitude": -81.50109,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 1,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 6,
        "tot_ash": 8,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50109,
          41.37911
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK147",
        "waypoint": 107,
        "res": "Brecksville",
        "Latitude": 41.302501,
        "Longitude": -81.769324,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 6,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 7,
        "tot_ash": 8,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.769324,
          41.302501
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS71",
        "waypoint": 72,
        "res": "Mill Stream Run",
        "Latitude": 41.30621,
        "Longitude": -81.78191,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 8,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78191,
          41.30621
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE4",
        "waypoint": 99,
        "res": "Bedford",
        "Latitude": 41.38388,
        "Longitude": -81.5377,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 1,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 9,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5377,
          41.38388
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE53",
        "waypoint": 151,
        "res": "Bedford",
        "Latitude": 41.371657,
        "Longitude": -81.550155,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 1,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 6,
        "tot_ash": 9,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.550155,
          41.371657
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE43",
        "waypoint": 139,
        "res": "Bedford",
        "Latitude": 41.37559,
        "Longitude": -81.54641,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 8,
        "tow_DMG_R": 1,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 8,
        "tot_ash": 10,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54641,
          41.37559
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE102",
        "waypoint": 146,
        "res": "Bedford",
        "Latitude": 41.36402,
        "Longitude": -81.56696,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 1,
        "rul_tot": 5,
        "hug_tot": 1,
        "tower_tot": 4,
        "tot_ash": 10,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56696,
          41.36402
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE165",
        "waypoint": 256,
        "res": "Bedford",
        "Latitude": 41.37611,
        "Longitude": -81.4911,
        "year": 2012,
        "rul_L": 6,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 11,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.4911,
          41.37611
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE2",
        "waypoint": 97,
        "res": "Bedford",
        "Latitude": 41.38415,
        "Longitude": -81.53891,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 1,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 1,
        "rul_tot": 4,
        "hug_tot": 2,
        "tower_tot": 6,
        "tot_ash": 12,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53891,
          41.38415
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE119",
        "waypoint": 210,
        "res": "Bedford",
        "Latitude": 41.38416,
        "Longitude": -81.52552,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 5,
        "tow_DMG_R": 1,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 10,
        "tot_ash": 12,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.52552,
          41.38416
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK144",
        "waypoint": 104,
        "res": "Brecksville",
        "Latitude": 41.30252,
        "Longitude": -81.76574,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 10,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 10,
        "tot_ash": 13,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76574,
          41.30252
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS14",
        "waypoint": 5,
        "res": "Mill Stream Run",
        "Latitude": 41.31762,
        "Longitude": -81.80685,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 4,
        "hug_DMG_R": 0,
        "tow_R": 4,
        "tow_DMG_R": 1,
        "rul_tot": 3,
        "hug_tot": 6,
        "tower_tot": 4,
        "tot_ash": 13,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80685,
          41.31762
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS60",
        "waypoint": 37,
        "res": "Mill Stream Run",
        "Latitude": 41.314,
        "Longitude": -81.796276,
        "year": 2012,
        "rul_L": 11,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 11,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 13,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.796276,
          41.314
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC185",
        "waypoint": 185,
        "res": "South Chagrin",
        "Latitude": 41.40043,
        "Longitude": -81.47717,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 1,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 1,
        "rul_tot": 6,
        "hug_tot": 5,
        "tower_tot": 2,
        "tot_ash": 13,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47717,
          41.40043
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE9",
        "waypoint": 104,
        "res": "Bedford",
        "Latitude": 41.38218,
        "Longitude": -81.5351,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 8,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 1,
        "rul_tot": 10,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 14,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5351,
          41.38218
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE30",
        "waypoint": 126,
        "res": "Bedford",
        "Latitude": 41.38002,
        "Longitude": -81.54792,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 1,
        "hug_L": 4,
        "hug_DMG_L": 1,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 1,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 5,
        "tower_tot": 3,
        "tot_ash": 14,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54792,
          41.38002
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS57",
        "waypoint": 34,
        "res": "Mill Stream Run",
        "Latitude": 41.31523,
        "Longitude": -81.79663,
        "year": 2012,
        "rul_L": 6,
        "rule_DMG_L": 1,
        "hug_L": 4,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 5,
        "tower_tot": 2,
        "tot_ash": 14,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79663,
          41.31523
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS56",
        "waypoint": 33,
        "res": "Mill Stream Run",
        "Latitude": 41.315526,
        "Longitude": -81.796747,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 8,
        "rule_DMG_R": 1,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 13,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 15,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.796747,
          41.315526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS69",
        "waypoint": 70,
        "res": "Mill Stream Run",
        "Latitude": 41.30696,
        "Longitude": -81.78239,
        "year": 2012,
        "rul_L": 8,
        "rule_DMG_L": 1,
        "hug_L": 4,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 10,
        "hug_tot": 4,
        "tower_tot": 1,
        "tot_ash": 15,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78239,
          41.30696
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE31",
        "waypoint": 127,
        "res": "Bedford",
        "Latitude": 41.37944,
        "Longitude": -81.54811,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 1,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 4,
        "hug_DMG_R": 1,
        "tow_R": 7,
        "tow_DMG_R": 1,
        "rul_tot": 1,
        "hug_tot": 7,
        "tower_tot": 8,
        "tot_ash": 16,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54811,
          41.37944
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE104",
        "waypoint": 148,
        "res": "Bedford",
        "Latitude": 41.36497,
        "Longitude": -81.5668,
        "year": 2012,
        "rul_L": 9,
        "rule_DMG_L": 1,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 13,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 16,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5668,
          41.36497
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS24",
        "waypoint": 16,
        "res": "Mill Stream Run",
        "Latitude": 41.3199,
        "Longitude": -81.8029,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 7,
        "rule_DMG_R": 0,
        "hug_R": 4,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 10,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 16,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8029,
          41.3199
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS21",
        "waypoint": 12,
        "res": "Mill Stream Run",
        "Latitude": 41.319457,
        "Longitude": -81.804375,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 12,
        "rule_DMG_R": 1,
        "hug_R": 3,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 12,
        "hug_tot": 3,
        "tower_tot": 2,
        "tot_ash": 17,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.804375,
          41.319457
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS22",
        "waypoint": 14,
        "res": "Mill Stream Run",
        "Latitude": 41.319691,
        "Longitude": -81.803999,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 1,
        "hug_L": 3,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 8,
        "rule_DMG_R": 1,
        "hug_R": 6,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 12,
        "hug_tot": 9,
        "tower_tot": 0,
        "tot_ash": 21,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.803999,
          41.319691
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS9",
        "waypoint": 62,
        "res": "Mill Stream Run",
        "Latitude": 41.3101,
        "Longitude": -81.78432,
        "year": 2012,
        "rul_L": 12,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 1,
        "hug_R": 4,
        "hug_DMG_R": 1,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 17,
        "hug_tot": 4,
        "tower_tot": 1,
        "tot_ash": 22,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78432,
          41.3101
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS23",
        "waypoint": 15,
        "res": "Mill Stream Run",
        "Latitude": 41.31991,
        "Longitude": -81.80359,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 12,
        "rule_DMG_R": 1,
        "hug_R": 6,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 12,
        "hug_tot": 8,
        "tower_tot": 2,
        "tot_ash": 22,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80359,
          41.31991
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC186",
        "waypoint": 186,
        "res": "South Chagrin",
        "Latitude": 41.40005,
        "Longitude": -81.47727,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 20,
        "hug_DMG_L": 1,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 1,
        "rul_tot": 4,
        "hug_tot": 20,
        "tower_tot": 3,
        "tot_ash": 27,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47727,
          41.40005
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE49",
        "waypoint": 146,
        "res": "Bedford",
        "Latitude": 41.37333,
        "Longitude": -81.54814,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54814,
          41.37333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE73",
        "waypoint": 172,
        "res": "Bedford",
        "Latitude": 41.37614,
        "Longitude": -81.55721,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55721,
          41.37614
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE80",
        "waypoint": 179,
        "res": "Bedford",
        "Latitude": 41.377618,
        "Longitude": -81.562587,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 2,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.562587,
          41.377618
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW48",
        "waypoint": 64,
        "res": "Bradley Woods",
        "Latitude": 41.4129,
        "Longitude": -81.94373,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94373,
          41.4129
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR26",
        "waypoint": 43,
        "res": "Rocky River",
        "Latitude": 41.3847,
        "Longitude": -81.86494,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86494,
          41.3847
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR65",
        "waypoint": 84,
        "res": "Rocky River",
        "Latitude": 41.39273,
        "Longitude": -81.87898,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87898,
          41.39273
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR84",
        "waypoint": 103,
        "res": "Rocky River",
        "Latitude": 41.39824,
        "Longitude": -81.883,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.883,
          41.39824
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR154",
        "waypoint": 184,
        "res": "Rocky River",
        "Latitude": 41.41969,
        "Longitude": -81.86905,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86905,
          41.41969
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR380",
        "waypoint": 360,
        "res": "Rocky River",
        "Latitude": 41.464143,
        "Longitude": -81.818388,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.818388,
          41.464143
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR382",
        "waypoint": 362,
        "res": "Rocky River",
        "Latitude": 41.46343,
        "Longitude": -81.81792,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 2,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81792,
          41.46343
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE14",
        "waypoint": 110,
        "res": "Bedford",
        "Latitude": 41.38421,
        "Longitude": -81.53976,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53976,
          41.38421
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE71",
        "waypoint": 170,
        "res": "Bedford",
        "Latitude": 41.37546,
        "Longitude": -81.55605,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55605,
          41.37546
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS47",
        "waypoint": 49,
        "res": "Mill Stream Run",
        "Latitude": 41.31134,
        "Longitude": -81.79118,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79118,
          41.31134
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "NC83",
        "waypoint": 83,
        "res": "North Chagrin",
        "Latitude": 41.56757,
        "Longitude": -81.43604,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.43604,
          41.56757
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR13",
        "waypoint": 29,
        "res": "Rocky River",
        "Latitude": 41.37875,
        "Longitude": -81.86607,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86607,
          41.37875
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR49",
        "waypoint": 67,
        "res": "Rocky River",
        "Latitude": 41.39126,
        "Longitude": -81.87242,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87242,
          41.39126
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR72",
        "waypoint": 91,
        "res": "Rocky River",
        "Latitude": 41.39359,
        "Longitude": -81.88261,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88261,
          41.39359
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR132",
        "waypoint": 160,
        "res": "Rocky River",
        "Latitude": 41.41365,
        "Longitude": -81.87778,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87778,
          41.41365
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR135",
        "waypoint": 163,
        "res": "Rocky River",
        "Latitude": 41.41436,
        "Longitude": -81.87659,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87659,
          41.41436
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR136",
        "waypoint": 164,
        "res": "Rocky River",
        "Latitude": 41.41468,
        "Longitude": -81.87619,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87619,
          41.41468
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR153",
        "waypoint": 183,
        "res": "Rocky River",
        "Latitude": 41.41955,
        "Longitude": -81.86967,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86967,
          41.41955
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR225",
        "waypoint": 260,
        "res": "Rocky River",
        "Latitude": 41.43874,
        "Longitude": -81.84556,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84556,
          41.43874
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR226",
        "waypoint": 261,
        "res": "Rocky River",
        "Latitude": 41.43913,
        "Longitude": -81.8455,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8455,
          41.43913
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR267",
        "waypoint": 303,
        "res": "Rocky River",
        "Latitude": 41.450416,
        "Longitude": -81.832768,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.832768,
          41.450416
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR287",
        "waypoint": 324,
        "res": "Rocky River",
        "Latitude": 41.453748,
        "Longitude": -81.825715,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.825715,
          41.453748
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR390",
        "waypoint": 370,
        "res": "Rocky River",
        "Latitude": 41.46604,
        "Longitude": -81.81536,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81536,
          41.46604
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR441",
        "waypoint": 335,
        "res": "Rocky River",
        "Latitude": 41.45665,
        "Longitude": -81.8226,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 3,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8226,
          41.45665
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW13",
        "waypoint": 24,
        "res": "Bradley Woods",
        "Latitude": 41.41131,
        "Longitude": -81.9623,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.9623,
          41.41131
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW16",
        "waypoint": 27,
        "res": "Bradley Woods",
        "Latitude": 41.41235,
        "Longitude": -81.96203,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96203,
          41.41235
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW37",
        "waypoint": 53,
        "res": "Bradley Woods",
        "Latitude": 41.41766,
        "Longitude": -81.9436,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 2,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.9436,
          41.41766
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR54",
        "waypoint": 54,
        "res": "Mill Stream Run",
        "Latitude": 41.350144,
        "Longitude": -81.843772,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 2,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.843772,
          41.350144
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR86",
        "waypoint": 86,
        "res": "Mill Stream Run",
        "Latitude": 41.3418,
        "Longitude": -81.83614,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83614,
          41.3418
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR17",
        "waypoint": 33,
        "res": "Rocky River",
        "Latitude": 41.38063,
        "Longitude": -81.86575,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86575,
          41.38063
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR37",
        "waypoint": 54,
        "res": "Rocky River",
        "Latitude": 41.38718,
        "Longitude": -81.87006,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87006,
          41.38718
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR40",
        "waypoint": 57,
        "res": "Rocky River",
        "Latitude": 41.3886,
        "Longitude": -81.87008,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87008,
          41.3886
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR87",
        "waypoint": 106,
        "res": "Rocky River",
        "Latitude": 41.399,
        "Longitude": -81.88398,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88398,
          41.399
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR130",
        "waypoint": 158,
        "res": "Rocky River",
        "Latitude": 41.41303,
        "Longitude": -81.87838,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87838,
          41.41303
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR177",
        "waypoint": 208,
        "res": "Rocky River",
        "Latitude": 41.421507,
        "Longitude": -81.857988,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.857988,
          41.421507
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR179",
        "waypoint": 211,
        "res": "Rocky River",
        "Latitude": 41.422177,
        "Longitude": -81.857918,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 1,
        "tower_tot": 3,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.857918,
          41.422177
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR216",
        "waypoint": 250,
        "res": "Rocky River",
        "Latitude": 41.43491,
        "Longitude": -81.84618,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84618,
          41.43491
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR259",
        "waypoint": 295,
        "res": "Rocky River",
        "Latitude": 41.448395,
        "Longitude": -81.836209,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.836209,
          41.448395
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR262",
        "waypoint": 298,
        "res": "Rocky River",
        "Latitude": 41.44848,
        "Longitude": -81.833966,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.833966,
          41.44848
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR265",
        "waypoint": 301,
        "res": "Rocky River",
        "Latitude": 41.44945,
        "Longitude": -81.83289,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83289,
          41.44945
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR444",
        "waypoint": 338,
        "res": "Rocky River",
        "Latitude": 41.458025,
        "Longitude": -81.823152,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.823152,
          41.458025
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE67",
        "waypoint": 166,
        "res": "Bedford",
        "Latitude": 41.37303,
        "Longitude": -81.555329,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.555329,
          41.37303
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK138",
        "waypoint": 99,
        "res": "Brecksville",
        "Latitude": 41.30252,
        "Longitude": -81.76893,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.76893,
          41.30252
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK163",
        "waypoint": 123,
        "res": "Brecksville",
        "Latitude": 41.303277,
        "Longitude": -81.755719,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 1,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.755719,
          41.303277
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR100",
        "waypoint": 120,
        "res": "Rocky River",
        "Latitude": 41.40456,
        "Longitude": -81.88478,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 3,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 0,
        "hug_tot": 2,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88478,
          41.40456
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR102",
        "waypoint": 122,
        "res": "Rocky River",
        "Latitude": 41.405118,
        "Longitude": -81.885381,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.885381,
          41.405118
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR103",
        "waypoint": 123,
        "res": "Rocky River",
        "Latitude": 41.40544,
        "Longitude": -81.885763,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 2,
        "rul_tot": 0,
        "hug_tot": 0,
        "tower_tot": 5,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.885763,
          41.40544
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR204",
        "waypoint": 237,
        "res": "Rocky River",
        "Latitude": 41.431309,
        "Longitude": -81.851098,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.851098,
          41.431309
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR280",
        "waypoint": 316,
        "res": "Rocky River",
        "Latitude": 41.451142,
        "Longitude": -81.827413,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.827413,
          41.451142
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR282",
        "waypoint": 319,
        "res": "Rocky River",
        "Latitude": 41.452023,
        "Longitude": -81.827554,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.827554,
          41.452023
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE39",
        "waypoint": 135,
        "res": "Bedford",
        "Latitude": 41.376798,
        "Longitude": -81.545726,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.545726,
          41.376798
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW10",
        "waypoint": 21,
        "res": "Bradley Woods",
        "Latitude": 41.41009,
        "Longitude": -81.96248,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.96248,
          41.41009
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW25",
        "waypoint": 36,
        "res": "Bradley Woods",
        "Latitude": 41.42268,
        "Longitude": -81.9435,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.9435,
          41.42268
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK156",
        "waypoint": 116,
        "res": "Brecksville",
        "Latitude": 41.30324,
        "Longitude": -81.75943,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.75943,
          41.30324
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR69",
        "waypoint": 69,
        "res": "Mill Stream Run",
        "Latitude": 41.346509,
        "Longitude": -81.837866,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.837866,
          41.346509
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR178",
        "waypoint": 210,
        "res": "Rocky River",
        "Latitude": 41.42188,
        "Longitude": -81.85783,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 4,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85783,
          41.42188
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR277",
        "waypoint": 313,
        "res": "Rocky River",
        "Latitude": 41.451173,
        "Longitude": -81.828779,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 4,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.828779,
          41.451173
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR313",
        "waypoint": 435,
        "res": "Rocky River",
        "Latitude": 41.46952,
        "Longitude": -81.82982,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82982,
          41.46952
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR381",
        "waypoint": 361,
        "res": "Rocky River",
        "Latitude": 41.46388,
        "Longitude": -81.81808,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 7,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.81808,
          41.46388
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE37",
        "waypoint": 133,
        "res": "Bedford",
        "Latitude": 41.37691,
        "Longitude": -81.54716,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 2,
        "tower_tot": 3,
        "tot_ash": 8,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54716,
          41.37691
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW23",
        "waypoint": 34,
        "res": "Bradley Woods",
        "Latitude": 41.42353,
        "Longitude": -81.94348,
        "year": 2012,
        "rul_L": 6,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 9,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94348,
          41.42353
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS27",
        "waypoint": 19,
        "res": "Mill Stream Run",
        "Latitude": 41.31941,
        "Longitude": -81.80138,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 9,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.80138,
          41.31941
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR250",
        "waypoint": 285,
        "res": "Rocky River",
        "Latitude": 41.4465,
        "Longitude": -81.84036,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 2,
        "rul_tot": 4,
        "hug_tot": 2,
        "tower_tot": 3,
        "tot_ash": 9,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84036,
          41.4465
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE82",
        "waypoint": 181,
        "res": "Bedford",
        "Latitude": 41.376466,
        "Longitude": -81.564202,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 6,
        "tow_DMG_L": 1,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 3,
        "tow_DMG_R": 1,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 9,
        "tot_ash": 10,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.564202,
          41.376466
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE144",
        "waypoint": 235,
        "res": "Bedford",
        "Latitude": 41.38146,
        "Longitude": -81.50628,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 7,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 0,
        "tower_tot": 9,
        "tot_ash": 10,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.50628,
          41.38146
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS7",
        "waypoint": 60,
        "res": "Mill Stream Run",
        "Latitude": 41.310695,
        "Longitude": -81.785235,
        "year": 2012,
        "rul_L": 8,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 8,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.785235,
          41.310695
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR141",
        "waypoint": 141,
        "res": "Mill Stream Run",
        "Latitude": 41.33092,
        "Longitude": -81.82493,
        "year": 2011,
        "rul_L": 6,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 10,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82493,
          41.33092
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE116",
        "waypoint": 207,
        "res": "Bedford",
        "Latitude": 41.38391,
        "Longitude": -81.52766,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 5,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 8,
        "tot_ash": 12,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.52766,
          41.38391
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE166",
        "waypoint": 257,
        "res": "Bedford",
        "Latitude": 41.37584,
        "Longitude": -81.49042,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 7,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 0,
        "tower_tot": 7,
        "tot_ash": 12,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.49042,
          41.37584
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS80",
        "waypoint": 81,
        "res": "Mill Stream Run",
        "Latitude": 41.30444,
        "Longitude": -81.77779,
        "year": 2012,
        "rul_L": 7,
        "rule_DMG_L": 2,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 13,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77779,
          41.30444
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS3",
        "waypoint": 56,
        "res": "Mill Stream Run",
        "Latitude": 41.311162,
        "Longitude": -81.787496,
        "year": 2012,
        "rul_L": 8,
        "rule_DMG_L": 2,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 5,
        "tower_tot": 0,
        "tot_ash": 14,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.787496,
          41.311162
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW8",
        "waypoint": 19,
        "res": "Bradley Woods",
        "Latitude": 41.40933,
        "Longitude": -81.9626,
        "year": 2012,
        "rul_L": 6,
        "rule_DMG_L": 1,
        "hug_L": 8,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 9,
        "tower_tot": 0,
        "tot_ash": 15,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.9626,
          41.40933
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS48",
        "waypoint": 50,
        "res": "Mill Stream Run",
        "Latitude": 41.311251,
        "Longitude": -81.790669,
        "year": 2012,
        "rul_L": 6,
        "rule_DMG_L": 1,
        "hug_L": 3,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 6,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 9,
        "tower_tot": 0,
        "tot_ash": 15,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.790669,
          41.311251
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR316",
        "waypoint": 438,
        "res": "Rocky River",
        "Latitude": 41.46904,
        "Longitude": -81.82791,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 6,
        "tower_tot": 3,
        "tot_ash": 15,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82791,
          41.46904
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE101",
        "waypoint": 145,
        "res": "Bedford",
        "Latitude": 41.36351,
        "Longitude": -81.56694,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 4,
        "rule_DMG_R": 0,
        "hug_R": 4,
        "hug_DMG_R": 2,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 5,
        "tower_tot": 3,
        "tot_ash": 17,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.56694,
          41.36351
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS88",
        "waypoint": 89,
        "res": "Mill Stream Run",
        "Latitude": 41.30354,
        "Longitude": -81.7736,
        "year": 2012,
        "rul_L": 6,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 8,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 14,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 17,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.7736,
          41.30354
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS63",
        "waypoint": 64,
        "res": "Mill Stream Run",
        "Latitude": 41.30937,
        "Longitude": -81.78361,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 1,
        "hug_L": 4,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 1,
        "hug_R": 5,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 9,
        "tower_tot": 0,
        "tot_ash": 18,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78361,
          41.30937
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS83",
        "waypoint": 84,
        "res": "Mill Stream Run",
        "Latitude": 41.30418,
        "Longitude": -81.77626,
        "year": 2012,
        "rul_L": 6,
        "rule_DMG_L": 2,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 8,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 14,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 20,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77626,
          41.30418
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR71",
        "waypoint": 71,
        "res": "Mill Stream Run",
        "Latitude": 41.34647,
        "Longitude": -81.83875,
        "year": 2011,
        "rul_L": 6,
        "rule_DMG_L": 0,
        "hug_L": 6,
        "hug_DMG_L": 2,
        "tow_L": 3,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 11,
        "hug_tot": 6,
        "tower_tot": 3,
        "tot_ash": 20,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.83875,
          41.34647
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "SC187",
        "waypoint": 187,
        "res": "South Chagrin",
        "Latitude": 41.3997,
        "Longitude": -81.47753,
        "year": 2011,
        "rul_L": 7,
        "rule_DMG_L": 0,
        "hug_L": 25,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 12,
        "hug_tot": 25,
        "tower_tot": 1,
        "tot_ash": 38,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.47753,
          41.3997
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR62",
        "waypoint": 81,
        "res": "Rocky River",
        "Latitude": 41.39177,
        "Longitude": -81.87777,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 3,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 0,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87777,
          41.39177
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR268",
        "waypoint": 304,
        "res": "Rocky River",
        "Latitude": 41.450948,
        "Longitude": -81.832747,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.832747,
          41.450948
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW28",
        "waypoint": 39,
        "res": "Bradley Woods",
        "Latitude": 41.42148,
        "Longitude": -81.94354,
        "year": 2012,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 4,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 2,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 8,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94354,
          41.42148
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE35",
        "waypoint": 131,
        "res": "Bedford",
        "Latitude": 41.37757,
        "Longitude": -81.54826,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 3,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 1,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 9,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54826,
          41.37757
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE56",
        "waypoint": 154,
        "res": "Bedford",
        "Latitude": 41.37082,
        "Longitude": -81.55169,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 5,
        "tow_DMG_R": 1,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 7,
        "tot_ash": 9,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.55169,
          41.37082
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS76",
        "waypoint": 77,
        "res": "Mill Stream Run",
        "Latitude": 41.30482,
        "Longitude": -81.77976,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 3,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 2,
        "tow_DMG_R": 2,
        "rul_tot": 3,
        "hug_tot": 4,
        "tower_tot": 2,
        "tot_ash": 9,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77976,
          41.30482
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS78",
        "waypoint": 79,
        "res": "Mill Stream Run",
        "Latitude": 41.30467,
        "Longitude": -81.77882,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 5,
        "hug_DMG_R": 1,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 6,
        "tower_tot": 2,
        "tot_ash": 11,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77882,
          41.30467
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR264",
        "waypoint": 300,
        "res": "Rocky River",
        "Latitude": 41.449032,
        "Longitude": -81.832989,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 0,
        "hug_L": 4,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 1,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 8,
        "hug_tot": 5,
        "tower_tot": 1,
        "tot_ash": 14,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.832989,
          41.449032
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS72",
        "waypoint": 73,
        "res": "Mill Stream Run",
        "Latitude": 41.30578,
        "Longitude": -81.7817,
        "year": 2012,
        "rul_L": 6,
        "rule_DMG_L": 2,
        "hug_L": 7,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 7,
        "tower_tot": 2,
        "tot_ash": 16,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.7817,
          41.30578
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK165",
        "waypoint": 125,
        "res": "Brecksville",
        "Latitude": 41.3033,
        "Longitude": -81.75468,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 10,
        "rule_DMG_R": 2,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 15,
        "hug_tot": 2,
        "tower_tot": 0,
        "tot_ash": 17,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.75468,
          41.3033
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS89",
        "waypoint": 90,
        "res": "Mill Stream Run",
        "Latitude": 41.30333,
        "Longitude": -81.77312,
        "year": 2012,
        "rul_L": 9,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 1,
        "hug_R": 3,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 14,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 17,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77312,
          41.30333
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS65",
        "waypoint": 66,
        "res": "Mill Stream Run",
        "Latitude": 41.30854,
        "Longitude": -81.78318,
        "year": 2012,
        "rul_L": 8,
        "rule_DMG_L": 1,
        "hug_L": 4,
        "hug_DMG_L": 1,
        "tow_L": 3,
        "tow_DMG_L": 1,
        "rule_R": 3,
        "rule_DMG_R": 1,
        "hug_R": 3,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 11,
        "hug_tot": 7,
        "tower_tot": 3,
        "tot_ash": 21,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78318,
          41.30854
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS4",
        "waypoint": 57,
        "res": "Mill Stream Run",
        "Latitude": 41.31112,
        "Longitude": -81.78698,
        "year": 2012,
        "rul_L": 15,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 9,
        "rule_DMG_R": 1,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 24,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 27,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78698,
          41.31112
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS87",
        "waypoint": 88,
        "res": "Mill Stream Run",
        "Latitude": 41.303677,
        "Longitude": -81.774136,
        "year": 2012,
        "rul_L": 10,
        "rule_DMG_L": 2,
        "hug_L": 5,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 13,
        "rule_DMG_R": 0,
        "hug_R": 4,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 23,
        "hug_tot": 9,
        "tower_tot": 0,
        "tot_ash": 32,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.774136,
          41.303677
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS54",
        "waypoint": 31,
        "res": "Mill Stream Run",
        "Latitude": 41.31618,
        "Longitude": -81.7973,
        "year": 2012,
        "rul_L": 6,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 30,
        "rule_DMG_R": 1,
        "hug_R": 5,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 36,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 42,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.7973,
          41.31618
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BW26",
        "waypoint": 37,
        "res": "Bradley Woods",
        "Latitude": 41.42225,
        "Longitude": -81.94347,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.94347,
          41.42225
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR285",
        "waypoint": 322,
        "res": "Rocky River",
        "Latitude": 41.453163,
        "Longitude": -81.8265,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 1,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8265,
          41.453163
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS35",
        "waypoint": 27,
        "res": "Mill Stream Run",
        "Latitude": 41.31649,
        "Longitude": -81.7995,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 2,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.7995,
          41.31649
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR281",
        "waypoint": 317,
        "res": "Rocky River",
        "Latitude": 41.451611,
        "Longitude": -81.827536,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 3,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 3,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.827536,
          41.451611
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS77",
        "waypoint": 78,
        "res": "Mill Stream Run",
        "Latitude": 41.30473,
        "Longitude": -81.77939,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 1,
        "hug_tot": 4,
        "tower_tot": 2,
        "tot_ash": 7,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77939,
          41.30473
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR23",
        "waypoint": 40,
        "res": "Rocky River",
        "Latitude": 41.38341,
        "Longitude": -81.86521,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 7,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86521,
          41.38341
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR252",
        "waypoint": 287,
        "res": "Rocky River",
        "Latitude": 41.447395,
        "Longitude": -81.840036,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 4,
        "tot_ash": 8,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.840036,
          41.447395
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR288",
        "waypoint": 325,
        "res": "Rocky River",
        "Latitude": 41.453921,
        "Longitude": -81.825241,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 3,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 3,
        "tower_tot": 4,
        "tot_ash": 8,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.825241,
          41.453921
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS49",
        "waypoint": 51,
        "res": "Mill Stream Run",
        "Latitude": 41.311191,
        "Longitude": -81.790194,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 6,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 6,
        "tower_tot": 0,
        "tot_ash": 10,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.790194,
          41.311191
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE33",
        "waypoint": 129,
        "res": "Bedford",
        "Latitude": 41.37849,
        "Longitude": -81.5485,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 2,
        "tow_DMG_L": 0,
        "rule_R": 4,
        "rule_DMG_R": 1,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 2,
        "tower_tot": 2,
        "tot_ash": 11,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.5485,
          41.37849
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS90",
        "waypoint": 91,
        "res": "Mill Stream Run",
        "Latitude": 41.3031,
        "Longitude": -81.77267,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 4,
        "hug_DMG_L": 2,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 6,
        "tower_tot": 2,
        "tot_ash": 11,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77267,
          41.3031
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE32",
        "waypoint": 128,
        "res": "Bedford",
        "Latitude": 41.37908,
        "Longitude": -81.54837,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 0,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 2,
        "hug_DMG_R": 1,
        "tow_R": 2,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 3,
        "tower_tot": 3,
        "tot_ash": 12,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.54837,
          41.37908
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE34",
        "waypoint": 130,
        "res": "Bedford",
        "Latitude": 41.377837,
        "Longitude": -81.548621,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 7,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 3,
        "tower_tot": 0,
        "tot_ash": 12,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.548621,
          41.377837
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR42",
        "waypoint": 60,
        "res": "Rocky River",
        "Latitude": 41.3896,
        "Longitude": -81.86961,
        "year": 2011,
        "rul_L": 4,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 3,
        "tow_DMG_L": 2,
        "rule_R": 3,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 1,
        "tower_tot": 4,
        "tot_ash": 12,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86961,
          41.3896
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR180",
        "waypoint": 212,
        "res": "Rocky River",
        "Latitude": 41.42257,
        "Longitude": -81.857856,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 7,
        "hug_DMG_L": 2,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 3,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 7,
        "tower_tot": 2,
        "tot_ash": 12,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.857856,
          41.42257
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE3",
        "waypoint": 98,
        "res": "Bedford",
        "Latitude": 41.38406,
        "Longitude": -81.53831,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 1,
        "hug_L": 2,
        "hug_DMG_L": 1,
        "tow_L": 4,
        "tow_DMG_L": 1,
        "rule_R": 4,
        "rule_DMG_R": 1,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 3,
        "tower_tot": 4,
        "tot_ash": 13,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.53831,
          41.38406
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR43",
        "waypoint": 61,
        "res": "Rocky River",
        "Latitude": 41.39004,
        "Longitude": -81.86965,
        "year": 2011,
        "rul_L": 8,
        "rule_DMG_L": 2,
        "hug_L": 6,
        "hug_DMG_L": 2,
        "tow_L": 3,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 8,
        "hug_tot": 6,
        "tower_tot": 3,
        "tot_ash": 17,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.86965,
          41.39004
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS70",
        "waypoint": 71,
        "res": "Mill Stream Run",
        "Latitude": 41.30656,
        "Longitude": -81.78223,
        "year": 2012,
        "rul_L": 17,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 5,
        "rule_DMG_R": 1,
        "hug_R": 4,
        "hug_DMG_R": 1,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 22,
        "hug_tot": 6,
        "tower_tot": 1,
        "tot_ash": 29,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78223,
          41.30656
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BK150",
        "waypoint": 110,
        "res": "Brecksville",
        "Latitude": 41.302821,
        "Longitude": -81.762529,
        "year": 2012,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 1,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 5,
        "tow_DMG_R": 2,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 7,
        "tot_ash": 9,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.762529,
          41.302821
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS52",
        "waypoint": 29,
        "res": "Mill Stream Run",
        "Latitude": 41.316237,
        "Longitude": -81.798501,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 2,
        "rule_DMG_R": 1,
        "hug_R": 3,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 5,
        "tower_tot": 1,
        "tot_ash": 12,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.798501,
          41.316237
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS79",
        "waypoint": 80,
        "res": "Mill Stream Run",
        "Latitude": 41.304652,
        "Longitude": -81.778294,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 4,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 1,
        "rul_tot": 3,
        "hug_tot": 6,
        "tower_tot": 3,
        "tot_ash": 12,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.778294,
          41.304652
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR182",
        "waypoint": 214,
        "res": "Rocky River",
        "Latitude": 41.42317,
        "Longitude": -81.85728,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 0,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 4,
        "tow_DMG_L": 2,
        "rule_R": 4,
        "rule_DMG_R": 1,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 3,
        "tower_tot": 5,
        "tot_ash": 14,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.85728,
          41.42317
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS58",
        "waypoint": 35,
        "res": "Mill Stream Run",
        "Latitude": 41.31487,
        "Longitude": -81.79637,
        "year": 2012,
        "rul_L": 7,
        "rule_DMG_L": 2,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 2,
        "rule_DMG_R": 1,
        "hug_R": 5,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 8,
        "tower_tot": 0,
        "tot_ash": 17,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.79637,
          41.31487
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE81",
        "waypoint": 180,
        "res": "Bedford",
        "Latitude": 41.376904,
        "Longitude": -81.563715,
        "year": 2012,
        "rul_L": 4,
        "rule_DMG_L": 1,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 8,
        "tow_DMG_L": 1,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 4,
        "tow_DMG_R": 1,
        "rul_tot": 5,
        "hug_tot": 1,
        "tower_tot": 12,
        "tot_ash": 18,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.563715,
          41.376904
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS62",
        "waypoint": 63,
        "res": "Mill Stream Run",
        "Latitude": 41.309721,
        "Longitude": -81.783839,
        "year": 2012,
        "rul_L": 5,
        "rule_DMG_L": 1,
        "hug_L": 3,
        "hug_DMG_L": 1,
        "tow_L": 3,
        "tow_DMG_L": 1,
        "rule_R": 4,
        "rule_DMG_R": 2,
        "hug_R": 5,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 8,
        "tower_tot": 3,
        "tot_ash": 20,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.783839,
          41.309721
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR137",
        "waypoint": 166,
        "res": "Rocky River",
        "Latitude": 41.414962,
        "Longitude": -81.8757,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 1,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 4,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.8757,
          41.414962
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR101",
        "waypoint": 121,
        "res": "Rocky River",
        "Latitude": 41.40485,
        "Longitude": -81.88503,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 2,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88503,
          41.40485
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR151",
        "waypoint": 181,
        "res": "Rocky River",
        "Latitude": 41.41937,
        "Longitude": -81.87075,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 2,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87075,
          41.41937
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR366",
        "waypoint": 346,
        "res": "Rocky River",
        "Latitude": 41.46088,
        "Longitude": -81.82159,
        "year": 2011,
        "rul_L": 0,
        "rule_DMG_L": 0,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 3,
        "tot_ash": 5,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82159,
          41.46088
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR55",
        "waypoint": 55,
        "res": "Mill Stream Run",
        "Latitude": 41.34984,
        "Longitude": -81.84345,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 2,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 1,
        "tower_tot": 2,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.84345,
          41.34984
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR83",
        "waypoint": 83,
        "res": "Mill Stream Run",
        "Latitude": 41.34861,
        "Longitude": -81.842798,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 6,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.842798,
          41.34861
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR289",
        "waypoint": 326,
        "res": "Rocky River",
        "Latitude": 41.454065,
        "Longitude": -81.824663,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 3,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 7,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.824663,
          41.454065
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "BE64",
        "waypoint": 163,
        "res": "Bedford",
        "Latitude": 41.371405,
        "Longitude": -81.555528,
        "year": 2012,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 2,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 4,
        "tower_tot": 0,
        "tot_ash": 9,
        "group": 1,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.555528,
          41.371405
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR77",
        "waypoint": 96,
        "res": "Rocky River",
        "Latitude": 41.39559,
        "Longitude": -81.88308,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 4,
        "tow_DMG_L": 2,
        "rule_R": 3,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 5,
        "hug_tot": 1,
        "tower_tot": 4,
        "tot_ash": 10,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88308,
          41.39559
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR82",
        "waypoint": 82,
        "res": "Mill Stream Run",
        "Latitude": 41.348222,
        "Longitude": -81.842822,
        "year": 2011,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 4,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 4,
        "hug_tot": 3,
        "tower_tot": 4,
        "tot_ash": 11,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.842822,
          41.348222
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MSR70",
        "waypoint": 70,
        "res": "Mill Stream Run",
        "Latitude": 41.346318,
        "Longitude": -81.838356,
        "year": 2011,
        "rul_L": 6,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 3,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 9,
        "hug_tot": 2,
        "tower_tot": 1,
        "tot_ash": 12,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.838356,
          41.346318
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR69",
        "waypoint": 88,
        "res": "Rocky River",
        "Latitude": 41.39398,
        "Longitude": -81.88055,
        "year": 2011,
        "rul_L": 9,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 2,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 10,
        "hug_tot": 0,
        "tower_tot": 3,
        "tot_ash": 13,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.88055,
          41.39398
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR68",
        "waypoint": 87,
        "res": "Rocky River",
        "Latitude": 41.39392,
        "Longitude": -81.87985,
        "year": 2011,
        "rul_L": 7,
        "rule_DMG_L": 2,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 3,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 7,
        "hug_tot": 5,
        "tower_tot": 3,
        "tot_ash": 15,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87985,
          41.39392
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS86",
        "waypoint": 87,
        "res": "Mill Stream Run",
        "Latitude": 41.303778,
        "Longitude": -81.774658,
        "year": 2012,
        "rul_L": 3,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 6,
        "rule_DMG_R": 1,
        "hug_R": 6,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 9,
        "hug_tot": 8,
        "tower_tot": 1,
        "tot_ash": 18,
        "group": 2,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.774658,
          41.303778
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS5",
        "waypoint": 58,
        "res": "Mill Stream Run",
        "Latitude": 41.311044,
        "Longitude": -81.786345,
        "year": 2012,
        "rul_L": 12,
        "rule_DMG_L": 2,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 10,
        "rule_DMG_R": 2,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 0,
        "rul_tot": 22,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 26,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.786345,
          41.311044
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS82",
        "waypoint": 83,
        "res": "Mill Stream Run",
        "Latitude": 41.30426,
        "Longitude": -81.77676,
        "year": 2012,
        "rul_L": 8,
        "rule_DMG_L": 2,
        "hug_L": 8,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 6,
        "rule_DMG_R": 1,
        "hug_R": 3,
        "hug_DMG_R": 1,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 14,
        "hug_tot": 11,
        "tower_tot": 1,
        "tot_ash": 26,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.77676,
          41.30426
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS8",
        "waypoint": 61,
        "res": "Mill Stream Run",
        "Latitude": 41.310471,
        "Longitude": -81.78482,
        "year": 2012,
        "rul_L": 24,
        "rule_DMG_L": 2,
        "hug_L": 6,
        "hug_DMG_L": 2,
        "tow_L": 0,
        "tow_DMG_L": 0,
        "rule_R": 9,
        "rule_DMG_R": 2,
        "hug_R": 4,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 33,
        "hug_tot": 10,
        "tower_tot": 0,
        "tot_ash": 43,
        "group": 3,
        "damage": 1,
        "marker-color": "#FEFE00",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78482,
          41.310471
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR284",
        "waypoint": 321,
        "res": "Rocky River",
        "Latitude": 41.45278,
        "Longitude": -81.82677,
        "year": 2011,
        "rul_L": 1,
        "rule_DMG_L": 2,
        "hug_L": 0,
        "hug_DMG_L": 0,
        "tow_L": 5,
        "tow_DMG_L": 2,
        "rule_R": 0,
        "rule_DMG_R": 0,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 3,
        "rul_tot": 1,
        "hug_tot": 1,
        "tower_tot": 6,
        "tot_ash": 8,
        "group": 1,
        "damage": 2,
        "marker-color": "#5D150F",
        "marker-size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82677,
          41.45278
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR67",
        "waypoint": 86,
        "res": "Rocky River",
        "Latitude": 41.39359,
        "Longitude": -81.87955,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 1,
        "hug_L": 1,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 1,
        "rule_DMG_R": 2,
        "hug_R": 2,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 6,
        "hug_tot": 3,
        "tower_tot": 1,
        "tot_ash": 10,
        "group": 2,
        "damage": 2,
        "marker-color": "#5D150F",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.87955,
          41.39359
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR181",
        "waypoint": 213,
        "res": "Rocky River",
        "Latitude": 41.4229,
        "Longitude": -81.857526,
        "year": 2011,
        "rul_L": 2,
        "rule_DMG_L": 2,
        "hug_L": 3,
        "hug_DMG_L": 2,
        "tow_L": 4,
        "tow_DMG_L": 2,
        "rule_R": 6,
        "rule_DMG_R": 2,
        "hug_R": 1,
        "hug_DMG_R": 2,
        "tow_R": 0,
        "tow_DMG_R": 0,
        "rul_tot": 8,
        "hug_tot": 4,
        "tower_tot": 4,
        "tot_ash": 16,
        "group": 2,
        "damage": 2,
        "marker-color": "#5D150F",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.857526,
          41.4229
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "RR315",
        "waypoint": 437,
        "res": "Rocky River",
        "Latitude": 41.46915,
        "Longitude": -81.82865,
        "year": 2011,
        "rul_L": 5,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 5,
        "tow_DMG_L": 2,
        "rule_R": 3,
        "rule_DMG_R": 2,
        "hug_R": 0,
        "hug_DMG_R": 0,
        "tow_R": 2,
        "tow_DMG_R": 2,
        "rul_tot": 8,
        "hug_tot": 2,
        "tower_tot": 7,
        "tot_ash": 17,
        "group": 2,
        "damage": 2,
        "marker-color": "#5D150F",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.82865,
          41.46915
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "uid": "MS6",
        "waypoint": 59,
        "res": "Mill Stream Run",
        "Latitude": 41.310887,
        "Longitude": -81.78574,
        "year": 2012,
        "rul_L": 15,
        "rule_DMG_L": 2,
        "hug_L": 2,
        "hug_DMG_L": 2,
        "tow_L": 1,
        "tow_DMG_L": 2,
        "rule_R": 4,
        "rule_DMG_R": 2,
        "hug_R": 8,
        "hug_DMG_R": 2,
        "tow_R": 1,
        "tow_DMG_R": 2,
        "rul_tot": 19,
        "hug_tot": 10,
        "tower_tot": 2,
        "tot_ash": 31,
        "group": 3,
        "damage": 2,
        "marker-color": "#5D150F",
        "marker-size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -81.78574,
          41.310887
        ]
      }
    }
  ]
}
);


		// Add custom popup html to each marker
		myLayer.on('layeradd', function(e) {
			var marker = e.layer;
			var feature = marker.feature; 			
			
		// Create custom popup content
		// Javascript is writing html in the popup window to populate features dynamically
			var popupContent =  '<div>' + '<h2>' + feature.properties.res + '</h2>' + 
			'<table id="popup-table">' + 
				'<tr>' + 
					'<th>' + '<p>&nbsp;</p>' + '</th>' +
					'<th>' + '<p>Number of Trees</p>' + '</th>' +
					'<th>' + '<p>Woodpecker Damage</p>' + '</th>' +
				'</tr>' +
				'<tr class="grey-row">' + 
					'<td>' + '<p>4-12" dbh (left)</p>' + '</td>' +
					'<td>' + feature.properties.rul_L + '</td>' +
					'<td>' + feature.properties.rule_DMG_L + '</td>' +
				'</tr>' +
				'<tr>' + 
					'<td>' + '<p>4-12" dbh (right)</p>' + '</td>' +
					'<td>' + feature.properties.rule_R + '</td>' +
					'<td>' + feature.properties.rule_DMG_R + '</td>' +
				'</tr>' +
				'<tr  class="grey-row">' + 
					'<td>' + '<p>13-20" dbh (left)</p>' + '</td>' +
					'<td>' + feature.properties.hug_L + '</td>' +
					'<td>' + feature.properties.hug_DMG_L + '</td>' +
				'</tr>' +
				'<tr>' + 
					'<td>' + '<p>13-20" dbh (right)</p>' + '</td>' +
					'<td>' + feature.properties.hug_R + '</td>' +
					'<td>' + feature.properties.hug_DMG_R + '</td>' +
				'</tr>' +
				'<tr  class="grey-row">' + 
					'<td>' + '<p>20"+ dbh (left)</p>' + '</td>' +
					'<td>' + feature.properties.tow_L + '</td>' +
					'<td>' + feature.properties.tow_DMG_L + '</td>' +
				'</tr>' +
				'<tr>' + 
					'<td>' + '<p>20"+ dbh (right)</p>' + '</td>' +
					'<td>' + feature.properties.tow_R + '</td>' +
					'<td>' + feature.properties.tow_DMG_R + '</td>' +
				'</tr>' +
				'<tr  class="grey-row">' + 
					'<td>' + '<p>Total Trees</p>' + '</td>' +
					'<td>' + feature.properties.tot_ash + '</td>' +
					'<td>' + '<p> - </p>' + '</td>' +
				'</tr>' +
			'</table>' +
			'</div>' ;

		// http://leafletjs.com/reference.html#popup
		// Bind the popups to their corresponding data point
			marker.bindPopup(popupContent,{
				closeButton: false,
				minWidth: 320
			});
		});
myLayer.setGeoJSON(geojson)

map.setView([41.383249, -81.695194],11);