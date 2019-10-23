<template>
    <div>
        <div class="columns is-centered is-multiline" >
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
            list: []
        }
    },
    created() {
        axios.get('http://www.mocky.io/v2/5dafe9e82f00005c00c136ae').then((response) => {
        this.list = response.data
        window.localStorage.listDevice = JSON.stringify(response.data)
        })
        .catch((e) => {
        console.error(e)
        })
        }
    
}
</script>