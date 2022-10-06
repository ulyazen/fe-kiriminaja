<template>
  <div>
    <div class="flex flex-col justify-center items-center lg:pt-28">
      <p
        class="text-2xl lg:text-5xl text-center lg:px-48 font-bold leading-tight"
      >
        <span class="text-[#6f42c1]">Memberi solusi teknologi</span> untuk
        kebutuhan supply chain yang mempermudah ekosistem bisnis Indonesia
        berkembang.
      </p>
      <p class="text-lg py-6">
        Pengiriman untuk UMKM, Pebisnis Online, dan seluruh masyarakat
        Indonesia.
      </p>
      <div class="pt-8">
        <img
          class="w-max h-auto rounded-box"
          src="https://storage.googleapis.com/tprt0ezsggqjornc7nf1wwluvgulhr/team-image.jpg"
        />
      </div>
    </div>

    <div class="pt-16">
      <div class="flex flex-col lg:flex-row lg:px-10 justify-between">
        <div class="lg:w-1/2 lg:px-8 space-y-3">
          <p class="text-4xl font-bold">Our Mission</p>
          <div
            class="card w-full bg-[#bb92e1] bg-opacity-25 border-[#6f2fab] border-2"
          >
            <div class="card-body p-4">
              <p class="text-md">
                Berbagai service expedisi sameday, kargo dan lainnya.
              </p>
            </div>
          </div>
          <div
            class="card w-full bg-[#bb92e1] bg-opacity-25 border-[#6f2fab] border-2"
          >
            <div class="card-body p-4">
              <p class="text-md">Penjemputan paket tanpa minimal kiriman.</p>
            </div>
          </div>
          <div
            class="card w-full bg-[#bb92e1] bg-opacity-25 border-[#6f2fab] border-2"
          >
            <div class="card-body p-4">
              <p class="text-md">Fitur dropoff atau cashless.</p>
            </div>
          </div>
          <div
            class="card w-full bg-[#bb92e1] bg-opacity-25 border-[#6f2fab] border-2"
          >
            <div class="card-body p-4">
              <p class="text-md">Kirim paket COD dengan pencairan tercepat.</p>
            </div>
          </div>
        </div>
        <div class="lg:w-1/2 space-y-4 text-xl">
          <p>
            <span class="text-[#BB92E1] font-bold">KiriminAja</span> sebuah
            platform yang memberikan kemudahan untuk pengiriman paket dan
            menemukan ekspedisi sesuai kebutuhan masyarakat, dengan metode
            pengiriman COD dan Non-COD yang dikembangkan oleh PT Selalu Siap
            Solusi.
          </p>
          <p>
            <span class="font-bold">KiriminAja</span> memberikan solusi untuk
            UMKM, pebisnis online, serta seluruh masyarakat Indonesia yang ingin
            melakukan pengiriman paket.
          </p>
          <p><span class="font-bold">KiriminAja</span> menawarkan:</p>
          <ul class="list-disc px-6">
            <li>
              Kemudahan pengiriman paket dengan pilihan berbagai ekspedisi.
            </li>
            <li>
              Adanya layanan pengiriman COD (Cash On Delivery) dengan pencairan
              dana harian dan sistem pengambilan paket dirumah oleh ekspedisi.
            </li>
            <li>
              Layanan pengiriman paket non-cod dengan sistem pengambilan paket
              dirumah oleh ekspedisi.
            </li>
            <li>
              Platform yang dapat membantu pebisnis online mengendalikan dan
              mengelola bisnisnya dengan lebih baik.
            </li>
          </ul>
          <p>
            Dengan layanan dan inovasi yang ditawarkan, KiriminAja memiliki
            komitmen untuk berkontribusi pada perekonomian Indonesia, dengan
            cara memberikan solusi serta kemudahan bagi para pebisnis online
            supaya bisnisnya terus berkembang.
          </p>
        </div>
      </div>
    </div>

    <div class="pt-16">
      <p class="text-center text-4xl font-bold">Our Team</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
        <div
          class="card w-full bg-base-100 rounded-none"
          v-for="(team, index) in team"
          :key="index"
        >
          <div class="card-body p-0">
            <img class="w-max h-auto rounded-box" :src="team.avatar" />
            <h2 class="card-title">{{ team.name }}</h2>
            <p>
              {{ team.job }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-[#f8f9fa] mt-16 py-16 flex flex-col justify-center items-center rounded-box space-y-8"
    >
      <p class="text-4xl font-bold">Anda adalah kami selanjutnya?</p>
      <p class="text-lg px-32">
        Jika anda memiliki passion tinggi dan menyukai tantangan. Mari
        berkontribusi kepada bangsa dengan membantu UMKM dan pebisnis online
        tumbuh.
      </p>
      <a class="btn btn-lg bg-[#6f2fab] normal-case">Berkarir di KiriminAja</a>
    </div>
    <BannerDownload />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  layout: "default",
  name: "TentangPage",
  data() {
    return {};
  },
  computed: {
    team() {
      return this.$store.state.team;
    },
  },
  mounted() {
    this.fetchTeam();
  },
  methods: {
    ...mapActions(["fetchTeam"]),
  },
};
</script>

<style></style>
