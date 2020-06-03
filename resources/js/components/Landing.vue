<template>
    <v-container fill-height fluid>
        <v-row align="center"
               justify="center">

            <v-card elevation="12" height="90vh" width="95vw" color="blue">

                <v-col>
                    <v-row align="center"
                           justify="center">
                        <h1 class="display-2 font-weight-thin" style="color: aliceblue">
                            <v-icon size="200" color="white">
                                store
                            </v-icon>
                        </h1>
                    </v-row>
                    <v-row align="center"
                           justify="center">
                        <h1 style="color: aliceblue">Welcome to</h1>
                    </v-row>
                    <v-row
                        justify="center">
                        <h1 style="color: aliceblue">DenofCoders</h1>
                        <h3 style="color: aliceblue"> &#169; </h3>
                    </v-row>
                    <v-row align="center"
                           justify="center">
                        <v-btn x-large outlined color="white" href="https://denofcoders.com/">learn more</v-btn>
                    </v-row>
                    <v-row align="center"
                           class="mt-2"
                           justify="center">
                        <v-btn x-large to="/signin" color="success" href="https://denofcoders.com/"
                               v-if="!authenticated">Signin
                        </v-btn>
                    </v-row>
                    <v-row align="center"
                           justify="center">
                        <v-btn x-large color="white" to="/dashboard" href="https://denofcoders.com/"
                               v-if="authenticated">Dashboard
                        </v-btn>
                    </v-row>
                </v-col>
            </v-card>

        </v-row>
    </v-container>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {

        data() {
            return {}
        },
        methods: {},
        computed: {
            ...mapGetters({
                authenticated: "authService/authenticated",
                user: "authService/user"
            })

        },
    };
</script>
