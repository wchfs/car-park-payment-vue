<template>
  <button @click="getUserLocation()"> connect </button>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    message: String
  },
  methods: {
    getUserLocation(){
      navigator.geolocation.getCurrentPosition(this.setLocation, this.rejectLocation)
    },
    setLocation(loc){
      console.log(loc);
    },
    rejectLocation(e){
      console.log(e);
    }
  },
  setup(props) {
    props.message // type: string | undefined
  }
})
</script>
<style scoped>
</style>
