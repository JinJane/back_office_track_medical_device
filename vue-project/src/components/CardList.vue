<template>
    <div>
        <div class="columns is-centered is-multiline content" >
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
        axios.get('http://www.mocky.io/v2/5db121b52e00005b005051ab').then((response) => {
        this.list = response.data
        window.localStorage.listDevice = JSON.stringify(response.data)
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