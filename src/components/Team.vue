<template>
    <div id="team" class="w-full py-12">
        <div class="max-w-6xl mx-auto">
            <h5 class="text-4xl text-center sans-serif">
                Our Team
            </h5>
        </div>

        <div class="max-w-2xl mx-auto">

            <div class="grid justify-center grid-cols-1 gap-0 mt-12 sm:grid-cols-3 sm:gap-4">
                <button :style="(gen1Toggled) ? toggledButtonColor : ''"
                        @click="toggleGen1()" 
                        class="w-full col-span-1 px-6 py-3 text-xs font-semibold transition duration-300 ease-in-out border-t border-l border-r rounded-t-none hover:bg-gray-100 focus:outline-none sm:rounded-t-md sm:text-base">
                    4R Gen 1
                </button>
                <button :style="(gen2Toggled) ? toggledButtonColor : ''"
                        @click="toggleGen2()" 
                        class="w-full col-span-1 px-6 py-3 text-xs font-semibold transition duration-300 ease-in-out border-t border-l border-r rounded-t-none hover:bg-gray-100 focus:outline-none sm:rounded-t-md sm:text-base">
                    4R Gen 2
                </button>
                <button :style="(utaiteToggled) ? toggledButtonColor : ''"
                        @click="toggleUtaite()" 
                        class="w-full col-span-1 px-6 py-3 text-xs font-semibold transition duration-300 ease-in-out border-t border-l border-r rounded-t-none hover:bg-gray-100 focus:outline-none sm:rounded-t-md sm:text-base">
                    Utaite
                </button>
            </div>
        </div>
        <div class="border-t border-b">
            <div class="grid grid-flow-row grid-cols-12 mx-auto max-w-7xl" style="height: auto;">
                <div class="relative z-20 flex items-center h-20 col-span-12 py-12 bg-white border-t border-b border-l border-r-0 sm:border-t-0 sm:border-b-0 sm:border-r lg:col-span-1 sm:col-span-2 sm:py-0 sm:h-full">
                    <h4 class="absolute top-0 w-full text-3xl leading-normal tracking-widest text-gray-200 uppercase break-all serif sm:w-4 sm:leading-relaxed sm:top-4 -left-1 sm:left-4">
                        4 Reality
                    </h4>
                    <h6 class="absolute bottom-0 w-full text-lg leading-normal tracking-widest text-right text-gray-200 uppercase break-all serif sm:w-4 sm:bottom-4 right-1 sm:right-4 sm:text-left sm:tracking-normal sm:leading-relaxed">
                        Members
                    </h6>
                    <img class="absolute left-0 z-0 transform rotate-90 sm:rotate-0 bottom-4 sm:bottom-2 sm:left-2" :src="'./assets/particles/rectangles-dot.png'" alt="rectangles" />
                    <img class="absolute right-0 z-0 transform rotate-90 sm:rotate-0 top-4 sm:top-2 sm:right-2" :src="'./assets/particles/rectangles-dot.png'" alt="rectangles" />

                    <div class="absolute flex flex-row items-center justify-center w-full sm:flex-col"
                         v-if="gen1Toggled">
                        <img v-for="(chars, index) in gen1" 
                            :key="index" 
                            :src="chars.avatar"
                            @click="changeGen1(index)"
                            :alt="chars.name"
                            class="w-16 h-16 mr-4 cursor-pointer object-fit last:mr-0 sm:mr-0 sm:mb-4 sm:last:mb-0">
                    </div>
                    <div class="absolute flex flex-row items-center justify-center w-full sm:flex-col"
                         v-if="gen2Toggled">
                        <img v-for="(chars, index) in gen2" 
                            :key="index" 
                            :src="chars.avatar"
                            @click="changeGen2(index)"
                            :alt='chars.name'
                            class="w-16 h-16 mr-4 cursor-pointer object-fit last:mr-0 sm:mr-0 sm:mb-4 sm:last:mb-0">
                    </div>
                    <div class="absolute flex flex-row items-center justify-center w-full sm:flex-col"
                         v-if="utaiteToggled">
                        <img v-for="(chars, index) in utaite" 
                            :key="index" 
                            :src="chars.avatar"
                            @click="changeUtaiteIndex(index)"
                            :name="chars.name"
                            class="w-16 h-16 mr-4 cursor-pointer object-fit last:mr-0 sm:mr-0 sm:mb-4 sm:last:mb-0">
                    </div>
                </div>

                <div class="h-screen col-span-12 overflow-hidden border-r-0 sm:col-span-10 lg:col-span-11 sm:h-auto sm:border-r" style="height: 625px">
                    <transition-group
                        enter-active-class="transition-all transition-slowest"
                        leave-active-class="transition-all transition-slowest"
                        enter-class="scale-0 opacity-50"
                        enter-to-class="opacity-100"
                        leave-class="opacity-100"
                        leave-to-class="opacity-50"
                        tag="div.w-full.h-full.relative">
                        <KurokamiItsuki v-if="gen1Index == 0 && gen1Toggled" :charData="gen1[0]" />
                        <RaihanIkeda v-if="gen1Index == 1 && gen1Toggled" :charData="gen1[1]" />
                        <Karen v-if="gen1Index == 2 && gen1Toggled" :charData="gen1[2]" />
                        <Vyula v-if="gen1Index == 3 && gen1Toggled" :charData="gen1[3]" />

                        <TorayamaZian v-if="gen2Index == 0 && gen2Toggled" :charData="gen2[0]" />
                        <MizukiAoi v-if="gen2Index == 1 && gen2Toggled" :charData="gen2[1]" />
                        <AkariIchika v-if="gen2Index == 2 && gen2Toggled" :charData="gen2[2]" />

                        <Cyanpile v-if="utaiteIndex == 0 && utaiteToggled" :charData="utaite[0]" />
                        <AuraLily v-if="utaiteIndex == 1 && utaiteToggled" :charData="utaite[1]" />
                        <YuaDeyanara v-if="utaiteIndex == 2 && utaiteToggled" :charData="utaite[2]" />
                        <Miasviel v-if="utaiteIndex == 3 && utaiteToggled" :charData="utaite[3]" />
                    </transition-group>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import AkariIchika from "./charsets/AkariIchika.vue";
    import AuraLily from "./charsets/AuraLily.vue";
    import Cyanpile from "./charsets/Cyanpile.vue";
    import Karen from "./charsets/Karen.vue";
    import KurokamiItsuki from "./charsets/KurokamiItsuki.vue";
    import Miasviel from './charsets/Miasviel.vue';
    import MizukiAoi from "./charsets/MizukiAoi.vue";
    import RaihanIkeda from "./charsets/RaihanIkeda.vue";
    import TorayamaZian from "./charsets/TorayamaZian.vue";
    import Vyula from "./charsets/Vyula.vue";
    import YuaDeyanara from "./charsets/YuaDeyanara.vue";

    export default {
        components: {
            AkariIchika,
            AuraLily,
            Cyanpile,
            Karen,
            KurokamiItsuki,
            Miasviel,
            MizukiAoi,
            RaihanIkeda,
            TorayamaZian,
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

                gen1: [
                    {
                        name: 'Kurokami Itsuki',
                        avatar: './assets/avatar/kurokami-itsuki.png',
                        char: './assets/characters/kurokami-itsuki.webp',
                        colorScheme: '#000000',
                        bio: "A wolf who works as a bartender in the human world whose mission no one knows about.",
                        race: 'Wolf',
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
                        tagline: 'Amer Bang',
                        motto: 'Flirting - Drinking - Netflix & Chilling',
                        height: '183cm',
                        birthDate: '',
                        age: 'March 26th',
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
                        motto: 'Interact with people - Playing game - Trading',
                        height: '170cm',
                        birthDate: 'April 4th',
                        age: '(Secret)',
                    },
                    {
                        name: 'Karen',
                        avatar: './assets/avatar/karen.png',
                        char: './assets/characters/karen.webp',
                        colorScheme: '#C0A274',
                        bio: "I'm a Highschool student who often go to the internet cafe everyday and also momentum no... I have different personality when I take off my glasses...",
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
                        motto: 'Gaming - Programming - Sleeping',
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
                        motto: 'Gaming - Anime - Comic/Novel',
                        height: '183cm',
                        birthDate: 'October 24th',
                        age: '3108 y/o',
                    }
                ],
                gen2: [
                    {
                        name: 'Gill Zuya Lestrange',
                        avatar: './assets/avatar/gill-zuya-lestrange.png',
                        char: './assets/characters/gill-zuya-lestrange.webp',
                        colorScheme: '#9C3942',
                        bio: "",
                        race: 'Human',
                        palettes: [
                            '#FFFFFF',
                            '#AF9BB4',
                            '#3B3A4E',
                            '#9C3942',
                            '#762535',
                        ],
                        facebook: {
                            userName: 'Zuya Lestrange',
                            link: 'https://www.facebook.com/zuya.lestrange',
                        },
                        twitter: {
                            userName: '@Gill_Zuya',
                            link: 'https://twitter.com/Gill_Zuya',
                        },
                        youtube: {
                            userName: 'Zuya ズヤ Ch.「4 REALITY」',
                            link: 'https://www.youtube.com/channel/UCs7BXe4mGtUIwnE4oPVKTDw',
                        },
                        tagline: '',
                        motto: '',
                        height: '',
                        birthDate: 'August 18th',
                        age: '',
                    },
                    {
                        name: 'Torayama Zian',
                        avatar: './assets/avatar/torayama-zian.png',
                        char: './assets/characters/torayama-zian.webp',
                        colorScheme: '#4985DA',
                        bio: "",
                        race: 'Demi-human',
                        palettes: [
                            '#F4A226',
                            '#7F4E31',
                            '#583828',
                            '#721109',
                            '#560809',
                        ],
                        facebook: {
                            userName: '',
                            link: '',
                        },
                        twitter: {
                            userName: '@torayamazian',
                            link: 'https://twitter.com/torayamazian',
                        },
                        youtube: {
                            userName: 'Zian Ch. 虎山じあん「4 REALITY」',
                            link: 'https://www.youtube.com/channel/UCFoFuPiMX1fqWwQWwNeV0RQ',
                        },
                        tagline: 'Kopi',
                        motto: 'Traveling - Reading - Studying - If it\'s bitter add some sugar!',
                        height: '178cm',
                        birthDate: 'July 27th',
                        age: '',
                    },
                    {
                        name: 'Mizuki Aoi',
                        avatar: './assets/avatar/mizuki-aoi.png',
                        char: './assets/characters/mizuki-aoi.webp',
                        colorScheme: '#4985DA',
                        bio: "I'm a blue fox spirit, punished by Goddess Inari to guard my shrine alone because I once neglected my job as a shrine fox.",
                        race: 'Fox Spirit',
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
                        motto: 'Gaming',
                        height: '180cm',
                        birthDate: 'February 29th',
                        age: '99',
                    },
                    {
                        name: 'Akari Ichika',
                        avatar: './assets/avatar/akari-ichika.png',
                        char: './assets/characters/akari-ichika.webp',
                        colorScheme: '#9C3942',
                        bio: "",
                        race: 'Succubus',
                        palettes: [
                            '#FFFFFF',
                            '#AF9BB4',
                            '#3B3A4E',
                            '#9C3942',
                            '#762535',
                        ],
                        facebook: {
                            userName: 'Ichika Akari',
                            link: 'https://www.facebook.com/akariichikachan',
                        },
                        twitter: {
                            userName: '@akariichikachan',
                            link: 'https://twitter.com/akariichikachan',
                        },
                        youtube: {
                            userName: 'Akari Ichika Ch. 「4REALITY」',
                            link: 'https://www.youtube.com/channel/UCaeDIzZWlTmOpy0Z7ypwvwA',
                        },
                        tagline: '',
                        motto: '',
                        height: '145cm',
                        birthDate: 'January 18th',
                        age: '',
                    },
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
                            '#825B4F',
                            '#69483F',
                            '#3D4050',
                            '#2B3040',
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
                        tagline: 'dhlhmlz',
                        motto: 'Work hard - Play hard - Istira hard',
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
                        motto: 'Singing - Rebahan - Masuk Dalam Toples',
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
                        motto: 'Singing - updating her database',
                        height: 'Unkown',
                        birthDate: 'Unkown',
                        age: 'Unkown',
                    },
                    {
                        name: 'Miasviel',
                        avatar: './assets/avatar/miasviel.png',
                        char: './assets/characters/miasviel.webp',
                        colorScheme: '#CE90E0',
                        bio: "",
                        race: 'Human (?)',
                        palettes: [
                            '#CE90E0',
                            '#997DBC',
                            '#4E4B61',
                            '#B79A92',
                            '#91746D',
                        ],
                        facebook: {
                            userName: 'Mia',
                            link: 'web.facebook.com/miasviel',
                        },
                        twitter: {
                            userName: '@miasviel',
                            link: 'https://twitter.com/miasviel',
                        },
                        youtube: {
                            userName: 'Miasviel Ch. ・ω・「4 REALITY」',
                            link: 'https://www.youtube.com/channel/UCbxrjUw-R-vXB8Azvf5UDrw',
                        },
                        tagline: '',
                        motto: '',
                        height: '148cm',
                        birthDate: 'April 14th',
                        age: '???',
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