<template>
  <footer class="relative border-t border-default-200">
    <div class="container relative">
      <p class="py-6 text-center font-medium text-default-900">
        {{ year }}
        © Tecklick.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>
