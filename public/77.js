webpackJsonp([77],{

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(5)
/* script */
var __vue_script__ = __webpack_require__(552)
/* template */
var __vue_template__ = __webpack_require__(553)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\order\\auditOfFinancialBrushes.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f734b1b4", Component.options)
  } else {
    hotAPI.reload("data-v-f734b1b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            newOpt: [{
                cnt: '修改',
                icon: 'bf-change'
            }, {
                cnt: '删除',
                icon: 'bf-del'
            }, {
                cnt: '提交',
                icon: 'bf-submit'
            }, {
                cnt: '驳回',
                icon: 'bf-reject'
            }, {
                cnt: '审核',
                icon: 'bf-audit'
            }, {
                cnt: '退审',
                icon: 'bf-auditfaild'
            }, {
                cnt: '发货',
                icon: 'bf-deliver'
            }, {
                cnt: '批量处理',
                icon: 'bf-more'
            }, {
                cnt: '导出',
                icon: 'bf-out'
            }, {
                cnt: '下载',
                icon: 'bf-dwn'
            }, {
                cnt: '还原',
                icon: 'bf-reduce'
            }, {
                cnt: '刷新',
                icon: 'bf-refresh'
            }]
        };
    },
    mounted: function mounted() {
        this.$store.state.opt.opts = this.newOpt;
        this.$store.commit('change', this.newOpt);
        var that = this;
        $(window).resize(function () {
            return function () {
                that.$store.state.opt.opts = that.newOpt;
                that.$store.commit('change', that.newOpt);
            }();
        });
    }
});

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h2", [_vm._v("财务刷单审核")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-f734b1b4", module.exports)
  }
}

/***/ })

});