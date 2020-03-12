<template>
<div>
  <app-header></app-header>
  <app-bodyninja></app-bodyninja>
  <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Bodyninja from './components/body_ninja.vue'

export default {
  components:{
    'app-header':Header,
    'app-bodyninja':Bodyninja,
    'app-footer':Footer
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
