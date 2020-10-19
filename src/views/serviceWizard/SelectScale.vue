<template>
    <section>
        <h3>Select size of environment (Not for frontend apps)</h3>
        <article class="scales">
            
            <div v-for="scale in scales" :key="scale.id" class="scale">
                <ul>
                    <li class="flex align-center mb-2">
                            <f-icon icon="cpu"></f-icon>
                            <small class="ml-2">{{scale.cpu}} CPU</small>
                    </li>
                    <li class="flex align-center mb-2">
                            <f-icon icon="film"></f-icon>
                            <small class="ml-2">{{scale.ram}} GB</small>
                    </li>
                    <li class="flex align-center mb-2">
                            <f-icon icon="hard-drive"></f-icon>
                            <small class="ml-2">{{scale.disk}} GB</small>
                    </li>
                </ul>
                <hr />
                ${{parseCurrency(scale.price)}} / month
            </div>
        </article>
    </section>
</template>
<script>
export default {
    data () {
        return {
            scales: [
                { id: 1, cpu: 1, ram: 1, disk: 25, price: 8000 },
                { id: 2, cpu: 1, ram: 2, disk: 50, price: 15000 },
                { id: 3, cpu: 1, ram: 3, disk: 60, price: 20000 },
                { id: 4, cpu: 2, ram: 4, disk: 100, price: 30000 },
            ]
        }
    },
    methods: {
        parseCurrency (price) {
            return parseFloat(price / 1000).toFixed(2);
        }
    }
}
</script>
<style lang="scss">
.scales {
    display: flex;
    align-items: center;
    .scale {
        display: block;
        margin-right: 1rem;
        border: 1px solid $border-color;
        padding: 1rem;
        border-radius: 6px;
        width: 200px;
        ul {
            margin: 0;
            padding: 0;
        }
    }
}
</style>