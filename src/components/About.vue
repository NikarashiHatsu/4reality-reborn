<template>
    <div id="about" class="about py-24 bg-gray-300 relative">
        <!-- Particles -->
        <div class="w-full h-full -mt-24 absolute">
            <div class="w-full h-full overflow-hidden">
                <div class="w-full h-full max-w-6xl mx-auto relative">
                    <!-- Bottom left -->
                    <div class="absolute z-10 text-8xl uppercase tracking-tagline sans-serif font-bold opacity-10
                                bottom-52 
                                -left-32">
                        About
                    </div>
                    <img class="absolute transform rotate-15 opacity-50 w-160 h-160 -bottom-24 -left-80" :src="'./assets/4r_logo.webp'" alt="" />
                    <img class="absolute transform opacity-50
                                hidden sm:block
                                sm:bottom-200 lg:bottom-52 
                                sm:left-56 md:left-80 lg:left-120" :src="'./assets/particles/circle.png'" alt="" />
                    <img class="absolute transform opacity-50
                                hidden sm:block 
                                sm:bottom-160 lg:bottom-32
                                left-8 lg:left-160" :src="'./assets/particles/wave.png'" alt="" />
                    
                    <!-- Top right -->
                    <img class="absolute top-16 right-0 transform rotate-90" :src="'./assets/particles/crosses.png'" alt="" />
                    <img class="absolute top-44 right-48 transform" :src="'./assets/particles/triangle.png'" alt="" />
                </div>
            </div>
        </div>

        <div class="flex max-w-6xl mx-auto
                    px-4 sm:px-8 xl:px-0
                    flex-col sm:flex-row static">
            <div class="relative flex flex-col
                        pr-0 sm:pr-8
                        w-full md:w-1/2
                        text-center md:text-left">
                <div class="sticky top-40">
                    <div class="relative">
                        <div class="about-title text-3xl uppercase
                                    tracking-normal lg:tracking-widest">
                            About 4 Reality
                        </div>
                        <img class="absolute 
                                    -top-2 sm:-top-4 md:-top-4 
                                    left-0 sm:left-28 md:-left-4" :src="'./assets/particles/lines.png'" alt="" />
                    </div>
                    <div class="about-desc text-lg leading-loose mt-8
                                tracking-normal lg:tracking-widest">
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