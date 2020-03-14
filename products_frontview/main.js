var app =new Vue({
    el:'#app',
    data:{
        product:'socks',
        image:'./images/green.jpg',
        decimg:'image_of_product',
        instock:-1,
        cart:0,
        details:['85% cotton','winter wear','ankle fit'],
        variants:[
        {variantID:2234,variantColor:"Green",variantImage:"./images/green.jpg"},
        {variantID:2235,variantColor:"Blue",variantImage:"./images/blue.jpg"}
                 ]
    },
    methods:{
        addtocart(){
            this.cart += 1;
        },
        updateImage(variantImage){
            this.image=variantImage;
        }

    }
})