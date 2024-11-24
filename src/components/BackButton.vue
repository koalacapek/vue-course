<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goBack = () => {
  router.go(-1)
}
</script>

<template>
  <section>
    <div @click="goBack" class="container m-auto py-6 px-6 hover:cursor-pointer">
      Back to Job Listings
    </div>
  </section>
</template>
