var app =new Vue({
    el:'#app',
    data:{
        product:'socks',
        brand:'Vue Masterful',
        image:'./images/green.jpg',
        decimg:'image_of_product',
        instock:5,
        cart:0,
        details:['85% cotton','winter wear','ankle fit'],
        variants:[
        {variantID:2234,variantColor:"green",variantImage:"./images/green.jpg"},
        {variantID:2235,variantColor:"blue",variantImage:"./images/blue.jpg"}
                 ]
    },
    methods:{
        addtocart(){
            this.cart += 1;
        },
        updateImage(variantImage){
            this.image=variantImage;
        }

    },
    computed:{
        title(){
           return this.brand +" "+this.product
        }
    }
})