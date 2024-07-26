<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import 'assets/css/style.css'

definePageMeta({
  middleware: ['auth']
})

useHead({
  title: 'Teklick - Trust the click',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'author', content: 'Coderthemes' },
    {
      name: 'description',
      content:
        'One click can do more than you expect.'
    }
  ]
})

useSeoMeta({
  title: 'Teklick - Trust the click',
  description:
    'One click can do more than you expect.'
})
</script>
