<template>
    <div class='overflow-hidden mx-auto'>
        <div class='flex gap-6 justify-center mb-12 text-grey'>
            <div class='cursor-pointer' :class='timelineCls' @click='() => toggle("timeline")'>
                <p>Timeline</p>
            </div>
            <div class='cursor-pointer' :class='educationCls' @click='() => toggle("education")'>
                <p>Education</p>
            </div>
        </div>
        <div v-if='activeTab === "timeline"' class='flex flex-col gap-6 mx-auto pb-16'>
            <template v-for='item in workItems'>
                <work-item 
                    :interval='item.interval'
                    :title='item.title'
                    :subtitle='item.subtitle'
                    :description='item.description'
                />
            </template>
        </div>
        <div v-else class='flex flex-col gap-6 mx-auto pb-16'>
            <template v-for='item in educationItems'>
                <work-item
                    :interval='item.interval'
                    :title='item.title'
                    :subtitle='item.subtitle'
                />
            </template>
        </div>
    </div>
</template>

<script>
import WorkItem from '@/components/WorkItem.vue'

export default {
    name: 'WorkPage',
    components: {
        WorkItem
    },
    data() {
        return {
            activeTab: 'timeline',
            workItems: [
                {
                    'interval': 'April 2022 - Present',
                    'title': 'HackPSU • Director of Sponsorship',
                    'subtitle': 'Pennsylvania State University',
                    'description': 'Lead team in procuring sponsors for one of Penn State’s largest student-run clubs and largest hackathon. Made hundreds of connections in an effort to maximize networking and educational opportunities. I became a member of HackPSU in September 2022.',
                },
                {
                    'interval': 'August 2022 - Present',
                    'title': 'Baseball • Lead Software Engineer',
                    'subtitle': 'Pennsylvania State University',
                    'description': 'Lead team in developing a secure and efficient data pipeline using Google Cloud and AWS with a user-facing dashboard. The Data Analysis team would interface with this pipeline to give coaches and players hundreds of advanced player statistics.',
                },
                {
                    'interval': 'May - August 2022',
                    'title': 'Software Engineering Intern',
                    'subtitle': 'DPL Financial Partners',
                    'description': 'Streamlined the data pipeline between the API, data analysis phase, and user-facing dashboard. Worked in Python and C++.',
                },
                {
                    'interval': 'November 2019 - October 2020',
                    'title': 'Trayful',
                    'subtitle': 'iOS App • Productivity',
                    'description': 'Garnered 3,000 downloads across 5 continents and 8+ major countries in its time on the App Store. Built with the firm constraint that first-time users will instinctively know how to use to product without the need for a walkthrough or tutorial.',
                },
            ],
            educationItems: [
                {
                    'interval': 'August 2020 - May 2024',
                    'title': 'Pennsylvania State University',
                    'subtitle': 'State College, PA • Computer Science'
                },
                {
                    'interval': 'August 2016 - May 2020',
                    'title': 'Susquehannock High School',
                    'subtitle': 'Glen Rock, PA'
                },
            ]
        }
    },
    computed: {
        timelineCls() {
            if (this.activeTab === 'timeline') {
                return 'text-cream underline'
            }
        },
        educationCls() {
            if (this.activeTab === 'education') {
                return 'text-cream underline'
            }
        },
    },
    methods: {
        toggle(name) {
            this.activeTab = name
        }
    }
}
</script>
