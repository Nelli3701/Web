export default
    Vue.component('cart', {
        props: ['cartItems', 'visibility'],
        template: `
        <div class="cart-block" v-show="visibility">
        <p style = "text-align: center;" v-if="!cartItems.length">Корзина пустая!</p>
        <div v-else>
            <div class="basketRow basketHeader">
                <div>Название товара</div>
                <div>Кол-во</div>
                <div>Цена за шт</div>
                <div>Итого</div>
            </div>
            <cart-item v-for="item of cartItems" :key="item.id_product" :cart-item="item">
            </cart-item>
            <div class = "basketTotal">Товаров в корзине на сумму: $ {{ $root.getTotalPrice }}<br>
            <a href="cart.html">Перейти в корзину</a>
            </div>
        </div>
        </div>
    `
    });

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
    <div>
                        <div class="basketRow">
                            <div>{{ cartItem.product_name }}</div>
                            <div>{{ cartItem.quantity }} шт 
                            <button class="del-btn" @click="$root.increase(cartItem)">+</button>
                            </div>
                            <div>$ {{ cartItem.price }}</div>
                            <div>$ {{cartItem.quantity*cartItem.price}}</div>
                        <button class="del-btn" @click="$root.remove(cartItem)">&times;</button>
                    </div>
                </div>
    `
})