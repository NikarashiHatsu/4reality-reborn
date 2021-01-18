<template>
    <nav :class="{ 'bg-gray-900 bg-opacity-25': dim }" class="fixed w-full z-50 py-4 navbar flex font-semibold uppercase text-xs tracking-widest text-white">
        <div class="w-full max-w-6xl mx-auto">
            <div class="flex justify-end">
                <a :class="activeSection == 'hero' ? 'bg-white text-gray-900' : ''" class="px-4 py-2 mr-4 transition ease-in-out duration-300 hover:bg-white hover:text-gray-900 rounded-3xl leading-tight" href="#home">
                    Home
                </a>
                <a :class="activeSection == 'about' ? 'bg-white text-gray-900' : ''" class="px-4 py-2 mr-4 transition ease-in-out duration-300 hover:bg-white hover:text-gray-900 rounded-3xl leading-tight" href="#about">
                    About Us
                </a>
                <a :class="activeSection == 'team' ? 'bg-white text-gray-900' : ''" class="px-4 py-2 mr-4 transition ease-in-out duration-300 hover:bg-white hover:text-gray-900 rounded-3xl leading-tight" href="#team">
                    Our Team
                </a>
                <a :class="activeSection == 'contact' ? 'bg-white text-gray-900' : ''" class="px-4 py-2 transition ease-in-out duration-300 hover:bg-white hover:text-gray-900 rounded-3xl leading-tight" href="#contact">
                    Contact Us
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        props: ['dim', 'activeSection'],
    }
</script>