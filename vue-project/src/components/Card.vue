<template>
    <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="@/assets/device_madical.png" alt="Device_Pic">
  <div class="card-body">
    <h5 class="card-title" v-bind="name">{{name}}</h5>
    <p class="card-text" v-bind="type">{{type}}</p>
    <!-- <router-link :to="{name: 'form', params: {id: id}}"></router-link>  v-on="viewInfo(id)" to="/form/"this.id-->
        <a href="#" class="btn btn-primary btn-lg float-right" >View</a>
        
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'card', 
    data () {
        return {
            name: null,
            type: null,
            id: null
        }
    },
    created () {
    axios.get('http://www.mocky.io/v2/5dad582d2d00008040e4b8ff').then((response) => {
      this.name = response.data.name
      this.type = response.data.type
      this.id = response.data._id
    })
    .catch((e) => {
      console.error(e)
    })
    },
    methods: {
        // viewInfo(id){
        //     console.log(id);
        //  this.$router.push({name:'form',params:{id:id}});
        //     console.log("helo");
        //     this.$router.go('/form')
        //     //this.$router.go(-1)
        // }
    }
}
</script>