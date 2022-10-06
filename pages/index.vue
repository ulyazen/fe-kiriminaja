<template>
  <div>
    <SliderHero />
    <CardPerhitungan />
    <SliderEkspedisi :data="ekspedisi" />
    <div class="pt-10">
      <img
        class="w-full h-full rounded-box"
        src="https://kiriminaja.com/assets/home-2/pesta-pora-new.png"
      />
    </div>
    <div class="pt-28">
      <p class="text-center text-3xl font-bold">
        Untuk Semua Kebutuhan Pengiriman Paketmu
      </p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
        <div class="card w-full bg-base-100 shadow-md">
          <div class="card-body">
            <h2 class="card-title">Layanan Terintegrasi</h2>
            <p>
              Dashboard, API, Dan Mobile kami sediakan untuk mengontrol &
              monitoring lebih mudah.
            </p>
          </div>
        </div>
        <div class="card w-ful bg-base-100 shadow-md">
          <div class="card-body">
            <h2 class="card-title">Ekspedisi Terbaik</h2>
            <p>
              Kamu bisa pilih layanan sameday, next day, reguler, ekonomi, kargo
              dan lainya sesukamu.
            </p>
          </div>
        </div>
        <div class="card w-ful bg-base-100 shadow-md">
          <div class="card-body">
            <h2 class="card-title">Sistem Otomatis</h2>
            <p>
              Cetak resi / AWB, tracking, saldo COD dan banyak fitur lainnya.
            </p>
          </div>
        </div>
        <div class="card w-ful bg-base-100 shadow-md">
          <div class="card-body">
            <h2 class="card-title">Selalu Ada Untukmu</h2>
            <p>
              Kami selalu ada tanpa libur 24 Jam non stop, dan pihak ekpedisi.
            </p>
          </div>
        </div>
        <div class="card w-ful bg-base-100 shadow-md">
          <div class="card-body">
            <h2 class="card-title">Laporan Aktual</h2>
            <p>Kemudahan pantau paket, pencairan COD, saldo, semuanya.</p>
          </div>
        </div>
        <div class="card w-ful bg-base-100 shadow-md">
          <div class="card-body">
            <h2 class="card-title">Friendly</h2>
            <p>Ciptakan solusi terbaik dengan masukan, kritik, dan diskusi.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-28">
      <p class="text-center text-3xl font-bold">Kirim Paket Makin Singkat</p>
      <p class="text-center text-lg pt-4">
        Masih kurang? Yuk explore sekarang biar ngga penasaran
      </p>
      <div class="flex flex-col lg:flex-row pt-16 lg:px-10 justify-between">
        <div class="lg:w-3/5">
          <img
            class="w-full"
            src="https://kiriminaja.com/assets/banner-home-2.png"
          />
        </div>
        <div class="lg:w-2/5 lg:px-4 pt-6 space-y-3">
          <div class="card w-full bg-base-100 border-gray-300 border-2">
            <div class="card-body p-4">
              <p class="text-md">
                Berbagai service expedisi sameday, kargo dan lainnya.
              </p>
            </div>
          </div>
          <div class="card w-full bg-base-100 border-gray-300 border-2">
            <div class="card-body p-4">
              <p class="text-md">Penjemputan paket tanpa minimal kiriman.</p>
            </div>
          </div>
          <div class="card w-full bg-base-100 border-gray-300 border-2">
            <div class="card-body p-4">
              <p class="text-md">Fitur dropoff atau cashless.</p>
            </div>
          </div>
          <div class="card w-full bg-base-100 border-gray-300 border-2">
            <div class="card-body p-4">
              <p class="text-md">Kirim paket COD dengan pencairan tercepat.</p>
            </div>
          </div>
          <div class="card w-full bg-base-100 border-gray-300 border-2">
            <div class="card-body p-4">
              <p class="text-md">Platform mudah digunakan (user friendly).</p>
            </div>
          </div>
          <div class="card w-full bg-base-100 border-gray-300 border-2">
            <div class="card-body p-4">
              <p class="text-md">Meminimalisir rasio retur.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <BannerDownload />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  layout: "default",
  name: "IndexPage",
  data() {
    return {};
  },
  computed: {
    ekspedisi() {
      return this.$store.state.ekspedisi;
    },
  },
  mounted() {
    this.fetchEkspedisi();
  },
  methods: {
    ...mapActions(["fetchEkspedisi"]),
  },
};
</script>
