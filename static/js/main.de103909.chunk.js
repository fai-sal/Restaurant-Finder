(this.webpackJsonpnearby_restaurants=this.webpackJsonpnearby_restaurants||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/currentLocation.ffe692f4.svg"},function(e,a,t){e.exports=t.p+"static/media/restaurantMarker.06e59673.svg"},function(e,a,t){e.exports=t.p+"static/media/filledStar.298726f0.svg"},function(e,a,t){e.exports=t.p+"static/media/emptyStar.83ee06f8.svg"},function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),c=t.n(o),i=(t(13),t(14),t(1)),l=(t(15),t(4)),s=t.n(l),u=t(5),m=t.n(u),d=window.google;function g(e){var a=e.userLocation,t=e.restaurantLocation,o=e.getCurrentLocation,c=e.setLocation,i=e.restaurants,l=e.getDirection,u=Object(n.useRef)(null),g=Object(n.useRef)(null),p=new d.maps.LatLng(a.latitude,a.longitude),f=new window.google.maps.DirectionsRenderer;Object(n.useEffect)((function(){v()}));var v=function(){var e=new d.maps.Map(u.current,{zoom:15,center:p});if(new d.maps.Marker({position:p,title:"User Location",map:e}),i){var a={url:m.a,size:new d.maps.Size(100,100),origin:new d.maps.Point(0,0),anchor:new d.maps.Point(17,34),scaledSize:new d.maps.Size(35,45)};i.forEach((function(t){var n=t.name,r=t.location;new d.maps.Marker({position:new d.maps.LatLng(r.lat,r.lng),title:n,animation:d.maps.Animation.DROP,icon:a,map:e})}))}if(l){var n=new window.google.maps.LatLng(t.lat,t.lng);f.setMap(e),E();var r=new window.google.maps.LatLngBounds;r.extend(n),r.extend(p),e.fitBounds(r)}else w()},E=function(){(new window.google.maps.DirectionsService).route({origin:p,destination:new window.google.maps.LatLng(t.lat,t.lng),travelMode:"DRIVING"},(function(e,a){"OK"===a?f.setDirections(e):console.log("couldn't find route")}))},w=function(){var e=g.current,a=new d.maps.places.Autocomplete(e);a.setFields(["place_id","geometry","formatted_address"]),a.addListener("place_changed",(function(){var t=a.getPlace();if(t.geometry){var n={latitude:t.geometry.location.lat(),longitude:t.geometry.location.lng()};c(n),e.value=t.formatted_address}}))};return r.a.createElement(n.Fragment,null,!l&&r.a.createElement("div",{className:"location-searchbox"},r.a.createElement("input",{className:"searchbox",ref:g,type:"text",placeholder:"Search location"}),r.a.createElement("div",{className:"current-location",onClick:function(){return o()}},r.a.createElement("span",null,"  Use current location"),r.a.createElement("img",{src:s.a,className:"current-location-icon",alt:"get-location"}))),r.a.createElement("div",{className:"map-container".concat(l?" direction-map":""),ref:u}))}function p(e){var a=e.toogleModal,t=e.restaurant,n=e.restaurantLocation,o=e.userLocation,c=t.name,i=t.vicinity;return r.a.createElement("div",{className:"modal",tabIndex:"-1",role:"dialog",style:{display:"block",cursor:"auto"}},r.a.createElement("div",{className:"modal-dialog modal-lg",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title"},c),r.a.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:function(){return a("hide")}},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement(g,{userLocation:o,restaurantLocation:n,getDirection:!0}),r.a.createElement("p",{classname:"modal-location"}," Location : ",i)))))}var f=t(6),v=t.n(f),E=t(7),w=t.n(E);function h(e){var a,t=e.type,n=e.rating;return n&&(a=Math.round(n/5*100)),r.a.createElement("div",{className:"rating-".concat(t),style:n&&{width:"".concat(a,"%")}},new Array(5).fill(0).map((function(e,a){return r.a.createElement("img",{src:"empty"===t?w.a:v.a,alt:t,key:a})})))}t(16);function N(e){var a=e.restaurants,t=e.userLocation,o=Object(n.useState)(!1),c=Object(i.a)(o,2),l=c[0],s=c[1],u=Object(n.useState)(null),m=Object(i.a)(u,2),d=m[0],g=m[1],f=function(e){(null!==e&&e!==d||"hide"===e)&&(s(!l),g(d?null:e))};return r.a.createElement("div",{className:"container-fluid all-restaurants"},r.a.createElement("div",{id:"map"}),null==a?r.a.createElement("div",null,"loading.."):a.map((function(e){var a=e.id,n=e.name,o=e.rating,c=e.user_ratings_total,i=e.vicinity,s=e.photos,u=e.location,m=e.price_level,g=e.reference,v=l&&d===a;return r.a.createElement("div",{className:"restaurant col-xl-4 col-lg-6 col-sm-12 ".concat(v?"modal-parent":""),key:g},v&&r.a.createElement(p,{restaurant:e,restaurantLocation:u,userLocation:t,toogleModal:f}),r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"name"}," ",n),r.a.createElement("span",{className:"direction",onClick:function(){return f(a)}}," Get Direction")),o&&r.a.createElement("div",{className:"ratings"},r.a.createElement("span",{className:"number"},o),r.a.createElement("div",{className:"rating-wrap"},r.a.createElement(h,{type:"empty"}),r.a.createElement(h,{type:"fill",rating:o})),r.a.createElement("span",{className:"total-ratings"},"(",c,")"),m&&r.a.createElement("span",{className:"price"},new Array(m).fill(0).map((function(e){return"$"})))),s&&r.a.createElement("img",{src:s,width:350,height:200,alt:"img"}),r.a.createElement("div",{className:"address"},i))})))}t(17),t(18);var b=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],o=a[1],c=Object(n.useState)(null),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)(""),d=Object(i.a)(m,2),p=d[0],f=d[1],v=Object(n.useState)({latitude:23.7815222,longitude:90.4004866}),E=Object(i.a)(v,2),w=E[0],h=E[1],b=Object(n.useState)(3e3),y=Object(i.a)(b,2),L=y[0],O=y[1];Object(n.useEffect)((function(){!function(){var e=new window.google.maps.places.PlacesService(document.getElementById("map")),a={location:{lat:w.latitude,lng:w.longitude},radius:L,type:["restaurant"],name:p};e.nearbySearch(a,(function(e,a,t){t.hasNextPage&&u(t),a===window.google.maps.places.PlacesServiceStatus.OK?o(e.map((function(e){var a=e.id,t=e.icon,n=e.name,r=e.photos,o=e.price_level,c=e.rating,i=e.user_ratings_total,l=e.vicinity,s=e.geometry,u=e.opening_hours,m=e.reference;return{id:a,icon:t,name:n,photos:r?r[0].getUrl():null,price_level:o,rating:c,user_ratings_total:i,vicinity:l,reference:m,location:{lat:s.location.lat(),lng:s.location.lng()},isOpen:u?u.isOpen?u.isOpen():u.open_now:void 0}}))):"ZERO_RESULTS"===a&&o([])}))}()}),[w,L,p]);return r.a.createElement("div",{className:"home"},r.a.createElement(g,{userLocation:w,restaurants:t,getCurrentLocation:function(){navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){h(e.coords)}))},setLocation:h,radius:L}),r.a.createElement("div",{className:"search-restaurants"},r.a.createElement("input",{type:"text",id:"restaurant",className:"restaurants-search-input",value:p,placeholder:"Search Restaurants...",onChange:function(e){return f(e.target.value)}}),r.a.createElement("div",{className:"radius-field"},r.a.createElement("span",{className:"label"},"Distance"),r.a.createElement("input",{min:10,step:100,max:2e4,id:"radius",type:"range",value:L,onChange:function(e){return O(e.target.value)}}),r.a.createElement("span",{className:"distance"},(L/1e3).toFixed(2)," km"))),r.a.createElement("div",{className:"header"},r.a.createElement("span",{className:"restaurants"},"  Available Restaurants  "),s&&s.hasNextPage&&r.a.createElement("span",{className:"next-button",onClick:function(){return s.nextPage()}},"More Restaurants")),r.a.createElement(N,{restaurants:t,userLocation:w}))};var y=function(){return r.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.de103909.chunk.js.map