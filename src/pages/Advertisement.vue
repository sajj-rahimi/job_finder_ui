<template>
  <q-page class="flex flex-center">
    <div class="adv-profile">
      <div class="profile-header flex">
        <q-icon name="company" class="q-ic" />
        <div class="company-name">شرکت سیگنال - ۲۲ فرصت شغلی</div>
      </div>
      <div class="profile-body">
        <div class="detials">
          <q-chip
            v-if="details.category"
            dense
            color="primary"
            text-color="white"
            icon="event"
          >
            {{ details.category }}
          </q-chip>
          <q-chip
            v-if="details.company"
            dense
            color="teal"
            text-color="white"
            icon="bookmark"
          >
            {{ details.company }}
          </q-chip>
          <q-chip
            v-if="details.type !== null && details.type !== undefined"
            dense
            color="orange"
            text-color="white"
            icon-right="star"
          >
            {{ details.type }}
          </q-chip>
        </div>
        <div class="details">
          <q-chip
            v-if="details.contract !== null && details.contract !== undefined"
            dense
            color="deep-orange"
            text-color="white"
            icon="alarm"
          >
            {{ details.contract }}
          </q-chip>
          <q-chip
            v-if="details.location"
            dense
            color="deep-orange"
            text-color="white"
            icon="directions"
          >
            {{ details.location + " : " + details.province }}
          </q-chip>
        </div>
        <div class="desc">
          <h6 class="desc-title">توضیحات آگهی</h6>
          <p>{{ details.desciption }}</p>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
const $store = useStore();
export default {
  name: "Advertisement",
  data() {
    return {
      details: {},
    };
  },
  created() {
    this.details = this.$route.params;
  },
  methods: {},
};
</script>
<style scoped lang="scss">
.adv-profile {
  width: 100vw;
  height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .profile-header {
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    position: absolute;
    top: 0;
    .q-ic {
      color: $secondary;
      font-size: 7rem;
    }
    .company-name {
      font-size: 1.5rem;
      font-weight: 600;
      margin-right: 5rem;
      width: 30%;
    }
  }
  .profile-body {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-top: 5rem;

    .details {
      width: 100%;
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .desc {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      p {
        margin-top: 2rem;
      }
    }
  }
}
</style>
