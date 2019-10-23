<template>
    <div class="card" style="width: 18rem;  margin: 5px 2px 5px 2px;">
  <img class="card-img-top" src="@/assets/device_madical.png" alt="Device_Pic">
  <div class="card-body">
    <h5 class="card-title" >{{card.name}}</h5>
    <p class="card-text" >{{card.type}}</p>
    <a href="#" class="btn btn-primary btn-lg float-right" @click="viewInfo(card)">View</a>
  </div>
</div>
</template>

<script>
export default {
    name: 'card',
    props: ['card'], 
    data () {
        return { 
        }
    },
    methods: {
        viewInfo(card){
          window.localStorage.CardDevice = JSON.stringify(card)
            this.$router.push("/form");
            console.log("helo");
        }
    }
}
</script>