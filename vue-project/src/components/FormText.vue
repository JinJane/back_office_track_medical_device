<template>
          <b-col sm="6">
        <b-card>
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
            <!-- tag[i].value == !tag[i].value Object.value(tag)[i] == !Object.value(tag)[i]-->
            <!-- <b-form-checkbox-group id="basicCheckboxes" name="Checkboxes" :plain="true" >
              <li v-for= "(tag,i) in listTags" :key="tag">
              <b-form-checkbox @click="test(Object.value(tag)[i])" v-bind="Object.keys(listTags)[i]" >{{Object.keys(tag)[i]}}</b-form-checkbox>
              </li>
            </b-form-checkbox-group> -->
            <b-form-checkbox-group stacked id="basicCustomCheckboxes">
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="1" value="1">
                <label class="custom-control-label" for="customChk1">แผนก A</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="2" value="2">
                <label class="custom-control-label" for="customChk2">แผนก B</label>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="3" value="3">
                <label class="custom-control-label" for="customChk3">แผนก C</label>
              </div>
            </b-form-checkbox-group>  
          </b-form-group>
          <b-form-group>
            <label for="image"></label>
            <b-form-input type="text" placeholder="" v-model="image">{{image}}</b-form-input>
          </b-form-group>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary" @click="editCard()"><i class="fa fa-dot-circle-o"></i>Edit</b-button>
            <b-button type="submit" size="sm" variant="danger" @click="deleteCard()"><i class="fa fa-dot-circle-o"></i>Delete</b-button>
            <b-button type="reset" size="sm" variant="secondary" to="./cardList"><i class="fa fa-dot-circle-o"></i>Back</b-button>
          </div>
          </b-form>
        </b-card>
      </b-col>
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
      tags: [],
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
      card: JSON.parse(window.localStorage.CardDevice)
    }
  },
  methods: {
    click () {
      // do nothing
    },
    editCard(){
      console.log("edit")
      this.$router.push("/form");
    },
    deleteCard(){
      console.log("delete")
      this.$router.push("/form");
    }
    // filterCard: function() {
    //   this.card = this.listDevice.filter(card => {
    //     if(card._id.match(this.idLocal)){
    //       return card._id.match(this.idLocal)
    //     }
    //   })
    // }
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
      // checkTags(this.listTags)
      console.log("list= "+JSON.stringify(this.listTags))
       console.log("AAAAA= "+Object.keys(this.listTags)[0])
      console.log("Hello")

  }
}



// function test(toggle){
// toggle == !toggle
// console.log(toggle)
// $( "input" ).change(function() {
//   var $input = $( this );
//   $( "p" ).html(".is( \":checked\" ): <b>" + $input.is( ":checked" ) + "</b>" );
// }).change();
//  $('input[name=lll]').attr('checked', true);
//     console.log("H")
// }

// function checkTags(list){
//   $(document).ready(function()
//   {
//     $("input[type=checkbox]").click(function()
//     {

//     }
//   }
   
// }

function splitDate (date){
    const YMD = date.split("-")
    const D = YMD[2].split("T")[0]
    YMD.pop()
    YMD.push(D)
    console.log(YMD)
    return YMD
}

function getTiggleTags(tags,TAGS){
    var list = {}
if(undefined !== tags && tags.length){
    for(var i=0;i<tags.length;i++){
        for(var j=0;j<TAGS.length;j++){
            if(tags[i]==TAGS[j]){
                    console.log(TAGS[j])
               list[TAGS[j]] = true
            }else{
              list[TAGS[j]] = false
            }
        }
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
