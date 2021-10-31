<template>
  <div class="relative">
    <Navbar class="hidden sm:block" :dim="dimTheNavbar" :activeSection="scrollSpy" />
    <Hero />
    <About />
    <Team />
    <ContactUs />
    <SocialMedia />
    <Footer />
    <FloatingActionButton class="block sm:hidden" />
    <a href="https://rioka.uwu.ai/" target="_blank">
      <img class="fixed z-50 w-32 h-32 transform rotate-45 -bottom-8 -left-8" :src="'/assets/characters/rioka.png'" />
    </a>
  </div>
</template>

<script>
import About from "./components/About.vue";
import ContactUs from "./components/ContactUs.vue";
import FloatingActionButton from "./components/FloatingActionButton.vue";
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
    FloatingActionButton,
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
      scrollSpy: '',
    }
  },
  created() {
    window.addEventListener("scroll", (event) => {
      let scroll = window.scrollY;
      let activeSection = '';

      let hero = document.getElementById("home");
      let about = document.getElementById("about").getBoundingClientRect().y - 5;
      let team = document.getElementById("team").getBoundingClientRect().y - 5;
      let contact = document.getElementById("contact").getBoundingClientRect().y - 5;

      if(contact < 0) {
        activeSection = 'contact';
      } else if(team < 0) {
        activeSection = 'team';
      } else if(about < 0) {
        activeSection = 'about';
      } else {
        activeSection = 'hero';
      }

      this.doNavbar = scroll + 36;
      this.heroHeight = hero.clientHeight;
      this.scrollSpy = activeSection;
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
