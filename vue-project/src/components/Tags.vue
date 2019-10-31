<template>
    <div>
        <div class="columns is-centered is-multiline content" >

         <div class="card" style="width: 18rem;  margin: 20px 10px 10px 10px; text-align:center;">
            <div class="card-body" >
                  <img  src="@/assets/add.png"/>
                  <img src="@/assets/minus.png"/>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Tags",
    data() {
        return {
            list: [],
            numberOfColumns: 4,
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
        gridTemplateColumns: `8ch auto;`
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