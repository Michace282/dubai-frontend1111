(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{464:function(t,e,o){var content=o(531);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("146d54fb",content,!0,{sourceMap:!1})},465:function(t,e,o){var content=o(533);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(16).default)("2184bdbf",content,!0,{sourceMap:!1})},530:function(t,e,o){"use strict";var r=o(464);o.n(r).a},531:function(t,e,o){(e=o(15)(!1)).push([t.i,"@media (max-width:991px){.filter-group{position:fixed;top:0;bottom:0;right:0;width:100%;height:100%;padding:0;z-index:1000;left:-1000px;opacity:0;background:rgba(0,0,0,.58824);-webkit-transition:opacity .1s;transition:opacity .1s}.filter-group.active{left:0;opacity:1}.filter-group.active .filter{left:0}}@media (max-width:991px){.filter-group .filter{position:absolute;max-width:375px;width:100%;height:100%;left:-1000px;background:#fff;-webkit-transition:left .5s;transition:left .5s;padding-bottom:20px;overflow:auto}}",""]),t.exports=e},532:function(t,e,o){"use strict";var r=o(465);o.n(r).a},533:function(t,e,o){(e=o(15)(!1)).push([t.i,".prudocts-head[data-v-d1ed54dc]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-bottom:30px}.prudocts-head .breadcrumbs[data-v-d1ed54dc]{padding:0}@media (max-width:991px){.prudocts-head .breadcrumbs[data-v-d1ed54dc]{display:none}}.prudocts-head .breadcrumbs .breadcrumb[data-v-d1ed54dc]{text-transform:none;margin:0}.prudocts-head .breadcrumbs .separator[data-v-d1ed54dc]{font-size:14px;margin:0 10px;color:grey}.prudocts-head .sort[data-v-d1ed54dc]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.prudocts-head .sort .label[data-v-d1ed54dc]{font-size:14px;color:#000;margin-right:5px}@media (max-width:991px){.prudocts-head .sort .label[data-v-d1ed54dc]{font-size:18px}}.prudocts-head .sort .select[data-v-d1ed54dc]{position:relative;min-width:135px;width:100%}.prudocts-head .sort .select.active[data-v-d1ed54dc]{background:#f2f2f2}.prudocts-head .sort .select.active .dropdown[data-v-d1ed54dc]{display:block}.prudocts-head .sort .select .selected[data-v-d1ed54dc]{padding:10px;font-size:14px;text-decoration:underline;color:#000}.prudocts-head .sort .select a[data-v-d1ed54dc]{cursor:pointer}.prudocts-head .sort .select .dropdown[data-v-d1ed54dc]{display:none;position:absolute;z-index:200;padding:10px;background:#f2f2f2}.prudocts-head .sort .select .dropdown .item[data-v-d1ed54dc]{display:block;font-size:14px;color:#000}.prudocts-head .sort .select .dropdown .item[data-v-d1ed54dc]:not(:first-child){margin-top:10px}.prudocts-head .sort .select .dropdown .item[data-v-d1ed54dc]:hover{text-decoration:underline}",""]),t.exports=e},602:function(t,e,o){"use strict";o.r(e);o(8),o(5),o(4),o(3),o(7);var r=o(0),d=o(440),n=o(493),c=o(441),l=o(423);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{ProductItem:d.a,FilterCatalog:n.a,Pagination:c.a,Loader:l.a},name:"catalog",data:function(){var t=this,e=[{id:"created_at",label:"Oldest to Newest"},{id:"price",label:"Price, low to high"},{id:"-price",label:"Price, high to low"},{id:"-selling",label:"Best Selling"},{id:"-created_at",label:"Newest to Oldest"}],o=null,r=null;return this.$route.query.orderBy&&e.forEach((function(e){e.id==t.$route.query.orderBy&&(o=e,r=e.id)})),null==o&&(o=e[4]),{breadcrumbs:[],pagesCursor:null,orderBy:r,cursor:null,showDropdown:!1,sortVal:o,showFilter:!1,sortItems:e,filter:{},loading:!0,h1:"",title:"Dance catalogue costumes. Dance outfits for practice|",description:"Massive collection of dancewear, any dancing stuff you need for your successful dance session, event or competition you can find with us.",keywords:"Dance costumes, Dance outfit"}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description},{hid:"keywords",name:"keywords",content:this.keywords}]}},methods:{changeFilter:function(t){this.cursor=null,this.loading=!0,"mens_dancewear"!=t.productType?"womens_dancewear"!=t.productType?t.danceShoesType?"mens_shoes"==t.danceShoesType?this.filter=f({},t,{danceShoesType:"mens"}):"womens_shoes"==t.danceShoesType&&(this.filter=f({},t,{danceShoesType:"ladies"})):this.filter=t:this.filter=f({},t,{productType:"ladies"}):this.filter=f({},t,{productType:"mens"})},updateCursors:function(data){var t=this;if(data.data&&data.data.productList){this.loading=!1,this.pagesCursor=data.data.productList.pagesCursor;var e=[{route:"/",name:"Home"},{route:"/catalog",name:"Catalogue"}],o="";this.breadcrumbs&&this.breadcrumbs.forEach((function(r){o+="/"+r.key,e.push({route:"/catalog"+o,name:r.label}),t.h1=r.label,r.meta&&(t.h1=r.meta.h1,t.title=r.meta.title,t.description=r.meta.description,t.keywords=r.meta.keywords)})),2==e.length&&(this.h1="Catalogue"),this.$store.commit("set_breadcrumbs",e)}else this.pagesCursor=null,this.loading=!1}},watch:{breadcrumb:function(t){var e=this,o=[{route:"/",name:"Home"},{route:"/catalog",name:"Catalogue"}],r="";t&&t.forEach((function(t){r+="/"+t.key,o.push({route:"/catalog"+r,name:t.label}),e.h1=t.label})),2==o.length&&(this.h1="Catalogue"),this.$store.commit("set_breadcrumbs",o)}}},v=(o(530),o(532),o(13)),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("base-title",{staticClass:"mt-15",attrs:{title:t.h1}}),t._v(" "),r("div",{staticClass:"row mt-45"},[r("div",{staticClass:"col-12 col-lg-3 filter-group",class:{active:t.showFilter}},[r("filter-catalog",{attrs:{"order-by":t.orderBy},on:{closeFilter:function(e){t.showFilter=!1},changeFilter:t.changeFilter,setBreadcrumbs:function(e){t.breadcrumbs=e}}})],1),t._v(" "),r("div",{staticClass:"col"},[r("div",{staticClass:"prudocts-head"},[r("a",{staticClass:"filter-caption",attrs:{"href.prevent":""},on:{click:function(e){t.showFilter=!t.showFilter}}},[t._v("\n                    Filter\n                    "),r("img",{attrs:{src:o(435),alt:"filter"}})]),t._v(" "),r("div",{staticClass:"sort"},[r("div",{staticClass:"label"},[t._v("Sort")]),t._v(" "),r("div",{staticClass:"select",class:{active:t.showDropdown}},[r("a",{staticClass:"selected",attrs:{"href.prevent":""},on:{click:function(e){t.showDropdown=!t.showDropdown}}},[t._v(t._s(t.sortVal.label))]),t._v(" "),r("div",{staticClass:"dropdown"},t._l(t.sortItems,(function(e){return r("a",{key:e.id,staticClass:"item",attrs:{"href.prevent":""},on:{click:function(o){t.sortVal=e,t.orderBy=e.id,t.showDropdown=!1}}},[t._v(t._s(e.label))])})),0)])])]),t._v(" "),r("ApolloQuery",{ref:"catalog",attrs:{query:o(229),variables:Object.assign({},{first:12,after:t.cursor},t.filter)},on:{result:t.updateCursors},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.result,d=o.error,data=o.data,n=e.isLoading;return[r("transition",{attrs:{name:"fade",mode:"out-in"}},[n&&t.loading||d?r("div",{key:"1",staticClass:"loading apollo mt-85"},[r("loader")],1):data&&data.productList?r("div",{key:"2",staticClass:"result apollo"},[data.productList.edges.length>0?r("div",{staticClass:"row"},t._l(data.productList.edges,(function(t){return r("div",{key:t.node.id,staticClass:"col-6 col-md-4"},[r("product-item",{attrs:{id:t.node.id,name:t.node.name,price:t.node.price,isWishlist:t.node.isWishlist,colorsGroup:t.node.productsizecolorSet}})],1)})),0):r("div",{key:"3",staticClass:"no-result apollo"},[r("h3",{staticClass:"text-center mt-5"},[t._v("Product not found :(")])])]):t._e()])]}}])}),t._v(" "),!t.loading&&t.pagesCursor&&t.pagesCursor.length>1?r("pagination",{attrs:{pageCursor:t.pagesCursor},on:{changeCursor:function(e){return t.cursor=e},changePage:function(e){return t.cursor=e}}}):t._e()],1)])],1)}),[],!1,null,"d1ed54dc",null);e.default=component.exports}}]);