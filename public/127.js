webpackJsonp([127],{

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(6)
/* script */
var __vue_script__ = __webpack_require__(802)
/* template */
var __vue_template__ = __webpack_require__(712)
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
Component.options.__file = "resources\\assets\\js\\views\\afterSaleMag\\afterSSubmission.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e89c65c", Component.options)
  } else {
    hotAPI.reload("data-v-4e89c65c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 712:
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
    return _c("div", [_c("h2", [_vm._v("售后提交")])])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-4e89c65c", module.exports)
  }
}

/***/ }),

/***/ 802:
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
                cnt: '锁定',
                icon: 'bf-lock'
            }, {
                cnt: '解锁',
                icon: 'bf-delock'
            }, {
                cnt: '审核',
                icon: 'bf-audit'
            }, {
                cnt: '退审',
                icon: 'bf-auditfaild'
            }, {
                cnt: '刷新',
                icon: 'bf-refresh'
            }]
        };
    },
    mounted: function mounted() {
        this.$store.state.opt.opts = this.newOpt;
    }
});

/***/ })

});