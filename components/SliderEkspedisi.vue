<template>
  <div class="pt-6">
    <div class="carousel carousel-center max-full space-x-4 rounded-box">
      <div
        class="carousel-item"
        v-for="(ekspedisi, index) in data"
        :key="index"
      >
        <img :src="ekspedisi.image" class="rounded-box w-64 h-auto" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["data"],
};
</script>
