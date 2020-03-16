<template>
    <h1>ShowingEvents {{event.title}}</h1>
</template>


<script>
import EventService from '@/services/EventService.js'
  export default {
      props:['id'],
      data() {
          return {
              event: {}
          }
      },
      created () {
          EventService.getIndEvent(this.id)
          .then(response => {
              this.event=response.data
          })
          .catch(error=>{
              console.log('There was an error:',error.response)
          })
          
      }
  }
</script>