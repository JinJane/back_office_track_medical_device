<template>
    <div>
         <div class="card" style="text-align:center; margin: 20px 50px 20px 30px; padding:20px 40px 10px 30px;">
            <div class="card-body" style=" display: grid;">
              <div class="card" >
                <div class="card-header">Name Type
                  <!-- <div class="float-right">
                  <a href="#" class="btn btn-success btn-lg float-right" style="padding:1px 10px 1px 10px;" @click="getAdd()">ADD</a>
                  </div> -->
                </div>
                <ul class="list-group list-group-flush" style="text-align:left;">
                    <li class="list-group-item" v-for="item in list" :key="item">{{item}}
                      <div class="float-right col-lg-1">
                        <img @click="getDelete(item)" src="@/assets/minus.png"/>
                      </div>
                    </li>
                    <li class="list-group-item">
                        <b-form-input type="text" v-model = "newType" placeholder="" class="col-lg-10 float-left">{{newType}}
                        </b-form-input>
                      <div class="float-right col-lg-1">
                        <img @click="getAdd(newType)" src="@/assets/add.png"/>
                      </div>
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
            isAdd: false,
            newType: null
        }
    },
    created() {
        axios.get('http://www.mocky.io/v2/5dbba8db31000079494c0c12').then((response) => {
        this.list = response.data.type
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
   getAdd(newType){
      console.log("Add Type = "+ newType)
    },
    getDelete(item){
      console.log("delete = "+ item)
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