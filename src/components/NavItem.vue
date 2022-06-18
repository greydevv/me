<template>
    <div class="relative">
        <NuxtLink :to="to" class="text-cream">
            {{ linkText }}
        </NuxtLink>
        <div v-if="isActive" class="absolute -bottom-1 left-1/2 h-1 w-1 aspect-square rounded-full bg-cream"></div>
    </div>
</template>

<script>
export default {
    name: 'NavItem',
    props: {
        to: {
            type: String,
            required: true
        },
        linkText: {
            type: String,
            required: true
        }
    },
    computed: {
        isActive() {
            return this.$route.path == this.to
        }
    }
}
</script>
