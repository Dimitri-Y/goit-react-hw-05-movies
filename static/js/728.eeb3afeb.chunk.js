"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[728],{4535:function(e,n,r){r.d(n,{h:function(){return l}});var t,a=r(168),i=r(9128),s=r(1087),c=r(6444),o=r(184),u=(0,c.ZP)(s.rU)(t||(t=(0,a.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),l=function(e){var n=e.to,r=e.children;return(0,o.jsxs)(u,{to:n,children:[(0,o.jsx)(i.jTe,{size:"24"}),r]})}},8735:function(e,n,r){var t=r(5243),a=r(184);n.Z=function(e){var n=e.error,r=e.children,i=e.isLoading;return(0,a.jsxs)("div",{children:[n&&(0,a.jsxs)("p",{children:["Whoops, something went wrong: ",n.message]}),i&&(0,a.jsx)("div",{style:{display:"flex",alignContent:"center",justifyContent:"center"},children:(0,a.jsx)(t.g4,{height:"80",width:"80",radius:"9",color:"#ed3469",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}),r]})}},2163:function(e,n,r){var t=r(5861),a=r(7757),i=r.n(a),s=r(1243),c="https://api.themoviedb.org/3",o="00cb515606c3767771985834ed87ee26",u="".concat(c,"/trending/all/day"),l="".concat(c,"/search/movie"),d="".concat(c,"/movie"),p="".concat(c,"/movie"),h="".concat(c,"/movie"),v=function(){var e=(0,t.Z)(i().mark((function e(n,r){var t,a,c,v,f;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.searchQuery,a=r.page,c=r.movie_id,v="",e.t0=n,e.next="trend"===e.t0?5:"search"===e.t0?7:"details"===e.t0?9:"credits"===e.t0?11:"reviews"===e.t0?13:15;break;case 5:return v=u+"?api_key=".concat(o,"&page=").concat(a),e.abrupt("break",16);case 7:return v=l+"?api_key=".concat(o,"&page=").concat(a,"&query=").concat(t),e.abrupt("break",16);case 9:return v=d+"/".concat(c,"?api_key=").concat(o),e.abrupt("break",16);case 11:return v=p+"/".concat(c,"/credits?&api_key=").concat(o),e.abrupt("break",16);case 13:return v=h+"/".concat(c,"/reviews?api_key=").concat(o),e.abrupt("break",16);case 15:return e.abrupt("break",16);case 16:return f=s.Z.get(v),e.abrupt("return",f);case 18:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}();n.Z=v},9728:function(e,n,r){r.r(n),r.d(n,{default:function(){return j}});var t=r(5861),a=r(9439),i=r(7757),s=r.n(i),c=r(7689),o=r(1087),u=r(2791),l=r(4535),d=r(2163),p="MovieDetails_movie__11k9J",h="MovieDetails_img__0gw7e",v="MovieDetails_genre-span__YKhCW",f="MovieDetails_add-info__bMA-z",x=r(184),g=function(e){var n=e.details,r=n.poster_path?"https://image.tmdb.org/t/p/w500/".concat(n.poster_path):"https://ru.hostings.info/upload/images/2021/12/e11044b915dc39afc3004430606bd6d1.jpg";return(0,x.jsxs)("div",{className:p,children:[(0,x.jsx)("img",{src:r,alt:n.title,width:"400px",className:h}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:n.title}),(0,x.jsxs)("p",{children:["User Score: ",10*n.vote_average.toFixed(1)," %"]}),(0,x.jsx)("h4",{children:"Overview "}),(0,x.jsx)("p",{children:n.overview}),(0,x.jsx)("h4",{children:"Genres"}),n.genres.map((function(e){return(0,x.jsx)("span",{className:v,children:e.name},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}())}))]})]})},m=r(8735),j=function(){var e,n,r=(0,c.UO)().movie_id,i=(0,c.TH)(),p=(0,u.useRef)(null!==(e=null===(n=i.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),h=(0,u.useState)(null),v=(0,a.Z)(h,2),j=v[0],_=v[1],b=(0,u.useState)(!1),w=(0,a.Z)(b,2),k=w[0],y=w[1],Z=(0,u.useState)(null),C=(0,a.Z)(Z,2),S=C[0],U=C[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,y(!0),e.next=4,(0,d.Z)("details",{page:1,movie_id:r});case 4:n=e.sent,_((function(e){return n.data})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),U(e.t0.message);case 11:return e.prev=11,y(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]),(0,x.jsxs)("main",{children:[(0,x.jsx)(l.h,{to:p.current,children:"Go Back"}),(0,x.jsx)(m.Z,{error:S,isLoading:k,children:j&&(0,x.jsx)(g,{details:j})}),(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,x.jsx)(u.Suspense,{fallback:(0,x.jsx)("div",{children:"Loading subpage..."}),children:(0,x.jsx)(c.j3,{})})]})}}}]);
//# sourceMappingURL=728.eeb3afeb.chunk.js.map