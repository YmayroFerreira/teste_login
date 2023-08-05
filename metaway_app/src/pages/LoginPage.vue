<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="username"
        label="Usuário"
        hint="insira seu nome de usuário"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Obrigatório']"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Senha"
        hint="Insira sua senha"
        lazy-rules
        :rules="[
          (val) => (val !== null && val !== '') || 'Obrigatório',
          (val) => val.length >= 8 || 'Insira uma senha valida',
        ]"
      />

      <q-toggle v-model="remember" label="Lembrar meu usuário" />

      <div>
        <q-btn label="Entrar" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
</template>

<script>
import { Cookies, useQuasar } from 'quasar';
import { ref } from 'vue';
import api from '/src/axios-api';
import { useRouter } from 'vue-router';

export default {
  name: 'LoginPage',
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const username = ref(null);
    const password = ref(null);
    const remember = ref(false);

    return {
      username,
      password,
      remember,

      onSubmit() {
        api
          .post('/auth/login', {
            password: password.value,
            username: username.value,
          })
          .then((response) => {
            Cookies.set('user', JSON.stringify(response.data));
            Cookies.set('token', response.data.accessToken);
            router.push({ path: '/' });
          })
          .catch(() => {
            $q.notify({
              color: 'red-5',
              textColor: 'white',
              icon: 'warning',
              message: 'Login e/ou senha inválida(s)',
            });
          });
      },

      onReset() {
        username.value = null;
        password.value = null;
        remember.value = false;
      },
    };
  },
};
</script>
