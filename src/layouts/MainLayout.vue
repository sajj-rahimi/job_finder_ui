<template>
  <q-layout view="lHh Lpr lFf" dir="rtl">
    <q-header reveal class="my-header">
      <div class="my-nav">
        <router-link :to="{ name: 'home' }" class="nav-item"
          >صفحه اصلی</router-link
        >
        <router-link to="/advertisings" class="nav-item">آگهی ها</router-link>
        <router-link to="/companies" class="nav-item">
          شرکت های عضو مجموعه</router-link
        >
        <template v-if="$route.name !== 'login'">
          <q-chip class="login-part" v-if="currentUser.islLogged">
            <q-avatar class="left-aligned">
              <img
                src="https://cdn.quasar.dev/img/boy-avatar.png"
                class="mr-auto avt"
              />
            </q-avatar>
            <div style="margin-left: 1.5rem">{{ currentUser.name }}</div>
          </q-chip>
          <router-link :to="{ name: 'login' }" v-else class="login-part">
            <q-chip>
              <q-avatar class="left-aligned">
                <img
                  src="https://cdn.quasar.dev/img/boy-avatar.png"
                  class="mr-auto avt"
                />
              </q-avatar>
              <div style="margin-left: 1.5rem">ورود / ثبت نام</div>
            </q-chip>
          </router-link>
        </template>
      </div>
    </q-header>
    <q-footer elevated class="my-footer" v-if="$route.name !== 'login'">
      <q-toolbar>
        <q-toolbar-title>کاریاب</q-toolbar-title>
      </q-toolbar>
      <p class="q-pt-md q-pr-md">تمامی حقوق این سای متعلق به ماست</p>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { useStore } from "vuex";
const $store = useStore();
const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
  {
    title: "Github",
    caption: "github.com/quasarframework",
    icon: "code",
    link: "https://github.com/quasarframework",
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev",
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev",
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev",
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev",
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev",
  },
];

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},
  created() {
    console.log();
  },
  computed: {
    currentUser() {
      return this.$store.getters["index/getUser"];
    },
  },
  data() {
    return {
      essentialLinks: linksList,
    };
  },
});
</script>
<style scoped lang="scss">
.my-header {
  background-color: $secondary;
  height: 5rem;
  padding: 2rem 5rem;
  .my-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .nav-item {
      text-decoration: none;
      color: #fff;
      font-size: 1rem;
      margin-left: 2rem;
      font-family: "IRANSans";
    }
    .login-part {
      text-decoration: none;
      cursor: pointer;
      margin-right: auto;
      position: relative;
      display: flex;
      justify-content: flex-end;
      .left-aligned {
        left: 0;
        position: absolute;
        .avt {
          position: absolute;
          left: 0.8rem;
        }
      }
    }
  }
}
.my-footer {
  position: absolute;
  bottom: 0;
  height: 10rem;
  background-color: $secondary;
  clip-path: polygon(0 0, 10% 35%, 100% 0%, 100% 100%, 0 100%);
}
</style>
