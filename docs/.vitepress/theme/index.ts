import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ZigZagSection from '../components/ZigZagSection.vue'
import AboutSection from '../components/AboutSection.vue'
import HeroSection from '../components/HeroSection.vue'
import Tabs from '../components/Tabs.vue'
import Tab from '../components/Tab.vue'
import './style.css'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('ZigZagSection', ZigZagSection)
        app.component('AboutSection', AboutSection)
        app.component('HeroSection', HeroSection)
        app.component('Tabs', Tabs)
        app.component('Tab', Tab)
    }
}
