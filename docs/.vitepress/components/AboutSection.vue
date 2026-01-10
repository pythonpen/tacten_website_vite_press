<script setup>
import { onMounted } from 'vue'

const clients = [
    '/companies/cirra.png',
    '/companies/aristo.png',
    '/companies/bounce.jpg',
    '/companies/maxtrucker.png',
    '/companies/binaroom.svg',
    '/companies/karkinos.png',
    '/companies/dezy.avif',
    '/companies/prayoga.jpg',
    '/companies/happiest_health.png',
    '/companies/emot.png',
    '/companies/math.jpeg',
    '/companies/wcl.png',
    '/companies/bbx.png',
    '/companies/methods_logo.jpeg',
    '/companies/baywestlogo.png'
]

onMounted(() => {
    // Basic Intersection Observer implementation matching Svelte version
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-bottom')
                observer.unobserve(entry.target)
            }
        })
    }, { threshold: 0.5 })

    document.querySelectorAll('.fade').forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="flex justify-center items-center flex-col pb-5 mt-0 about-section">
    <div class="mx-auto w-full pt-4 pb-5 fade overflow-hidden">
        <h2 class="text-center text-3xl tracking-tight text-gray-900 sm:text-4xl mb-12 font-bold title">Trusted By</h2>

        <div class="marquee-container">
            <!-- First set of logos -->
            <div class="animate-marquee">
                <img v-for="client in clients" :key="client" :src="client" class="client-logo" alt="Client Logo" />
            </div>
             <!-- Duplicate set for seamless loop -->
            <div class="animate-marquee" aria-hidden="true">
                <img v-for="client in clients" :key="client + '_duplicate'" :src="client" class="client-logo" alt="Client Logo" />
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.about-section {
    padding-bottom: 2rem;
    margin-top: 2rem;
}

.title {
    font-weight: 700;
    margin-bottom: 3rem;
}

.client-logo {
    height: 4rem; /* h-16 */
    width: auto;
    object-fit: contain;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s;
}

.client-logo:hover {
    filter: grayscale(0%);
    opacity: 1;
}

.marquee-container {
    position: relative;
    display: flex;
    overflow: hidden;
    user-select: none;
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.animate-marquee {
    animation: marquee 40s linear infinite;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 3rem; /* gap-12 */
    min-width: 100%;
    flex-shrink: 0;
}

@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-100%); }
}

.user-select-none {
    user-select: none;
}

/* Fade in animation classes (global or scoped if applicable) */
.fade {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade.fade-in-bottom {
    opacity: 1;
    transform: translateY(0);
}
</style>
