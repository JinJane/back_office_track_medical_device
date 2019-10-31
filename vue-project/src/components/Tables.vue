<template>
    <b-row>
      <b-col sm="12">
        <c-table :table-data="itemsArray" :per-page=10 hover striped bordered small fixed caption="<i class='fa fa-align-justify'></i> History" style="margin-top: 20px"></c-table>
      </b-col>
    </b-row>
</template>

<script>
import cTable from './Table'

function shuffleArray (array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const someData = () => shuffleArray([
    {
    username: "A",
    status: "6273",
    timeTarget: "10000",
    name: "เครื่องปั้มหัวใจ 2 ",
    start: "2019-10-21T02:34:12.034+00:00",
    fix: "2020-10-21T02:34:12.034+00:00"
},
{
    username: "B",
    status: "Lab",
    timeTarget: "10000",
    name: "เครื่องปั้มหัวใจ 3 ",
    start: "2019-10-21T02:34:12.034+00:00",
    fix: "2020-10-21T02:34:12.034+00:00"
},
{
    username: "A",
    status: "6272",
    timeTarget: "10000",
    name: "เครื่องปั้มหัวใจ 4 ",
    start: "2019-10-21T02:34:12.034+00:00",
    fix: "2020-10-21T02:34:12.034+00:00"
},
{
    username: "A",
    status: "6273",
    timeTarget: "10000",
    name: "เครื่องปั้มหัวใจ 1 ",
    start: "2019-10-21T02:34:12.034+00:00",
    fix: "2020-10-21T02:34:12.034+00:00"
},
{
    username: "A",
    status: "6273",
    timeTarget: "10000",
    name: "เครื่องวัดความดัน 3 ",
    start: "2019-10-21T02:34:12.034+00:00",
    fix: "2020-10-21T02:34:12.034+00:00"
},
{
    username: "A",
    status: "Lab",
    timeTarget: "10000",
    name: "เครื่องวัดความดัน 3 ",
    start: "2019-10-21T02:34:12.034+00:00",
    fix: "2020-10-21T02:34:12.034+00:00"
},

])

export default {
  name: 'tables',
  components: {cTable},
  data: () => {
    return {
      items: someData,
      itemsArray: someData(),
      fields: [
        {key: 'username', label: 'User', sortable: true},
        {key: 'status'},
        {key: 'timeTarget'},
        {key: 'name', sortable: true},
        {KEY: 'start'},
        {key: 'fix'}
      ],
    }
  }
}
</script>