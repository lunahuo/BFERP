<template>
    <div>
        <h2>退货管理中心</h2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                newOpt: [
                    {
                        cnt: '导出',
                        icon: 'bf-out'
                    },
                    {
                        cnt: '打印',
                        icon: 'bf-printer'
                    },
                    {
                        cnt: '还原',
                        icon: 'bf-reduce'
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