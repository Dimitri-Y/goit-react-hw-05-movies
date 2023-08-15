"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[594],{9558:function(e,t,a){a.d(t,{Z:function(){return u}});var r={},n={"CatalogItem-disabled":"CatalogItem_CatalogItem-disabled__r0bxb"},c=a(7689),i=a(1087),s=a(184),o=function(e){var t=e.title,a=e.id,r=(0,c.TH)();return(0,s.jsx)("li",{className:t?n.CatalogItem:n["CatalogItem-disabled"],children:(0,s.jsx)(i.rU,{to:"/movies/".concat(a),state:{from:r},children:t})})},u=function(e){var t=e.catalog;return(0,s.jsx)("ul",{className:r.catalog,children:t.map((function(e){var t=e.title,a=e.id;return(0,s.jsx)(o,{id:a,title:t},a)}))})}},8735:function(e,t,a){var r=a(5243),n=a(184);t.Z=function(e){var t=e.error,a=e.children,c=e.isLoading;return(0,n.jsxs)("div",{children:[t&&(0,n.jsxs)("p",{children:["Whoops, something went wrong: ",t.message]}),c&&(0,n.jsx)("div",{style:{display:"flex",alignContent:"center",justifyContent:"center"},children:(0,n.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#ed3469",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}),a]})}},2163:function(e,t,a){var r=a(5861),n=a(7757),c=a.n(n),i=a(1243),s="https://api.themoviedb.org/3",o="00cb515606c3767771985834ed87ee26",u="".concat(s,"/trending/all/day"),l="".concat(s,"/search/movie"),p="".concat(s,"/movie"),d="".concat(s,"/movie"),h="".concat(s,"/movie"),m=function(){var e=(0,r.Z)(c().mark((function e(t,a){var r,n,s,m,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=a.searchQuery,n=a.page,s=a.movie_id,m="",e.t0=t,e.next="trend"===e.t0?5:"search"===e.t0?7:"details"===e.t0?9:"credits"===e.t0?11:"reviews"===e.t0?13:15;break;case 5:return m=u+"?api_key=".concat(o,"&page=").concat(n),e.abrupt("break",16);case 7:return m=l+"?api_key=".concat(o,"&page=").concat(n,"&query=").concat(r),e.abrupt("break",16);case 9:return m=p+"/".concat(s,"?api_key=").concat(o),e.abrupt("break",16);case 11:return m=d+"/".concat(s,"/credits?&api_key=").concat(o),e.abrupt("break",16);case 13:return m=h+"/".concat(s,"/reviews?api_key=").concat(o),e.abrupt("break",16);case 15:return e.abrupt("break",16);case 16:return f=i.Z.get(m),e.abrupt("return",f);case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();t.Z=m},8594:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var r=a(3433),n=a(5861),c=a(9439),i=a(7757),s=a.n(i),o=a(2791),u=a(1087),l={},p=a(184),d=function(e){var t=e.value,a=e.onSubmit,r=e.updateQueryString;return(0,p.jsxs)("form",{className:l.SearchForm,onSubmit:function(e){e.preventDefault(),a(t)},children:[(0,p.jsx)("input",{className:l["SearchForm-input"],type:"text",autoComplete:"off",name:"searchName",value:t,autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){r(e.target.value)}}),(0,p.jsx)("button",{type:"submit",className:l["SearchForm-button"],children:(0,p.jsx)("span",{className:l["SearchForm-button-label"],children:"Search"})})]})},h=a(2163),m=a(8735),f=a(9558),v=function(){var e,t=(0,u.lr)(),a=(0,c.Z)(t,2),i=a[0],l=a[1],v=null!==(e=i.get("query"))&&void 0!==e?e:"",b=(0,o.useState)(""),g=(0,c.Z)(b,2),x=g[0],y=g[1],k=(0,o.useState)([]),j=(0,c.Z)(k,2),_=j[0],S=j[1],w=(0,o.useState)(!1),Z=(0,c.Z)(w,2),C=Z[0],N=Z[1],F=(0,o.useState)(null),I=(0,c.Z)(F,2),Q=I[0],q=I[1];(0,o.useEffect)((function(){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!0),e.next=4,(0,h.Z)("search",{page:1,searchQuery:x});case 4:t=e.sent,S((function(e){return(0,r.Z)(t.data.results)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),q(e.t0.message);case 11:return e.prev=11,N(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]);return(0,p.jsxs)("main",{children:[(0,p.jsx)(d,{value:v,updateQueryString:function(e){l(""!==e?{query:e}:{})},onSubmit:function(e){""!==e.trim()&&e.trim()!==x&&y(e)}}),(0,p.jsx)(m.Z,{error:Q,isLoading:C,children:_.length>0&&(0,p.jsx)(f.Z,{catalog:_})})]})}}}]);
//# sourceMappingURL=594.7add4e3d.chunk.js.map