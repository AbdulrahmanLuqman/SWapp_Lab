<script>
import { defineComponent } from 'vue';
import SideNav from '@/components/SideNav.vue';
import Hamburger from '@/components/Hamburger.vue';
import MobileNav from '@/components/MobileNav.vue';

export default defineComponent({
  components:{
    SideNav, Hamburger, MobileNav
  },
  data() {
    return{
      isNavTrue: false
    }
  },
  methods:{
    isNav(){
      this.isNavTrue = !this.isNavTrue
      console.log(this.isNavTrue)
    }
  }
})
</script>

<template>

  <main class="flex gap-10">
    <SideNav class="side-nav fixed left-0 z-1" />
    <MobileNav @is-nav-true="isNav" class="mobile-nav hidden transition-all duration-500" :class="isNavTrue ? 'left-0' : 'left-[1500px]'"/>
    <div class="views w-[75%] ml-[25%]">
      <Hamburger @is-nav-true="isNav"/>

      <RouterView />
    </div>
  </main>
</template>

<style>
@media (max-width: 1024px) {
  .side-nav{
    display: none;
  }
  .views{
    width: 100%;
    margin: 0;
  }
  .mobile-nav{
    display: block;
  }
}
</style>