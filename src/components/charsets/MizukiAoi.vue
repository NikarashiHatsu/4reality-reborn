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
        <div class="absolute top-44 -left-8">
            <div class="grid grid-cols-7 grid-flow-row gap-8 w-160">
                <div v-for="index in 14" :key="index" :style="index % 2 == 0 ? `background-color: ${charData.palettes[2]};` : `background-color: ${charData.palettes[4]}`" :class="index % 2 == 0 ? 'opacity-10' : 'opacity-20'" class="w-16 h-16"></div>
            </div>
        </div>

        <!-- Lines beside character -->
        <div :style="`background-color: ${charData.palettes[2]}`" class="absolute opacity-75 left-14 top-16 h-32 w-1"></div>
        <div :style="`background-color: ${charData.palettes[2]}`" class="absolute opacity-75 left-16 top-36 h-32 w-1 ml-1"></div>

        <div :style="`background-image: url(${charData.char}); 
                    background-repeat: no-repeat;
                    background-position-y: 0rem;
                    background-size: 75%;`" 
            class="hidden sm:block absolute h-full z-20
                    left-12 sm:left-6 md:left-0 lg:-left-4
                    top-16 sm:top-12 md:top-12 lg:top-8
                    w-72 sm:w-96"></div>
        <div :style="`background-image: url(${charData.char}); 
                    background-repeat: no-repeat;
                    background-position-y: 0rem;
                    background-size: 95%;`" 
            class="block sm:hidden absolute h-full z-20
                    left-8 sm:left-6 md:left-0 lg:-left-4
                    top-16 sm:top-12 md:top-12 lg:top-8
                    w-72 sm:w-96"></div>

        <h2 class="absolute serif uppercase text-gray-700 leading-tight tracking-name z-10
                    text-2xl sm:text-5xl
                    w-32 sm:w-auto
                    text-right sm:text-left
                    top-3 sm:top-8 md:top-10 lg:top-6
                    left-40 sm:left-56 md:left-52 lg:left-56
                    break-normal sm:break-words">
            {{ charData.name.split(' ')[0] }}
            <span class="sm:hidden">
                {{ charData.name.split(' ')[1] }}
            </span>
        </h2>
        <h4 class=" absolute serif uppercase text-gray-700 break-words tracking-tagline z-10
                    text-3xl
                    ml-8 md:ml-0
                    sm:top-24 md:top-20
                    sm:left-80 md:left-96 lg:left-110
                    sm:right-6 md:right-28
                    hidden sm:block">
            {{ charData.name.split(' ')[1] }}
        </h4>
        <h1 class="absolute z-10 serif uppercase bottom-16
                    text-6xl md:text-8xl
                    -left-4 md:left-0
                    opacity-10
                    hidden sm:block" style="letter-spacing: 0.625em" >
            {{ charData.name.split(' ')[0] }}
        </h1>
        <p class="absolute z-10 serif text-gray-700 tracking-widest
                    text-left sm:text-right
                    mt-4 md:mt-0
                    text-sm md:text-base
                    sm:left-64 md:left-52 lg:left-64
                    ml-2 lg:ml-0
                    md:mr-52 lg:mr-120
                    right-10 md:right-0
                    top-32 md:top-32
                    w-auto lg:w-auto
                    leading-relaxed
                    hidden sm:block">
            {{ charData.bio }}
        </p>

        <!-- Race -->
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
            <div :style="'background-color: ' + charData.palettes[3]"
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
        name: 'MizukiAoi',
        props: ['charData'],
    }
</script>