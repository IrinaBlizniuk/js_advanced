Vue.component('error', {
    template: `
        <div v-show="$parent.error">
            <h2>Can't connect to server</h2>
        </div>
    `
})
