<template>
    <div class="w-full py-12">
        <div class="max-w-6xl mx-auto">
            <h5 class="text-4xl sans-serif text-center">
                Our Team
            </h5>
        </div>

        <div class="border-t border-b mt-12">
            <div class="grid grid-cols-12 grid-flow-row max-w-7xl mx-auto" style="height: auto;">
                <div class="border-l
                            border-t sm:border-t-0
                            border-b sm:border-b-0 
                            border-r-0 sm:border-r
                            lg:col-span-1 sm:col-span-2 col-span-12
                            py-12 sm:py-0
                            h-20 sm:h-full
                            relative
                            flex items-center
                            bg-white
                            z-20">
                    <h4 class="absolute text-3xl serif text-gray-200 break-all uppercase
                                w-full sm:w-4
                                leading-normal sm:leading-relaxed
                                tracking-widest
                                top-0 sm:top-4
                                -left-1 sm:left-4">
                        4 Reality
                    </h4>
                    <h6 class="absolute text-lg serif text-gray-200 break-all uppercase
                                w-full sm:w-4
                                bottom-0 sm:bottom-4
                                right-1 sm:right-4
                                text-right sm:text-left
                                tracking-widest sm:tracking-normal
                                leading-normal sm:leading-relaxed">
                        Members
                    </h6>
                    <img class="absolute z-0 opacity-50 
                                transform rotate-90 sm:rotate-0
                                bottom-4 sm:bottom-2 
                                left-0 sm:left-2" src="/assets/particles/rectangles-dot.png" />
                    <img class="absolute z-0 opacity-50
                                transform rotate-90 sm:rotate-0
                                top-4 sm:top-2 
                                right-0 sm:right-2" src="/assets/particles/rectangles-dot.png" />
                    <div class="absolute flex w-full justify-center items-center
                                flex-row sm:flex-col">
                        <img v-for="(chars, index) in gen1" 
                            :key="index" 
                            :src="chars.avatar"
                            class="w-16 h-16 object-fit
                                    mr-4 last:mr-0 sm:mr-0 sm:mb-4 sm:last:mb-0">
                    </div>
                </div>

                <div class="col-span-12 sm:col-span-10 lg:col-span-11
                            h-screen sm:h-auto
                            border-r-0 sm:border-r" style="height: 600px">
                    <!-- <Karen :charData="gen1[1]" /> -->
                    <!-- <YuaDeyanara :charData="utaite[1]" /> -->
                    <AuraLily :charData="utaite[0]" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AuraLily from "./charsets/AuraLily.vue";
    import Karen from "./charsets/Karen.vue";
    import YuaDeyanara from "./charsets/YuaDeyanara.vue";

    export default {
        components: {
            AuraLily,
            Karen,
            YuaDeyanara,
        },
        data() {
            return {
                gen1: [
                    {
                        name: 'Raihan',
                        avatar: '/assets/avatar/raihan.png',
                        char: '/assets/characters/raihan.png',
                        colorScheme: '#B65D51',
                        bio: "",
                        palettes: [
                            '#000000',
                            '#000000',
                            '#000000',
                            '#000000',
                            '#000000',
                        ],
                    },
                    {
                        name: 'Karen',
                        avatar: '/assets/avatar/karen.png',
                        char: '/assets/characters/karen.png',
                        colorScheme: '#C0A274',
                        bio: "I'm a Highschool student who often go to the internet cafe everyday and also momentum no... I have different personality when I change my glasses...",
                        palettes: [
                            '#F9E5C7',
                            '#C0A274',
                            '#A28456',
                            '#473A2A',
                            '#22180E',
                        ],
                    },
                    {
                        name: 'Vyula',
                        avatar: '/assets/avatar/vyula.png',
                        char: '/assets/characters/vyula.png',
                        colorScheme: '#2B6F9C',
                        bio: "A Prince from noble family, Living his life behind the darkness.",
                        palettes: [
                            '#000000',
                            '#000000',
                            '#000000',
                            '#000000',
                            '#000000',
                        ],
                    }
                ],
                gen2: [
                    {
                        name: 'Mizuki Aoi',
                        avatar: '/assets/avatar/mizuki-aoi.png',
                        char: '/assets/characters/mizuki-aoi.png',
                        colorScheme: '#4985DA',
                        bio: "",
                        palettes: [
                            '#000000',
                            '#000000',
                            '#000000',
                            '#000000',
                            '#000000',
                        ],
                    }
                ],
                utaite: [
                    {
                        name: 'Aura Lily',
                        avatar: '/assets/avatar/aura-lily.png',
                        char: '/assets/characters/aura-lily.png',
                        colorScheme: '#FDD3DA',
                        bio: "Aloo 💕🌸 Namaku Aura Lily, aku adalah peri yang nyasar karena tersangkut oleh ekor serigala dan terbawa sampai ke Bar 4Reality. 💕🌸",
                        palettes: [
                            '#FDD3DA',
                            '#F8B6D0',
                            '#E19EBA',
                            '#AAC8E5',
                            '#85AFD9',
                        ],
                    },
                    {
                        name: 'Yua Deyanara',
                        avatar: '/assets/avatar/yua-deyanara.png',
                        char: '/assets/characters/yua-deyanara.png',
                        colorScheme: '#DDF5FB',
                        bio: "YUA is what's left from the virtual conciousness of a failed AI. Activated with no memory, she wish to get it back and understand why she was made.",
                        palettes: [
                            '#FADADB',
                            '#AAC8E5',
                            '#AAC8E5',
                            '#F8B6D0',
                            '#E19EBA',
                        ],
                    },
                ]
            }
        }
    }
</script>