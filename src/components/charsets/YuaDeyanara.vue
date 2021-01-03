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
                    background-size: 110%;`" class="absolute h-full w-96 z-10"></div>
        <h1 style="letter-spacing: 0.625em; left: 27rem;" class="absolute serif text-7xl uppercase top-16 left-96 text-gray-700">
            {{ charData.name.split(' ')[0] }}
        </h1>
        <h1 style="letter-spacing: 0.625em;" class="absolute serif text-3xl uppercase top-36 left-72 text-gray-700">
            {{ charData.name.split(' ')[1] }}
        </h1>
        <h1 style="letter-spacing: 0.625em" class="absolute z-0 serif text-8xl uppercase bottom-12 left-12 text-gray-200">
            {{ charData.name.split(' ')[0] }}
        </h1>
        <p class="absolute top-56 left-72 w-96 z-0 serif text-gray-700 tracking-widest text-right">
            {{ charData.bio }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'YuaDeyanara',
        props: ['charData'],
    }
</script>