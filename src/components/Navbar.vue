<template>
    <div class="w-full sticky top-0 z-100 h-24">
        <div class="flex h-full items-center justify-between py-8">
            <div class="flex gap-4">
                <img class="social" src="@/assets/svg/linkedin.svg" />
                <img class="social" src="@/assets/svg/github.svg" />
                <img class="social" src="@/assets/svg/stackoverflow.svg" />
            </div>
            <div class="flex gap-4">
                <NavItem to="/" linkText="home" />
                <NavItem to="/about" linkText="about" />
                <NavItem to="/work" linkText="work" />
                <NavItem to="/blog" linkText="blog" />
            </div>
        </div>
    </div>
</template>

<script>
import NavItem from '@/components/NavItem.vue'

export default {
    name: 'Navbar',
    components: {
        NavItem
    }
}
</script>

<style>
.social {
    height: 20px;
    width: 20px;
}
</style>
