<template>
    <div class="login_wrap">
        <input type="text" placeholder="请输入用户名" v-model="username"><br/><br/>
        <input :type="type" placeholder="密码" v-model="pwd">
        <span @click="changeEyes" :class="['iconfont', flag ? 'icon-yanjing' : 'icon-yanjing_bi']"></span>
        <br/><br />
        <button @click="submit">登陆</button>
    </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['user'])
    },
    data() {
        return {
            username: '',
            pwd: '',
            type: 'password',
            flag: false
        }
    },
    methods: {
        ...mapMutations(['getUser']),
        changeEyes() {
            this.flag = !this.flag;
            if( this.flag ) {
                this.type = 'text'
            } else {
                this.type = 'password'
            }
        },
        submit() {
            if( !this.username.trim() || !this.pwd.trim()) {
                console.log(this.username, this,pwd)
                alert('不能为空')
            } else {
                axios.post('/login', {
                    username: this.username,
                    pwd: this.pwd
                }).then(res => {
                    if(res.data.code === 0) {
                        alert(res.data.msg)
                    } else {
                        this.getUser(res.data.data)
                        localStorage.token = res.data.token
                        this.$router.push('/my')
                    }
                })
            }
        }
    }
}
</script>

<style>

</style>
