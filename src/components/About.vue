<template>
    <div class="about py-24 bg-gray-100">
        <div class="flex max-w-6xl mx-auto
                    px-4 sm:px-8 xl:px-0
                    flex-col sm:flex-row">
            <div class="relative flex flex-col
                        pr-0 sm:pr-8
                        w-full md:w-1/2
                        text-center md:text-left">
                <div class="sticky top-40">
                    <div class="about-title text-3xl uppercase">
                        About 4 Reality
                    </div>
                    <div class="about-desc text-lg leading-loose mt-8">
                        4 REALITY Team is a VTuber / Virtual Liver team to which a wide variety of content creator belong, with the aim of improving Indonesian Virtual entertainment through various content, such as: VSinger, VGamer, VStreamer, etc. It is a team that gathers everyone to create.
                    </div>
                </div>
            </div>
            <div class="px-4 sm:px-0 sm:pl-8
                        w-full md:w-1/2
                        mt-12 md:mt-0">
                <div class="grid grid-flow-row gap-12
                            grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                    <AboutCard :cardType="'v'" :shadowPosition="'top-left'" :cardColor="'bg-gray-900'">
                        <template #content>
                            To be indonesian vtuber team that can gather various content creator and improve indonesian virtual entertainment.
                        </template> 
                    </AboutCard>
                    <AboutCard class="mt-0 lg:mt-48" :cardType="'m'" :shadowPosition="'top-right'" :cardColor="'bg-gray-800'">
                        <template #content>
                            Provide entertaining quality content for viewers.
                        </template> 
                    </AboutCard>
                    <AboutCard class="mt-0 lg:-mt-48" :cardType="'m'" :shadowPosition="'bottom-left'" :cardColor="'bg-gray-700'">
                        <template #content>
                            To participate on interaction and communication with fans as well as vtuber community.
                        </template> 
                    </AboutCard>
                    <AboutCard :cardType="'m'" :shadowPosition="'bottom-right'" :cardColor="'bg-gray-600'">
                        <template #content>
                            Create a community that provides mutual support between content creators within indonesian virtual entertainment.
                        </template> 
                    </AboutCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AboutCard from "./AboutCard.vue";

    export default {
        name: 'About',
        components: {
            AboutCard,
        },
    }
</script>