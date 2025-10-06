<template>
  <section class="release-view-header">
    <div class="release-view-art">
      <img src="../../public/placeholder.jpg" :alt="`${artist} - ${title}`" />
    </div>
    <div class="release-view-info">
      <h1>{{ title }}</h1>
      <div class="release-view-meta">
        <p>{{ artist }}</p>
        <span>&bull;</span>
        <p>{{ year }}</p>
        <span>&bull;</span>
        <p>{{ format }}</p>
      </div>
      <div class="release-view-links">
        <span v-for="(url, name) in links" :key="name">
          <a :href="url" target="_blank" rel="noopener noreferrer">{{ name }}</a>
        </span>
      </div>
    </div>
  </section>
  <section class="release-view-comments">я дааааааун</section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import defaultArt from '../../public/placeholder.jpg'

defineProps({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  year: {
    type: [String, Number],
    required: true,
  },
  format: {
    type: String,
    default: 'Album',
  },
  art: {
    type: String,
    default: defaultArt,
  },
  links: {
    type: Object as () => Record<string, string>,
    default: () => ({}),
  },
})
</script>
