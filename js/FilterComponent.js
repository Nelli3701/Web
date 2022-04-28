export default
    Vue.component('filtr', {
        template: `
        <form action="#" class="search-form" @submit.prevent="$root.filter" >
                <button type="submit" class="search">
                    <img src="img/search.png" alt="search">
                </button>
                <input type="search" placeholder="Что ищем?" v-model="$root.userSearch">
            </form>
    `
    });

/*
<!--form class="search-form" action="">
    <button class="search"><img src="img/search.png" alt="search"></button>
    <input type="search" placeholder="Что ищем?">
</form-->
*/