<template>
    <div>
        <h2>商品管理</h2>
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
                        cnt: '审核',
                        icon: 'bf-audit'
                    },
                    {
                        cnt: '导入',
                        icon: 'bf-in'
                    },
                    {
                        cnt: '导出',
                        icon: 'bf-out'
                    },
                    {
                        cnt: '停止生产',
                        icon: 'bf-stop'
                    },
                    {
                        cnt: '刷新',
                        icon: 'bf-refresh'
                    }
                ]
            }
        },
        mounted() {
            this.$store.state.opt.opts = this.newOpt;
        }
    }
</script>