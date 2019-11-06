<template>
    <div class="my_wrap">
        <div class="my_head">
            <dl>
                <dt>
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2443142698,3748032304&fm=26&gp=0.jpg" alt="">
                </dt>
                <dd>
                    <h3>张俊杰</h3>
                    
                    <span class="sp"><span class="age">年龄：18</span>活跃度 <h2>32</h2></span>
                </dd>
            </dl>
        </div>
        <div class="my_main">
            <router-link to="/geren">个人信息</router-link>
            <router-link to="/pinglun">我的评论</router-link>
            <router-link to="/shou">个人收藏</router-link>
            <router-link to="/xiu">修改密码</router-link>
            <router-link to="/tui">退出</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .my_head {
        width: 100%;
        height: 150px;
        background: rgb(247, 105, 104);
        dl {
            width: 100%;
            height: 150px;
            display: flex;
            dt {
                width: 30%;
                height: 150px;
                img {
                    width: 50%;
                    height: 50%;
                    border-radius: 50%;
                    margin: 30px 20px;
                }
            }
            dd {
                margin: 30px 20px;
                h3 {
                    color: #fff;
                }
                .age {
                    padding: 0 35px 0 0;
                    color: #fff;
                }
                .sp {
                    padding: 10px 0 0 0;
                    color: #fff;
                    display: flex;
                    h2 {
                        color: #fff;
                    }
                }
            }
        }
    }
    .my_main {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 30px 0 0 0;
        a {
            width: 100%;
            margin: 10px 0;
        }
    }
</style>
