
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "OSMStandard_0": {
            "type": "raster",
            "tiles": ["http://tile.openstreetmap.org/{z}/{x}/{y}.png"],
            "tileSize": 256
        },
        "Basin_1": {
            "type": "geojson",
            "data": json_Basin_1
        }
                    ,
        "Pointsfromtable_2": {
            "type": "geojson",
            "data": json_Pointsfromtable_2
        }
                    ,
        "Pointsfromtable_3": {
            "type": "geojson",
            "data": json_Pointsfromtable_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_OSMStandard_0_0",
            "type": "raster",
            "source": "OSMStandard_0"
        },
        {
            "id": "lyr_Basin_1_0",
            "type": "fill",
            "source": "Basin_1",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#729b6f'}
        }
,
        {
            "id": "lyr_Pointsfromtable_2_0",
            "type": "circle",
            "source": "Pointsfromtable_2",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#f3a6b2', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
,
        {
            "id": "lyr_Pointsfromtable_3_0",
            "type": "circle",
            "source": "Pointsfromtable_3",
            "layout": {},
            "paint": {'circle-radius': ['/', 7.142857142857142, 2], 'circle-color': '#e15989', 'circle-opacity': 1.0, 'circle-stroke-width': 1, 'circle-stroke-color': '#232323'}
        }
],
}