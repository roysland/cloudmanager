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
    <select-repo v-if="step === 'repo'" v-model="selected.repo" @close="step = 'scale'"></select-repo>
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
        createService () {

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