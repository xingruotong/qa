<template>
    <div class="quan_wrap">
        <div class="quan_head">
            <div class="quan_inp">
                <input type="text" placeholder="试试搜索你的好友名字">
            </div>
        </div>
        <div class="quan_main">
            <dl>
                <dt></dt>
                <dd></dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .quan_head {
        width: 100%;
        height: 45px;
        display: flex;
        .quan_inp {
            width: 80%;
            height: 30px;
            input {
                width: 100%;
                height: 100%;
                margin: 7px 0 0 20px;
                border-radius: 10px;
                border: none;
                background: #ccc;
                padding: 0 0 0 50px;
            }
        }
    }
</style>
