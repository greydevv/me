<template>
    <div class="flex flex-col items-center gap-32 px-16 pb-24">
        <div class="flex flex-col gap-6 items-center mx-auto">
            <div class="text-cream text-center">
                <h1 class="text-4xl tracking-widest font-bold mb-2 mx-auto">
                    BLOG
                </h1>
                <p class="text-sm tracking-wide w-2/3 mx-auto">
                    Computer science, software engineering, tech, art, and anything else I want to share!
                </p>
            </div>
            <img class="h-20" src="@/assets/svg/signature.svg" />
        </div>
        <div class="flex gap-6 w-full max-w-[1200px] mx-auto">
            <div class="flex-1 rounded h-full">
                <div class="w-full aspect-video bg-cream rounded mb-4">
                </div>
                <div class="text-cream">
                    <p class="text-grey text-sm mb-6">
                        {{ featuredPost.postDate }}
                    </p>
                    <h1 class="text-lg font-semibold mb-2">
                        {{ featuredPost.title }}
                    </h1>
                    <p class="text-sm">
                        {{ featuredPost.hook }}
                    </p>
                </div>
            </div>
            <div class="flex flex-col flex-1 gap-6 h-full">
                <div v-for="post in posts" class="flex gap-6">
                    <div class="flex-1 h-[325px] bg-cream rounded">
                        yo
                    </div>
                    <div class="flex-3 text-cream h-full">
                        <h1 class="text-lg font-semibold">
                            {{ post.title }}
                        </h1>
                        <p class="text-grey text-sm">
                            {{ post.postDate }}
                        </p>
                        <p class="text-sm">
                            {{ post.hook }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog',
    data() {
        return {
            featuredPost: {
                postDate: "Jun 15, 2022",
                readTime: "15 min",
                tags: ["DSA", "Compiler Design"],
                title: "Conditional Control Flow",
                hook: "Control flow, specifically the conditional kind (if/else-if/else), are essential to the usability of the programming languages we use every day. But when creating your own compiler, how should we implement such a high level concept in low level machine code?"
            },
            posts: [
                {
                    postDate: "Jun 10, 2022",
                    readTime: "10 min",
                    tags: ["Cryptography", "Number Theory"],
                    title: "How Does SHA-256 Work?",
                    hook: "The 256-bit secure hashing algorithm (SHA-256) is one of many popular methods to irreversibly convert human-readable text into a seemingly random string of sixty-four hexadecimal characters. In this post, we’ll see how and why it works."
                },
                {
                    postDate: "Jun 3, 2022",
                    readTime: "8 min",
                    tags: ["DSA"],
                    title: "Some Other Post",
                    hook: "The 256-bit secure hashing algorithm (SHA-256) is one of many popular methods to irreversibly convert human-readable text into a seemingly random string of sixty-four hexadecimal characters. In this post, we’ll see how and why it works."
                }
            ]
        }
    }
}
</script>
