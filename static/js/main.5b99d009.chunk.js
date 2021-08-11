(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{45:function(e,t,s){},47:function(e,t,s){},57:function(e,t,s){"use strict";s.r(t);var c=s(2),r=s.n(c),n=s(20),a=s.n(n),i=(s(45),s(46),s(47),s(33)),o=s(34),l=s(40),d=s(39),u=s(10),j=s(26),m=s(21),b=s(22);s(59),s(58),s(52);b.a.apps.length?b.a.app():b.a.initializeApp({apiKey:"AIzaSyCojwpSJpdp7bPZnR34ZptAvUwjnc-6_as",authDomain:"movies-directory.firebaseapp.com",projectId:"movies-directory",storageBucket:"movies-directory.appspot.com",messagingSenderId:"616034165856",appId:"1:616034165856:web:d558ee4000bfef770d8f05",measurementId:"G-GQD494H3W0"});var h=b.a.firestore(),p=b.a.auth(),O="UPDATE_USER",v="MOVIE_LOADING",g="MOVIE_LOAD",x="MOVIE_ADD",f="MOVIE_ERROR",N="MOVIE_REMOVE",y="MOVIE_UPDATE",M="POPULAR_LOADING",w="POPULAR_LOAD",S="POPULAR_ERROR",L="RESULTS_LOADING",I="RESULTS_LOAD",k="RESULTS_ERROR",C=s(7),E=function(e,t){return new Promise((function(s,c){t.createdAt=b.a.firestore.Timestamp.fromDate(new Date),h.collection(e).add(t).then((function(e){s(e.id)})).catch((function(e){c(e)}))}))},D="k_4quk8cra",P=function(e){return{type:O,payload:e}},A=function(e){return function(t){var s;t(R()),(s=e,new Promise((function(e,t){h.collection(s).get().then((function(t){var s=[];t.forEach((function(e){s.push(Object(C.a)(Object(C.a)({},e.data()),{},{firestoreID:e.id}))})),e(s)})).catch((function(e){t(e)}))}))).then((function(e){t(U(e))})).catch((function(e){console.log("Error: "+e),t(_(e))}))}},R=function(){return{type:v}},U=function(e){return{type:g,payload:e}},_=function(e){return{type:f,payload:e}},T=function(){return function(e){e(W()),(console.log("API_REQUEST"),new Promise((function(e,t){fetch("https://imdb-api.com/en/API/MostPopularMovies/"+D).then((function(e){return console.log(e),e.json()})).then((function(s){console.log(s),s.errorMessage?t(s.errorMessage):e(s)})).catch((function(e){t(e)}))}))).then((function(t){e(B(t.items))})).catch((function(t){console.log("Error: "+t),e(H(t))}))}},W=function(){return{type:M}},B=function(e){return{type:w,payload:e}},H=function(e){return{type:S,payload:e}},V=function(e){return function(t){var s;t(G()),(s=e,console.log("API_REQUEST"),new Promise((function(e,t){console.log(s),fetch("https://imdb-api.com/en/API/Search/k_4quk8cra/"+s).then((function(e){return console.log(e),e.json()})).then((function(s){console.log(s),s.errorMessage?t(s.errorMessage):e(s)})).catch((function(e){t(e)}))}))).then((function(e){t(F(e.results))})).catch((function(e){console.log("Error: "+e),t(z(e))}))}},G=function(){return{type:L}},F=function(e){return{type:I,payload:e}},z=function(e){return{type:k,payload:e}},Q=s(28),Z=s(36),q=s(37),J=Object(Q.c)(Object(Q.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:null,isLoggedIn:!1,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(C.a)(Object(C.a)({},e),{},{user:t.payload.user,isLoggedIn:t.payload.isLoggedIn,error:t.payload.error});default:return e}},movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{movies:[],isLoading:!0,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!0,error:null});case g:return Object(C.a)(Object(C.a)({},e),{},{movies:t.payload,isLoading:!1,error:null});case x:return Object(C.a)(Object(C.a)({},e),{},{movies:e.movies.concat(t.payload),isLoading:!1,error:null});case f:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,error:t.payload});case N:return Object(C.a)(Object(C.a)({},e),{},{movies:e.movies.filter((function(e){return e.firestoreID!==t.payload}))});case y:return Object(C.a)(Object(C.a)({},e),{},{movies:e.movies.map((function(e){return e.id===t.payload.firestoreID?Object(C.a)(Object(C.a)({},e),{},{rating:t.payload.newRating}):e}))});default:return e}},popular:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{movies:[],isLoading:!0,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!0,error:null});case w:return Object(C.a)(Object(C.a)({},e),{},{movies:t.payload,isLoading:!1,error:null});case S:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{results:[],isLoading:!0,error:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!0,error:null});case I:return Object(C.a)(Object(C.a)({},e),{},{results:t.payload,isLoading:!1,error:null});case k:return Object(C.a)(Object(C.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}}}),Object(Q.a)(Z.a,q.logger)),$=function(){return new Promise((function(e,t){p.signOut().then((function(){e("Success")})).catch((function(e){t(e.code+": "+e.message)}))}))};p.onAuthStateChanged((function(e){e?(J.dispatch(P({isLoggedIn:!0,user:e,error:null})),J.dispatch(A(e.uid))):(J.dispatch(P({isLoggedIn:!1,user:null,error:null})),J.dispatch(U([])))}));var K=s(1);var X=function(e){return Object(K.jsx)("div",{className:"movies-nav-bar w-100",children:Object(K.jsx)("nav",{className:"navbar navbar-expand-lg  ",children:Object(K.jsxs)("div",{children:[Object(K.jsx)(m.b,{className:"navbar-brand nav-bar-text mx-auto ",to:"/",children:"Movies Directory"}),e.user.user&&Object(K.jsx)("span",{className:"text-light ms-2",children:e.user.user.displayName}),e.user.isLoggedIn?Object(K.jsxs)("div",{children:[Object(K.jsx)(m.b,{to:"/mymovies",className:"navbar-link me-1 text-purple",children:"My Movies"}),Object(K.jsx)("span",{className:"text-primary",onClick:$,style:{cursor:"pointer"},children:"Log Out"})]}):Object(K.jsx)("div",{children:Object(K.jsx)("span",{className:"text-primary",onClick:e.toggleModal,style:{cursor:"pointer"},children:"Log In"})})]})})})},Y=s(9);var ee=function(e){var t=Object(c.useState)(!1),s=Object(Y.a)(t,2),r=s[0],n=s[1],a=Object(c.useState)(""),i=Object(Y.a)(a,2),o=i[0],l=i[1];return Object(K.jsx)("div",{children:Object(K.jsxs)("form",{className:"row  mb-2 justify-content-center ",onSubmit:function(t){o?(n(!1),e.handleSearch(o)):n(!0),t.preventDefault()},children:[Object(K.jsx)("div",{className:"col-md-9 mb-2 ",children:Object(K.jsx)("input",{type:"text",className:r?"form-control  border-2 border-danger":"form-control ",placeholder:"Movie Name",onChange:function(e){l(e.target.value)},value:o})}),Object(K.jsx)("div",{className:"col-auto mb-2",children:Object(K.jsx)("button",{type:"submit",className:"btn btn-primary ",children:"Search"})})]})})},te=function(e){var t=Object(c.useState)({isLoading:!0,details:[],error:null}),s=Object(Y.a)(t,2),r=s[0],n=s[1];Object(c.useEffect)((function(){e.movieID&&a(e.movieID)}),[e.movieID]);var a=function(e){n({isLoading:!0,details:[],error:null}),function(e){return console.log("API_REQUEST"),new Promise((function(t,s){fetch("https://imdb-api.com/en/API/title/k_4quk8cra/"+e).then((function(e){return console.log(e),e.json()})).then((function(e){console.log(e),e.errorMessage?s(e.errorMessage):t(e)})).catch((function(e){s(e)}))}))}(e).then((function(e){console.log(e),n({isLoading:!1,details:e,error:null})})).catch((function(e){console.log(e),n({isLoading:!1,details:[],error:e})}))},i=function(){var t={rating:1,id:e.movieID,resultType:"Title",image:r.details.image,title:e.title,description:r.details.fullTitle};E(e.user.user.uid,t).then((function(s){t.firestoreID=s,e.addMovie(t)})).catch((function(e){console.log(e)}))},o=function(){var t,s;(t=e.user.user.uid,s=e.firestoreID,new Promise((function(e,c){h.collection(t).doc(s).delete().then((function(){e(!0)})).catch((function(e){c(e)}))}))).then((function(){e.removeMovie(e.firestoreID)})).catch((function(e){console.log(e)}))};if(r.isLoading)return Object(K.jsx)("div",{children:"Loading"});if(r.error)return Object(K.jsx)("div",{children:"Error"});var l=r.details.actorList.map((function(e){return Object(K.jsxs)("div",{className:"col-lg-2 col-md-3 col-sm-4 col-6 p-1 cast-grid-item",children:[Object(K.jsx)("img",{src:e.image,alt:e.name,className:"w-100"}),e.name," as ",Object(K.jsx)("strong",{children:e.asCharacter})]},e.id)})),d=r.details.genreList.map((function(e){return Object(K.jsx)("span",{className:"badge bg-purple me-1",children:e.value},e.key)}));return Object(K.jsxs)("div",{className:"col-12 justify-content-center ",children:[Object(K.jsx)("div",{className:"text-end",children:Object(K.jsx)("span",{className:"badge bg-danger",style:{cursor:"pointer"},onClick:e.handleClose,children:"X"})}),Object(K.jsxs)("div",{className:"movie-details",children:[Object(K.jsx)("h4",{className:"text-center",children:e.title}),Object(K.jsx)("p",{className:"text-center",children:d}),Object(K.jsx)("p",{className:"text-center",style:{color:"#EDC01F"},children:r.details.awards}),e.user.isLoggedIn&&Object(K.jsx)("div",{className:"mx-auto mb-2",children:0===e.rating?Object(K.jsxs)("div",{className:"cursor-pointer",children:[Object(K.jsx)("svg",{width:"30",height:"32",viewBox:"0 0 30 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"heart-svg",onClick:i,children:Object(K.jsx)("path",{id:"heart",d:"M15.6124 5.55276C8.01243 -3.24724 2.11243 2.55276 1.11243 7.55275C0.112426 12.5527 6.11243 20.0527 6.11243 20.0527L15.6124 31.0527L25.1124 20.0527C25.1124 20.0527 32 14 28.1124 5.05276C24.2249 -3.89449 15.6124 5.55276 15.6124 5.55276Z",stroke:"#B10E0E"})}),Object(K.jsx)("p",{className:"text-center mb-0",onClick:i,children:"Add to favourites"})]}):Object(K.jsxs)("div",{className:"cursor-pointer",children:[Object(K.jsx)("svg",{width:"30",height:"32",viewBox:"0 0 30 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",className:"heart-svg",onClick:o,children:Object(K.jsx)("path",{id:"heart",d:"M15.6124 5.55276C8.01243 -3.24724 2.11243 2.55276 1.11243 7.55275C0.112426 12.5527 6.11243 20.0527 6.11243 20.0527L15.6124 31.0527L25.1124 20.0527C25.1124 20.0527 32 14 28.1124 5.05276C24.2249 -3.89449 15.6124 5.55276 15.6124 5.55276Z",fill:"#CC3F3F",stroke:"#B10E0E"})}),Object(K.jsx)("p",{className:"text-center mb-0",onClick:o,children:"Remove from favourites"})]})}),Object(K.jsxs)("div",{className:"row",children:[Object(K.jsxs)("div",{className:"col-md-4",children:[Object(K.jsx)("img",{src:r.details.image,alt:e.title,className:"w-100"}),"Rating ",Object(K.jsxs)("span",{className:"badge bg-danger text-light",children:[r.details.contentRating," "]}),", IMDB ",Object(K.jsx)("span",{className:"badge bg-warning text-dark",children:r.details.imDbRating})]}),Object(K.jsxs)("div",{className:"col-md-8",children:[Object(K.jsx)("p",{children:r.details.plot}),Object(K.jsxs)("ul",{className:"list-unstyled",children:[Object(K.jsxs)("li",{children:[Object(K.jsx)("strong",{children:"Release Date :"})," ",r.details.releaseDate]}),Object(K.jsxs)("li",{children:[Object(K.jsx)("strong",{children:"Runtime :"})," ",r.details.runtimeStr]}),Object(K.jsxs)("li",{children:[Object(K.jsx)("strong",{children:"Directors:"})," ",r.details.directors]}),Object(K.jsxs)("li",{children:[Object(K.jsx)("strong",{children:"Writters:"})," ",r.details.writers]}),Object(K.jsxs)("li",{children:[Object(K.jsx)("strong",{children:"Stars:"})," ",r.details.stars]})]}),Object(K.jsxs)("div",{className:"bg-primary p-2",children:["Box Office",Object(K.jsx)("table",{children:Object(K.jsxs)("tbody",{children:[Object(K.jsxs)("tr",{children:[Object(K.jsx)("td",{className:"text-dark fw-bold",children:"Budget "}),Object(K.jsx)("td",{children:r.details.boxOffice.budget})]}),Object(K.jsxs)("tr",{children:[Object(K.jsx)("td",{className:"text-dark fw-bold",children:"Opening weekend USA "}),Object(K.jsx)("td",{children:r.details.boxOffice.openingWeekendUSA})]}),Object(K.jsxs)("tr",{children:[Object(K.jsx)("td",{className:"text-dark fw-bold",children:"Gross USA "}),Object(K.jsx)("td",{children:r.details.boxOffice.grossUSA})]}),Object(K.jsxs)("tr",{children:[Object(K.jsx)("td",{className:"text-dark fw-bold",children:"Gross Worldwide "}),Object(K.jsx)("td",{children:r.details.boxOffice.cumulativeWorldwideGross})]})]})})]})]}),Object(K.jsx)("h4",{className:"mt-4",children:"Cast"}),Object(K.jsx)("hr",{}),l]})]})]},e.movieID+"d")};var se=function(e){var t=Object(c.useState)(null),s=Object(Y.a)(t,2),r=s[0],n=s[1],a=Object(c.useState)(0),i=Object(Y.a)(a,2),o=i[0],l=i[1],d=Object(c.useState)(1),u=Object(Y.a)(d,2),j=u[0],m=u[1],b=Object(c.useState)([]),h=Object(Y.a)(b,2),p=h[0],O=h[1],v=Object(c.useRef)(null);Object(c.useEffect)((function(){m(Math.ceil(e.results.length/12)),l(1),O(e.results.slice(12*(o-1),12*o))}),[e.results]),Object(c.useEffect)((function(){var t=e.results.slice(12*(o-1),12*o);e.user.isLoggedIn&&!e.movies.error&&e.movies.movies.length>0&&t.length>0&&(console.log("injecting"),t=t.map((function(t){return e.movies.movies.find((function(e){return e.id===t.id}))||t})),console.log(t)),O(t)}),[o]);var g=function(e){for(var t=Array(e),s=function(e){t[e]=Object(K.jsx)("li",{className:"page-item",children:Object(K.jsx)("span",{className:o===e+1?"page-link pagination-custom-item-active cursor-pointer":"page-link pagination-custom-item cursor-pointer",onClick:function(){return l(e+1)},children:e+1})},e+1)},c=0;c<e;c++)s(c);return t},x=function(e){n(e)},f=function(){o<j&&l(o+1)},N=function(){o>1&&l(o-1)};if(e.isLoading)return Object(K.jsx)("div",{className:"text-light",children:"Loading"});if(e.error)return Object(K.jsx)("div",{className:"text-danger",children:"error"});var y=p.map((function(t){return r===t.id?Object(K.jsx)("div",{ref:v,children:Object(K.jsx)(te,{movieID:t.id,title:t.title,description:t.description,firestoreID:t.firestoreID||null,handleClose:function(){return x(null)},user:e.user,addMovie:e.addMovie,removeMovie:e.removeMovie,updateMovie:e.updateMovie,rating:t.rating||0})}):Object(K.jsx)("div",{className:"small"===e.gridSize?"col-6 col-lg-2 co-md-2 col-sm-6 p-2 ":"col-12 col-lg-3 co-md-3 col-sm-6 p-2 ",onClick:function(){return x(t.id)},children:Object(K.jsxs)("div",{className:"results-grid-item p-2",children:[Object(K.jsxs)("span",{className:"position-relative pt-2",children:[t.title,t.rating&&Object(K.jsx)("span",{className:" badge rounded-pill bg-danger ms-1",children:"Liked"})]}),Object(K.jsx)("p",{className:"text-secondary",children:t.description||t.title}),Object(K.jsx)("img",{src:t.image,alt:t.title,className:"w-100"})]})},t.id)}));return Object(K.jsxs)("div",{className:"row",children:[Object(K.jsx)("nav",{children:Object(K.jsxs)("ul",{className:"pagination justify-content-center cursor-pointer",children:[Object(K.jsx)("li",{className:1===o?"page-item disabled":"page-item",children:Object(K.jsx)("span",{className:"page-link pagination-custom-item",href:"#","aria-label":"Previous",onClick:N,children:Object(K.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),g(j),Object(K.jsx)("li",{className:o===j?"page-item disabled":"page-item",children:Object(K.jsx)("span",{className:"page-link bpagination-custom-item ",href:"#","aria-label":"Next",onClick:f,children:Object(K.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})}),y,Object(K.jsx)("nav",{children:Object(K.jsxs)("ul",{className:"pagination justify-content-center cursor-pointer",children:[Object(K.jsx)("li",{className:1===o?"page-item disabled":"page-item",children:Object(K.jsx)("span",{className:"page-link pagination-custom-item",href:"#","aria-label":"Previous",onClick:N,children:Object(K.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),g(j),Object(K.jsx)("li",{className:o===j?"page-item disabled":"page-item",children:Object(K.jsx)("span",{className:"page-link pagination-custom-item ",href:"#","aria-label":"Next",onClick:f,children:Object(K.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})]})};var ce=function(e){return Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{className:"movies-nav-filler"}),Object(K.jsx)("div",{className:"container",children:Object(K.jsxs)("div",{className:"text-light results-grid",children:[Object(K.jsx)("h1",{className:"category-heading",children:"Most Popular Movies"}),Object(K.jsx)(se,{movies:e.movies,isLoading:e.popular.isLoading,error:e.popular.error,results:e.popular.movies,user:e.user,addMovie:e.addMovie,removeMovie:e.removeMovie,updateMovie:e.updateMovie,gridSize:"small"})]})})]})};var re=function(e){var t=Object(u.g)(),s=Object(c.useRef)(null);return Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{className:"row home-search-background align-items-center ",children:Object(K.jsx)("div",{className:"row justify-content-center",children:Object(K.jsxs)("div",{className:"col-10 col-lg-4 col-md-6 col-sm-8 text-light home-search-container",children:[Object(K.jsx)("h4",{className:"text-center mx-2 mb-0",children:"Welocome"}),Object(K.jsx)("h1",{className:"text-center mx-2 main-heading",children:"Movies Directory"}),Object(K.jsx)(ee,{handleSearch:function(s){e.handleSearch(s),t.push("/results")}}),Object(K.jsx)("p",{className:"text-center text-purple cursor-pointer mb-0",onClick:function(){return s.current.scrollIntoView({behaviour:"smooth"})},children:"Browse Movies"}),!e.isLoggedIn&&Object(K.jsxs)("p",{className:"m-0 text-center",children:[Object(K.jsx)("span",{className:"text-primary cursor-pointer",onClick:e.toggleModal,children:"Log in"})," for recommendations"]})]})})}),Object(K.jsx)("div",{ref:s,children:Object(K.jsx)(ce,{popular:e.popular,user:e.user,movies:e.movies,addMovie:e.addMovie,removeMovie:e.removeMovie,updateMovie:e.updateMovie})})]})};var ne=function(e){return Object(u.g)(null),Object(K.jsxs)("div",{children:[Object(K.jsx)("div",{className:"movies-nav-filler"}),Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)("h2",{className:"category-heading text-center",children:"Search Movies"}),Object(K.jsx)("div",{className:"w-50 mx-auto",children:Object(K.jsx)(ee,{handleSearch:function(t){e.handleSearch(t)}})}),Object(K.jsx)("div",{className:"text-light results-grid",children:Object(K.jsx)(se,{movies:e.movies,isLoading:e.results.isLoading,error:e.results.error,results:e.results.results,user:e.user,addMovie:e.addMovie,removeMovie:e.removeMovie,updateMovie:e.updateMovie})})]})]})};var ae=function(e){return e.user.isLoggedIn?e.user.error?Object(K.jsx)("div",{children:"Error"}):Object(K.jsxs)("div",{className:"text-light",children:[Object(K.jsx)("div",{className:"movies-nav-filler"}),Object(K.jsxs)("div",{className:"container",children:[Object(K.jsx)("div",{children:Object(K.jsx)("h1",{className:"text-center",children:e.user.user.displayName})}),Object(K.jsxs)("div",{children:[Object(K.jsx)("h4",{children:"My Movie Collection"}),Object(K.jsx)("hr",{}),Object(K.jsx)(se,{movies:e.movies,isLoading:e.movies.isLoading,error:e.movies.error,results:e.movies.movies,user:e.user,addMovie:e.addMovie,removeMovie:e.removeMovie,updateMovie:e.updateMovie})]})]})]}):Object(K.jsx)("div",{className:"text-light",children:"Loading"})},ie=s(62);var oe=function(e){var t=Object(c.useState)("abc@def.com"),s=Object(Y.a)(t,2),r=s[0],n=s[1],a=Object(c.useState)(null),i=Object(Y.a)(a,2),o=i[0],l=i[1],d=Object(c.useState)(""),u=Object(Y.a)(d,2),j=u[0],m=u[1],b=Object(c.useState)(null),h=Object(Y.a)(b,2),O=h[0],v=h[1],g=Object(c.useState)(null),x=Object(Y.a)(g,2),f=x[0],N=x[1],y=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,M=function(e){var t=e.target;switch(t.id){case"userEmail":n(t.value),l(y.test(t.value)?null:"Invalid Email");break;case"passWord":m(t.value),v(t.value.length<8?"Password must be at least 8 charaters long":null)}};return Object(K.jsx)("div",{children:Object(K.jsx)("div",{children:Object(K.jsxs)("div",{className:"px-4 my-4",children:[Object(K.jsx)("h2",{className:"text-center mb-4 text-purple",children:"Log In"}),Object(K.jsxs)("form",{onSubmit:function(t){var s,c;o||O||((s=r,c=j,new Promise((function(e,t){p.signInWithEmailAndPassword(s,c).then((function(t){e(t)})).catch((function(e){t(e.code+": "+e.message)}))}))).catch((function(e){N(e)})),e.modalHide()),t.preventDefault()},children:[Object(K.jsxs)("div",{className:"mb-2",children:[Object(K.jsx)("label",{className:"form-label",children:"Email"}),Object(K.jsx)("input",{type:"email",className:"form-control",id:"userEmail",placeholder:"abc@def.com",value:r,onChange:M}),o&&Object(K.jsx)("p",{className:"text-danger",children:o})]}),Object(K.jsxs)("div",{className:"mb-2",children:[Object(K.jsx)("label",{className:"form-label",children:"Password"}),Object(K.jsx)("input",{type:"password",className:"form-control",id:"passWord",placeholder:"",value:j,onChange:M}),O&&Object(K.jsx)("p",{className:"text-danger",children:O})]}),f&&Object(K.jsx)("div",{className:"mb-2 text-danger",children:f}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{type:"submit",className:"btn btn-primary w-100 ",disabled:o||O,children:"Sign In"})})]}),Object(K.jsx)("hr",{}),Object(K.jsxs)("div",{children:["New User ",Object(K.jsx)("span",{className:"text-primary",style:{cursor:"pointer"},onClick:function(){return e.changeState()},children:"Create Account"})]})]})})})};var le=function(e){var t=Object(c.useState)("name"),s=Object(Y.a)(t,2),r=s[0],n=s[1],a=Object(c.useState)(null),i=Object(Y.a)(a,2),o=i[0],l=i[1],d=Object(c.useState)("abc@def.com"),u=Object(Y.a)(d,2),j=u[0],m=u[1],b=Object(c.useState)(null),h=Object(Y.a)(b,2),O=h[0],v=h[1],g=Object(c.useState)(""),x=Object(Y.a)(g,2),f=x[0],N=x[1],y=Object(c.useState)(null),M=Object(Y.a)(y,2),w=M[0],S=M[1],L=Object(c.useState)(""),I=Object(Y.a)(L,2),k=I[0],C=I[1],E=Object(c.useState)(null),D=Object(Y.a)(E,2),P=D[0],A=D[1],R=Object(c.useState)(null),U=Object(Y.a)(R,2),_=U[0],T=U[1],W=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,B=function(e){var t=e.target;switch(t.id){case"userName":n(t.value),l(t.value.length<4?"Name must be at least 4 charaters long":null);break;case"userEmail":m(t.value),v(W.test(t.value)?null:"Invalid Email");break;case"passWord":N(t.value),S(t.value.length<8?"Password must be at least 8 charaters long":null),A(k===t.value?null:"Password should match");break;case"passWordVerify":C(t.value),A(f===t.value?null:"Password should match")}};return Object(K.jsx)("div",{children:Object(K.jsx)("div",{children:Object(K.jsxs)("div",{className:"px-4 my-4",children:[Object(K.jsx)("h2",{className:"text-center mb-4 text-purple",children:"Create Account"}),Object(K.jsxs)("form",{onSubmit:function(t){var s,c;O||w||P||((s=j,c=f,new Promise((function(e,t){p.createUserWithEmailAndPassword(s,c).then((function(t){e("success")})).catch((function(e){t(e.code+": "+e.message)}))}))).then((function(){return e=r,new Promise((function(t,s){p.currentUser.updateProfile({displayName:e}).then((function(){t("success")})).catch((function(e){s(e.code+": "+e.message)}))}));var e})).then((function(e){console.log(e)})).catch((function(e){T(e)})),e.modalHide()),t.preventDefault()},children:[Object(K.jsxs)("div",{className:"mb-2",children:[Object(K.jsx)("label",{className:"form-label",children:"Name"}),Object(K.jsx)("input",{type:"text",className:"form-control",id:"userName",placeholder:"name",value:r,onChange:B}),o&&Object(K.jsx)("p",{className:"text-danger",children:o})]}),Object(K.jsxs)("div",{className:"mb-2",children:[Object(K.jsx)("label",{className:"form-label",children:"Email"}),Object(K.jsx)("input",{type:"email",className:"form-control",id:"userEmail",placeholder:"abc@def.com",value:j,onChange:B}),O&&Object(K.jsx)("p",{className:"text-danger",children:O})]}),Object(K.jsxs)("div",{className:"mb-2",children:[Object(K.jsx)("label",{className:"form-label",children:"Password"}),Object(K.jsx)("input",{type:"password",className:"form-control",id:"passWord",placeholder:"",value:f,onChange:B}),w&&Object(K.jsx)("p",{className:"text-danger",children:w})]}),Object(K.jsxs)("div",{className:"mb-4",children:[Object(K.jsx)("label",{className:"form-label",children:"Re-enter Password"}),Object(K.jsx)("input",{type:"password",className:"form-control",id:"passWordVerify",placeholder:"",value:k,onChange:B}),P&&Object(K.jsx)("p",{className:"text-danger",children:P})]}),_&&Object(K.jsx)("div",{className:"text-danger",children:_}),Object(K.jsx)("div",{children:Object(K.jsx)("button",{type:"submit",className:"btn btn-primary w-100 ",disabled:O||w||P,children:"Create"})}),Object(K.jsx)("hr",{}),Object(K.jsx)("div",{children:Object(K.jsx)("span",{className:"text-primary",style:{cursor:"pointer"},onClick:function(){return e.changeState()},children:"Sign In"})})]})]})})})};var de=function(e){var t=Object(c.useState)("signin"),s=Object(Y.a)(t,2),r=s[0],n=s[1];return Object(K.jsx)(ie.a,{show:e.show,onHide:e.modalHide,animation:!1,scrollable:!0,children:Object(K.jsx)(ie.a.Body,{className:"m-1 p-1 modal-body text-light",children:Object(K.jsxs)("div",{className:"container ",children:["signin"===r&&Object(K.jsx)(oe,{changeState:function(){return n("newuser")},updateUser:e.updateUser,modalHide:e.modalHide}),"newuser"===r&&Object(K.jsx)(le,{changeState:function(){return n("signin")},updateUser:e.updateUser,modalHide:e.modalHide})]})})})},ue=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var c;return Object(i.a)(this,s),(c=t.call(this,e)).setSearchName=function(e){c.setState({searchName:e})},c.toggleModal=function(){c.setState({modalShow:!c.state.modalShow})},c.state={searchName:"",modalShow:!1},c}return Object(o.a)(s,[{key:"componentDidMount",value:function(){console.log("mounted"),document.title="Movies Directory",this.props.fetchPopular()}},{key:"render",value:function(){var e=this;return Object(K.jsxs)("div",{children:[Object(K.jsx)(X,{user:this.props.user,toggleModal:this.toggleModal}),Object(K.jsxs)(u.d,{children:[Object(K.jsx)(u.b,{exact:!0,path:"/",component:function(){return Object(K.jsx)(re,{isLoggedIn:e.props.user.isLoggedIn,handleSearch:e.props.searchMoviesAction,toggleModal:e.toggleModal,user:e.props.user,addMovie:e.props.addMovie,removeMovie:e.props.removeMovie,updateMovie:e.props.updateMovie,movies:e.props.movies,popular:e.props.popular})}}),this.props.user.isLoggedIn&&Object(K.jsx)(u.b,{path:"/mymovies",component:function(){return Object(K.jsx)(ae,{user:e.props.user,movies:e.props.movies,addMovie:e.props.addMovie,removeMovie:e.props.removeMovie,updateMovie:e.props.updateMovie})}}),Object(K.jsx)(u.b,{path:"/results",component:function(t){var s=t.match;return Object(K.jsx)(ne,{searchName:s.params.movieName,user:e.props.user,addMovie:e.props.addMovie,removeMovie:e.props.removeMovie,updateMovie:e.props.updateMovie,results:e.props.results,handleSearch:e.props.searchMoviesAction,movies:e.props.movies})}}),Object(K.jsx)(u.a,{to:"/"})]}),Object(K.jsx)(de,{show:this.state.modalShow,modalHide:this.toggleModal})]})}}]),s}(c.Component),je=Object(u.h)(Object(j.b)((function(e){return{user:e.user,movies:e.movies,popular:e.popular,results:e.results}}),(function(e){return{addMovie:function(t){return e(function(e){return{type:x,payload:e}}(t))},removeMovie:function(t){return e(function(e){return{type:N,payload:e}}(t))},updateMovie:function(t,s){return e(function(e,t){return{type:y,payload:{firestoreID:e,newRating:t}}}(t,s))},fetchPopular:function(){return e(T())},searchMoviesAction:function(t){return e(V(t))}}}))(ue));var me=function(){return Object(K.jsx)("div",{className:"App",children:Object(K.jsx)(j.a,{store:J,children:Object(K.jsx)(m.a,{children:Object(K.jsx)(je,{})})})})},be=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,63)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),c(e),r(e),n(e),a(e)}))};a.a.render(Object(K.jsx)(r.a.StrictMode,{children:Object(K.jsx)(me,{})}),document.getElementById("root")),be()}},[[57,1,2]]]);
//# sourceMappingURL=main.5b99d009.chunk.js.map