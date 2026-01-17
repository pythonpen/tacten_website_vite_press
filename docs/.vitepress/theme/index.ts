import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import ZigZagSection from '../components/ZigZagSection.vue'
import AboutSection from '../components/AboutSection.vue'
import HeroSection from '../components/HeroSection.vue'
import Tabs from '../components/Tabs.vue'
import Tab from '../components/Tab.vue'
import EnterpriseHero from '../components/EnterpriseHero.vue'
import FeatureGrid from '../components/FeatureGrid.vue'
import StatCounter from '../components/StatCounter.vue'
import ComparisonTable from '../components/ComparisonTable.vue'
import TestimonialCarousel from '../components/TestimonialCarousel.vue'
import EnterpriseCTA from '../components/EnterpriseCTA.vue'
import IntegrationBadge from '../components/IntegrationBadge.vue'
import SecurityTrustBar from '../components/SecurityTrustBar.vue'
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
        app.component('EnterpriseHero', EnterpriseHero)
        app.component('FeatureGrid', FeatureGrid)
        app.component('StatCounter', StatCounter)
        app.component('ComparisonTable', ComparisonTable)
        app.component('TestimonialCarousel', TestimonialCarousel)
        app.component('EnterpriseCTA', EnterpriseCTA)
        app.component('IntegrationBadge', IntegrationBadge)
        app.component('SecurityTrustBar', SecurityTrustBar)
    }
}
