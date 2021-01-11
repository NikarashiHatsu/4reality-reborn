<template>
    <div id="hero" class="relative">
        <!-- Main Content -->
        <div class="w-full h-screen bg-gray-900 mb-12">
            <div class="hero h-screen items-center flex max-w-6xl mx-auto
                        px-4 sm:px-8 xl:px-0
                        flex-col-reverse md:flex-row
                        justify-center md:justify-between
                        text-center md:text-left">
                <div class="flex flex-col">
                    <div class="hero-title text-4xl text-white font-bold uppercase leading-relaxed
                                relative
                                w-full md:w-96">
                        4 Reality Team

                        <img class="absolute z-10 -top-16 -left-32" :src="'./assets/particles/circle.png'" alt="" />
                        <img class="absolute z-10 -top-4 left-24" :src="'./assets/particles/lines.png'" alt="" />
                        <img class="absolute z-10 top-8 left-110" :src="'./assets/particles/wave.png'" alt="" />
                    </div>
                    <div class="hero-description text-xl text-white leading-relaxed mt-4
                                relative
                                w-full md:w-80">
                        Together Everyone Achieves More And There is no I in Team.

                        <img class="absolute z-10 -bottom-24 left-24" :src="'./assets/particles/triangle.png'" alt="" />
                    </div>
                </div>
                <div class="relative">
                    <img class="w-40 md:w-80 
                                h-40 md:h-80
                                mb-8 md:mb-0" :src="'./assets/4r_logo.png'" alt="4R Logo" />

                    <img class="absolute z-10 -top-8 -right-32" :src="'./assets/particles/circle.png'" alt="" />
                    <img class="absolute z-10 -bottom-12 -right-10" :src="'./assets/particles/crosses.png'" alt="" />
                    <div class="w-200 overflow-hidden opacity-25
                                absolute -right-28 -bottom-4
                                uppercase text-white text-right font-bold tracking-tagline text-7xl sans-serif">
                        4 Reality
                    </div>
                </div>
            </div>
        </div>

        <!-- Divider -->
        <div class="absolute w-full h-6 bg-gray-700 -bottom-6"></div>
        <div class="absolute w-full h-6 bg-gray-500 -bottom-12"></div>
    </div>    
</template>

<script>
    export default {
        name: 'Hero'
    }
</script>
