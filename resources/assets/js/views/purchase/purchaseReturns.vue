<template>
    <div>
        <h2>采购退货管理</h2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                newOpt: [
                    {
                        cnt: '新增',
                        icon: 'bf-add'
                    },
                    {
                        cnt: '修改',
                        icon: 'bf-change'
                    },
                    {
                        cnt: '删除',
                        icon: 'bf-del'
                    },
                    {
                        cnt: '提交',
                        icon: 'bf-submit'
                    },
                    {
                        cnt: '驳回',
                        icon: 'bf-reject'
                    },
                    {
                        cnt: '审核',
                        icon: 'bf-audit'
                    },
                    {
                        cnt: '导出',
                        icon: 'bf-out'
                    },
                    {
                        cnt: '打印',
                        icon: 'bf-printer'
                    },
                    {
                        cnt: '刷新',
                        icon: 'bf-refresh'
                    },

                ]
            }
        },
        mounted() {
            this.$store.state.opt.opts = this.newOpt;
        }
    }
</script>