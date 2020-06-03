<template>
    <v-card>
        <v-card-title>SignIn</v-card-title>
        <v-card-text>
            <v-text-field
                prepend-inner-icon="email"
                label="Email"
                :error-messages="form.errors.get('email')"
                v-model="form.email"
            ></v-text-field>
            <v-text-field
                prepend-inner-icon="lock"
                label="Password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                v-model="form.password"
                :error-messages="form.errors.get('password')"
                @click:append="showPassword = !showPassword"
                counter
            ></v-text-field>

        </v-card-text>
        <v-card-actions>
            <v-btn
                @click="signIn"
                block
                color="success"
                :disabled="!form.email || !form.password"
            >Signin
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
    import {mapActions} from "vuex";

    export default {
        data() {
            return {
                signing_in: false,
                showPassword: false,
                form: new Form({
                    email: null,
                    password: null,
                })
            };
        },
        created() {
        },

        mounted() {
        },

        methods: {
            ...mapActions({
                signInAction: "authService/signIn"
            }),
            signIn() {
                this.signInAction(this.form)
                    .then(() => {
                        this.$router.replace({
                            name: "dashboard"
                        });
                    })
                    .catch(error => {
                        this.form.errors.set(error.response.data.errors);
                    });
            },
        },

        computed: {}
    };
</script>
