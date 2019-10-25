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
            :label-cols="3"
            >
            <b-form-select id="basicSelect"
              :plain="true"
              :options="['เครื่องปั้มหัวใจ','Option 1', 'Option 2', 'Option 3']"
              value="เครื่องปั้มหัวใจ">
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
          </b-form-group> 
          <b-form-group>
            <label for="image"></label>
            <b-form-input type="text" placeholder="" v-model="image">{{image}}</b-form-input>
          </b-form-group>
          <div slot="footer" class="float-right">
            <b-button size="sm" variant="primary" @click="setOnClickEdit()"><i class="fa fa-dot-circle-o"></i>Edit</b-button> 

            <b-button size="sm" variant="danger" @click="setOnClickDelete()"><i class="fa fa-dot-circle-o"></i>Delete</b-button>

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
      DAY:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      MONTH:[1,2,3,4,5,6,7,8,9,10,11,12],
      YEAR:[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025],
      TAGS:["แผนก A","แผนก B","แผนก C"],
      listTags:{},
      card: JSON.parse(window.localStorage.CardDevice),
      deleteClick: false,
      editClick: false,
      returnResponse:{}
    }
  },
  methods: {
    setOnClickEdit(){
      this.editClick = true;
    },
    setOnClickDelete(){
       this.deleteClick = true;
    },
    editCard(){
      returnTag(this.listTags)

         //localStorage.setItem("A","B")
      // this.$router.push("/form");
      // console.log("edit")
    },
    deleteCard(){
      // this.$router.push("/form");
      
      this.returnResponse["name"] = this.name
      this.returnResponse["timesTarget"] = this.timesTarget
      this.returnResponse["times"] = this.times
      this.returnResponse["image"] = this.image
      this.returnResponse["start"] = returnDate(this.day1,this.month1,this.year1)
      this.returnResponse["fix"] = returnDate(this.day2,this.month2,this.year2)
      this.returnResponse["location"] = this.card.location
      this.returnResponse["type"] = this.type
      this.returnResponse["tag"] = returnTag(this.listTags)
      this.returnResponse["_id"] = this.card._id
      console.log(JSON.stringify(this.returnResponse))
      // axios.delete('').then((response) => {
      //   this.list = response.data
      //   window.localStorage.listDevice = JSON.stringify(response.data)
      //   })
      //   .catch((e) => {
      //   console.error(e)
      //   })
    },
    gotoClick(){
       localStorage.removeItem("CardDevice")
    }
  },
   created() {
      this.name = this.card.name
      this.timesTarget = this.card.timesTarget
      this.times = this.card.times
      this.image = this.card.image
      this.start = this.card.start
      this.fix = this.card.fix
      const YMD1 = splitDate(this.start)
      this.year1 = YMD1[0]
      this.month1 = YMD1[1]
      this.day1 = YMD1[2]
      const YMD2 = splitDate(this.fix)
      this.year2 = YMD2[0]
      this.month2 = YMD2[1]
      this.day2 = YMD2[2]
      this.listTags = getTiggleTags(this.card.tag,this.TAGS);
      console.log(JSON.stringify(this.listTags))
  }
}

function returnDate(day,month,year){
  var date = year.concat("-").concat(month).concat("-").concat("T09:00:00.000+02:00")
  return date;
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
  if(date=null){
          var time = new Date().getTime();
    var date = new Date(time);
         console.log(date)
  }
    const YMD = date.split("-")
    const D = YMD[2].split("T")[0]
    YMD.pop()
    YMD.push(D)
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