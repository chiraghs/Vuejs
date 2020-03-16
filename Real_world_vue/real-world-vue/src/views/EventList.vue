<template>
<div>
    <h1>Event Lists</h1>
    <EventCard/>
    <BaseIcon/>
    <router-link :to="{name:'event-show',params:{id:'1'}}"></router-link> 
</div>    
</template>



<script>
import EventCard from '@/components/EventCard.vue'

export default {
    components:{
        EventCard
    }
    
}
</script>