<template>
    <div id="hero" class="relative">
        <div class="w-full h-screen bg-gray-900 mb-12">
            <div class="hero h-screen items-center flex max-w-6xl mx-auto
                        px-4 sm:px-8 xl:px-0
                        flex-col-reverse md:flex-row
                        justify-center md:justify-between
                        text-center md:text-left">
                <div class="flex flex-col">
                    <div class="hero-title text-4xl text-white font-bold uppercase leading-relaxed
                                w-full md:w-96">
                        4 Reality Team
                    </div>
                    <div class="hero-description text-xl text-white leading-relaxed mt-4
                                w-full md:w-80">
                        Together Everyone Achieves More And There is no I in Team.
                        <div class="hidden xl:block">Hai</div>
                    </div>
                </div>
                <img class="w-40 md:w-80 
                            h-40 md:h-80
                            mb-8 md:mb-0" src="/assets/4r_logo.png" alt="4R Logo" />
            </div>
        </div>
        <div class="absolute w-full h-6 bg-gray-700 -bottom-6"></div>
        <div class="absolute w-full h-6 bg-gray-500 -bottom-12"></div>
    </div>    
</template>

<script>
    export default {
        name: 'Hero'
    }
</script>
