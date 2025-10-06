<template>
  <div class="release">
    <div class="release_art">
      <img :src="art || defaultArt" :alt="`${title} Album Art`" />
    </div>
    <div class="release_info">
      <h3 id="release_title">{{ title }}</h3>
      <div class="release_meta">
        <span id="release_artist">{{ artist }}</span>
        &bull;
        <span id="release_date">{{ year }}</span>
        &bull;
        <span id="release_format">{{ format }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import defaultArt from "../../public/placeholder.png"

defineProps({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  year: {
    type: [String, Number],
    required: true
  },
  format: {
    type: String,
    default: "Album"
  },
  art: {
    type: String,
    default: null
  }
})
</script>
