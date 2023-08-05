<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="name"
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
import { useQuasar } from 'quasar';
import { ref } from 'vue';

export default {
  name: 'LoginPage',
  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const password = ref(null);
    const remember = ref(false);

    return {
      name,
      password,
      remember,

      onSubmit() {
        if (remember.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first',
          });
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted',
          });
        }
      },

      onReset() {
        name.value = null;
        password.value = null;
        remember.value = false;
      },
    };
  },
};
</script>
