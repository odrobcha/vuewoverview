<template>
  <div>
    <the-header> </the-header>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>


<script>
import TheHeader from "@/components/layout/TheHeader";

export default {

  name: 'App',
  components: {TheHeader}
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-active {
  transition: all 1.3s ease-out;
}
.route-leave-active {
  transition: all 1.3s ease-in;
}
.route-enter
{
  transform: translateY(-30px);
  opacity: 0;
}

.route-leave-to
{
  transform: translateY(30px);
  opacity: 0;
}
</style>
