<template>
    <div class="centered-content">
        <h1>Conversations Index Page</h1>
        <p v-if="loading">Loading emails...</p>
        <div v-else>
            <div v-for="email in emails" :key="email.id">
                <h2>{{ email.subject }}</h2>
                <p>{{ email.bodyPreview }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { graphConfig, signInAndGetUser } from '@/lib/microsoftGraph.js'

export default {
    name: 'ConversationsIndexPage',
    data() {
        return {
            emails: [],
            loading: false
        }
    },
    async created() {
        this.loading = true;
        const user = await signInAndGetUser();
        const token = user.accessToken;
        const response = await fetch(graphConfig.graphMailEndpoint, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await response.json();
        this.emails = data.value;
        this.loading = false;
    }
}
</script>


<style scoped>
.centered-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: 1px solid #000;
    padding: 20px;
    height: 200px;
    margin: 200px;
}
</style>
