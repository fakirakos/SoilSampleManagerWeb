import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import PopupTemplate from "@arcgis/core/PopupTemplate.js";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils.js";
//import  {FieldModel,MarkerModel,UserModel,MapDTO,MapCoordinatesDTO} from './models';
esriConfig.apiKey="AAPKea1bd3a558ed4fcfadf4fee2e8a0a85bnyVKrRZU1lpEF1UZbI7Ud2wY62GvUVIcvvGzjXIFoiNTPxDhJaZE6N3ebenbXAwU";
import {placeHolderMarkerModel,placeHolderAnalysisModel} from './models.js';


esriConfig.apiKey =           "AAPKea1bd3a558ed4fcfadf4fee2e8a0a85bnyVKrRZU1lpEF1UZbI7Ud2wY62GvUVIcvvGzjXIFoiNTPxDhJaZE6N3ebenbXAwU";

const map = new Map({
  basemap: "arcgis-imagery" // Basemap layer service
});

const view = new MapView({
  map: map,
  center: [-118.805, 34.027], // Longitude, latitude
  zoom: 13, // Zoom level
  container: "viewDiv" // Div element
});

const graphicsLayer = new GraphicsLayer();
map.add(graphicsLayer);
const targetDiv = document.getElementById("popup");

const analysisEdit= {
title: "Edit",
id: "edit-this",
className: "esri-icon-edit"
};

var template = new PopupTemplate({
title: "New Title",
content: "New Content",

actions: [analysisEdit]
});

const x = document.getElementById("sidebar");
const y= document.getElementById("text");
x.style.display = "none";

var testMarker=new placeHolderMarkerModel("Marker01","uuid01","34.0005930608889","-118.80657463861","analysis01");
const point = {  //Create a point
type: "point",
longitude: -118.80657463861,
latitude: 34.0005930608889
};
const attributes = { "MarkerType": "Marker" }



const simpleMarkerSymbol = {
type: "simple-marker",
color: [226, 119, 40],  // Orange
outline: {
color: [255, 255, 255], // White
width: 1
}
};

const pointGraphic = new Graphic({
geometry: point,
symbol: simpleMarkerSymbol,
attributes: attributes,
popupTemplate: template
});
graphicsLayer.add(pointGraphic);

view.on('click',(event) =>{
view.hitTest(event)
.then((response) =>{
if(response.results[0].graphic.attributes.MarkerType=="Marker")  console.log(response.results[0].graphic.attributes.MarkerType=="Marker"); //or attributes['MarkerType'];
// changeSidebar(response.results[0].graphic.attributes.MarkerType=="Marker");
});

reactiveUtils.on(
() => view.popup,
"trigger-action",
(event) => {  // Execute the measureThis() function if the measure-this action is clicked
if (event.action.id === "edit-this") {
changeSidebar("true");
}
});
  
var popup = view.popup;
popup.title = 'My Popup';                    
popup.content = 'My Popup Content';
popup.location = pointGraphic.geometry;      
popup.open();         
});
function changeSidebar(response){
if(response){

x.innerHTML="text changed";
x.style.display="block"; 
}
else{
x.style.display="none"
}
};


function generateMarker(testMarker){
  //get analysis from its marker id and fill attributes, if analysis is changed later on u can use https://developers.arcgis.com/javascript/latest/api-reference/esri-Graphic.html#setAttribute setattribute to fix the graphics based on analysis id
  let point = {  //Create a point
    type: "point",
    longitude: testMarker.longitude,
    latitude: testMarker.latitude
    };
    const attributes = { "MarkerType": "Marker","MarkerUuid": testMarker.MarkerUuid, "AnalysisId": testMarker.AnalysisId };
    
    
      
    let simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40],  // Orange
    outline: {
      color: [255, 255, 255], // White
      width: 1
    }
    };
      
    let pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol,
    attributes: attributes,
    popupTemplate: template
    });
    graphicsLayer.add(pointGraphic);
}