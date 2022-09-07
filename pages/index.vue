<template>
  <main class="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
    <div class="sm:text-center lg:text-left">
      <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span class="block mb-4">Ready to dive in?</span>
        <span class="block text-indigo-600 text-3xl">View all Products and customize your packages.</span>
      </h1>

      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div class="rounded-md shadow">
          <nuxt-link to="/screens" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> Products </nuxt-link>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <nuxt-link to="/packages" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Packages </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
}
</script>
