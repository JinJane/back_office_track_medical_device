<template>
    <div>
        <div class="columns is-centered is-multiline content" >

         <div class="card" style="width: 18rem;  margin: 20px 10px 10px 10px; text-align:center;">
            <div class="card-body" style=" display: grid; margin: 20px 20px 20px 20px;">
              <a href="#" class="btn btn-primary btn-lg" style="margin: 30px 30px 30px 30px;" @click="gotoForm()">ADD</a>
            </div>
          </div>

        <div v-for="card in list" :key="card.id">
            <Card :card="card"></Card>
        </div>
        </div>
    </div>
</template>

<script>
import Card from './Card'
import axios from 'axios'
export default {
    name: "cardList",
    components: {Card},
    data() {
        return {
            list: [],
            numberOfColumns: 4
        }
    },
    created() {
      console.log("hh")
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
      this.$router.push("/form");
    }
  }
    
}
</script>

<style>
.content {
  display: grid;
  flex-direction: row;
  grid-template-columns: 3fr 3fr 3fr 3fr;
}
</style>