SigninButton.vue
<template>
    <div>
        <button v-if="!userName" @click="signIn" class="btnsign">
            Connection
        </button>
        <button v-else @click="signOut" class="btnsign">
            Déconnexion
        </button>
    </div>
</template>

<script>
import { signInAndGetUser, signOutUser } from '@/lib/microsoftGraph.js'

export default {
    name: "SigninButton",
    computed: {
        userName() {
            return this.$store.getters.userName;
        }
    },
    methods: {
        signIn() {
            const promise = new Promise(function (resolve) {
                resolve(signInAndGetUser())
            })
            promise.then(user => {
                this.$store.dispatch('setUser', user.account.name);
            }).catch(err => console.log('Something went wrong', err))
        },
        signOut() {
            signOutUser().then(() => {
                this.$store.dispatch('setUser', null);
            }).catch(err => console.log('Something went wrong', err));
        }
    }
}
</script>

<style>
.btnsign {
    background-color: #3dc45a;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 13px 40px;
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    margin: 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btnsign:hover {
    background-color: #6beb71;
    color: black;
}
</style>