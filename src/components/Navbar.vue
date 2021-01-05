<template>
    <nav :class="{ 'bg-gray-900 bg-opacity-25': dim }" class="fixed w-full z-50 py-4 navbar flex font-semibold uppercase text-xs tracking-widest text-white">
        <div class="w-full max-w-6xl mx-auto">
            <div class="flex justify-end">
                <a class="px-4 py-2 mr-4 rounded-3xl bg-white text-gray-900" href="javascript:void(0)">
                    Home
                </a>
                <a class="px-4 py-2 mr-4 transition ease-in-out duration-300 hover:bg-white hover:text-gray-900 rounded-3xl leading-tights" href="javascript:void(0)">
                    About Us
                </a>
                <a class="px-4 py-2 mr-4 transition ease-in-out duration-300 hover:bg-white hover:text-gray-900 rounded-3xl leading-tights" href="javascript:void(0)">
                    Our Team
                </a>
                <a class="px-4 py-2 mr-4 transition ease-in-out duration-300 hover:bg-white hover:text-gray-900 rounded-3xl leading-tights" href="javascript:void(0)">
                    Our Staff
                </a>
                <a class="px-4 py-2 transition ease-in-out duration-300 hover:bg-white hover:text-gray-900 rounded-3xl leading-tights" href="javascript:void(0)">
                    Contact Us
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        props: ['dim'],
    }
</script>