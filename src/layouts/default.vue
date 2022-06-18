<template>
    <div class='overflow-y-auto flex flex-col min-h-screen px-16 bg-gradient-to-tl from-black to-dark-blue-10'>
        <navbar />
        <Nuxt />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
    name: 'DefaultLayout',
    components: {
        Navbar
    }
}
</script>
