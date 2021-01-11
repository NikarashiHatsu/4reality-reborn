<template>
    <div class="w-full h-full relative">
        <!-- Color Palette -->
        <div class="relative top-4 ml-4">
            <div :style="`background-color: ${charData.palettes[0]}`" class="absolute top-0 left-0 w-6 h-6"></div>
            <div :style="`background-color: ${charData.palettes[1]}`" class="absolute top-0 left-8 w-6 h-6"></div>
            <div :style="`background-color: ${charData.palettes[2]}`" class="absolute top-0 left-16 w-6 h-6"></div>
            <div :style="`background-color: ${charData.palettes[3]}`" class="absolute top-8 left-0 w-6 h-6"></div>
            <div :style="`background-color: ${charData.palettes[4]}`" class="absolute top-16 left-0 w-6 h-6"></div>
        </div>

        <!-- Backdots -->
        <div class="absolute top-32 -left-8">
            <div class="grid grid-cols-5 grid-flow-row gap-8">
                <div v-for="index in 10" :key="index" :style="`background-color: ${charData.palettes[2]}`" class="opacity-10 w-16 h-16"></div>
            </div>
        </div>

        <!-- Lines beside character -->
        <div :style="`background-color: ${charData.palettes[2]}`" class="absolute opacity-75 left-14 top-16 h-32 w-1"></div>
        <div :style="`background-color: ${charData.palettes[2]}`" class="absolute opacity-75 left-16 top-36 h-32 w-1 ml-1"></div>

        <!-- Character image -->
        <div :style="`background-image: url(${charData.char}); 
                    background-repeat: no-repeat;
                    background-position-y: 0rem;
                    background-size: 100%;`" 
            class="absolute h-full z-20
                    -left-4 sm:left-0 md:-left-16
                    w-72 sm:w-96
                    top-16"></div>
        
        <!-- Main chara name -->
        <h1 class="absolute serif uppercase text-gray-700
                    text-5xl md:text-6xl
                    z-10
                    lg:left-72
                    top-4 sm:top-16
                    right-16 sm:right-4 lg:right-0
                    break-words sm:break-normal
                    w-4 sm:w-auto" style="letter-spacing: 0.625em">
            {{ charData.name }}
        </h1>
        <!-- Secondary chara name (on the bottom) -->
        <h1 class="absolute z-10 serif uppercase bottom-16
                    text-6xl md:text-8xl
                    -left-4 md:-left-8
                    opacity-10
                    hidden sm:block" style="letter-spacing: 0.625em" >
            {{ charData.name }}
        </h1>
        <!-- Bio -->
        <p class="absolute z-10 serif text-gray-700 tracking-widest 
                    text-right md:text-left lg:text-right
                    mt-4 md:mt-0
                    text-sm md:text-base
                    sm:left-64 md:left-56 lg:left-72
                    right-10 lg:right-0
                    top-32 md:top-40
                    w-64
                    leading-relaxed
                    hidden sm:block">
            {{ charData.bio }}

            <span class="hidden lg:block relative">
                <div :style="`background-color: ${charData.palettes[2]}`" class="absolute -top-52 -right-8 opacity-75 w-1 h-48"></div>
            </span>
        </p>

        <!-- Race -->
        <p class="absolute z-10 serif uppercase text-gray-700 tracking-tagline text-right
                    text-xl break-words
                    left-4 md:left-5 lg:left-72
                    top-32 md:top-32 lg:top-96
                    w-4 lg:w-auto
                    leading-relaxed">
            {{ charData.race }}
            
            <span class="relative hidden lg:block">
                <div class="absolute flex items-center left-0 -top-12">
                    <img :src="'./assets/particles/rectangles-dot.png'" alt="" />
                    <svg class="w-2 text-gray-500 fill-current ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                        <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
                    </svg>
                </div>
            </span>
            <span class="hidden lg:block text-left text-xs">
                {{ charData.height }}
            </span>
        </p>

        <!-- Right panel -->
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