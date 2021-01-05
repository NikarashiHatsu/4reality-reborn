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
                    background-position-y: 4rem;
                    background-position-x: 50%;
                    background-size: 110%;`" 
            class="absolute h-full w-96 z-20
                    -left-8 md:left-0"></div>
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
                    text-sm md:text-base
                    lg:left-72
                    right-10 lg:right-0
                    top-32 md:top-40
                    w-64 lg:w-80
                    leading-relaxed
                    hidden sm:block">
            {{ charData.bio }}
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

        <div class="right-0 bottom-0 absolute z-20">
            <div class="flex flex-col items-end m-4">
                <a :href="charData.facebook.link"
                    class="flex items-center serif opacity-50"
                    _target="_blank">
                    <span class="mr-4">{{ charData.facebook.userName }}</span>
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a :href="charData.twitter.link"
                    class="flex items-center serif opacity-50 mt-2"
                    _target="_blank">
                    <span class="mr-1">{{ charData.twitter.userName }}</span>
                    <i class="fab fa-twitter"></i>
                </a>
                <a :href="charData.youtube.link"
                    class="flex items-center serif opacity-50 mt-2"
                    _target="_blank">
                    <span class="mr-1">{{ charData.youtube.userName }}</span>
                    <i class="fab fa-youtube"></i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Karen',
        props: ['charData'],
    }
</script>