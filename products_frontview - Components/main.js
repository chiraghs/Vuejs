Vue.component('product',{
    template:`
    <div class="product">


    <div class="product-image">
        <img v-bind:src="image" v-bind:alt="decimg">
    </div>



    <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if='instock > 10'>In Stock</p>
        <p v-else-if='instock <10 && instock  > 0'>Hurry, Almost Sold Out!!</p>
        <p v-else>out of Stock</p>

        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>

        <div v-for="variant in variants" 
             :key="variant.variantID"
             class="color-box"
             :style="{backgroundColor:variant.variantColor}"
             @mouseover="updateImage(variant.variantImage)">
            
        </div>

        <button v-on:click="addtocart()" :disabled="instock <= 0"
                         :class="{disabledButton: instock <=0}"
        >Add to cart</button>
       
        <div class="cart">
            <p>Cart ({{cart}})</p>
        </div>


    </div>


</div>   
    `,
    data(){
        return {
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
        }
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

var app =new Vue({
    el:'#app',
   
})