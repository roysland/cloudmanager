<template>
<div>
    <h1>Wizard</h1>
    <button class="btn blue" @click="createService">Create service</button>
    <button class="btn orange" @click="resetSettings">Reset</button>
    <div class="flex">
        <div v-if="selected.service">Type: {{ selected.service.name }}</div>
        <div v-if="selected.repo">Repo: {{ selected.repo.name }} </div>
    </div>
    <select-service v-if="step === 'service'" v-model="selected.service" @close="step = 'repo'"></select-service>
    <select-repo v-if="step === 'repo' && (selected.service.short === 'front' || selected.service.short === 'backend')" v-model="selected.repo" @close="step = 'scale'"></select-repo>
    <select-scale v-if="step === 'scale' && selected.service.short !== 'front'"></select-scale>
</div>
</template>
<script>
import SelectRepo from './SelectRepo'
import SelectScale from './SelectScale'
import SelectService from './SelectService'
export default {
    components: { SelectRepo, SelectScale, SelectService },
    data () {
        return {
            step: 'service',
            selected: {
                service: null,
                repo: null,
                scale: null
            }
        }
    },
    methods: {
        async createService () {
            let response = await fetch('http://localhost:8000/service/create', {
                method: 'POST',
                headers: new Headers({
                    'Authorization': 'Bearer ' + this.$store.state.user.api_token,
                    'Content-type': 'application/json'
                }),
                body: JSON.stringify(this.selected)
            })

            let json = await response.json()
            this.$store.commit('PUSH_SERVICE', json)

        },
        resetSettings () {
            this.step = 'service'
            this.selected = {
                service: null,
                repo: null,
                scale: null
            }
        }
    }
}
</script>