<template>
  <q-page class="flex flex-center">
    <div class="heading">
      <div class="heading-title q-pb-lg">
        سامانه آنلاین کاریابی و آگهی‌های استخدام
      </div>
      <div
        class="
          heading-filters
          row
          wrap
          justify-around
          items-start
          content-stretch
        "
        style="direction: rtl"
      >
        <q-input
          bg-color="white"
          class="col-md-4 q-pl-md"
          :input-style="{ direction: 'rtl' }"
          color="primary"
          filled
          outlined
          v-model="form.title"
          placeholder="جستجو در عنوان آگهی"
        >
          <template v-slot:prepend>
            <q-icon name="search" class="q-pl-md" />
          </template>
        </q-input>
        <q-select
          bg-color="white"
          color="primary"
          class="col-md-6 q-pl-md"
          filled
          bottom-slots
          v-model="form.province"
          placeholder="انتخاب استان"
          :options="provinces"
        >
          <template v-slot:prepend>
            <q-icon name="place" class="q-pl-md" @click.stop />
          </template>
          <template v-slot:append>
            <q-icon
              name="close"
              @click.stop="form.province = ''"
              class="cursor-pointer"
            />
          </template>
          <template v-slot:selected>
            <template v-if="form.province">
              {{ form.province }}
            </template>
            <template v-else> انتخاب استان </template>
          </template>
        </q-select>
        <q-btn
          size="1.34rem"
          class="col-md-2 align-stretch"
          color="primary"
          label="جستجو"
        />
      </div>
    </div>
    <div
      class="row wrap justify-around items-start content-stretch"
      style="margin-top: 20rem"
    >
      <q-card bordered class="col-md-3 bg-white-8 my-card">
        <q-card-section>
          <q-icon name="style" class="q-pl-md" style="font-size: 4rem" />

          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          {{
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،."
          }}
        </q-card-section>
      </q-card>
      <q-card bordered class="col-md-3 bg-white-8 my-card">
        <q-card-section>
          <q-icon name="style" class="q-pl-md" style="font-size: 4rem" />
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          {{
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،."
          }}
        </q-card-section>
      </q-card>
      <q-card bordered class="col-md-3 bg-white-8 my-card">
        <q-card-section>
          <q-icon name="style" class="q-pl-md" style="font-size: 4rem" />

          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section>
          {{
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،."
          }}
        </q-card-section>
      </q-card>
    </div>
    <div>
      <div class="q-pa-md" style="margin-top: 5rem">
        <q-table
          title="آخرین آگهی‌ها"
          :rows="rows"
          :columns="columns"
          row-key="name"
          :table-style="{ backgroundColor: '#edfcff' }"
          @row-click="onRowClick"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
const columns = [
  {
    name: "title",
    required: true,
    label: "عنوان آگهی",
    align: "center",
    field: (row) => row.title || "نامشخص",
    format: (val) => `${val}`,
  },
  {
    name: "company",
    align: "center",
    label: "نام شرکت",
    field: "company",
  },
  {
    name: "category",
    align: "center",
    label: "رشته",
    field: "category",
  },
  { name: "location", label: "استان", field: "location" },
  {
    name: "price",
    align: "center",
    label: "حقوق مدنظر",
    field: "price",
  },
  {
    name: "type",
    align: "center",
    label: "نوع استخدام",
    field: "type",
  },
  {
    name: "desc",
    align: "center",
    label: "توضیحات",
    field: "desc",
  },
];

const rows = [
  {
    title: "Frozen Yogurt",
    price: 159,
    category: 6.0,
    company: 24,
    type: 4.0,
    desc: 87,
    location: { component: essentialLinks },
  },
];
import essentialLinks from "components/EssentialLink.vue";
export default {
  name: "PageIndex",
  // computed: {
  //   rows() {},
  // },
  methods: {
    onRowClick(evt, row) {
      console.log("clicked on", row);
    },
  },
  data() {
    return {
      columns,
      rows,
      form: {
        title: "",
        province: "",
      },
      provinces: [
        { label: "تهران", value: "نهران" },
        "گیلان",
        "آذربایجان شرقی",
        "خوزستان",
        "فارس",
        "اصفهان",
        "خراسان رضوی",
        "قزوین",
        "سمنان",
        "قم",
        "مرکزی",
        "زنجان",
        "مازندران",
        "گلستان",
        "اردبیل",
        "آذربایجان غربی",
        "همدان",
        "کردستان",
        "کرمانشاه",
        "لرستان",
        "بوشهر",
        "کرمان",
        "هرمزگان",
        "چهارمحال و بختیاری",
        "یزد",
        "سیستان و بلوچستان",
        "ایلام",
        "کهگلویه و بویراحمد",
        "خراسان شمالی",
        "خراسان جنوبی",
        "البرز",
      ],
      jobCategories: [
        "برنامه نویسی وب",
        "برنامه نویسی هوش مصنوعی",
        "مدیریت مالی ",
        " devOps",
        "گرافیست",
        "طراح UI/UX",
        "بازاریابی ",
        "منابع انسانی",
      ],
    };
  },
};
</script>
<style scoped lang="scss">
.heading {
  background-color: $secondary;
  clip-path: polygon(0 0, 100% 0, 100% 51%, 79% 78%, 0 52%);

  height: 37rem;
  padding: 3rem 5rem;
  position: absolute;
  top: 0;
  width: 100%;
  .heading-title {
    text-align: center;
    font-size: 2rem;
  }
}
.bg-white-8 {
  background-color: white;
  opacity: 0.8;
  backdrop-filter: blur(10px);
}
.mt-3 {
  margin-top: 3rem;
}
</style>
