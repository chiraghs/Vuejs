var app =new Vue({
    el:'#app',
    data:{
        product:'socks',
        image:'./images/green.jpg',
        decimg:'image_of_product',
        instock:-1,
        details:['85% cotton','winter wear','ankle fit'],
        variants:[{variantID:2234,variantColor:"Green"},{variantID:2235,variantColor:"Blue"}]
    }
})