const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  wH: state=> state.app.wH,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  opts: state => state.opt.opts,
  show: state => state.opt.show,
  ok: state => state.opt.ok,
  delShow: state => state.delMask.delShow,
  loading: state => state.table.loading,
  currentIndex: state => state.table.currentIndex,
  ruleForm: state => state.addMask.addObj,
  showMask: state => state.addMask.showMask,
  current_page: state => state.table.current_page,
  per_page: state => state.table.per_page,
  page_total: state => state.table.page_total,

};

export default getters
