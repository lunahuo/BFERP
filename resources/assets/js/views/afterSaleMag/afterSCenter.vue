<template>
    <div>
        <h2>售后中心</h2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                newOpt: [
                    {
                        cnt: '删除',
                        icon: 'bf-del'
                    },
                    {
                        cnt: '导出',
                        icon: 'bf-out'
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