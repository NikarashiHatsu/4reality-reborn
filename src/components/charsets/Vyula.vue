<template>
    <div class="w-full h-full relative">
        <div class="relative top-4 ml-4">
            <div :style="`background-color: ${charData.palettes[0]}`" class="absolute top-0 left-0 w-6 h-6"></div>
            <div :style="`background-color: ${charData.palettes[1]}`" class="absolute top-0 left-8 w-6 h-6"></div>
            <div :style="`background-color: ${charData.palettes[2]}`" class="absolute top-0 left-16 w-6 h-6"></div>
            <div :style="`background-color: ${charData.palettes[3]}`" class="absolute top-8 left-0 w-6 h-6"></div>
            <div :style="`background-color: ${charData.palettes[4]}`" class="absolute top-16 left-0 w-6 h-6"></div>
        </div>

        <!-- Backdots -->
        <div class="absolute top-32 -left-8">
            <div class="grid grid-cols-7 grid-flow-row gap-8 w-160">
                <div v-for="index in 14" :key="index" :style="`background-color: ${charData.palettes[2]}`" class="opacity-10 w-16 h-16"></div>
            </div>
        </div>

        <!-- Lines beside character -->
        <div :style="`background-color: ${charData.palettes[2]}`" class="absolute opacity-75 left-14 top-16 h-32 w-1"></div>
        <div :style="`background-color: ${charData.palettes[2]}`" class="absolute opacity-75 left-16 top-36 h-32 w-1 ml-1"></div>

        <div :style="`background-image: url(${charData.char}); 
                    background-repeat: no-repeat;
                    background-position-y: 0rem;
                    background-size: 100%;`" 
            class="absolute h-full z-20
                    left-0 sm:-left-8 md:-left-16 lg:-left-12
                    top-12 sm:top-12 md:top-12 lg:top-8
                    w-72 sm:w-96"></div>
        <h1 class="absolute serif uppercase text-gray-700
                    text-3xl md:text-6xl
                    z-10
                    lg:left-72
                    top-8 sm:top-8 lg:top-16
                    right-44 sm:right-24 lg:right-0
                    break-normal
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
        <div class="absolute z-10 serif text-gray-700 tracking-widest text-right
                    mt-4 md:mt-0
                    text-sm md:text-base
                    lg:left-72
                    sm:right-20 md:right-48 lg:right-0
                    top-24 md:top-28 lg:top-40
                    w-64
                    leading-relaxed
                    hidden sm:block">
            {{ charData.bio }}
            
            <div :style="`background-color: ${charData.palettes[2]}`" class="absolute hidden lg:block -right-4 -top-2 w-1 h-16 opacity-50 bg-gray-100"></div>
        </div>
        <div class="absolute z-10 serif uppercase text-gray-700 tracking-tagline text-right
                    text-xl break-words
                    left-4 md:left-5 lg:left-72
                    top-32 md:top-32 lg:top-96
                    w-4 lg:w-auto
                    leading-relaxed">
            <p class="text-left">{{ charData.race }}</p>
            <div :style="`background-color: ${charData.palettes[2]}`" class="absolute hidden lg:block -left-4 -top-6 w-1 h-26 opacity-50 bg-gray-100"></div>
            
            <span class="relative hidden lg:block">
                <div class="absolute flex items-center left-0 -top-12">
                    <img :src="'./assets/particles/rectangles-dot.png'" alt="rectangles" />
                    <svg class="w-2 text-gray-500 fill-current ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                        <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                        <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
                    </svg>
                </div>
            </span>
            <span class="hidden lg:block text-left text-xs">
                {{ charData.height }}
            </span>

            <p class="mt-4 hidden lg:block text-left text-xs">
                {{ charData.birthDate }}
            </p>
        </div>

        <div class="w-200 z-0 top-0 h-full absolute overflow-hidden
                    -mr-8 sm:mr-0
                    -right-80 sm:-right-80 md:-right-60 lg:-right-32 xl:right-0">
            <div :style="'background-color: ' + charData.palettes[1]"
                 class="absolute w-160 h-240 transform rotate-30 z-0 -top-12 -right-32" id="bg-1"></div>
            <div class="absolute w-4 bg-white h-240 transform rotate-30 z-10 -top-32 right-120" id="stripe"></div>
            <div :style="'background-color: ' + charData.palettes[1]"
                 class="absolute w-160 h-240 transform rotate-30 z-0 -top-20 -right-44" id="bg-2"></div>
        </div>

        <SocialMedia :charData="charData" />

        <div class="absolute tracking-widest transform -rotate-60 opacity-25 bottom-64
                    -mr-6 sm:-mr-3 md:-mr-4 lg:mr-2 xl:mr-0
                    -right-60 sm:-right-56 md:-right-36 lg:-right-14 xl:right-20 text-white">
            <h5 class="serif text-xl w-160">
                {{ charData.motto }}
            </h5>
            <h1 class="serif mt-2 text-4xl sm:text-5xl uppercase text-white tracking-tagline">
                <span>{{ charData.tagline }}</span>
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
        name: 'Vyula',
        props: ['charData'],
    }
</script>