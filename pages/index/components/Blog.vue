<template>
  <section id="blog" class="lg:py-20 py-10">
    <div class="container">
      <div class="flex items-end justify-between mb-10">
        <div class="max-w-2xl mx-auto text-center">
          <span
            class="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary"
            >Our Blog</span
          >
          <h2 class="text-3xl font-medium capitalize text-default-950 my-4">
            The latest news and tips from our agency
          </h2>
          <p class="text-base font-medium text-default-800">
            The latest news and tips from our agency
          </p>
        </div>
      </div>

      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <BlogCard1 v-for="(blog, idx) in blogData" :key="blog.title" :blog="blog" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BlogCard1 from '~/components/widgets/BlogCard1.vue'

import type { BlogType } from '~/types/landing'

import agencyImg13 from 'assets/images/landing/agency/img-13.jpg'
import agencyImg14 from 'assets/images/landing/agency/img-14.jpg'
import agencyImg15 from 'assets/images/landing/agency/img-15.jpg'

const blogData: BlogType[] = [
  {
    image: agencyImg13,
    publish: {
      date: 7,
      month: 'JULY'
    },
    title: 'Innovations in AI Development',
    description:
      'Explore the latest advancements and trends in artificial intelligence to enhance your digital projects.'
  },
  {
    image: agencyImg14,
    publish: {
      date: 9,
      month: 'JULY'
    },
    title: 'Mobile App Optimization',
    description:
      'Practical tips to maximize the performance and user experience of your mobile applications.'
  },
  {
    image: agencyImg15,
    publish: {
      date: 10,
      month: 'JULY'
    },
    title: 'Web Development Trends',
    description:
      'Analysis of new trends and best practices for creating modern and effective websites.'
  }
]
</script>
