<template>
    <v-app>
        <v-content>
            <Navigation v-if="showNavigation"/>

            <router-view/>
        </v-content>
    </v-app>

</template>

<script>
    import Navigation from './Navigation.vue';
    import {mapGetters} from "vuex";

    export default {
        components: {
            Navigation,
        },
        data() {
            return {currentRouteName: null}
        },
        updated() {
            this.currentRouteName = this.$router.currentRoute.name;
        },
        created() {
            this.currentRouteName = this.$router.currentRoute.name;
        },
        computed: {
            ...mapGetters({
                authenticated: "authService/authenticated",
            }),
            showNavigation() {
                return this.authenticated && this.currentRouteName !== 'landing';
            }
        }
    }
</script>
