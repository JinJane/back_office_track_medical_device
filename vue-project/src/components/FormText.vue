<template>
<div class="center" style="padding-left: 200px; padding-right: 300px;">
          <b-col >
        <b-card sm="6" style="margin-top: 20px">
          <div slot="header">
            <strong>DATA</strong><small>     Information</small>
          </div>
          <b-form>
          <b-form-group>
            <label for="name">Name</label>
            <b-form-input type="text" id="company" v-model = "name" placeholder="">{{name}}</b-form-input>
          </b-form-group>
          <b-form-group
            label="Type"
            label-for="basicSelect"
            :label-cols="1"
            >
            <b-form-select id="basicSelect"
              :plain="true"
              :options="['เครื่องปั้มหัวใจ','Option 1', 'Option 2', 'Option 3']"
              
              v-model="type">{{type}}
            </b-form-select>
          </b-form-group>
          <b-form-group>
            <label for="start">Start</label>
                     <b-row>
            <b-col sm="4">
              <b-form-group>
                <label for="day1">Day</label>
                <b-form-select id="day1"
                  :plain="true"
                  :options="DAY" v-model="day1">{{day1}}
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group >
                <label for="month1">Month</label>
                <b-form-select id="month1"
                  :plain="true"
                  :options="MONTH" v-model="month1">{{month1}}
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="year1">Year</label>
                <b-form-select id="year1"
                  :plain="true"
                  :options="YEAR" v-model="year1">{{year1}}
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          </b-form-group>
          <b-form-group>
            <label for="fix">Fix</label>
                      <b-row>
            <b-col sm="4">
              <b-form-group>
                <label for="day2">Day</label>
                <b-form-select id="day2"
                  :plain="true"
                  :options="DAY" v-model="day2">{{day2}}
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group >
                <label for="month2">Month</label>
                <b-form-select id="month2"
                  :plain="true"
                  :options="MONTH" v-model="month2">{{month2}}
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="year2">Year</label>
                <b-form-select id="year2"
                  :plain="true"
                  :options="YEAR" v-model="year2">{{year2}}
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          </b-form-group>
          <b-row>
            <b-col sm="6">
              <b-form-group>
                <label for="timesTarget">Times Target</label>
                <b-form-input type="text" placeholder="" v-model="timesTarget">{{timesTarget}}</b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="6">
              <b-form-group>
                <label for="times">Times</label>
                <b-form-input type="text" placeholder="" v-model="times">{{times}}</b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

          <b-form-group
            label="Tag"
            label-for="basicCheckboxes"
            :label-cols="1"
            >
            <b-form-select id="basicSelect"
              :plain="true"
              :options="['แผนก A','แผนก B', 'แผนก C', 'แผนก D']"
              v-model="tagEX">{{tagEX}}
            </b-form-select>
          </b-form-group>

          <!-- <b-form-group
            label="Tags"
            label-for="basicCheckboxes"
            :label-cols="3"
            >
            <b-form-checkbox-group stacked id="basicCustomCheckboxes">
              <div class="form-check" v-for="i in TAGS" v-bind:key = i >
               <input type="checkbox" class="form-check-input" v-model="listTags[i]" @click="print()"> 
                <label class="form-check-label" >{{i}}</label>
              </div>
            </b-form-checkbox-group>  
          </b-form-group>  -->
          <b-form-group>
            <label for="image">Image</label>
            <b-form-input type="text" placeholder="" v-model="image">{{image}}</b-form-input>
          </b-form-group>
          <div slot="footer" class="float-right">
 
            <b-button v-if="this.checkAdd" size="sm" variant="success" @click="getCreate()"><i class="fa fa-dot-circle-o"></i>Create</b-button> 

            <b-button v-if="!this.checkAdd" size="sm" variant="primary" @click="setOnClickEdit()"><i class="fa fa-dot-circle-o"></i>Edit</b-button> 

            <b-button v-if="!this.checkAdd" size="sm" variant="danger" @click="setOnClickDelete()"><i class="fa fa-dot-circle-o"></i>Delete</b-button>

            <b-button size="sm" variant="secondary" @click="gotoClick()" to="./cardList"><i class="fa fa-dot-circle-o"></i>Back</b-button>
          </div>
          </b-form>
        </b-card>
      </b-col>

    <b-modal title="Warning!" v-model="deleteClick" @ok="deleteClick = false ;deleteCard()">
      Do you want to delete this device?
    </b-modal>
    <b-modal title="Warning!" v-model="editClick" @ok="editClick = false ;editCard()">
      Do you want to edit this device?
    </b-modal>

      </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'form',
  data () {
    return {
      show: true,
      name:null,
      timesTarget: null,
      times: null,
      image: null,
      day1: null,
      day2: null,
      month1: null,
      month2: null,
      year1: null,
      year2: null,
      start: null,
      fix: null,
      checkAdd:null,
      DAY:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      MONTH:[1,2,3,4,5,6,7,8,9,10,11,12],
      YEAR:[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      TAGS:["แผนก A","แผนก B","แผนก C"],
      listTags:{},
      card: JSON.parse(window.localStorage.CardDevice),
      deleteClick: false,
      editClick: false,
      returnResponse:{},
      tagEX: null,
      type: null
    }
  },
  beforeDestroy: function(){ 
localStorage.removeItem("ADD");
localStorage.removeItem("CardDevice");
},
  methods: {
    getCreate(){
//http://www.mocky.io/v2/5db121b52e00005b005051ab
      this.returnResponse["name"] = this.name
      this.returnResponse["timesTarget"] = this.timesTarget
      this.returnResponse["times"] = this.times
      this.returnResponse["image"] = this.image
      this.returnResponse["start"] = returnDate(this.day1,this.month1,this.year1)
      this.returnResponse["fix"] = returnDate(this.day2,this.month2,this.year2)
      this.returnResponse["location"] = this.card.location
      this.returnResponse["type"] = this.type
      this.returnResponse["tag"] = this.tagEX// this.returnResponse["tag"] = returnTag(this.listTags)
      console.log(this.returnResponse["start"])
      console.log(JSON.stringify(this.returnResponse))
        axios.post('https://servicemed-43izies4dq-an.a.run.app/device',this.returnResponse).then((response) => {
          console.log(response)
          this.$router.push("/cardList");
        })
        .catch((e) => {
        console.error(e)
        })
    },
    setOnClickEdit(){
      this.editClick = true;
    },
    setOnClickDelete(){
       this.deleteClick = true;
    },
    editCard(){
      this.returnResponse["name"] = this.name
      this.returnResponse["timesTarget"] = this.timesTarget
      this.returnResponse["times"] = this.times
      this.returnResponse["image"] = this.image
      this.returnResponse["start"] = returnDate(this.day1,this.month1,this.year1)
      this.returnResponse["fix"] = returnDate(this.day2,this.month2,this.year2)
      this.returnResponse["location"] = this.card.location
      this.returnResponse["type"] = this.type
      this.returnResponse["tag"] = this.tagEX
      console.log(this.returnResponse["start"])
      console.log(JSON.stringify(this.returnResponse))
        axios.put('https://servicemed-43izies4dq-an.a.run.app/device',this.returnResponse).then((response) => {
          console.log(response)
          this.$router.push("/cardList");
        })
        .catch((e) => {
        console.error(e)
        })
    },
    deleteCard(){
      this.returnResponse["name"] = this.name
      this.returnResponse["timesTarget"] = this.timesTarget
      this.returnResponse["times"] = this.times
      this.returnResponse["image"] = this.image
      this.returnResponse["start"] = returnDate(this.day1,this.month1,this.year1)
      this.returnResponse["fix"] = returnDate(this.day2,this.month2,this.year2)
      this.returnResponse["location"] = this.card.location
      this.returnResponse["type"] = this.type
      this.returnResponse["tag"] = this.tagEX
      axios.delete('https://servicemed-43izies4dq-an.a.run.app/device',this.returnResponse).then((response) => {
        console.log(response)
        this.$router.push("/cardList");
        })
        .catch((e) => {
        console.error(e)
        })
    },
    gotoClick(){
       localStorage.removeItem("CardDevice");
    }
  },
   created() {
     this.checkAdd = localStorage.getItem("ADD") !== null ?  localStorage.getItem("ADD") : false
      this.name = this.card.name
      this.timesTarget = this.card.timesTarget
      this.times = this.card.times
      this.image = this.card.image
      this.start = this.card.start
      
      this.fix = this.card.fix
      const startDateTime = splitDate(this.start)
      var time = new Date().getTime();
      var date = new Date(time);
      this.year1 = this.start !== undefined ? startDateTime.getFullYear() : date.getFullYear()
      this.month1 = this.start !== undefined ? startDateTime.getMonth() : date.getMonth()
      this.day1 = this.start !== undefined ? startDateTime.getDate() : date.getDate()
      
      const fixDateTime = splitDate(this.fix)
      this.year2 =  this.fix !== undefined ? fixDateTime.getFullYear() : date.getFullYear()
      this.month2 = this.fix !== undefined ? fixDateTime.getMonth() : date.getMonth()
      this.day2 = this.fix !== undefined ? fixDateTime.getDate() : date.getDate()
       this.tagEX = this.card.tag
       this.type = this.card.type
      // this.listTags = getTiggleTags(this.card.tag,this.TAGS);

      console.log("hhh")
     
  }
}

function returnDate(day,month,year){
  const YMD = new Date()
  YMD.setDate(day)
  YMD.setMonth(month)
  YMD.setFullYear(year)
  return YMD;
}

function returnTag(list){
var allKeys = Object.keys(list)
var allValues = Object.values(list)
var returnList = []
for(var i=0 ; i<allKeys.length;i++){
  if(allValues[i]===true){
    returnList.push(allKeys[i])
  }else{
    returnList.pop(allKeys[i])
  }
}
  console.log(returnList)
return returnList;
}

function splitDate (date){
    const YMD = new Date(date)
    return YMD
}

function getTiggleTags(tags,TAGS){ 
    var list = {}
if(undefined !== tags && tags.length){
    for(var i=0;i<tags.length;i++){
        
            if(TAGS.includes(tags[i])){
               list[tags[i]] = true
               console.log(tags[i] + ": true")
            }else{
              list[tags[i]] = false
                  console.log(tags[i] + ": false")
            }  
    }
}else{
  for(var j=0;j<TAGS.length;j++){
    list[TAGS[j]] = false
     console.log(tags[i] + ": false")
  }
}
    return list;
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<style>
.center {
  align-items: center;
}
</style>