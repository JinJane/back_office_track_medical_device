<template>
    <div>

         <div class="card" style="text-align:center;">
            <div class="card-body" style=" display: grid;">
              <div class="card" >
                <div class="card-header">Featured</div>
                <ul class="list-group list-group-flush" style="text-align:left;">
                    <li class="list-group-item">Cras justo odio
                        <img  src="@/assets/add.png"/>
                        <img src="@/assets/minus.png"/>
                    </li>
                    <li class="list-group-item">Dapibus ac facilisis in
                        <img  src="@/assets/add.png"/>
                        <img src="@/assets/minus.png"/>
                    </li>
                    <li class="list-group-item">Vestibulum at eros
                        <img  src="@/assets/add.png"/>
                        <img src="@/assets/minus.png"/>
                    </li>
                    
                </ul>
               
                </div>
            </div>
        
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Type",
    data() {
        return {
            list: [],
            isAdd: false
        }
    },
    created() {//http://www.mocky.io/v2/5db121b52e00005b005051ab
    localStorage.removeItem("ADD");
        axios.get('https://servicemed-43izies4dq-an.a.run.app/device').then((response) => {
        this.list = response.data
        localStorage.setItem("listDevice",JSON.stringify(response.data))
        })
        .catch((e) => {
        console.error(e)
        })
    },
   computed: {
    gridStyle() {
      return {
      }
    },
  },
  methods: {
    gotoForm(){
      localStorage.setItem("ADD",!this.isAdd)
      localStorage.setItem("CardDevice",JSON.stringify({}))
      this.$router.push("/form");
    }
  },
  beforeDestroy:function(){ 

    
},
    
}
</script>

<style>
.content {
  display: grid;
  flex-direction: row;
  grid-template-columns: 3fr 3fr 3fr 3fr;
}
</style>