(this.webpackJsonpsix_degrees_of_spotify_react=this.webpackJsonpsix_degrees_of_spotify_react||[]).push([[0],{26:function(e,t,i){},38:function(e,t,i){"use strict";i.r(t);var s=i(1),a=i.n(s),n=i(19),c=i.n(n),r=(i(26),i(8)),o=i(0),l=function(){return Object(o.jsxs)("div",{className:"navBar",children:[Object(o.jsx)(r.c,{to:"/six_degrees_of_spotify",className:"navButton",children:"Home"}),Object(o.jsx)(r.c,{to:"/six_degrees_of_spotify/rules",className:"navButton",children:"Rules"}),Object(o.jsx)(r.c,{to:"/six_degrees_of_spotify/about",className:"navButton",children:"About"})]})},d=i(12),j=i(21),h=function(){var e=Object(o.jsx)(d.a,{icon:j.a});return Object(o.jsxs)("header",{className:"title",children:[Object(o.jsx)("h1",{children:e}),Object(o.jsxs)("h1",{children:["Six Degrees of ",Object(o.jsx)("span",{children:"Spotify"})]}),Object(o.jsxs)("h1",{id:"mobileTitle",children:["6",Object(o.jsx)("sup",{children:"o"}),e]})]})},b=i.p+"static/media/IMG-5993.07aeac46.jpg",u=i.p+"static/media/IMG-5997.b96f0364.jpg",m=i.p+"static/media/IMG-5998.eebac1ae.jpg",f=i.p+"static/media/IMG-5994.f5213088.jpg",g=i.p+"static/media/blondie.98dfdf04.jpeg",p=i(11),x="",O={hasAccessToken:function(){return x.length>0},getAccessToken:function(){if(x.length>0)return x;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(console.log(e,t),console.log("has access token"),e&&t){x=e[1];var i=Number(t[1]);return window.setTimeout((function(){return x=""}),1e3*i),window.history.pushState("Access Token",null,"/"),x}var s="https://accounts.spotify.com/authorize?client_id=".concat("5cad4d3bde5f483e94d38253735b91b1","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("https://leemaskell.github.io/six_degrees_of_spotify/playScreen");window.location=s},parseUrlForToken:function(){var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){x=e[1];var i=Number(t[1]);window.setTimeout((function(){return x=""}),1e3*i),window.history.pushState("Access Token",null,"/")}},search:function(e){var t=O.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return e.tracks?e.tracks.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri}})):[]}))},getRelatedArtists:function(e){var t=O.getAccessToken();return fetch("https://api.spotify.com/v1/artists/".concat(e,"/related-artists"),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return e.artists.map((function(e){return{name:e.name,ref:e.id,image:e.images.length>0?e.images[0].url:""}}))}))}},y=O,v=function(){var e=Object(o.jsx)(d.a,{icon:p.b}),t=Object(o.jsx)(d.a,{icon:p.a}),i=Object(o.jsx)(d.a,{icon:p.c});return Object(o.jsxs)("div",{id:"main",children:[Object(o.jsx)("section",{id:"marvin",children:Object(o.jsx)("img",{src:b,alt:"Marvin Gaye"})}),Object(o.jsx)("section",{id:"floyd",children:Object(o.jsx)("img",{src:u,alt:"Pink Floyd"})}),Object(o.jsx)("section",{id:"beck",children:Object(o.jsx)("img",{src:m,alt:"Beck"})}),Object(o.jsx)("section",{id:"miles",children:Object(o.jsx)("img",{src:f,alt:"Miles Davis"})}),Object(o.jsx)("section",{id:"blondie",children:Object(o.jsx)("img",{src:g,alt:"Blondie"})}),Object(o.jsx)("section",{id:"trackback",children:Object(o.jsx)("a",{children:e})}),Object(o.jsx)("section",{id:"question",children:Object(o.jsx)("a",{children:t})}),Object(o.jsx)("section",{id:"trackforward",children:Object(o.jsx)("a",{children:i})}),Object(o.jsx)("section",{id:"play",children:Object(o.jsx)(r.b,{to:"/six_degrees_of_spotify/playScreen",id:"playbutton",onClick:y.getAccessToken,children:"Play Now"})})]})},_=function(){return Object(o.jsx)("div",{id:"rules",children:Object(o.jsxs)("h2",{className:"rulesText",children:["The aim of the game is to navigate from a starting artist to a target artist using the associated 'related artist' information provided by Spotify. Each time an artist is selected a new list of related artists is provided. You need to consider the which of the related artists will change the alorithm and provide related artists that are more similar to the target artist than the starting artist.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"You have 6 attempts at selecting artists. The goal is to have the target artist appear in one of the related artist lists."]})})},w=function(){return Object(o.jsx)("div",{id:"about",children:Object(o.jsxs)("h2",{className:"rulesText",children:["Six Degrees of Spotify was devised at a party when the person choosing the music couldn't think of a ceratin artist and used the related artist information to find the song he had in mind. A discussion followed about whether the algorithm is useful for finding new music or if it is essentially an 'echo chamber' of the first artist selected. This lead to a competition where guests suggested a target artist that the 'dj' needed to get to.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),"It's not an easy game. The first attempt took 27 selections...",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("em",{children:"This game has been created for educational purposes. It is not publicly avaialble."})]})})},k=i(9),S=[{name:"Beck",ref:"3vbKDsSS70ZX9D2OcvbZmS",image:m},{name:"Marvin Gaye",ref:"3koiLjNrgRTNbOwViDipeA",image:b},{name:"Pink Floyd",ref:"0k17h0D3J5VfsdmQ1iZtE9",image:u},{name:"Blondie",ref:"4tpUmLEVLCGFr93o8hFFIB",image:g},{name:"Miles Davis",ref:"0kbYTNQb4Pb1rPbbaF0pT4",image:f}],T=[{name:"Spice Girls",ref:"0uq5PttqEjj3IH1bzwcrXF",image:i.p+"static/media/IMG-5995.0656109d.jpg"},{name:"PJ Harvey",ref:"12VaqyEhgwDRuFfEqbnrpz",image:i.p+"static/media/IMG-5991.c9b89c7a.jpg"},{name:"Dua Lipa",ref:"6M2wZ9GZgrQXHCFfjv46we",image:i.p+"static/media/IMG-5992.32150067.jpg"},{name:"Abba",ref:"0LcJLqbBmaGUft1e9Mm8HV",image:i.p+"static/media/IMG-5999.9a5242e3.jpg"}],M=function(){var e=Object(s.useState)(null),t=Object(k.a)(e,2),i=t[0],a=t[1],n=function(e){p(!0),y.getRelatedArtists(e).then((function(e){E(e),p(!1)}))},c=Object(s.useState)(null),r=Object(k.a)(c,2),l=r[0],d=r[1],j=Object(s.useState)(0),h=Object(k.a)(j,2),b=h[0],u=h[1],m=Object(s.useState)(!1),f=Object(k.a)(m,2),g=f[0],p=f[1],x=Object(s.useState)([]),O=Object(k.a)(x,2),v=O[0],_=(O[1],Object(s.useState)(null)),w=Object(k.a)(_,2),M=w[0],I=w[1],B=Object(s.useState)([]),A=Object(k.a)(B,2),N=A[0],E=A[1];return Object(o.jsx)("div",{id:"playScreen",children:Object(o.jsx)("div",{id:"choice",children:Object(o.jsxs)("form",{className:"artistDisplay",children:[Object(o.jsx)("label",{id:"label",htmlFor:"searchTerm",children:"Click to generate your starter and target artists"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"button",id:"searchButton",onClick:function(){console.log(document.getElementById("artist1"));var e=S[Math.floor(Math.random()*S.length)];a(e);var t=T[Math.floor(Math.random()*T.length)];d(t),n(e.ref),document.getElementById("firstChoice").style.display="block",document.getElementById("label").style.display="none"},children:"Start"}),Object(o.jsxs)("form",{id:"firstChoice",children:[Object(o.jsx)("label",{id:"relArtistLabel",for:"select",children:"Select first related artist"}),Object(o.jsx)("br",{}),Object(o.jsxs)("select",{disabled:g,id:"listSelection",name:"select",value:M,onChange:function(e){u(b+1);var t=N.find((function(t){return t.ref==e.target.value}));document.getElementById("relImg").src=t.image,n(e.target.value),v.push(e.target.selectedOptions[0].innerText),document.getElementById("listSelection").value=null,I(null),document.getElementById("relArtistLabel").innerHTML="Select next related artist",t.id===l.ref&&(document.getElementById("completionMessage").innerHTML="congratulations you win"),5===b&&(t.id===l.ref?document.getElementById("completionMessage").innerHTML="congratulations you win":document.getElementById("completionMessage").innerHTML="Unlucky, try again?")},children:[Object(o.jsx)("option",{disabled:!0,selected:!0,value:!0,children:" -- select an option -- "}),N.map((function(e){return Object(o.jsx)("option",{value:e.ref,children:e.name})}))]})]}),Object(o.jsxs)("div",{id:"playGrid",children:[null!=i&&Object(o.jsxs)("div",{className:"artist",children:[Object(o.jsx)("img",{id:"startImg",className:"imageDisplay",src:i.image}),Object(o.jsxs)("h2",{children:["Starting Artist: ",i.name]})]}),Object(o.jsxs)("div",{id:"relArtistListRender",children:[Object(o.jsx)("ul",{children:v.map((function(e){return Object(o.jsx)("li",{children:e})}))}),Object(o.jsx)("img",{id:"relImg",src:""}),Object(o.jsx)("h2",{id:"completionMessage"})]}),null!=l&&Object(o.jsxs)("div",{className:"artist",children:[Object(o.jsx)("img",{className:"imageDisplay",src:l.image}),Object(o.jsxs)("h2",{id:"h2White",children:["Target Artist: ",l.name]})]})]})]})})})},I=i(3);var B=function(){return Object(o.jsxs)(r.a,{className:"App",children:[Object(o.jsx)(I.a,{children:Object(o.jsx)(l,{})}),Object(o.jsx)(I.a,{children:Object(o.jsx)(h,{})}),Object(o.jsx)(I.a,{path:"/six_degrees_of_spotify/rules",children:Object(o.jsx)(_,{})}),Object(o.jsx)(I.a,{path:"/six_degrees_of_spotify/about",children:Object(o.jsx)(w,{})}),Object(o.jsx)(I.a,{exact:!0,path:"/six_degrees_of_spotify",children:Object(o.jsx)(v,{})}),Object(o.jsx)(I.a,{path:"/six_degrees_of_spotify/playScreen",children:Object(o.jsx)(M,{})})]})},A=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,40)).then((function(t){var i=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;i(e),s(e),a(e),n(e),c(e)}))};c.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(B,{})}),document.getElementById("root")),A()}},[[38,1,2]]]);
//# sourceMappingURL=main.05bcbb49.chunk.js.map