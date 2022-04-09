Vue.component('filter', {
    props: ['userSearch'],
    template: `
        <form action="#" class="search-form" @submit.prevent="$root.filter()" >
            <input type="text" class="search-field" v-model="$parent.userSearch">
                <button type="submit" class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
            </form>
    `
});

/*
<form action="#" class="search-form" @submit.prevent="filter">
    <input type="text" class="search-field" v-model="userSearch">
    <button type="submit" class="btn-search">
        <i class="fas fa-search"></i>
    </button>
</form>
*/