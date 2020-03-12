<template>
<div>
    <h1>{{Title}}</h1>
</div>
</template>

<script>
export default {
  data () {
    return {
        Title:"Vue Components"

    }
  }
}
</script>

<style scoped>
div{
    background: lightgreen;
    text-align: center;
    padding: 10px;
}
h1{
    text-align: center;
    color: rgb(1, 32, 22);
}


</style>
