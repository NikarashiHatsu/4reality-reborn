<template>
    <div id="team" class="w-full py-12">
        <div class="max-w-6xl mx-auto">
            <h5 class="text-4xl sans-serif text-center">
                Our Team
            </h5>
        </div>

        <div class="max-w-2xl mx-auto">

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-4 mt-12 justify-center">
                <button :style="(gen1Toggled) ? toggledButtonColor : ''"
                        @click="toggleGen1()" 
                        class="col-span-1 w-full px-6 py-3 font-semibold transition ease-in-out duration-300 hover:bg-gray-100 border-l border-t border-r
                                focus:outline-none
                                rounded-t-none sm:rounded-t-md
                                text-xs sm:text-base">
                    4R Gen 1
                </button>
                <button :style="(gen2Toggled) ? toggledButtonColor : ''"
                        @click="toggleGen2()" 
                        class="col-span-1 w-full px-6 py-3 font-semibold transition ease-in-out duration-300 hover:bg-gray-100 border-l border-t border-r
                                focus:outline-none
                                rounded-t-none sm:rounded-t-md
                                text-xs sm:text-base">
                    4R Gen 2
                </button>
                <button :style="(utaiteToggled) ? toggledButtonColor : ''"
                        @click="toggleUtaite()" 
                        class="col-span-1 w-full px-6 py-3 font-semibold transition ease-in-out duration-300 hover:bg-gray-100 border-l border-t border-r
                                focus:outline-none
                                rounded-t-none sm:rounded-t-md
                                text-xs sm:text-base">
                    Utaite
                </button>
            </div>
        </div>
        <div class="border-t border-b">
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
                    <img class="absolute z-0 
                                transform rotate-90 sm:rotate-0
                                bottom-4 sm:bottom-2 
                                left-0 sm:left-2" :src="'./assets/particles/rectangles-dot.png'" />
                    <img class="absolute z-0
                                transform rotate-90 sm:rotate-0
                                top-4 sm:top-2 
                                right-0 sm:right-2" :src="'./assets/particles/rectangles-dot.png'" />

                    <div class="absolute flex w-full justify-center items-center
                                flex-row sm:flex-col"
                         v-if="gen1Toggled">
                        <img v-for="(chars, index) in gen1" 
                            :key="index" 
                            :src="chars.avatar"
                            @click="changeGen1(index)"
                            class="w-16 h-16 object-fit
                                    mr-4 last:mr-0 sm:mr-0 sm:mb-4 sm:last:mb-0
                                    cursor-pointer">
                    </div>
                    <div class="absolute flex w-full justify-center items-center
                                flex-row sm:flex-col"
                         v-if="gen2Toggled">
                        <img v-for="(chars, index) in gen2" 
                            :key="index" 
                            :src="chars.avatar"
                            @click="changeGen2(index)"
                            class="w-16 h-16 object-fit
                                    mr-4 last:mr-0 sm:mr-0 sm:mb-4 sm:last:mb-0
                                    cursor-pointer">
                    </div>
                    <div class="absolute flex w-full justify-center items-center
                                flex-row sm:flex-col"
                         v-if="utaiteToggled">
                        <img v-for="(chars, index) in utaite" 
                            :key="index" 
                            :src="chars.avatar"
                            @click="changeUtaiteIndex(index)"
                            class="w-16 h-16 object-fit
                                    mr-4 last:mr-0 sm:mr-0 sm:mb-4 sm:last:mb-0
                                    cursor-pointer">
                    </div>
                </div>

                <div class="col-span-12 sm:col-span-10 lg:col-span-11
                            h-screen sm:h-auto
                            border-r-0 sm:border-r
                            overflow-hidden" style="height: 625px">
                    <KurokamiItsuki v-if="gen1Index == 0 && gen1Toggled" :charData="gen1[0]" />
                    <RaihanIkeda v-if="gen1Index == 1 && gen1Toggled" :charData="gen1[1]" />
                    <Karen v-if="gen1Index == 2 && gen1Toggled" :charData="gen1[2]" />
                    <Vyula v-if="gen1Index == 3 && gen1Toggled" :charData="gen1[3]" />

                    <MizukiAoi v-if="gen2Index == 0 && gen2Toggled" :charData="gen2[0]" />

                    <Cyanpile v-if="utaiteIndex == 0 && utaiteToggled" :charData="utaite[0]" />
                    <AuraLily v-if="utaiteIndex == 1 && utaiteToggled" :charData="utaite[1]" />
                    <YuaDeyanara v-if="utaiteIndex == 2 && utaiteToggled" :charData="utaite[2]" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AuraLily from "./charsets/AuraLily.vue";
    import Cyanpile from "./charsets/Cyanpile.vue";
    import Karen from "./charsets/Karen.vue";
    import KurokamiItsuki from "./charsets/KurokamiItsuki.vue";
    import MizukiAoi from "./charsets/MizukiAoi.vue";
    import RaihanIkeda from "./charsets/RaihanIkeda.vue";
    import Vyula from "./charsets/Vyula.vue";
    import YuaDeyanara from "./charsets/YuaDeyanara.vue";

    export default {
        components: {
            AuraLily,
            Cyanpile,
            Karen,
            KurokamiItsuki,
            MizukiAoi,
            RaihanIkeda,
            Vyula,
            YuaDeyanara,
        },
        data() {
            return {
                gen1Toggled: true,
                gen2Toggled: false,
                utaiteToggled: false,
                staffToggled: false,
                gen1Index: 0,
                gen2Index: 0,
                utaiteIndex: 0,
                staffIndex: 0,
                
                gen1: [
                    {
                        name: 'Kurokami Itsuki',
                        avatar: './assets/avatar/kurokami-itsuki.png',
                        char: './assets/characters/kurokami-itsuki.webp',
                        colorScheme: '#000000',
                        bio: "",
                        race: 'Werewolf',
                        palettes: [
                            '#595860',
                            '#414147',
                            '#303137',
                            '#27242F',
                            '#1F1D25',
                        ],
                        facebook: {
                            userName: 'Kurokami Itsuki',
                            link: 'https://web.facebook.com/kurokami.itsuki.3',
                        },
                        twitter: {
                            userName: '@itsuki4R',
                            link: 'https://twitter.com/itsuki4R',
                        },
                        youtube: {
                            userName: 'Itsuki Ch. イツキ「4 REALITY」 ',
                            link: 'https://www.youtube.com/channel/UCIpvTuGE_fennkL2mXah9Pg',
                        },
                        tagline: '',
                        motto: '',
                        height: '',
                        birthDate: '',
                        age: '',
                    },
                    {
                        name: 'Raihan Ikeda',
                        avatar: './assets/avatar/raihan-ikeda.png',
                        char: './assets/characters/raihan-ikeda.webp',
                        colorScheme: '#B65D51',
                        bio: "",
                        race: 'Human',
                        palettes: [
                            '#C6685A',
                            '#B55C50',
                            '#8F4D42',
                            '#825B4F',
                            '#69483F',
                        ],
                        facebook: {
                            userName: 'Raihan Ikeda',
                            link: 'https://web.facebook.com/raihan.ikeda.5',
                        },
                        twitter: {
                            userName: '@RaihanIkeda',
                            link: 'https://twitter.com/RaihanIkeda',
                        },
                        youtube: {
                            userName: ' Raihan Ikeda Ch. イケダ「4 REALITY」',
                            link: 'https://www.youtube.com/RaihanIkeda4RCh',
                        },
                        tagline: 'Trading Mang',
                        motto: 'Interaction with people, Playing Game, Trading',
                        height: '170cm',
                        birthDate: 'April 4th',
                        age: '(Secret)',
                    },
                    {
                        name: 'Karen',
                        avatar: './assets/avatar/karen.png',
                        char: './assets/characters/karen.webp',
                        colorScheme: '#C0A274',
                        bio: "I'm a Highschool student who often go to the internet cafe everyday and also momentum no... I have different personality when I change my glasses...",
                        race: 'Human',
                        palettes: [
                            '#F9E5C7',
                            '#C0A274',
                            '#A28456',
                            '#473A2A',
                            '#22180E',
                        ],
                        facebook: {
                            userName: 'Karen',
                            link: 'https://web.facebook.com/kkarennaws',
                        },
                        twitter: {
                            userName: '@Kareen4R',
                            link: 'https://twitter.com/kareen4r',
                        },
                        youtube: {
                            userName: 'Karen ch. カレン「4 REALITY」',
                            link: 'https://www.youtube.com/Karen_naws',
                        },
                        tagline: 'Momentum',
                        motto: 'Gaming, Programming, Sleeping',
                        height: '158cm',
                        birthDate: 'August 30th',
                        age: '(Secret)',
                    },
                    {
                        name: 'Vyula',
                        avatar: './assets/avatar/vyula.png',
                        char: './assets/characters/vyula.webp',
                        colorScheme: '#2B6F9C',
                        bio: "A Prince from noble family, Living his life behind the darkness.",
                        race: 'Vampire',
                        palettes: [
                            '#6473A1',
                            '#515f9E',
                            '#3E407C',
                            '#DEDEDE',
                            '#373443',
                        ],
                        facebook: {
                            userName: 'Vyula',
                            link: 'https://web.facebook.com/vel.vet.12576',
                        },
                        twitter: {
                            userName: '@Vyula4R',
                            link: 'https://twitter.com/Vyula4R',
                        },
                        youtube: {
                            userName: ' Vyula Ch. ビューラ 「4 REALITY」',
                            link: 'https://www.youtube.com/channel/UCO4MJHNZ-nurM3ZRj8gL5Yw',
                        },
                        tagline: 'Yo\'i',
                        motto: 'Gaming, Anime, Comic/Novel',
                        height: '183cm',
                        birthDate: 'October 24th',
                        age: '3108 y/o',
                    }
                ],
                gen2: [
                    {
                        name: 'Mizuki Aoi',
                        avatar: './assets/avatar/mizuki-aoi.png',
                        char: './assets/characters/mizuki-aoi.webp',
                        colorScheme: '#4985DA',
                        bio: "",
                        race: 'Blue Yōkai Fox',
                        palettes: [
                            '#4985DB',
                            '#3A6CBC',
                            '#1F4086',
                            '#FFC774',
                            '#ECA756',
                        ],
                        facebook: {
                            userName: 'Mizuki Aoi',
                            link: 'https://web.facebook.com/aoi.mizuki.7923',
                        },
                        twitter: {
                            userName: '@mizukiaoii',
                            link: 'https://twitter.com/mizukiaoii',
                        },
                        youtube: {
                            userName: 'Aoi ch. ミズキアオイ「4 REALITY」',
                            link: 'https://www.youtube.com/channel/UCpzRn1NafleJlKUMRg0Rdrw',
                        },
                        tagline: 'Kon-Awi',
                        motto: 'Gaming And Voice Acting',
                        height: '180cm (ears included)',
                        birthDate: 'February 29th',
                        age: '99',
                    }
                ],
                utaite: [
                    {
                        name: 'Cyanpile',
                        avatar: './assets/avatar/cyanpile.png',
                        char: './assets/characters/cyanpile.webp',
                        colorScheme: '#D49877',
                        bio: '',
                        race: 'Human',
                        palettes: [
                            '#D49877',
                            '#3D4050',
                            '#2B3040',
                            '#825B4F',
                            '#69483F',
                        ],
                        facebook: {
                            userName: 'Cyanpile',
                            link: 'https://www.facebook.com/CyanPile7295',
                        },
                        twitter: {
                            userName: '@CyanPile4R',
                            link: 'https://twitter.com/CyanPile4R',
                        },
                        youtube: {
                            userName: 'CYANPILE Ch. シアンパイル 「4 REALITY」 ',
                            link: 'https://www.youtube.com/channel/UCaBDpGF4yhTgEscYYAbZDvA',
                        },
                        tagline: '',
                        motto: 'Traveling, Writing, Listening Music',
                        height: '173cm',
                        birthDate: 'June 26th',
                        age: '(Secret)',
                    },
                    {
                        name: 'Aura Lily',
                        avatar: './assets/avatar/aura-lily.png',
                        char: './assets/characters/aura-lily.webp',
                        colorScheme: '#FDD3DA',
                        bio: "Awloo! Namaku Aura Lily, aku adalah peri yang nyasar gara-gara nyangkut di ekor Itsuki, terus kebawa deh ke bar 4R",
                        race: 'Fairy',
                        palettes: [
                            '#FDD3DA',
                            '#F8B6D0',
                            '#E19EBA',
                            '#AAC8E5',
                            '#85AFD9',
                        ],
                        facebook: {
                            userName: 'Aura Lily (アウラリリ)',
                            link: 'https://web.facebook.com/yuzuki.aurasha',
                        },
                        twitter: {
                            userName: '@AuraLilyy',
                            link: 'https://twitter.com/AuraLilyy',
                        },
                        youtube: {
                            userName: 'Aura Lily Ch. アウラリリ 「4 REALITY」 ',
                            link: 'https://www.youtube.com/channel/UCKE7tk9WzOW666V0xLs8UWw',
                        },
                        tagline: 'ABWANG',
                        motto: 'Singing, Rebahan, Masuk Dalam Toples',
                        height: '12cm',
                        birthDate: 'October 27th',
                        age: '',
                    },
                    {
                        name: 'Yua Deyanara',
                        avatar: './assets/avatar/yua-deyanara.png',
                        char: './assets/characters/yua-deyanara.webp',
                        colorScheme: '#DDF5FB',
                        bio: "YUA is what's left from the virtual conciousness of a failed AI. Activated with no memory, she wish to get it back and understand why she was made.",
                        race: 'A.I',
                        palettes: [
                            '#FADADB',
                            '#AAC8E5',
                            '#AAC8E5',
                            '#F8B6D0',
                            '#E19EBA',
                        ],
                        facebook: {
                            userName: 'Yua',
                            link: 'https://web.facebook.com/yua.deyanara',
                        },
                        twitter: {
                            userName: '@yuadeyanara_',
                            link: 'https://twitter.com/yuadeyanara_',
                        },
                        youtube: {
                            userName: 'Yua Ch. ユア 「4 REALITY」',
                            link: 'https://www.youtube.com/channel/UCgjuENo4JAORGmTZDDKmx8A',
                        },
                        tagline: 'HWEEE',
                        motto: 'Singing, updating her database',
                        height: 'Unkown',
                        birthDate: 'Unkown',
                        age: 'Unkown',
                    },
                ],
                staff: [
                    {
                        name: 'HatsuShiroyuki',
                        avatar: '',
                        char: '',
                        colorScheme: '',
                        bio: "Developer gabut",
                        race: 'Cat?',
                        palettes: [
                            '#000000',
                            '#000000',
                            '#000000',
                            '#000000',
                            '#000000',
                        ],
                        facebook: {
                            userName: 'HatsuShiroyuki',
                            link: 'https://web.facebook.com/hatsu.shiroyuki',
                        },
                        twitter: {
                            userName: 'NikarashiHatsu',
                            link: 'https://twitter.com/NikarashiHatsu',
                        },
                        youtube: {
                            userName: '',
                            link: '',
                        },
                        tagline: 'Poggers',
                        motto: 'Code, Game, and Die',
                        height: '160cm',
                        birthDate: 'March 16th, 2001',
                        age: '19 y/o',
                    }
                ]
            }
        },
        methods: {
            changeGen1(index) {
                this.gen1Index = index;
            },

            changeGen2(index) {
                this.gen2Index = index;
            },

            changeUtaiteIndex(index) {
                this.utaiteIndex = index;
            },

            changeStaffIndex(index) {
                this.staffIndex = index;
            },

            toggleGen1() {
                this.reset();
                this.gen1Toggled = true;
            },

            toggleGen2() {
                this.reset();
                this.gen2Toggled = true;
            },

            toggleUtaite() {
                this.reset();
                this.utaiteToggled = true;
            },

            toggleStaff() {
                this.reset();
                this.staffToggled = true;
            },

            reset() {
                this.gen1Toggled = false;
                this.gen2Toggled = false;
                this.utaiteToggled = false;
                this.staffToggled = false;
            }
        },

        computed: {
            toggledButtonColor() {
                let usedSet;
                let indexSet;

                if (this.gen1Toggled) {
                    usedSet = this.gen1;
                    indexSet = this.gen1Index;
                }

                if (this.gen2Toggled) {
                    usedSet = this.gen2;
                    indexSet = this.gen2Index;
                }

                if (this.utaiteToggled) {
                    usedSet = this.utaite;
                    indexSet = this.utaiteIndex;
                }

                if (this.staffToggled) {
                    usedSet = this.staff;
                    indexSet = this.staffIndex;
                }

                return `background-color: ${usedSet[indexSet].palettes[2]}; color: white;`;
            }
        }
    }
</script>