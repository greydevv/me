<template>
    <div class='rounded bg-cream/10 px-6 pt-6 max-w-[500px]' :class='description.length > 0 ? "pb-8" : "pb-6"'>
        <div class='grid grid-cols-1 gap-y-6 h-full w-full' :class='description.length > 0 ? "grid-rows-[auto_auto]" : "grid-rows-1"'>
            <div class='w-full row-start-1 flex gap-6'>
                <div class='h-24 aspect-square bg-cream rounded'>
                    
                </div>
                <div class='flex flex-col gap-2'>
                    <p class='text-sm text-grey'>{{ interval }}</p>
                    <div class='flex-1 text-cream'>
                        <h1 class='text-lg font-bold'>{{ title }}</h1>
                        <p class='text-sm'>{{ subtitle }}</p>
                    </div>
                </div>
            </div>
            <div v-if='description.length > 0' class='row-start-2 col-span-2'>
                <p class='text-cream text-sm leading-6'>
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkItem',
    props: {
        interval: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: true
        },
        description: {
            type: String,
            default: ''
        }
    },
}
</script>

<style>
</style>
