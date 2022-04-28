import CartComponent from './CartComponent'
import ErrorComponent from './ErrorComponent'
import FilterComponent from './FilterComponent'
import ProductComponent from './ProductComponent'

//Отправляйте свои данные с помощью $emit в верхний компонент, а вниз с помощью props
const API = './db';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showCart: false,
        catalogUrl: '/products.json',
        cartUrl: '/getBasket.json',
        cartItems: [],
        filtered: [],
        products: [],
        error: false
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log("Ошибка");
                    this.error = true;
                })

        },
        addProduct(item) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(el => el.id_product === item.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            const prod = Object.assign({ quantity: 1 }, item);
                            this.cartItems.push(prod)
                        }
                    }
                })
        },
        remove(item) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1);
                        }
                    }

                })
        },
        increase(item) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        item.quantity++;
                    }
                })
        },
        detailsClosed() {
            document.getElementById('js-details').removeAttribute('open');
        },
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
        checkQuantity() {
            let cartItemsQuantity = this.cartItems.length;
            return cartItemsQuantity;
        }
    },
    computed: {
        getTotalPrice() {
            let totalPrice = this.cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0);
            return totalPrice;
        }
    },
    mounted() {
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let item of data.contents) {
                    this.$data.cartItems.push(item);
                }
            });
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let item of data) {
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
        this.cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    },
    watch: {
        cartItems(newValue, oldValue) {
            localStorage.setItem("cartItems", JSON.stringify(newValue));
        }
    }

});