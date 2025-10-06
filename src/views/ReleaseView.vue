<template>
  <div class="release-view">
    <ReleaseItem
      title="Mind Furnace"
      artist="Maruja"
      :year="2025"
      format="EP"
      art="/public/placeholder.jpg"
      :links="{
        Download: 'https://idk.com',
        YouTube: 'https://www.youtube.com/watch?v=I4t2L46AOeM&t=276s',
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import ReleaseItem from '@/components/ReleaseItem.vue'
</script>
