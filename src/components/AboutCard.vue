<template>
    <div class="col-span-1 relative h-64 shadow-2xl">
        <p :class="cardColor" class="absolute z-20 flex w-full h-full items-center px-6 text-center text-white rounded-lg align-middle">
            <slot name="content">
            </slot>
        </p>

        <div class="absolute w-12 h-12 left-3 top-3 rounded-lg border-t border-l border-white z-20"></div>

        <!-- Top Particle -->
        <div :class="cardColor" class="w-8 h-4 top-2 left-12 absolute z-30"></div>
        <div class="w-4 h-4 top-5 left-5 absolute z-30 text-white font-semibold uppercase transform -rotate-45">
            {{ cardType }}
        </div>
        <div :class="cardColor" class="w-4 h-8 top-12 left-2 absolute z-30"></div>

        <!-- Bottom Particle -->
        <div class="w-12 h-12 rounded-md absolute bottom-3 right-3 overflow-hidden z-30">
            <div class="w-12 h-8 -right-5 -bottom-4 absolute bg-white opacity-50 transform -rotate-45"></div>
            <div class="w-14 h-1 -right-3 bottom-4 absolute bg-white opacity-25 transform -rotate-45"></div>
        </div>

        <div class="hidden sm:block absolute w-full h-64 rounded-lg z-10 -top-4 -left-4" v-if="shadowPosition == 'top-left'" :class="shadowColor"  ></div>
        <div class="hidden sm:block absolute w-full h-64 rounded-lg z-10 -top-4 -left-4 lg:left-4" v-if="shadowPosition == 'top-right'" :class="shadowColor"></div>
        <div class="hidden sm:block absolute w-full h-64 rounded-lg z-10 -top-4 lg:top-4 -left-4" v-if="shadowPosition == 'bottom-left'" :class="shadowColor"></div>
        <div class="hidden sm:block absolute w-full h-64 rounded-lg z-10 -top-4 lg:top-4 -left-4 lg:left-4" v-if="shadowPosition == 'bottom-right'" :class="shadowColor"></div>
    </div>
</template>

<script>
    export default {
        name: 'AboutCard',
        mounted() {
            switch (this.cardColor) {
                case 'bg-gray-900': this.shadowColor = 'bg-gray-700'; break;
                case 'bg-gray-800': this.shadowColor = 'bg-gray-600'; break;
                case 'bg-gray-700': this.shadowColor = 'bg-gray-500'; break;
                case 'bg-gray-600': this.shadowColor = 'bg-gray-400'; break;
                default: break;
            }
        },
        props: {
            shadowPosition: {
                type: String,
                default: '',
            },
            cardColor: {
                type: String,
                default: '',
            },
            cardType: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                shadowColor: '',
            }
        }
    }
</script>