<template>
  <section>
    <hgroup>
      <h1>Welcome!</h1>
      <p>A place to share and discover unreleased, unofficial, or lost media releases.</p>
    </hgroup>
  </section>
  <section id="recently-added" class="wrapper">
    <hgroup>
      <h2>Recently Added</h2>
      <p>Recently added releases on website.</p>
    </hgroup>
    <div id="releases-container" class="container">
      <ReleaseCard
        title="Mind Furnace"
        artist="Maruja"
        :year="2025"
        format="EP"
        art="/public/placeholder.png"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ReleaseCard from "../components/ReleaseCard.vue";
</script>
