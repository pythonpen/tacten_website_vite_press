<script setup>
import { ref } from 'vue'

const email = ref('')
const isValidEmail = ref(true)
const showConfirmation = ref(false)
const errorMsg = ref('')

const currentYear = new Date().getFullYear()

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

async function subscriber() {
  isValidEmail.value = validateEmail(email.value)
  if (!isValidEmail.value) {
    errorMsg.value = "Please enter a valid email address."
    return
  }

  try {
    const res = await fetch(`https://biz.tacten.link/?email=${email.value}&cmd=frappe.email.doctype.newsletter.newsletter.subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (res.status === 200) {
      showConfirmation.value = true
      email.value = '' // Clear the input
      setTimeout(() => {
        showConfirmation.value = false
      }, 3000)
    } else {
      errorMsg.value = "Failed to subscribe. Please try again later."
    }
  } catch (error) {
    console.error("Error:", error)
    errorMsg.value = "Failed to subscribe. Please try again later."
  }
}
</script>

<template>
  <div class="footer-wrapper">
    <div class="bg-indigo-100">
      <div class="mx-auto max-w-7xl px-6 py-24 sm:py-10 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 class="max-w-2xl text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Ready to dive in? <br>Book a demo & free consult today.</h2>
        <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <a href="/book-a-call" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Book a Demo</a>
          <a href="/contact-us" class="text-sm/6 font-semibold text-gray-900">Get in touch<span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>

    <footer class="bg-gray-900 mt-auto" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="grid grid-cols-2 gap-8 xl:col-span-2">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">Solutions & Offerings</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="/digitalhealth" class="text-sm leading-6 text-gray-300 hover:text-white">Healthcare</a>
                  </li>
                  <li>
                    <a href="/digital-bootstrapper" class="text-sm leading-6 text-gray-300 hover:text-white">Digital Bootstrapper</a>
                  </li>
                  <li>
                    <a href="/enterprise-cloud-hosting" class="text-sm leading-6 text-gray-300 hover:text-white">Enterprise Cloud Hosting</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScQibSFB4ZDGnv5qPoWtd8yfZSl7q5q74Q-KMk_Lo9yXPchWg/viewform" class="text-sm leading-6 text-gray-300 hover:text-white">Get started</a>
                  </li>
                  <li>
                    <a href="/contact-us" class="text-sm leading-6 text-gray-300 hover:text-white">Contact Us</a>
                  </li>
                  <li>
                    <a href="/book-a-call" class="text-sm leading-6 text-gray-300 hover:text-white">Book a Consult</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="/about" class="text-sm leading-6 text-gray-300 hover:text-white">About</a>
                  </li>
                  <li>
                    <a href="/blog" class="text-sm leading-6 text-gray-300 hover:text-white">Blog</a>
                  </li>
                  <li>
                    <a href="/faq" class="text-sm leading-6 text-gray-300 hover:text-white">FAQ</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="/privacy-policy" class="text-sm leading-6 text-gray-300 hover:text-white">Privacy</a>
                  </li>
                  <li>
                    <a href="/sitemap.xml" class="text-sm leading-6 text-gray-300 hover:text-white">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="mt-10 xl:mt-0">
            <h3 class="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
            <p class="mt-2 text-sm leading-6 text-gray-300">Stay subscribed to insights and updates from us.</p>
            <form class="mt-6 sm:flex sm:max-w-md" @submit.prevent="subscriber">
              <label for="email-address" class="sr-only">Email address</label>
              <input 
                type="email" 
                name="email-address" 
                id="email-address" 
                v-model="email"
                autocomplete="email" 
                required 
                class="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full"
                :class="isValidEmail ? 'ring-white/10' : 'ring-red-500'"
                placeholder="Enter your email"
              >
              <div class="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                <button 
                  type="submit" 
                  class="flex w-full items-center justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p v-if="!isValidEmail" class="mt-2 text-sm text-red-500">Please enter a valid email address.</p>
            <p v-if="showConfirmation" class="mt-2 text-sm text-green-500">Thank you for subscribing!</p>
          </div>
        </div>
        
        <div class="text-gray-400 mt-16 md:space-y-4 md:flex-col justify-start items-start">
          <hr class="border-gray-700"/>
        </div>

        <div class="mt-8 pt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-12">
          <div class="space-y-6">
            <img class="h-16 sm:h-24" src="/images/erpnext_partner.png" alt="ERPNext Frappe Certified Partner">
            <p class="text-sm leading-6 text-gray-300">Solving for enterprise with Open Source.</p>
            <div class="flex space-x-6">
              <a href="https://www.linkedin.com/company/tacten" target="_blank" class="text-gray-500 hover:text-gray-400">
                <span class="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50" style="fill:#6B7280;">
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </a>
              <a href="https://twitter.com/tactenhealth" target="_blank" class="text-gray-500 hover:text-gray-400">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com/Tacten" target="_blank" class="text-gray-500 hover:text-gray-400">
                <span class="sr-only">GitHub</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UC1skdE9Ba5RXyPILTUr6RDA" target="_blank" class="text-gray-500 hover:text-gray-400">
                <span class="sr-only">YouTube</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-semibold leading-6 text-white mb-4">Contact Details</h3>
            <div class="space-y-2">
              <div class="flex items-center">
                <svg class="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a class="text-white" href="mailto:info@tacten.co">info@tacten.co</a>
              </div>
              <div class="flex items-center">
                <svg class="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                </svg>
                <a class="text-white" href="https://mi.tacten.link/tacten-support/new" target="_blank">Log a Support Ticket</a>
              </div>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-semibold leading-6 text-white mb-4">Addresses</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <svg class="h-7 w-6 text-white mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                <div>
                  <p class="text-sm text-gray-300">USA:</p>
                  <p class="text-sm text-gray-300">542 Hudson Ave,</p>
                  <p class="text-sm text-gray-300">Albany, NY 12203</p>
                </div>
              </div>
              <div class="flex items-start">
                <svg class="h-7 w-6 text-white mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
                <div>
                  <p class="text-sm text-gray-300">India:</p>
                  <p class="text-sm text-gray-300">Bhive, AKR Tech Park,</p>
                  <p class="text-sm text-gray-300"> B-Block,</p>
                  <p class="text-sm text-gray-300">Bangalore - 56006</p>
                  <p class="text-sm text-gray-300">KA, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-8 border-t border-gray-700 pt-8">
          <p class="text-xs leading-5 text-gray-400">&copy; {{ currentYear }} Tacten Services LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Scoped styles if needed, but Tailwind classes should cover most */
</style>
