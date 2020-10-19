<template>
    <section>
        <h3>Select repository</h3>
            <section class="panel flex align-start repos">
                <a class="list-item">
                        <f-icon icon="github" class="mr-2" />
                        <div class="text">
                            <strong>roysland</strong>
                            <small class="text-muted size-13">Github repository</small>
                        </div>
                    </a>
                <div class="repos">
                    <ul class="list">
                        <li class="flex align-center mb-2 p-1" v-for="repo in repos" :key="repo.id" @click="selectRepo(repo)">
                            <f-icon icon="folder"></f-icon>
                            <strong class="ml-2">{{repo.name}}</strong>
                        </li>
                    </ul>
                </div>
                <button class="btn blue" @click="nextPage">More</button>
            </section>
    </section>
</template>
<script>
export default {
    data () {
        return {
            repos: [],
            selected: null,
            page: 1
        }
    },
    methods: {
        async getUserRepos () {
            this.repos = []
            let response = await fetch(`http://localhost:8000/user/repos?page=${this.page}`, {
                method: 'GET',
                headers: new Headers({
                    'Authorization': 'Bearer ' + this.$store.state.user.api_token
                })
            })
            let json = await response.json()
            this.repos = json.repos
        },
        selectRepo (repo) {
            this.$emit('input', repo)
            this.$emit('close')
        },
        nextPage () {
            this.page++
            this.getUserRepos()
        }
    },
    mounted () {
        this.getUserRepos()
    }
}
</script>
<style lang="scss">
.repos .list {
    display: flex;
    flex-wrap: wrap;
    li {
        width: 45%;
        cursor: pointer;
        border-radius: 6px;
        padding: 4px;
        font-weight: 300;
        font-size: 13px;
        strong {
            font-weight: 500;
        }
        &:hover {
            background-color: rgba(120,120,120,0.05);
        }
    }
}
</style>