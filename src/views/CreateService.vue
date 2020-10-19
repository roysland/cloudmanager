<template>
    <div>
        <h3>What type of service are you deploying?</h3>
        <section class="services flex wrap justify-center">
            <article class="panel hover flex columns align-center justify-center" v-for="(service, i) in services" :key="i" @click="setService(service)">
                <f-icon :icon="service.icon"></f-icon>
                <strong>{{service.name}}</strong>
                <p class="text-muted">{{service.desc}}</p>
            </article>
        </section>
        <div v-if="selected.service"  class="mt-4">
            <hr />
            <h3>Select provider (Maybe just pick ourselves?)</h3>
            <section class="providers flex">
                <article class="provider flex align-center justify-center" v-for="provider in providers" :key="provider.id" @click="selected.provider = provider" :class="{'selected': selected.provider === provider}">
                    <img :src="provider.image" />
                    <strong>{{provider.name}}</strong>
                </article>
            </section>
            <h3>Select repository</h3>
            <section class="panel flex align-start">
                <a class="list-item">
                        <f-icon icon="github" class="mr-2" />
                        <div class="text">
                            <strong>roysland</strong>
                            <small class="text-muted size-13">Github repository</small>
                        </div>
                    </a>
                <div class="repos">
                    <ul class="list">
                        <li class="flex align-center mb-2">
                            <f-icon icon="folder"></f-icon>
                            <strong class="ml-2">indexeddb-crud</strong>
                        </li>
                        <li class="flex align-center mb-2">
                            <f-icon icon="folder"></f-icon>
                            <strong class="ml-2">indexeddb-crud</strong>
                        </li>
                        <li class="flex align-center mb-2">
                            <f-icon icon="folder"></f-icon>
                            <strong class="ml-2">indexeddb-crud</strong>
                        </li>
                        <li class="flex align-center mb-2">
                            <f-icon icon="folder"></f-icon>
                            <strong class="ml-2">indexeddb-crud</strong>
                        </li>
                    </ul>
                </div>
            </section>
            
            <div class="flex justify-end">
                <button class="btn blue">Next - Size and configuration</button>
            </div>
        </div>
    </div>
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
            ],
            services: [
                { name: 'Frontend App', desc: 'React, Vue, Svelte and more', icon: 'globe' },
                { name: 'Backend App', desc: 'Python, NodeJS, PHP, Go etc.', icon: 'layers' },
                { name: 'Database', desc: 'MongoDB, MySQL, Redis', icon: 'database' },
                { name: 'Container', desc: 'Custom docker container', icon: 'box' },
            ],
            providers: [
                { id: 1, name: 'AWS', image: 'images/aws.png' },
                { id: 2, name: 'Azure', image: 'images/azure.png' },
                { id: 3, name: 'DigitalOcean', image: 'images/digitalocean.svg' },
                { id: 4, name: 'Google Cloud', image: 'images/google-cloud.png' },
                { id: 5, name: 'Heroku', image: 'images/heroku.png' }
            ],
            selected: {
                service: null,
                provider: null
            }
        }
    },
    methods: {
        setService (service) {
            this.selected.service = service
        },
        parseCurrency (price) {
            return parseFloat(price / 1000).toFixed(2);
        }
    }
}
</script>
<style lang="scss">

.providers {
    display: flex;
    justify-content: space-evenly;
}
.providers .provider {
    display: flex;
    flex-direction: column;
    width: 100px;
    padding: 10px;
    font-size: 13px;
    opacity: 0.5;
    transition: all 120ms linear;
    filter: grayscale(1);
    cursor: pointer;
    img {
        width: 32px;
        margin-bottom: 0.25rem;
    }
    &:hover, &.selected {
        opacity: 1;
        filter: grayscale(0);
    }
    &.selected {
        transform: scale(1.2);
    }
}


</style>