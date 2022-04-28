export default
    Vue.component('products', {
        props: ['products'],
        template: `<div class="fetured-list container">
                <product v-for="item of products" 
                :key="item.id_product" 
                :img="item.img_product"
                :product="item"></product>
               </div>`
    });
Vue.component('product', {
    props: ['product'],
    template: `
        <div class="fetured-cart">
        <a class="item-link" href="product.html">
            <div class="fetured-list-item">
                <img class="img-fetured" :src="product.img_product" :alt="product.product_name">

                <div class="item-content">
                    <header class="item-header">{{product.product_name}}</header>
                    <p class="text">{{product.product_desc}}</p>
                    <p class="item-price">$ {{product.price}}</p>
                </div>
            </div>
        </a>
        <div class="add-box" @click="$parent.$emit('add-product', product)">
            <a href="#" class="add">
                <img src="img/add-card.svg" alt="add-to-card">
                <div class="add-txt">Add to Cart</div>
            </a>
        </div>

    </div>
    `
})
/*
<div class="fetured-list container">
                        <div class="fetured-cart">
                            <a class="item-link" href="product.html">
                                <div class="fetured-list-item">
                                    <img class="img-fetured" :src="product.img_product" alt="product.product_name">

                                    <div class="item-content">
                                        <header class="item-header">{{product.product_name}}</header>
                                        <p class="text">{{product.text-product}}</p>
                                        <p class="item-price">{{product.price}}</p>
                                    </div>
                                </div>
                            </a>
                            <div class="add-box" @click="$parent.$emit('add-product', product)">
                                <a href="#" class="add">
                                    <img src="img/add-card.svg" alt="add-to-card">
                                    <div class="add-txt">Add to Cart</div>
                                </a>
                            </div>

                        </div>
                    </div>
*/