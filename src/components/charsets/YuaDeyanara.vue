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
        <div class="absolute top-48 -left-8">
            <div class="grid grid-cols-7 grid-flow-row gap-8 w-160">
                <div v-for="index in 14" :key="index" :style="index % 2 == 0 ? `background-color: ${charData.palettes[2]}` : `background-color: ${charData.palettes[4]}`" class="opacity-10 w-16 h-16"></div>
            </div>
        </div>

        <!-- Character image -->
        <div :style="`background-image: url(${charData.char}); 
                    background-repeat: no-repeat;
                    background-position-y: 0rem;
                    background-size: 90%;`" 
            class="absolute h-full z-20
                    left-4 sm:-left-8 md:-left-8 lg:-left-6
                    top-20 sm:top-12 md:top-12 lg:top-12
                    w-72 sm:w-96"></div>

        <!-- Main chara name - top -->
        <div class="absolute serif uppercase text-gray-700 leading-tight tracking-tagline z-10
                    text-2xl sm:text-6xl md:text-7xl
                    sm:mt-8 md:mt-4
                    w-64 sm:w-64
                    text-right sm:text-left
                    top-5 sm:top-18 md:top-18
                    lg:left-112
                    right-4 sm:right-0 md:right-0 lg:right-0
                    break-words">
            <span class="static sm:absolute z-20">{{ charData.name.split(' ')[0] }}</span>
            
            <!-- Blue rectangle -->
            <div class="absolute h-8 top-0 z-0 opacity-50
                        hidden sm:block
                        w-24 md:w-48
                        right-12 md:-right-2" :style="`background-color: ${charData.palettes[1]}`"></div>
            
            <span class="block sm:hidden">
                {{ charData.name.split(' ')[1] }}
            </span>
        </div>
        <!-- Main chara name - bottom -->
        <div class="absolute serif uppercase text-gray-700 break-words tracking-tagline z-10 text-3xl top-32 w-72
                    ml-8 md:ml-0
                    lg:left-72
                    sm:right-6 md:right-28 lg:right-0
                    hidden sm:block">
            <span class="absolute z-10">{{ charData.name.split(' ')[1] }}</span>

            <!-- Pink rectangle -->
            <div class="absolute w-48 h-2 -bottom-8 -left-6 z-0 opacity-50" :style="`background-color: ${charData.palettes[3]}`"></div>
        </div>
        <!-- Secondary chara name (on the bottom) -->
        <h1 class="absolute z-10 serif uppercase bottom-16
                    text-6xl md:text-8xl
                    -left-4 md:-left-8
                    opacity-10
                    hidden sm:block" style="letter-spacing: 0.625em" >
            {{ charData.name.split(' ')[1] }}
        </h1>
        <!-- Bio -->
        <div class="absolute z-10 serif text-gray-700 tracking-widest text-right
                    text-sm md:text-base
                    lg:left-72
                    right-10 lg:right-0
                    sm:top-48 md:top-56
                    sm:w-56 md:w-80 lg:w-96
                    leading-relaxed
                    hidden sm:block">
            {{ charData.bio }}

            <div class="absolute flex items-center left-6 -bottom-6">
                <img :src="'./assets/particles/rectangles-dot.png'" alt="" />
                <svg class="w-2 text-gray-500 fill-current ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                    <!-- Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) -->
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/>
                </svg>
            </div>
        </div>
        <!-- Race -->
        <div class="absolute z-10 serif uppercase text-gray-700 tracking-tagline text-center
                    text-3xl break-words
                    left-4 md:left-5 lg:left-96
                    top-32 md:top-32 lg:top-96
                    w-4 lg:w-auto
                    leading-relaxed">
            {{ charData.race }}

            <div class="top-1 -left-4 absolute w-10 h-4 border-opacity-50 border-t-2 border-l-2
                        hidden lg:block" :style="`border-color: ${charData.palettes[3]}`"></div>
            <div class="bottom-1 -right-4 absolute w-10 h-4 border-opacity-50 border-r-2 border-b-2
                        hidden lg:block" :style="`border-color: ${charData.palettes[1]}`"></div>
        </div>

        <!-- Right panel -->
        <div class="w-200 z-0 top-0 h-full absolute overflow-hidden
                    -mr-8 sm:mr-0
                    -right-80 sm:-right-80 md:-right-60 lg:-right-32 xl:right-0">
            <div :style="'background-color: ' + charData.palettes[3]"
                 class="absolute w-160 h-240 transform rotate-30 z-0 -top-12 -right-32" id="bg-1"></div>
            <div class="absolute w-4 bg-white h-240 transform rotate-30 z-10 -top-32 right-120" id="stripe"></div>
            <div :style="'background-color: ' + charData.palettes[1]"
                 class="absolute w-160 h-240 transform rotate-30 z-0 -top-20 -right-44" id="bg-2"></div>
        </div>

        <SocialMedia class="text-gray-800 opacity-40" :charData="charData" />

        <div class="absolute tracking-widest transform -rotate-60 opacity-25 bottom-64
                    -mr-6 sm:-mr-3 md:-mr-4 lg:mr-2 xl:mr-0
                    -right-60 sm:-right-56 md:-right-36 lg:-right-14 xl:right-20">
            <h5 class="serif text-xl w-160">
                {{ charData.motto }}
            </h5>
            <h1 class="serif mt-2 text-4xl sm:text-5xl uppercase tracking-tagline">
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
        name: 'YuaDeyanara',
        props: ['charData'],
    }
</script>