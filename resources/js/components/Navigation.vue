<template>
    <v-card>
        <v-navigation-drawer
            permanent
            app
            dark
            v-model="drawer"
            :mini-variant.sync="mini"
        >
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img src="https://randomuser.me/api/portraits/men/81.jpg"></v-img>
                </v-list-item-avatar>

                <v-list-item-title>{{user? user.name: 'Welcome'}}</v-list-item-title>
                <v-btn
                    icon
                    @click.stop="mini = !mini"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>

            </v-list-item>

            <v-divider></v-divider>
            <v-list>
                <v-list-item to="/dashboard">
                    <v-list-item-icon>
                        <v-icon color="white">dashboard</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item>

                <v-list-item @click="signOut">
                    <v-list-item-icon>
                        <v-icon color="white">exit_to_app</v-icon>
                    </v-list-item-icon>

                    <v-list-item-title>Logout</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";

    export default {
        data() {
            return {
                mini: false,
                drawer: true,
            };
        },
        methods: {
            ...mapActions({
                signOutAction: "authService/signOut"
            }),
            signOut() {
                this.signOutAction().then(() => {
                    this.$router.replace({
                        name: "landing"
                    });
                });
            }

        },
        computed: {
            ...mapGetters({
                authenticated: "authService/authenticated",
                user: "authService/user",
            }),
        }
    };
</script>
