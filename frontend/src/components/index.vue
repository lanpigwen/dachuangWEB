<template>
<iframe :src='src' class="ifra"></iframe>
</template>

<script>
export default {
    name: 'index',
    data() {
        return {
            showSessionId: '',
            src:'',
    }
    },
    mounted() {
        this.showSessionId = window.location.search
        this.src=`static/Dialog_Project_index/index.html`
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
font-weight: normal;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
.ifra {
  position: absolute; /* 使用绝对定位 */
  top: 0;
  left: 0;
  width: 100%; /* 设置宽度为100% */
  height: 100%; /* 设置高度为100% */
  border: none; /* 可选：移除边框 */
}
</style>
