(this.webpackJsonpnearby_restaurants=this.webpackJsonpnearby_restaurants||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/filledStar.298726f0.svg"},function(e,a,t){e.exports=t.p+"static/media/emptyStar.83ee06f8.svg"},function(e,a,t){e.exports=t.p+"static/media/currentLocation.ffe692f4.svg"},function(e,a,t){e.exports=t.p+"static/media/restaurantMarker.5196798a.svg"},function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),i=t.n(c),o=(t(13),t(14),t(1)),l=t(4),s=t.n(l),u=t(5),m=t.n(u);function g(e){var a,t=e.type,n=e.rating;return n&&(a=Math.round(n/5*100)),r.a.createElement("div",{className:"rating-".concat(t),style:n&&{width:"".concat(a,"%")}},new Array(5).fill(0).map((function(e,a){return r.a.createElement("img",{src:"empty"===t?m.a:s.a,alt:t,key:a})})))}function p(e){var a=e.item,t=a.name,n=a.icon,c=a.rating,i=a.user_ratings_total,o=a.vicinity,l=a.photos,s=a.opening_hours;return s&&console.log("is open : ",s.isOpen()),r.a.createElement("div",{className:"restaurant"},r.a.createElement("div",{className:"title"},r.a.createElement("img",{className:"icon",src:n,alt:"icon"}),r.a.createElement("span",{className:"name"}," ",t)),c&&r.a.createElement("div",{className:"ratings"},r.a.createElement("span",{className:"number"},c),r.a.createElement("div",{className:"rating-wrap"},r.a.createElement(g,{type:"empty"}),r.a.createElement(g,{type:"fill",rating:c})),r.a.createElement("span",{className:"total-ratings"},"(",i,")")),l&&r.a.createElement("img",{src:l,width:350,height:200,alt:"img"}),r.a.createElement("div",{className:"address"},o))}t(15);function d(e){var a=e.restaurants;return r.a.createElement("div",null,r.a.createElement("div",{id:"map"}),r.a.createElement("div",{className:"all-restaurants"},null==a?r.a.createElement("div",null,"loading.."):a.map((function(e){return r.a.createElement(p,{item:e,key:e.reference})}))))}t(16);var f=t(6),v=t.n(f),E=t(7),h=t.n(E),w=window.google;function y(e){var a=e.location,t=e.getCurrentLocation,c=e.setLocation,i=e.restaurants,o=Object(n.useRef)(null),l=Object(n.useRef)(null);Object(n.useEffect)((function(){s()}));var s=function(){var e=new w.maps.LatLng(a.latitude,a.longitude),t=new w.maps.Map(o.current,{zoom:15,center:new w.maps.LatLng(a.latitude,a.longitude)});if(new w.maps.Marker({position:e,title:"Current Location",map:t}),i){var n={url:h.a,size:new w.maps.Size(100,100),origin:new w.maps.Point(0,0),anchor:new w.maps.Point(17,34),scaledSize:new w.maps.Size(35,45)};i.forEach((function(e){var a=e.name,r=e.location;new w.maps.Marker({position:new w.maps.LatLng(r.lat,r.lng),title:a,animation:w.maps.Animation.DROP,icon:n,map:t})}))}u()},u=function(){var e=l.current,a=new w.maps.places.Autocomplete(e);a.setFields(["place_id","geometry","formatted_address"]),a.addListener("place_changed",(function(){var t=a.getPlace();if(t.geometry){var n={latitude:t.geometry.location.lat(),longitude:t.geometry.location.lng()};c(n),e.value=t.formatted_address}}))};return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"location-searchbox"},r.a.createElement("input",{className:"searchbox",ref:l,type:"text",placeholder:"Search location"}),r.a.createElement("div",{className:"current-location",onClick:function(){return t()}},r.a.createElement("span",null,"  Use current location"),r.a.createElement("img",{src:v.a,className:"current-location-icon",alt:"get-location"}))),r.a.createElement("div",{className:"map-container",ref:o}))}t(17);var N=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],c=a[1],i=Object(n.useState)(""),l=Object(o.a)(i,2),s=l[0],u=l[1],m=Object(n.useState)({latitude:23.7815222,longitude:90.4004866}),g=Object(o.a)(m,2),p=g[0],f=g[1],v=Object(n.useState)(3e3),E=Object(o.a)(v,2),h=E[0],w=E[1];Object(n.useEffect)((function(){!function(){var e=new window.google.maps.places.PlacesService(document.getElementById("map")),a={location:{lat:p.latitude,lng:p.longitude},radius:h,type:["restaurant"],name:s};e.nearbySearch(a,(function(e,a,t){console.log("results : ",e),console.log("PlaceSearchPagination : ",t),a===window.google.maps.places.PlacesServiceStatus.OK?(console.log("results : ",e),c(e.map((function(e){var a=e.icon,t=e.name,n=e.photos,r=e.price_level,c=e.rating,i=e.user_ratings_total,o=e.vicinity,l=e.geometry,s=(e.opening_hours,e.reference);return{icon:a,name:t,photos:n?n[0].getUrl():null,price_level:r,rating:c,user_ratings_total:i,vicinity:o,reference:s,location:{lat:l.location.lat(),lng:l.location.lng()}}})))):"ZERO_RESULTS"===a&&c([])}))}()}),[p,h,s]);return r.a.createElement("div",{className:"home"},r.a.createElement(y,{location:p,restaurants:t,getCurrentLocation:function(){navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){f(e.coords)}))},setLocation:f,radius:h}),r.a.createElement("div",{className:"search-restaurants"},r.a.createElement("input",{type:"text",id:"restaurant",className:"restaurants-search-input",value:s,placeholder:"Search Restaurants...",onChange:function(e){return u(e.target.value)}}),r.a.createElement("div",{className:"radius-field"},r.a.createElement("span",{className:"label"},"Distance"),r.a.createElement("input",{min:10,step:100,max:2e4,id:"radius",type:"range",value:h,onChange:function(e){return w(e.target.value)}}),r.a.createElement("span",{className:"distance"},(h/1e3).toFixed(2)," km"))),r.a.createElement("h3",{className:"header"},"  Available Restaurants  "),r.a.createElement(d,{restaurants:t}))};var b=function(){return r.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.d477e2fe.chunk.js.map