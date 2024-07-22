<template>
  <header
    id="navbar"
    class="inset-x-0 top-0 z-60 transition-all duration-500 py-4 flex items-center bg-white dark:bg-default-50 lg:bg-transparent [&.nav-sticky]:bg-white/90 [&.nav-sticky]:backdrop-blur-3xl [&.nav-sticky]:shadow-md dark:[&.nav-sticky]:bg-default-50/80"
    :class="menuPosition"
  >
    <div class="container">
      <div class="flex items-center justify-between flex-wrap lg:flex-nowrap gap-4">
        <div class="w-full lg:w-auto flex items-center justify-between">
          <!-- Navbar Brand Logo -->
          <nuxt-link to="/">
            <img :src="logoDark" alt="logo" class="h-24 flex dark:hidden" />
            <img :src="logoLight" alt="logo" class="h-24 hidden dark:flex" />
          </nuxt-link>

          <!-- Mobile Menu Toggle Button -->
          <button
            class="hs-collapse-toggle lg:hidden inline-block"
            id="hs-unstyled-collapse"
            data-hs-collapse="#mobileMenu"
            data-hs-type="collapse"
          >
            <MenuIcon class="w-7 h-7 text-default-600 hover:text-default-900"></MenuIcon>
          </button>
        </div>

        <div
          id="mobileMenu"
          class="hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0 overflow-hidden"
        >
          <!-- Navigation Menu -->
          <ul class="menu flex lg:items-center justify-center flex-col lg:flex-row gap-y-2">
            <li
              v-for="(link, idx) in navbarLink"
              :key="link.name"
              class="menu-item text-default-800 lg:mx-2 transition-all hover:text-primary [&.active]:text-primary"
            >
              <a
                class="inline-flex items-center text-sm lg:text-base font-medium py-0.5 px-2 rounded-full capitalize"
                :href="`#${link.id}`"
                >{{ link.name }}</a
              >
            </li>
          </ul>
        </div>

        <!-- <div v-if="btnText" class="ms-auto shrink hidden lg:inline-flex gap-2">
          <a
            href="#"
            class="py-1.5 px-6 inline-flex items-center gap-2 rounded-full text-base text-white bg-primary hover:bg-primary-700 transition-all duration-500"
          >
            <span class="hidden sm:block">{{ btnText }}</span>
          </a>
        </div> -->
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import logoDark from '@/assets/images/logo-dark.png'
import logoLight from '@/assets/images/logo-light.png'

import { onMounted, type FunctionalComponent, type PropType } from 'vue'

import gumshoeMin from 'gumshoejs'

import type { NavbarLinkType } from '@/types/layout'

const route = useRoute()

defineProps({
  navbarLink: {
    type: Array as PropType<NavbarLinkType[]>,
    required: true
  },
  btnText: {
    type: String
  },
  menuPosition: {
    type: String,
    default: 'fixed'
  }
})

const currentRoutePath = route.path

const initStickyNav = () => {
  const windowScroll = () => {
    const navbar = document.getElementById('navbar')
    if (navbar) {
      if (document.body.scrollTop >= 75 || document.documentElement.scrollTop >= 75) {
        navbar.classList.add('nav-sticky')
      } else {
        navbar.classList.remove('nav-sticky')
      }
    }
  }

  window.addEventListener('scroll', (ev) => {
    ev.preventDefault()
    windowScroll()
  })
}

const initNavLinkActive = () => {
  if (document.querySelector('.menu a')) {
    gumshoeMin('.menu a', {
      offset: 80
    })
  }
}

// Navbar Active Class
const initMobileNavLinkActive = () => {
  if (document.querySelector('#mobile-menu nav a')) {
    gumshoeMin('#mobile-menu nav a', {
      offset: 80
    })
  }
}

onMounted(() => {
  initNavLinkActive()
  initMobileNavLinkActive()
  initStickyNav()
})
</script>
