webpackJsonp([105],{

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */
var __vue_script__ = __webpack_require__(704)
/* template */
var __vue_template__ = __webpack_require__(705)
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
Component.options.__file = "resources\\assets\\js\\views\\basicInf\\logisticsMag.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54de388c", Component.options)
  } else {
    hotAPI.reload("data-v-54de388c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // show: false,
      newOpt: [{
        cnt: '新增',
        icon: 'bf-add',
        ent: this.addNew
      }, {
        cnt: '修改',
        icon: 'bf-change',
        ent: this.editInfo,
        nClick: false
      }, {
        cnt: '删除',
        icon: 'bf-del',
        ent: this.delMore
      }, {
        cnt: '导入',
        icon: 'bf-in',
        ent: this.test
      }, {
        cnt: '导出',
        icon: 'bf-out',
        ent: this.test
      }, {
        cnt: '同步',
        icon: 'bf-sync',
        ent: this.test
      }, {
        cnt: '刷新',
        icon: 'bf-refresh',
        ent: this.refresh
      }],
      activeName: '0',
      getsInfo: [[], [], [], []],
      tableHead: [[{
        label: '物流代码',
        width: '250',
        prop: "code",
        holder: '请输入物流代码',
        type: 'text'
      }, {
        label: '物流名称',
        width: '250',
        prop: "name",
        holder: '请输入物流名称',
        type: 'text'
      }, {
        label: '报表格式',
        width: '240',
        prop: 'report',
        holder: '请选择报表格式',
        type: 'select',
        val: this.sonArr
      }, {
        label: '运费类型',
        width: '250',
        prop: "freight_type",
        holder: '请选择运费类型',
        type: 'select',
        val: this.sonArr
      },
      /* {
         label: '物流区域',
         width: '300',
         prop: "logistics_area",
         holder: '请输入物流区域',
         type: 'textarea'
       },*/
      {
        label: '预计天数',
        width: '220',
        prop: "expected_days",
        holder: '请输入天数',
        type: 'number'
      },
      /*{
        label: '发货数',
        width: '220',
        prop: "expected_days",
        holder: '请输入发货订单数',
        type: 'number'
      },
      {
        label: '损坏次数',
        width: '230',
        prop: "expected_days",
        holder: '请输入物流循坏货物此时',
        type: 'number'
      },*/
      {
        label: '物流电话',
        width: '250',
        prop: "phone",
        holder: '请输入物流电话',
        type: 'tel'
      }, {
        label: '物流地址',
        width: '260',
        prop: "address",
        holder: '请输入物流地址',
        type: 'textarea'
      }, {
        label: '备注',
        width: '200',
        prop: "remark",
        holder: '请输入备注',
        type: 'textarea'
      }, {
        label: '创建时间',
        width: '280',
        prop: "created_at",
        holder: '请输入创建时间',
        type: 'text',
        beAble: true
      }, {
        label: '是否启用',
        width: '200',
        prop: "status",
        holder: '请选择是否启用',
        type: 'select_def'
      }], [{
        label: '物流名称',
        width: '240',
        prop: "logistics",
        holder: '请输入物流名称',
        type: 'select',
        val: this.sonArr
      }, {
        label: '省',
        width: '230',
        prop: "province",
        holder: '请输入所在省',
        type: 'text'
      }, {
        label: '市',
        width: '230',
        prop: "city",
        holder: '请输入所在市',
        type: 'text'
      }, {
        label: '区',
        width: '230',
        prop: "district",
        holder: '请输入所在区',
        type: 'text'
      }, {
        label: '提货地址',
        width: '260',
        prop: "address",
        holder: '请输入详细地址',
        type: 'textarea'
      }, {
        label: '提货电话',
        width: '230',
        prop: "phone",
        holder: '请输入提货电话',
        type: 'tel'
      }, {
        label: '物流费用',
        width: '220',
        prop: "price",
        holder: '请输入物流费用',
        type: 'number'
      }, {
        label: '重量单价',
        width: '220',
        prop: "weight_univalent",
        holder: '请输入重量单价',
        type: 'number'
      }, {
        label: '到达天数',
        width: '200',
        prop: "expected_days",
        holder: '请输入到达天数',
        type: 'number'
      }, {
        label: '直达(中转)',
        width: '250',
        prop: "route",
        holder: '请选择中转或直达',
        type: 'select_def'
      }, {
        label: '包邮',
        width: '200',
        prop: "is_free_shipping",
        holder: '请选择是否包邮',
        type: 'select_def'
      }, {
        label: '备注',
        width: '200',
        prop: "remark",
        holder: '请输入备注',
        type: 'textarea'
      }], [{
        label: '系统单号',
        width: '250',
        prop: "order_no",
        holder: '请输入订单号',
        type: 'text'
      }, {
        label: '商品编码',
        width: '240',
        prop: "good_sn",
        holder: '请输入商品编码',
        type: 'text'
      }, {
        label: '规格编码',
        width: '220',
        prop: "standard_code",
        holder: '请输入规格编码',
        type: 'text'
      },
      /*{
        label: '商品名称',
        width: '180',
        prop: "code",
        holder: '请输入物流代码',
        type: 'text'
      },*/
      /* {
         label: '规格名称',
         width: '180',
         prop: "code",
         holder: '请输入物流代码',
         type: 'text'
       },*/
      {
        label: '损坏数量',
        width: '220',
        prop: "quantity",
        holder: '请输入损坏数量',
        type: 'number'
      }, {
        label: '损坏金额',
        width: '220',
        prop: "money",
        holder: '请输入损坏金额',
        type: 'number'
      },
      /*{
        label: '损坏来源',
        width: '180',
        prop: "code",
        holder: '请输入物流代码',
        type: 'text'
      },*/
      {
        label: '备注',
        width: '240',
        prop: "remark",
        holder: '请输入备注',
        type: 'textarea'
      },
      /* {
         label: '创建人',
         width: '180',
         prop: "code",
         holder: '请输入物流代码',
         type: 'text'
       },*/
      {
        label: '创建时间',
        width: '280',
        prop: "created_at",
        // holder: '请输入物流代码',
        type: 'text',
        beAble: true
      }], [{
        label: '报表文件',
        width: '220',
        prop: "file",
        holder: '请输入报表文件',
        type: 'text'
      }, {
        label: '报表名称',
        width: '220',
        prop: "name",
        holder: '请输入报表名称',
        type: 'text'
      }, {
        label: '报表格式',
        width: '200',
        prop: "paper_format",
        holder: '请输入报表格式',
        type: 'text'
      }, {
        label: '状态',
        width: '220',
        prop: "status",
        holder: '请选择是否启用',
        type: 'select_stu'
      }]],
      loading: true,
      currentIndex: '',
      url: ['/logistics', '/cityinfos', '/damagedgoods', '/printreports'],
      showMaskArr: [{ show: false }, { show: false }, { show: false }, { show: false }],
      title: ['新增物流公司', '新增城市信息', '添加损坏商品', '添加报表格式'],
      ruleForm: [{
        code: '',
        name: '',
        report_id: '',
        // logistics_area_id: '',
        expected_days: '',
        phone: '',
        address: '',
        freight_type_id: '',
        remark: '',
        status: '1'
      }, {
        logistics_id: '',
        province: '',
        city: '',
        district: '',
        address: '',
        phone: '',
        price: '',
        weight_univalent: '',
        expected_days: '',
        route: '1',
        is_free_shipping: '0',
        remark: ''
      }, {
        order_no: '',
        good_sn: '',
        standard_code: '',
        quantity: '',
        money: '',
        remark: '',
        status: '1'
      }, {
        file: '',
        name: '',
        paper_format: '',
        status: '1'
      }],
      rules: [{
        code: [{ required: true, message: '请输入物流代码', trigger: 'blur' }],
        name: [{ required: true, message: '请输入物流名称', trigger: 'blur' }],
        report_id: [{ required: true, message: '请选择报表格式', trigger: 'blur' }],
        expected_days: [{ required: true, message: '请输入预计天数', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入物流电话', trigger: 'blur' }],
        address: [{ required: true, message: '请输入物流地址', trigger: 'blur' }],
        freight_type_id: [{ required: true, message: '请选择运费类型', trigger: 'blur' }]
      }, {
        logistics_id: [{ required: true, message: '请输入物流id', trigger: 'blur' }],
        province: [{ required: true, message: '请输入所在省', trigger: 'blur' }],
        city: [{ required: true, message: '请输入所在市', trigger: 'blur' }],
        district: [{ required: true, message: '请输入所在区', trigger: 'blur' }],
        address: [{ required: true, message: '请输入详细地址', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入提货电话', trigger: 'blur' }],
        price: [{ required: true, message: '请输入物流费用', trigger: 'blur' }],
        weight_univalent: [{ required: true, message: '请输入重量单价', trigger: 'blur' }],
        expected_days: [{ required: true, message: '请输入城市到达天数', trigger: 'blur' }]
      }, {
        order_no: [{ required: true, message: '请输入系统单号', trigger: 'blur' }],
        good_sn: [{ required: true, message: '请输入商品编码', trigger: 'blur' }],
        standard_code: [{ required: true, message: '请输入规格编码', trigger: 'blur' }],
        quantity: [{ required: true, message: '请输入损坏数量', trigger: 'blur' }],
        money: [{ required: true, message: '请输入损坏金额', trigger: 'blur' }]
      }, {
        file: [{ required: true, message: '请输入文件', trigger: 'blur' }],
        name: [{ required: true, message: '请输入报表名', trigger: 'blur' }],
        paper_format: [{ required: true, message: '请输入报表格式', trigger: 'blur' }]
      }],
      addArr: [[{
        label: '物流代码',
        prop: 'code',
        holder: '请输入物流代码',
        type: 'text'
      }, {
        label: '物流名称',
        prop: 'name',
        holder: '请输入物流名称',
        type: 'text'
      }, {
        label: '报表格式',
        prop: 'report_id',
        holder: '请选择报表格式',
        type: 'select',
        val: this.sonArr
      },
      /* {
         label:'物流区域',
         prop:'logistics_area_id',
         holder:'请选择状态',
         type: 'text'
       },*/
      {
        label: '运费类型',
        prop: 'freight_type_id',
        holder: '请输入运费类型',
        type: 'select',
        val: this.sonArr
      }, {
        label: '预计天数',
        prop: 'expected_days',
        holder: '请输入预计天数',
        type: 'number'
      }, {
        label: '物流电话',
        prop: 'phone',
        holder: '请输入物流电话',
        type: 'tel'
      }, {
        label: '物流地址',
        prop: 'address',
        holder: '请输入物流地址',
        type: 'textarea'
      }, {
        label: '备注',
        prop: 'remark',
        holder: '请输入备注',
        type: 'textarea'
      }, {
        label: '状态',
        prop: 'status',
        holder: '请选择是否启用',
        type: 'select_stu'
      }], [{
        label: '物流名称',
        prop: 'logistics_id',
        holder: '请输入物流名称',
        type: 'select',
        val: this.sonArr
      }, {
        label: '省',
        prop: 'province',
        holder: '请输入所在省',
        type: 'text'
      }, {
        label: '市',
        prop: 'city',
        holder: '请输入所在市',
        type: 'text'
      }, {
        label: '区',
        prop: 'district',
        holder: '请输入所在区',
        type: 'text'
      }, {
        label: '提货电话',
        prop: 'phone',
        holder: '请输入提货电话',
        type: 'tel'
      }, {
        label: '提货地址',
        prop: 'address',
        holder: '请输入提货地址',
        type: 'textarea'
      }, {
        label: '物流费用',
        prop: 'price',
        holder: '请输入物流费用',
        type: 'number'
      }, {
        label: '重量单价',
        prop: 'weight_univalent',
        holder: '请输入重量单价',
        type: 'number'
      }, {
        label: '预计天数',
        prop: 'expected_days',
        holder: '请输入预计天数',
        type: 'number'
      }, {
        label: '是否直达',
        prop: 'route',
        holder: '请选择是否直达',
        type: 'select_def'
      }, {
        label: '是否包邮',
        prop: 'is_free_shipping',
        holder: '请选择是否直达',
        type: 'select_def'
      }, {
        label: '备注',
        prop: 'remark',
        holder: '请输入备注',
        type: 'textarea'
      }], [{
        label: '系统单号',
        prop: 'order_no',
        holder: '请输入系统单号',
        type: 'text'
      }, {
        label: '商品编码',
        prop: 'good_sn',
        holder: '请输入商品编码',
        type: 'text'
      }, {
        label: '规格编码',
        prop: 'standard_code',
        holder: '请输入规格编码',
        type: 'text'
      }, {
        label: '损坏数量',
        prop: 'quantity',
        holder: '请输入损坏数量',
        type: 'number'
      }, {
        label: '损坏金额',
        prop: 'money',
        holder: '请输入损坏金额',
        type: 'number'
      }, {
        label: '备注',
        prop: 'remark',
        holder: '请输入备注',
        type: 'textarea'
      }, {
        label: '状态',
        prop: 'status',
        holder: '请选择状态',
        type: 'select_stu'
      }], [{
        label: '报表文件',
        prop: 'file',
        holder: '请输入报表文件',
        type: 'text'
      }, {
        label: '报表名称',
        prop: 'name',
        holder: '请输入报表名称',
        type: 'text'
      }, {
        label: '报表格式',
        prop: 'paper_format',
        holder: '请输入报表格式',
        type: 'text'
      }, {
        label: '状态',
        prop: 'status',
        holder: '请选择状态',
        type: 'select_stu'
      }]],
      halfForm: [{ show: true }, { show: true }, { show: false }, { show: false }],
      refArr: ['ruleLogistics', 'ruleCity', 'ruleDamage', 'ruleReports'],
      showDel: false,
      delId: '',
      inputChange: false,
      multipleSelection: [],
      delArr: [],
      sonArr: [],
      pagination: {
        current_page: 1,
        per_page: 0,
        page_total: 0
      },
      showPage: true,
      doChange: [false, false, true, true],
      editTitle: ['修改物流公司信息', '修改物流城市信息'],
      editMask: [{ show: false }, { show: false }, { show: false }, { show: false }],
      editId: '',
      editData: {},
      // editList: {},
      leftTab: '修改'
    };
  },

  computed: {
    /* selects: {
       get: function () {
         return this.$store.state.SonData.reports;
       },
       set: function () {
       }
     },
     reportType: {
       get: function () {
         return this.$store.state.SonData.reports;
       },
       set: function () {
       }
     },
     freightsType: {
       get: function () {
         return this.$store.state.SonData.freights
       },
       set: function () {
       }
     },*/
  },
  methods: {
    test: function test() {
      console.log(1);
    },
    handleTabsClick: function handleTabsClick() {
      this.loading = true;
      this.getInfo(this.url[this.activeName]);
      if (this.activeName == 2 || this.activeName == 3) {
        this.newOpt[1].nClick = true;
      } else {
        this.newOpt[1].nClick = false;
      }
    },
    addNew: function addNew() {
      this.showMaskArr[this.activeName].show = true;
    },
    CB_dialog: function CB_dialog(val) {
      this.showMaskArr[this.activeName].show = val;
      this.editMask[this.activeName].show = val;
    },
    submitForm: function submitForm() {
      var _this = this;

      /* let addObj = {};
       if (this.activeName == '0') {
         addObj = {
           code: this.ruleForm[0].code,
           name: this.ruleForm[0].name,
           report_id: this.ruleForm[0].report.id,
           expected_days: this.ruleForm[0].expected_days,
           phone: this.ruleForm[0].phone,
           address: this.ruleForm[0].address,
           freight_type_id: this.ruleForm[0].freight_type.id,
           remark: this.ruleForm[0].remark,
           status: this.ruleForm[0].status
         };
       } else if (this.activeName == '1') {
         addObj = {
           logistics_id: this.ruleForm[1].logistics_id,
           province: this.ruleForm[1].province,
           city: this.ruleForm[1].city,
           district: this.ruleForm[1].district,
           address: this.ruleForm[1].address,
           phone: this.ruleForm[1].phone,
           price: this.ruleForm[1].price,
           weight_univalent: this.ruleForm[1].weight_univalent,
           route: this.ruleForm[1].route,
           expected_days: this.ruleForm[1].expected_days,
           expected_days: this.ruleForm[1].expected_days,
         };
       }*/
      this.$post(this.url[this.activeName], this.ruleForm[this.activeName]).then(function () {
        _this.$message({
          message: '添加成功',
          type: 'success'
        });
        _this.showMaskArr[_this.activeName].show = false;
        _this.refresh();
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this.$message.error({
            message: str
          });
        }
      });
    },

    /*处理批量删除*/
    handleSelectionChange: function handleSelectionChange(val) {
      if (val.length != 0) {
        this.editId = val[0].id;
      } else {
        this.editId = '';
      }
      this.multipleSelection = val;
      var del = [];
      this.multipleSelection.forEach(function (selectedItem) {
        del.push(selectedItem.id);
      });
      this.delArr = del.join(',');
    },
    delMore: function delMore() {
      var _this2 = this;

      if (this.delArr.length === 0) {
        this.$message({
          message: '没有选中数据',
          type: 'warning'
        });
      } else {
        this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          _this2.$del(_this2.url[_this2.activeName], { ids: _this2.delArr }).then(function () {
            _this2.$message({
              message: '删除成功',
              type: 'success'
            });
            _this2.refresh();
          }, function (err) {
            if (err.response) {
              var arr = err.response.data.errors;
              var arr1 = [];
              for (var i in arr) {
                arr1.push(arr[i]);
              }
              var str = arr1.join(',');
              _this2.$message.error({
                message: str
              });
            }
          });
        }).catch(function () {
          _this2.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    },

    /*修改保存*/
    edit: function edit(index) {
      this.currentIndex = 'index' + index;
    },
    editCancel: function editCancel() {
      this.$message({
        message: '取消修改',
        type: 'info'
      });
      this.currentIndex = '';
    },
    editSave: function editSave(row) {
      var _this3 = this;

      console.log(row);
      var newData = {};
      if (this.activeName == '0') {
        newData = {
          code: row.code,
          name: row.name,
          report: row.report,
          expected_days: row.expected_days,
          phone: row.phone,
          address: row.address,
          freight_type: row.freight_type,
          remark: row.remark,
          status: row.status
        };
      } else if (this.activeName == '1') {
        newData = {
          logistics: row.logistics.id,
          province: row.province,
          city: row.city,
          district: row.district,
          address: row.address,
          phone: row.phone,
          price: row.price,
          weight_univalent: row.weight_univalent,
          expected_days: row.expected_days,
          route: row.route,
          is_free_shipping: row.is_free_shipping,
          remark: row.remark
        };
      } else if (this.activeName == '2') {
        newData = {
          order_no: row.order_no,
          good_sn: row.good_sn,
          standard_code: row.standard_code,
          quantity: row.quantity,
          money: row.money,
          remark: row.remark
          // status: row.status
        };
      } else if (this.activeName == '3') {
        newData = {
          file: row.file,
          name: row.name,
          paper_format: row.paper_format,
          status: row.status
        };
      }
      if (this.inputChange) {
        this.$patch(this.url[this.activeName] + '/' + row.id, newData).then(function () {
          _this3.$message({
            message: '修改成功',
            type: 'success'
          });
          _this3.getInfo(_this3.url[_this3.activeName]);
          _this3.currentIndex = '';
          _this3.inputChange = false;
          _this3.refresh();
        }, function (err) {
          if (err.response) {
            var arr = err.response.data.errors;
            var arr1 = [];
            for (var i in arr) {
              arr1.push(arr[i]);
            }
            var str = arr1.join(',');
            _this3.$message.error({
              message: str
            });
          }
        });
      } else {
        this.$message({
          message: '数据未改动',
          type: 'info'
        });
      }
    },
    handleEdit: function handleEdit() {
      this.inputChange = true;
    },
    getSonData: function getSonData(url, propVal) {
      var _this4 = this;

      this.$fetch(url).then(function (res) {
        var obj = {};
        obj[propVal] = res.data;
        _this4.sonArr.push(obj);
      });
    },
    getInfo: function getInfo(url) {
      var _this5 = this;

      this.showPage = true;
      this.$fetch(url).then(function (res) {
        _this5.getsInfo[_this5.activeName] = res.data;
        _this5.loading = false;
        var pg = res.meta.pagination;
        _this5.$store.dispatch('currentPage', pg.current_page);
        _this5.$store.commit('PER_PAGE', pg.per_page);
        _this5.$store.commit('PAGE_TOTAL', pg.total);
        /* if (url == this.url[3]) {
           this.$store.dispatch('setReports', res.data)
         }*/
        if (url == _this5.url[0]) {
          var obj = {};
          obj["0"] = res.data;
          _this5.sonArr.push(obj);
        }
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this5.$message.error({
            message: str
          });
        }
      });
    },
    del: function del(row, e) {
      this.showDel = true;
      $('.el-popper').css({ left: e.x - 100 + 'px', top: e.y - 125 + 'px' });
      this.delId = row.id;
    },
    cancelD: function cancelD() {
      this.showDel = false;
      this.$message({
        message: '取消删除',
        type: 'info'
      });
    },
    confirmD: function confirmD(id) {
      var _this6 = this;

      this.$del(this.url[this.activeName] + '/' + id).then(function () {
        _this6.$message({
          message: '删除成功',
          type: 'success'
        });
        _this6.showDel = false;
        _this6.refresh();
      }, function (err) {
        if (err.response) {
          _this6.showDel = false;
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this6.$message.error({
            message: str
          });
        }
      });
    },
    refresh: function refresh() {
      var _this7 = this;

      this.loading = true;
      this.getInfo(this.url[this.activeName]);
      setTimeout(function () {
        _this7.loading = false;
      }, 2000);
    },
    dbClick: function dbClick(row) {
      var _this8 = this;

      var id = row.id;
      this.activeName = '1';
      this.loading = true;
      this.showPage = false;
      this.$fetch(this.url[1] + '/' + id).then(function (res) {
        if (res) {
          var arr = [];
          arr.push(res);
          _this8.getsInfo[_this8.activeName] = arr;
          _this8.loading = false;
        } else {
          _this8.$message({
            message: '没有查询到相关数据',
            type: 'info'
          });
          _this8.getsInfo[_this8.activeName] = [];
        }
      }, function (err) {
        console.log(err);
        _this8.$message.error({
          message: '查询失败'
        });
        _this8.loading = false;
        _this8.getsInfo[_this8.activeName] = [];
      });
    },
    editForm: function editForm() {
      var _this9 = this;

      var obj = {};
      if (this.activeName == 0) {
        obj = {
          code: this.editData.code,
          name: this.editData.name,
          report_id: this.editData.report_id,
          expected_days: this.editData.expected_days,
          phone: this.editData.phone,
          address: this.editData.address,
          freight_type_id: this.editData.freight_type_id,
          remark: this.editData.remark,
          status: this.editData.status
        };
      } else if (this.activeName == 1) {
        obj = {
          logistics_id: this.editData.logistics_id,
          province: this.editData.province,
          city: this.editData.city,
          district: this.editData.district,
          address: this.editData.address,
          phone: this.editData.phone,
          price: this.editData.price,
          weight_univalent: this.editData.weight_univalent,
          expected_days: this.editData.expected_days,
          route: this.editData.route,
          is_free_shipping: this.editData.is_free_shipping,
          remark: this.editData.remark
        };
      }
      this.$patch(this.url[this.activeName] + '/' + this.editId, obj).then(function () {
        _this9.$message({
          message: '修改成功',
          type: 'success'
        });
        _this9.editMask[_this9.activeName].show = false;
        _this9.refresh();
      }, function (err) {
        if (err.response) {
          var arr = err.response.data.errors;
          var arr1 = [];
          for (var i in arr) {
            arr1.push(arr[i]);
          }
          var str = arr1.join(',');
          _this9.$message.error({
            message: str
          });
        }
      });
    },
    editInfo: function editInfo() {
      var _this10 = this;

      if (this.newOpt[1].nClick) {
        return;
      } else {
        if (this.multipleSelection.length == 0) {
          this.$message({
            message: '没有选择要修改的数据',
            type: 'warning'
          });
          return;
        } else if (this.multipleSelection.length >= 2) {
          this.$message({
            message: '只能修改单条数据',
            type: 'warning'
          });
          return;
        } else {
          this.editMask[this.activeName].show = true;
          this.$fetch(this.url[this.activeName] + '/' + this.editId).then(function (res) {
            if (_this10.activeName == 0) {
              _this10.editData = {
                code: res.code,
                name: res.name,
                report_id: res.report.id,
                expected_days: res.expected_days,
                phone: res.phone,
                address: res.address,
                freight_type_id: res.freight_type.id,
                remark: res.remark,
                status: res.status
              };
            } else if (_this10.activeName == 1) {
              _this10.editData = {
                logistics_id: res.logistics.id,
                province: res.province,
                city: res.city,
                district: res.district,
                address: res.address,
                phone: res.phone,
                price: res.price,
                weight_univalent: res.weight_univalent,
                expected_days: res.expected_days,
                route: res.route,
                is_free_shipping: res.is_free_shipping,
                remark: res.remark
              };
            }
          }, function (err) {
            console.log(err);
          });
        }
      }
    }
  },
  mounted: function mounted() {
    this.getInfo(this.url[0]);
    this.getSonData('/printreports', '2');
    this.getSonData('/freighttypes', '3');
    this.$store.dispatch('setOpt', this.newOpt);
    var that = this;
    $(window).resize(function () {
      that.$store.dispatch('setOpt', that.newOpt);
    });
  }
});

/***/ }),

