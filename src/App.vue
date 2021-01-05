<template>
  <div>
    <Navbar :dim="dimTheNavbar" />
    <Hero />
    <About />
    <Team />
    <ContactUs />
    <SocialMedia />
    <Footer />
  </div>
</template>

<script>
import About from "./components/About.vue";
import ContactUs from "./components/ContactUs.vue";
import Footer from "./components/Footer.vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import SocialMedia from "./components/SocialMedia.vue";
import Team from "./components/Team.vue";

export default {
  name: 'App',
  components: {
    About,
    ContactUs,
    Footer,
    Hero,
    Navbar,
    SocialMedia,
    Team,
  },
  data() {
    return {
      doNavbar: 0,
      heroHeight: 0,
    }
  },
  created() {
    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;
      let hero = document.getElementById("hero");

      this.doNavbar = scroll + 36;
      this.heroHeight = hero.clientHeight;
    });
  },
  computed: {
    dimTheNavbar() {
      if(this.doNavbar > this.heroHeight) {
        return true;
      }
    }
  }
}
</script>
