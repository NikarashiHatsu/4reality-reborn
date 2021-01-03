<template>
  <div>
    <Navbar :dim="dimTheNavbar" />
    <Hero />
    <About />
    <Team />
  </div>
</template>

<script>
import About from "./components/About.vue";
import Hero from "./components/Hero.vue";
import Navbar from "./components/Navbar.vue";
import Team from "./components/Team.vue";

export default {
  name: 'App',
  components: {
    About,
    Hero,
    Navbar,
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
