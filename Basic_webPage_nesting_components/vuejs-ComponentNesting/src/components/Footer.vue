<template>
<div>
    <h3>{{copyright}}</h3>
</div>
   
</template>

<script>
export default {
  data () {
    return {
        copyright:"Copyright 2019 belongs to vue & CHiz "

    }
  }
}
</script>

<style scoped>
div{
    background: rgb(3, 77, 46);
}


h3{
    color: aliceblue;
    font-size: 14px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    padding: 10px;
}

</style>
