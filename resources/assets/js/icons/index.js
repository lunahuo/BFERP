import Vue from 'vue'
import SvgIcon from '../components/SvgIcon/index.vue'

// register globally
Vue.component('svg-icon', SvgIcon);

const requireAll = requireContext => requireContext.keys().map(requireContext)
// const req = require.context('./svg', false, /\.svg$/)
const req = require.context('!svg-sprite-loader?{"symbolId":"icon-[name]"}!./svg', false, /.svg$/);
requireAll(req)
