<template>
    <div v-if="service">
        <div class="alert red">
            <i><f-icon icon="bell" /></i>
            <div>This feature is not implemented yet</div>
        </div>
        <section class="panel">
            <h2>Build settings</h2>
            <div class="mb-2">
                <label class="form-label">Build command</label>
                <input type="text" class="form-input" v-model="service.config.build.cmd" />
            </div>
            <div class="mb-2">
            <label class="form-label">Publish directory</label>
            <input type="text" class="form-input" v-model="service.config.build.dir" />
            </div>
            <div class="mb-2">
            <label class="form-label">Branch</label>
            <select class="form-input">
                <option>Master</option>
                <option>Dev</option>
            </select>
            </div>

            <button class="btn default">Save build settings</button>
            <button class="btn blue" @click="deployService">Build and deploy</button>
        </section>

    </div>
</template>
<script>
export default {
    data () {
        return {
            service: Object.assign({}, this.$store.state.currentService)
        }
    },
    methods: {
        deployService () {
            this.$http.get(`/service/${this.service.id}/build`)
        }
    }
}
</script>