<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="margin-top: 5rem; width: 90%">
      <q-table
        grid
        hide-header
        title="برترین شرکت‌ها"
        :rows="compRows"
        :columns="columns"
        row-key="name"
        :table-header-style="{ backgroundColor: '#edfcff' }"
        @row-click="onRowClick"
        hide-pagination
      />
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
const compColumns = [
  {
    name: "name",
    required: true,
    label: "نام شرکت",
    align: "center",
    field: (row) => row.title || "نامشخص",
    format: (val) => `${val}`,
  },
  {
    name: "amount",
    align: "center",
    label: "تعداد استخدامی",
    field: "amount",
  },
  {
    name: "category",
    align: "center",
    label: "رشته",
    field: "category",
  },
  { name: "location", label: "استان", align: "center", field: "location" },
];

export default {
  name: "PageIndex",
  computed: {
    rows() {
      return this.tableRows;
    },
  },
  created() {
    this.getAdvs();
  },
  methods: {
    getAdvs() {
      this.loading = true;
      this.$api
        .get("/getJobs")
        .then((res) => {
          res.text();
        })
        .then((res) => {
          this.tableRows = res;
          this.tableRows["contract"] =
            res["contract"] == 0
              ? "ریموت"
              : res["type"] == 1
              ? "پاره وقت"
              : "تمام وقت";
          this.tableRows["type"] =
            res["type"] == 0
              ? "کارآموز"
              : res["type"] == 1
              ? "جونیور"
              : "سنیور";
          this.loading = false;
        });
    },
    onRowClick(evt, row) {
      this.$router.push({ name: "advertisement", params: { ...row } });
    },
  },
  data() {
    return {
      loading: false,
      columns,
      tableRows: [],
    };
  },
};
</script>
<style scoped lang="scss">
.mt-3 {
  margin-top: 3rem;
}
</style>
