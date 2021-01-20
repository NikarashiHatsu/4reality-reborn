<template>
    <div id="contact" class="flex justify-center py-24 bg-gray-100 mt-4">
        <div class="flex flex-col max-w-6xl mx-auto">
            <h1 class="text-4xl sans-serif text-center mb-16">
                Contact Us
            </h1>
            <form class="flex flex-cols sans-serif" action="https://formspree.io/f/xknpzblo" method="POST">
                <div class="grid grid-cols-2 grid-flow-row gap-8">
                    <div class="flex flex-col col-span-2 sm:col-span-1">
                        <label for="name" class="font-semibold mb-2">
                            Your Name
                        </label>
                        <input id="name" type="text" name="name" class="px-4 py-2 border rounded-md">
                    </div>
                    <div class="flex flex-col col-span-2 sm:col-span-1">
                        <label for="email" class="font-semibold mb-2">
                            Your Email
                        </label>
                        <input id="email" type="email" name="_replyto" class="px-4 py-2 border rounded-md">
                    </div>
                    <div class="flex flex-col col-span-2">
                        <label for="message" class="font-semibold mb-2">
                            Message
                        </label>
                        <textarea id="message" name="message" rows="8" class="px-4 py-2 border rounded-md"></textarea>
                    </div>
                    <div class="flex justify-center col-span-2">
                        <input class="w-32 cursor-pointer px-4 py-2 rounded-md border text-white
                                        transition ease-in-out duration-300
                                        bg-gray-500 hover:bg-gray-700" type="submit" value="Send">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ContactUs',
    }
</script>