/***/ 705:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-tabs",
        {
          on: { "tab-click": _vm.handleTabsClick },
          model: {
            value: _vm.activeName,
            callback: function($$v) {
              _vm.activeName = $$v
            },
            expression: "activeName"
          }
        },
        [
          _c(
            "el-tab-pane",
            { attrs: { label: "物流公司", name: "0" } },
            [
              _c("light-table", {
                attrs: {
                  listData: _vm.getsInfo[this.activeName],
                  tableHead: _vm.tableHead[this.activeName],
                  loading: _vm.loading,
                  currentIndex: _vm.currentIndex,
                  selects: _vm.sonArr,
                  doChange: _vm.doChange[this.activeName]
                },
                on: {
                  handleSelect: _vm.handleSelectionChange,
                  editSave: _vm.editSave,
                  handleEdit: _vm.handleEdit,
                  del: _vm.del,
                  dbClick: _vm.dbClick,
                  edit: _vm.edit,
                  editCancel: _vm.editCancel
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "物流城市", name: "1" } },
            [
              _c("light-table", {
                attrs: {
                  listData: _vm.getsInfo[this.activeName],
                  tableHead: _vm.tableHead[this.activeName],
                  loading: _vm.loading,
                  currentIndex: _vm.currentIndex,
                  doChange: _vm.doChange[this.activeName]
                },
                on: {
                  handleSelect: _vm.handleSelectionChange,
                  editSave: _vm.editSave,
                  handleEdit: _vm.handleEdit,
                  del: _vm.del,
                  edit: _vm.edit,
                  editCancel: _vm.editCancel
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "损坏商品", name: "2" } },
            [
              _c("light-table", {
                attrs: {
                  listData: _vm.getsInfo[this.activeName],
                  tableHead: _vm.tableHead[this.activeName],
                  loading: _vm.loading,
                  currentIndex: _vm.currentIndex,
                  doChange: _vm.doChange[this.activeName]
                },
                on: {
                  handleSelect: _vm.handleSelectionChange,
                  editSave: _vm.editSave,
                  handleEdit: _vm.handleEdit,
                  del: _vm.del,
                  edit: _vm.edit,
                  editCancel: _vm.editCancel
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-tab-pane",
            { attrs: { label: "报表格式", name: "3" } },
            [
              _c("light-table", {
                attrs: {
                  listData: _vm.getsInfo[this.activeName],
                  tableHead: _vm.tableHead[this.activeName],
                  loading: _vm.loading,
                  currentIndex: _vm.currentIndex,
                  doChange: _vm.doChange[this.activeName]
                },
                on: {
                  handleSelect: _vm.handleSelectionChange,
                  editSave: _vm.editSave,
                  handleEdit: _vm.handleEdit,
                  del: _vm.del,
                  edit: _vm.edit,
                  editCancel: _vm.editCancel
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("add-new", {
        attrs: {
          "visible-add": _vm.showMaskArr[this.activeName].show,
          title: _vm.title[this.activeName],
          "rule-form": _vm.ruleForm[this.activeName],
          rules: _vm.rules[this.activeName],
          "add-arr": _vm.addArr[_vm.activeName],
          url: _vm.url[_vm.activeName],
          "new-ref": _vm.refArr[_vm.activeName],
          halfForm: _vm.halfForm[_vm.activeName].show,
          selects: _vm.sonArr
        },
        on: { submitEvent: _vm.submitForm, "CB-dialog": _vm.CB_dialog }
      }),
      _vm._v(" "),
      _c("add-new", {
        attrs: {
          "visible-add": _vm.editMask[this.activeName].show,
          title: _vm.editTitle[_vm.activeName],
          rules: _vm.rules[_vm.activeName],
          "new-ref": _vm.refArr[_vm.activeName],
          "rule-form": _vm.editData,
          "add-arr": _vm.addArr[_vm.activeName],
          url: _vm.url[_vm.activeName],
          halfForm: _vm.halfForm[_vm.activeName].show,
          selects: _vm.sonArr,
          leftTab: _vm.leftTab
        },
        on: { submitEvent: _vm.editForm, "CB-dialog": _vm.CB_dialog }
      }),
      _vm._v(" "),
      _c(
        "el-popover",
        {
          attrs: { slot: "tip", placement: "top", width: "160" },
          slot: "tip",
          model: {
            value: _vm.showDel,
            callback: function($$v) {
              _vm.showDel = $$v
            },
            expression: "showDel"
          }
        },
        [
          _c("p", [_vm._v("确定删除该条数据？")]),
          _vm._v(" "),
          _c(
            "div",
            { staticStyle: { "text-align": "right", margin: "0" } },
            [
              _c(
                "el-button",
                {
                  attrs: { size: "mini", type: "text" },
                  on: { click: _vm.cancelD }
                },
                [_vm._v("取消")]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  attrs: { type: "primary", size: "mini" },
                  on: {
                    click: function($event) {
                      _vm.confirmD(_vm.delId)
                    }
                  }
                },
                [_vm._v("确定")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.showPage
        ? _c(
            "div",
            [
              _c("Pagination", {
                attrs: { "page-url": _vm.url[_vm.activeName] }
              })
            ],
            1
          )
        : _c("div")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-loader/node_modules/vue-hot-reload-api")      .rerender("data-v-54de388c", module.exports)
  }
}

/***/ })

});