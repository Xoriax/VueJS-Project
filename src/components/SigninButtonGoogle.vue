<template>
    <div class="btnGoogle">
        <GoogleLogin @success="signIn" @failure="loginError" prompt auto-login />
    </div>
</template>

<script>
import { ref } from "vue";
import { GoogleLogin, decodeCredential } from "vue3-google-login";
import store from "@/store.js";

export default {
    name: "SigninGoogle",
    components: { GoogleLogin },
    setup() {
        const user = ref({ userName: null });

        const signIn = async (response) => {
            console.log('signIn', response);
            const decodedCredential = decodeCredential(response.credential);
            user.value.userName = `${decodedCredential?.given_name} ${decodedCredential?.family_name}`;
            console.log("User signed in with Google:", user.value.userName);

            store.commit("setUser", user.value.userName);
            store.commit("setAuthentication", true);
        };

        const loginError = (error) => {
            console.error("Login error:", error);
        };

        return {
            user,
            signIn,
            loginError
        };
    },
};
</script>

<style>
.btnGoogle {
    padding: 13px 40px;
    height: 40px;
    margin: 9px;
}
</style>