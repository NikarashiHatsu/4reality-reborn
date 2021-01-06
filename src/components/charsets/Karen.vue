<template>
    <div class="w-full h-full relative">
        <div class="relative top-4 ml-4">
            <div :style="`background-color: ${charData.palettes[0]}`" class="absolute top-0 left-0 w-6 h-6"></div>
            <div :style="`background-color: ${charData.palettes[1]}`" class="absolute top-0 left-8 w-6 h-6"></div>
            <div :style="`background-color: ${charData.palettes[2]}`" class="absolute top-0 left-16 w-6 h-6"></div>
            <div :style="`background-color: ${charData.palettes[3]}`" class="absolute top-8 left-0 w-6 h-6"></div>
            <div :style="`background-color: ${charData.palettes[4]}`" class="absolute top-16 left-0 w-6 h-6"></div>
        </div>

        <div :style="`background-image: url(${charData.char}); 
                    background-repeat: no-repeat;
                    background-position-y: 0rem;
                    background-size: 100%;`" 
            class="absolute h-full z-20
                    -left-4 sm:left-0 md:-left-16
                    w-72 sm:w-96
                    top-16"></div>
        <h1 class="absolute serif uppercase text-gray-700
                    text-5xl md:text-6xl
                    z-10
                    lg:left-72
                    top-4 sm:top-16
                    right-16 sm:right-4 lg:right-0
                    break-words sm:break-normal
                    w-4 sm:w-auto" style="letter-spacing: 0.625em" >
            {{ charData.name }}
        </h1>
        <h1 class="absolute z-10 serif uppercase bottom-16
                    text-6xl md:text-8xl
                    -left-4 md:-left-8
                    opacity-10
                    hidden sm:block" style="letter-spacing: 0.625em" >
            {{ charData.name }}
        </h1>
        <p class="absolute z-10 serif text-gray-700 tracking-widest text-right
                    mt-4 md:mt-0
                    text-sm md:text-base
                    lg:left-72
                    right-10 lg:right-0
                    top-32 md:top-40
                    w-64
                    leading-relaxed
                    hidden sm:block">
            {{ charData.bio }}
        </p>
        <p class="absolute z-10 serif uppercase text-gray-700 tracking-tagline text-right
                    text-xl break-words
                    left-4 md:left-5 lg:left-20
                    top-32 md:top-32 lg:top-96
                    w-4 lg:w-80
                    leading-relaxed">
            {{ charData.race }}
        </p>

        <div class="w-200 z-0 right-0 top-0 h-full absolute overflow-hidden">
            <div :style="'background-color: ' + charData.palettes[1]"
                 class="absolute w-160 h-240 transform rotate-30 z-0
                        md:-top-26 lg:-top-12 
                        -right-112 sm:-right-112 md:-right-96 lg:-right-32" id="bg-1"></div>
            <div class="absolute w-4 bg-white h-240 transform rotate-30 z-10
                        md:-top-32 lg:-top-32 
                        right-52 sm:right-52 md:right-64 lg:right-120" id="stripe"></div>
            <div :style="'background-color: ' + charData.palettes[1]"
                 class="absolute w-160 h-240 transform rotate-30 z-0
                        md:-top-24 lg:-top-20 
                        -right-120 sm:-right-120 md:-right-100 lg:-right-44" id="bg-2"></div>
        </div>

        <SocialMedia :charData="charData" />

        <div class="absolute tracking-widest transform -rotate-60
                    md:pt-8 lg:pt-0
                    opacity-25
                    -mr-4 sm:mr-0
                    -mb-10 sm:mb-0
                    -right-124 sm:-right-80 md:-right-48 lg:right-6 
                    bottom-96 sm:bottom-64 md:bottom-64 lg:bottom-64">
            <h5 class="serif text-xl">
                {{ charData.motto }}
            </h5>
            <h1 class="serif mt-2 text-8xl sm:text-7xl uppercase text-white tracking-tagline">
                {{ charData.tagline }}
            </h1>
        </div>
    </div>
</template>

<script>
    import SocialMedia from "./SocialMedia.vue";

    export default {
        components: {
            SocialMedia,
        },
        name: 'Karen',
        props: ['charData'],
    }
</script>