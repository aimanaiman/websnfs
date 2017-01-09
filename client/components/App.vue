<template>
  <div id="app">
    <navbar></navbar>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <footerbar></footerbar>
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Footerbar from './Footerbar.vue'
import typewriter from 'vue-typewriter'
  export default {
    components: {
      Navbar,Footerbar
    },
    title: "Super Nomad Friend Squad"
  }
</script>

<style>
@font-face{
  font-family: 'GT Walsheim';
  src:url('../fonts/GT-Walsheim-Bold.woff') format('woff');
}
@font-face{
  font-family: 'GT Walsheim Light';
  src:url('../fonts/GT-Walsheim-Light.woff') format('woff');
}
@font-face{
  font-family: 'Brandon Grotesque';
  src:url('../fonts/BrandonGrotesque-Bold.woff') format('woff');
}
*, *:after, *:before{box-sizing: border-box;}
*:focus{outline: none;}
html{position: absolute;width: 100%;}
body {
  -webkit-font-smoothing: antialiased;
  color: #363636;
  padding: 0;
  margin: 0;
  font-size: 17px;
  letter-spacing: 0.78px;
  font-family: 'GT Walsheim Light',-apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
  }
h1 {
  font-family: 'GT Walsheim';
  font-size: 55px;
  margin: 0;
}
h2{
  margin: 0;
  font-family: 'GT Walsheim';
  font-size: 39px;
  text-align: center;
}
h3{
  font-family: 'Brandon Grotesque';
  text-transform: uppercase;
  font-size: 15px;
  letter-spacing: 0;
}
p{
  line-height: 1.7em;
}
a{
  /*text-decoration: none;*/
  font-family: 'GT Walsheim';
  color: rgba(39, 174, 96,1.0);
}
strong{
  font-family: 'GT Walsheim';
  color: orange;
}
input{
  font-family: 'GT Walsheim Light';
  font-size: 20px;
}
section {
  position: relative;
  padding: 100px 0;
}

.container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
} 
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.5, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0.5;
}

</style>
