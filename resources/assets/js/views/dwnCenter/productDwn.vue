<template>
    <div>
        <h2>商品下载</h2>
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
                        cnt: '同步',
                        icon: 'bf-sync'
                    },
                    {
                        cnt: '下载',
                        icon: 'bf-dwn'
                    }
                ]
            }
        },
        mounted() {
            this.$store.state.opt.opts = this.newOpt;
        }
    }
</script>