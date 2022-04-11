Vue.component('error-comp', {
    template: `
        <div style="color:red; font-weight: bold" v-if="$root.error">Ошибка</div>
    `
});