<template>
  <div :class="baseClass">
    <IonCard>
      <IonCardContent>
        <form @submit.prevent="loginHandler">
          <IonItem>
            <IonLabel position="floating">Username</IonLabel>
            <IonInput name="username" autocomplete="username" v-model="username"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Password</IonLabel>
            <IonInput name="password" type="password" v-model="password"></IonInput>
          </IonItem>
          <IonButton type="submit" expand="block">Log in</IonButton>
        </form>
      </IonCardContent>
    </IonCard>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { IonButton, IonCard, IonCardContent, IonItem, IonLabel, IonInput } from '@ionic/vue';
import { loginToReddit } from '../services/api'

const baseClass='c-login-form'

const username = ref('')
const password = ref('')

const loginHandler = (): void => {
  const reddit = loginToReddit({
    username: username.value,
    password: password.value,
  })

  console.log("REDDIT", reddit)
  reddit.getSubreddit('soccer').fetch().then(subreddit => {
    console.log(subreddit)
  })
}


onMounted(() => {
  //username.value.focus()
})

</script>

<style scoped>

</style>
