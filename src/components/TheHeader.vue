<template>
  <header class="the-header">
    <ul>
      <li><img src="../../public/logo.svg" alt="Logo" class="logo" /></li>
    </ul>
    <ul>
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/releases">RELEASES</router-link></li>
      <li><router-link :to=auth>ACCOUNT</router-link></li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";

const auth = computed(() => ("/account"));

</script>
