<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <div
          class="error"
          v-html="error">
        </div>
        <br>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>
              Register
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-icon="person"
                v-model="email"
                name="email"
                label="Email"
                type="email">
              </v-text-field>
              <v-text-field
                prepend-icon="lock"
                v-model="password"
                name="password"
                label="Password"
                type="password">
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn
              @click="register"
              color="primary">
                Register
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// import AuthenticationService to send data to server end-point
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    // async and try/catch (to get an error)
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error {
  font-size: 125%;
}
</style>
