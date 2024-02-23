<template>
    <div>
        <header>
            <div id="header">
                <div class="left">
                    <router-link to="/" class="btn"><font-awesome-icon :icon="icons.home" class="icon" /> Home</router-link>
                    <router-link v-if="userName" to="/conversations" class="btn">Conversations</router-link>
                </div>
                <div class="right">
                    <p class="btn"><font-awesome-icon :icon="icons.user" class="icon" /> {{ userName ? userName : 'Not Connected' }}</p>
                    <SingninButton @user-changed="updateUser" />
                    <SigninGoogle />
                </div>
            </div>
        </header>

        <slot></slot>

        <footer>
            <div id="footer">
                <p>This work is protected by international laws | 2021 | thomas-veillard.fr</p>
            </div>
        </footer>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faUser, faConversations } from '@fortawesome/free-solid-svg-icons'
import SingninButton from './SigninButton.vue'
import SigninGoogle from './SigninButtonGoogle.vue'

export default {
    name: 'BaseLayout',
    props: {
        msg: String
    },
    components: {
        FontAwesomeIcon,
        SingninButton,
        SigninGoogle
    },
    computed: {
        userName() {
            return this.$store.getters.userName;
        }
    },
    data() {
        return {
            icons: {
                home: faHome,
                user: faUser,
                conversations: faConversations
            }
        }
    },
    methods: {
        updateUser(name) {
            this.userName = name;
        }
    }
}
</script>


<style scoped>
#footer {
    background-color: rgb(39, 39, 76);
    padding: 5px;
    color: aliceblue;
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 20px;
}

#header {
    background-color: rgb(45, 176, 93);
    display: flex;
    justify-content: space-between;
    padding: 5px 40px;
    font-size: 20px;
    font-weight: bold;
}

#header .left,
#header .right {
    display: flex;
}

.btn {
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

.btn:hover {
    background-color: #6beb71;
    color: black;
}

</style>