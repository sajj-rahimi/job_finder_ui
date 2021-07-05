<template>
  <q-page class="flex flex-center my-column">
    <div class="q-mb-lg">
      <q-btn
        label="ثبت نام"
        color="white"
        flat
        class="q-ml-lg"
        style="font-size: 1.5rem; font-weght: 600"
        @click="changState('signup')"
      />
      <q-btn
        label="ورود"
        color="white"
        style="font-size: 1.5rem; font-weght: 600"
        @click="changState('login')"
        flat
      />
    </div>
    <q-form
      @submit="loginSubmit"
      class="q-gutter-md form-style"
      v-if="state === 'login'"
    >
      <q-input
        bg-color="white"
        style="direction: rtl"
        filled
        type="email"
        v-model="loginForm.email"
        placeholder="ایمیل"
        lazy-rules
        :rules="[(val) => isValidEmail(val)]"
      />

      <q-input
        bg-color="white"
        filled
        type="password"
        v-model="loginForm.password"
        placeholder="رمز عبور"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'لطفا رمز عبور خود را وارد کنید',
          (val) => val.length > 6 || 'رمز عبور باید بیش از ۶ رقم باشد',
        ]"
      />
      <div class="flex flex-center">
        <q-btn label="ورود" type="submit" color="accent" size="large" />
      </div>
    </q-form>
    <q-form
      @submit="signupSubmit"
      class="q-gutter-md form-style"
      v-else-if="state === 'signup'"
    >
      <q-input
        filled
        bg-color="white"
        v-model="signupForm.name"
        placeholder="نام کاربری"
        lazy-rules
        :rules="[
          (val) =>
            (val && val.length > 0) || 'لطفا نام کاربری خود را وارد کنید',
        ]"
      />
      <q-input
        filled
        bg-color="white"
        v-model="signupForm.email"
        placeholder="ایمیل"
        type="email"
        lazy-rules
        :rules="[(val) => isValidEmail(val)]"
      />

      <q-input
        bg-color="white"
        filled
        type="password"
        v-model="signupForm.password"
        placeholder="رمز عبور"
        lazy-rules
        :rules="[(val) => val.length > 6 || 'رمز عبور باید بیش از ۶ رقم باشد']"
      />
      <q-input
        filled
        bg-color="white"
        type="password"
        v-model="signupForm.password_confirmation"
        placeholder="تکرار رمز عبور "
        lazy-rules
        :rules="[(val) => val.length > 6 || 'رمز عبور باید بیش از ۶ رقم باشد']"
      />

      <div class="flex flex-center">
        <q-btn label="ثبت نام" type="submit" color="primary" size="large" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { useStore } from "vuex";
const $store = useStore();
export default {
  name: "PageIndex",
  data() {
    return {
      state: "login",
      loginForm: {
        email: "",
        username: "",
        password: "",
      },
      signupForm: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    isValidEmail(val) {
      const emailPattern =
        /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
      return emailPattern.test(val) || "ایمیل نامعتبر است";
    },
    changState(state) {
      this.state = state;
    },
    loginSubmit() {
      this.$store
        .dispatch("index/signIn", JSON.stringify(this.loginForm))
        .then((res) => {
          res.text();
        })
        .then((res) => {
          this.$store.dispatch("index/setUser", res);
          this.$router.go(-1);
        });
    },
    signupSubmit(form) {
      this.$store
        .dispatch("index/signup", JSON.stringify(this.signupForm))
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
<style scoped lang="scss">
.my-column {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: linear-gradient(to bottom, $secondary, $info);
}
.form-style {
  width: 35%;
  height: 45vh;
}
</style>
