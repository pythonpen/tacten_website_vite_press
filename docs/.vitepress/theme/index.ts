import DefaultTheme from 'vitepress/theme'
import ZigZagSection from '../components/ZigZagSection.vue'
import './style.css'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('ZigZagSection', ZigZagSection)
    }
}
