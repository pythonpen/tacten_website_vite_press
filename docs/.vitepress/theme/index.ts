import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ZigZagSection from '../components/ZigZagSection.vue'
import './style.css'

export default {
    extends: DefaultTheme,
    Layout,
    enhanceApp({ app }) {
        app.component('ZigZagSection', ZigZagSection)
    }
}
