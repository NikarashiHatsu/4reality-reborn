<template>
    <div class="flex flex-col items-center fixed z-40 bottom-4 right-4">
        <button v-if="isOpen" class="w-12 h-12 bg-gray-600 text-white focus:outline-none rounded-full shadow-2xl mb-4">
            <i class="fas fa-home"></i>
        </button>
        <button v-if="isOpen" class="w-12 h-12 bg-gray-600 text-white focus:outline-none rounded-full shadow-2xl mb-4">
            <i class="fas fa-info"></i>
        </button>
        <button v-if="isOpen" class="w-12 h-12 bg-gray-600 text-white focus:outline-none rounded-full shadow-2xl mb-4">
            <i class="fas fa-users"></i>
        </button>
        <button v-if="isOpen" class="w-12 h-12 bg-gray-600 text-white focus:outline-none rounded-full shadow-2xl mb-4">
            <i class="fas fa-user-tie"></i>
        </button>
        <button v-if="isOpen" class="w-12 h-12 bg-gray-600 text-white focus:outline-none rounded-full shadow-2xl mb-4">
            <i class="fab fa-wpforms"></i>
        </button>
        <button v-if="isOpen" @click="open()" class="w-16 h-16 bg-gray-600 text-white focus:outline-none rounded-full shadow-2xl">
            <i class="fas fa-times text-xl"></i>
        </button>
        <button v-if="!isOpen" @click="open()" class="w-16 h-16 bg-gray-600 text-white focus:outline-none rounded-full shadow-2xl">
            <i class="fas fa-bars"></i>
        </button>
    </div>
</template>

<script>
    export default {
        name: 'FloatingActionButton',
        data() {
            return {
                isOpen: false,
            }
        },
        methods: {
            open() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>