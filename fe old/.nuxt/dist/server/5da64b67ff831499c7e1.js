exports.ids=[16],exports.modules={352:function(t,e,r){"use strict";r.r(e);var n={name:"pay",layout:"empty",computed:{link(){return this.$store.state.payLink}},created(){this.link||this.$root.error({statusCode:404})}},o=r(1),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return this.link?e("div",{staticClass:"container text-center"},[this._ssrNode('<iframe width="482" height="500" scrolling="No" frameborder="0" id="paymentFrame"'+this._ssrAttr("src",this.link)+"></iframe>")]):this._e()}),[],!1,null,null,"73862883");e.default=component.exports}};