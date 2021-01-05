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
                    left-8 sm:left-0 md:left-8
                    w-72 sm:w-96
                    top-16"></div>
        <h2 class="absolute serif uppercase text-gray-700 leading-tight tracking-name z-10
                    text-4xl
                    w-96 sm:w-4
                    top-10
                    sm:left-96 md:left-112
                    -right-24
                    break-normal sm:break-words">
            {{ charData.name.split(' ')[0] }}
            <span class="sm:hidden">
                {{ charData.name.split(' ')[1] }}
            </span>
        </h2>
        <h4 class="absolute serif uppercase text-gray-700 break-words leading-tight z-10
                    text-2xl
                    w-4
                    top-44
                    ml-8 md:ml-0
                    sm:left-100 md:left-124
                    hidden sm:block">
            {{ charData.name.split(' ')[1] }}
        </h4>
        <h1 class="absolute z-10 serif uppercase bottom-16
                    text-6xl md:text-8xl
                    -left-4 md:-left-8
                    opacity-10
                    hidden sm:block" style="letter-spacing: 0.625em" >
            {{ charData.name.split(' ')[1] }}
        </h1>
        <!-- <p class="absolute z-10 serif text-gray-700 tracking-widest text-right
                    mt-4 md:mt-0
                    text-sm md:text-base
                    lg:left-96
                    right-10 lg:right-0
                    top-32 md:top-40
                    md:w-56 lg:w-64
                    leading-relaxed
                    hidden sm:block">
            {{ charData.bio }}
        </p> -->
        <p class="absolute z-10 serif uppercase text-gray-700 tracking-tagline text-right
                    text-xl break-words
                    left-4 md:left-5 lg:left-40
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

        <div class="right-0 bottom-0 absolute z-20">
            <div class="flex flex-col items-end m-4">
                <a :href="charData.facebook.link"
                    class="flex items-center serif opacity-50"
                    _target="_blank">
                    <span class="mr-4 text-xs md:text-base">{{ charData.facebook.userName }}</span>
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a :href="charData.twitter.link"
                    class="flex items-center serif opacity-50 mt-2"
                    _target="_blank">
                    <span class="mr-1 text-xs md:text-base">{{ charData.twitter.userName }}</span>
                    <i class="fab fa-twitter"></i>
                </a>
                <a :href="charData.youtube.link"
                    class="flex items-center serif opacity-50 mt-2"
                    _target="_blank">
                    <span class="mr-1 text-xs md:text-base">{{ charData.youtube.userName }}</span>
                    <i class="fab fa-youtube"></i>
                </a>
            </div>
        </div>

        <div class="absolute tracking-widest transform -rotate-60
                    md:pt-8 lg:pt-0
                    opacity-40
                    -right-80 md:-right-48 lg:right-6 
                    bottom-64 md:bottom-64 lg:bottom-64">
            <h5 class="serif text-xl">
                {{ charData.motto }}
            </h5>
            <h1 class="serif text-8xl mt-2 uppercase text-white tracking-tagline">
                {{ charData.tagline }}
            </h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Karen',
        props: ['charData'],
    }
</script>