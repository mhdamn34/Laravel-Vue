<template>
    <div>
        <section v-if="username">
        <h1>Hello {{ username }}.</h1>
        <router-link :to="{name: 'User'}">Kembali</router-link>
    </section>

    <section v-else>
        <h1>Daftar User</h1>
        <ul>
            <li v-for="user in users">
            <!-- bnyak cara nk guna nagivation
                1. guna router link
                2. guna router push (guna hyperlink <a> </a>)
            -->
                <!-- <router-link :to="profileUrl(user.name)">{{user.name}}</router-link> -->
                <a href="" @click.prevent="profile(user.name)">{{user.name}}</a>
            </li>
        </ul>
    </section>
    </div>
</template>

<script>
export default {
    props: ['username'],
    data() { 
        return {
            users: []
        } 
    },
    mounted(){
        // axios.get('/api/users').then((response)=>{
        //     console.log(response)
        //     this.users = response.data
        // })
        fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.users = data
        });

    },
    methods: {
        profileUrl(name){
            return '/user/' + name.toLowerCase()
        },
        profile(name){
            // this.$router.push('/user/' + name.toLowerCase())
            this.$router.push({
                name: 'User',
                params: {username: name}
            })
        }
    }
}
</script>
