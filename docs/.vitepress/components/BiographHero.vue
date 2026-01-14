<script setup>
</script>

<template>
  <div class="relative px-6 lg:px-8 pb-10">
    <!-- Background Blob -->
    <div class="absolute inset-x-0 -z-10 transform-gpu blur-3xl overflow-hidden" aria-hidden="true" style="pointer-events: none;">
      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] from-blue-300 to-cyan-300 bg-gradient-to-tr" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);"></div>
    </div>

    <div class="mx-auto max-w-4xl py-12 md:py-20 text-center">
      
      <div class="flex justify-center mb-8">
        <img src="/health.svg" alt="Biograph Logo" class="h-24 w-24" />
      </div>

      <h1 class="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl mb-6">
        Biograph
      </h1>
      
      <p class="text-2xl font-medium text-slate-700 dark:text-slate-200 mb-4">
        Hospital Information System with Enterprise ERP Power, Built-In
      </p>

      <p class="text-lg leading-8 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
        The only open-source HIMS that gives you clinical workflows AND complete business operations - powered by the Frappe/ERPNext ecosystem
      </p>

      <div class="flex items-center justify-center gap-x-6">
        <a href="/docs/getting-started" class="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors">
          Get Started
        </a>
        <a href="https://marley.frappe.cloud" target="_blank" class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100 flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          View Demo <span aria-hidden="true">→</span>
        </a>
        <a href="https://github.com/Tacten/biograph" target="_blank" class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-100 flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </div>
</template>
