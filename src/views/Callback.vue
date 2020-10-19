<template>
    <div style="height: 500px; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
        <f-icon icon="loader" style="font-size: 32px; width: 64px; height: 64px;"></f-icon>
        
    </div>
</template>
<script>
export default {
    data () {
        return {
            code: null,
            result: null
        }
    },
    methods: {
        async getToken (code) {
            let response = await fetch(`http://localhost:8000/auth/code?code=${code}`)
            let json = await response.json()
            this.$store.commit('setUser', json.data)
            this.$router.push('/')
        }
    },
    async mounted () {
        const urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code')
        this.code = code
        let result = await this.getToken(code)
        console.log(result)
    }
}
</script>