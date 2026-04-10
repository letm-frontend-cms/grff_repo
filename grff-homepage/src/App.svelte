<script>
  import './app.css';
  import Navbar from './lib/components/Navbar.svelte';
  import HeroSection from './lib/components/HeroSection.svelte';
  import StatsSection from './lib/components/StatsSection.svelte';
  import FeaturedCoursesSection from './lib/components/FeaturedCoursesSection.svelte';
  import FeaturesSection from './lib/components/FeaturesSection.svelte';
  import CTASection from './lib/components/CTASection.svelte';
  import Footer from './lib/components/Footer.svelte';
</script>

<div class="min-h-screen bg-[#05010d] text-white">
  <Navbar />
  <main>
    <HeroSection />
    <StatsSection />
    <FeaturedCoursesSection />
    <FeaturesSection />
    <CTASection />
  </main>
  <Footer />
</div>
