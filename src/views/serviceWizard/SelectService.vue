<template>
    <section>
        <h3>What type of service are you deploying?</h3>
        <div class="services flex wrap justify-center">
            <article class="panel hover flex columns align-center justify-center" :class="{'selected': service === selected}" v-for="(service, i) in services" :key="i" @click="setService(service)">
                <f-icon :icon="service.icon"></f-icon>
                <strong>{{service.name}}</strong>
                <p class="text-muted">{{service.desc}}</p>
            </article>
        </div>
        <!-- Front config -->
        <div v-if="selected && selected.short === 'front'">
            <hr>
            <div class="field">
            <label class="form-label">Select type</label>
            <select class="form-input" v-model="selected.type" @change="setFrontSettings(selected.type)">
                <option v-for="template in templates[selected.short]" :key="template.name">{{template.name}}</option>
            </select>
            <label class="form-label">Directory with app</label>
            <input type="text" class="form-input" v-model="selected.build.dir" placeholder="/dist">

            <label class="form-label">Build command</label>
            <input type="text" class="form-input" v-model="selected.build.cmd" placeholder="npm run build">
            </div>
        </div>
        <!-- DB Config -->
        <div v-if="selected && selected.short === 'database'">
            <div class="dbs flex wrap justify-center">
            <article class="panel hover flex columns align-center justify-center" v-for="db in templates.database" :key="db.id" :class="{'selected': db === selected.type}" @click="setDB(db)">
                <img :src="db.icon" />
                <strong>{{db.name}}</strong>
            </article>
        </div>
        </div>

        <div class="m-4 flex justify-end">
        <button class="btn blue" :disabled="!selected" @click="saveService">Continue</button>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {
            selected: null,
            services: [
                { name: 'Frontend App', short: 'front', desc: 'React, Vue, Svelte and more', icon: 'globe', type: null, build: { dir: null, cmd: null } },
                { name: 'Backend App', short: 'backend', desc: 'Python, NodeJS, PHP, Go etc.', icon: 'layers', type: null },
                { name: 'Database',  short: 'database', desc: 'MongoDB, MySQL, Redis', icon: 'database', type: null },
                { name: 'Container',  short: 'container', desc: 'Custom docker container', icon: 'box', type: null },
            ],
            templates: {
                front: [
                    {
                        name: 'Vue',
                        build: {
                            dir: '/dist',
                            cmd: 'npm run build'
                        }
                    },
                    {
                        name: 'Svelte',
                        build: {
                            dir: '/build',
                            cmd: 'npm run build'
                        }
                    },
                    {
                        name: 'React',
                        build: {
                            dir: '/build',
                            cmd: 'npm run build'
                        }
                    },
                    {
                        name: 'Other',
                        build: {
                            dir: '',
                            cmd: ''
                        }
                    }
                ],
                backend: ['PHP', 'NodeJS', 'Go', 'Python'],
                database: [
                    { id: 1, name: 'MongoDB', icon: '/images/mongodb.png'},
                    { id: 2, name: 'MySQL', icon: '/images/mysql.png'},
                    { id: 3, name: 'Redis', icon: '/images/redis.png'}
                ],
                container: []
            }
        }
    },
    methods: {
        setService (service) {
            this.selected = service
        },
        saveService () {
            this.$emit('input', this.selected)
            this.$emit('close')
        },
        setDB (db) {
            this.selected.type = db
        },
        setFrontSettings (type) {
            let settings = this.templates.front.find((template) => {
                return template.name === type
            })
            this.selected.build = settings.build
        }
    }
}
</script>
<style lang="scss">
.services .panel {
    text-align: center;
    width: 150px;
    height: 150px;
    margin-right: 1rem;
    &.selected {
        border-color: $blue;
        box-shadow: 0 10px 40px rgba(0,0,0,.15);
    }
    .feather {
        height: 32px;
        width:32px;
        margin-bottom: 1rem;
    }
    p {
        font-size: 13px;
    }
}
.dbs .panel {
    width: 92px;
    height: 92px;
    margin-right: 1rem;
    &.selected {
        border-color: $blue;
        box-shadow: 0 10px 40px rgba(0,0,0,.15);
    }
    img {
        width: 64px;
    }
}
</style>