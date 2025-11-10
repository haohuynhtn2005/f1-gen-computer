<template>
  <div>
    <Header />
    <div class="main-layout">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>
