<template>
     <div>
         <h2>客户管理</h2>
     </div>
</template>
<script>
    export default {
        data(){
            return {
                newOpt:[
                    {
                        cnt: '导出',
                        icon: 'bf-out'
                    },
                    {
                        cnt: '发短信',
                        icon: 'bf-smlMessage'
                    },
                    {
                        cnt: '同步',
                        icon: 'bf-sync'
                    },
                    {
                        cnt: '发邮件',
                        icon: 'bf-email'
                    },
                    {
                        cnt: '短信充值',
                        icon: 'bf-recharge'
                    },
                    {
                        cnt: '刷新',
                        icon: 'bf-refresh'
                    }
                ]
            }
        },
        mounted(){
            this.$store.state.opt.opts = this.newOpt;
        }
    }
</script>