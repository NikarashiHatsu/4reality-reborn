<template>
    <div class="col-span-1 relative h-64 shadow-2xl">
        <p :class="cardColor" class="absolute z-20 flex w-full h-full items-center px-6 text-center text-white rounded-lg align-middle">
            <slot name="content">
            </slot>
        </p>
        <div class="hidden sm:block absolute w-full h-64 rounded-lg z-10 -top-4 -left-4" v-if="shadowPosition == 'top-left'" :class="shadowColor"  ></div>
        <div class="hidden sm:block absolute w-full h-64 rounded-lg z-10 -top-4 -left-4 md:-right-4" v-if="shadowPosition == 'top-right'" :class="shadowColor"></div>
        <div class="hidden sm:block absolute w-full h-64 rounded-lg z-10 -top-4 md:-bottom-4 -left-4" v-if="shadowPosition == 'bottom-left'" :class="shadowColor"></div>
        <div class="hidden sm:block absolute w-full h-64 rounded-lg z-10 -top-4 md:-bottom-4 -left-4 md:-right-4" v-if="shadowPosition == 'bottom-right'" :class="shadowColor"></div>
    </div>
</template>

<script>
    export default {
        name: 'AboutCard',
        mounted() {
            this.shadowColor = this.cardColor.replace(/[0-9]/g, '') + parseInt(this.cardColor.replace(/[a-zA-Z\-]/g, '') - 200).toString();
        },
        props: {
            shadowPosition: {
                type: String,
                default: '',
            },
            cardColor: {
                type: String,
                default: '',
            }
        },
        data() {
            return {
                shadowColor: '',
            }
        }
    }
</script>