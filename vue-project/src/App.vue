<script> 
import axios from 'axios';

export default {
  
  data: function() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }],
      year: '',
      value: ''
    }
  },
  computed: {
    chartData() { this.edit(); return dataBar2;
      },
  },
  methods: {
    save() {
      console.log("Edit true");
      axios
      .get('https://www.google.com/')
      .then(response => (this.info = response))
      .then(error => console.log(error));
      // fetch("http://127.0.0.1:35713/")
      // .then(response => response.json())
      // .then(data => console.log(data),
      // (error) => { console.log(error)});
    },
    addComment() {
      this.series[0].data.push(this.value);
      this.options.xaxis.categories.push(this.year)
    },
    removeComment() {
      this.series[0].data.pop()
      this.options.xaxis.categories.pop()
    }
  }
}

</script>

<template>
  <div class="heatmap">
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </div>
  <div>
    <form class="form col-sm-10">
        <div class="form-group">
            <label for="yearl">Ano</label>
            <input v-model="year" type="email" class="form-control" id="year" >
        </div>
        <div class="form-group">
            <label for="valuel">Valor</label>
            <input v-model="value" type="email" class="form-control" id="value">
        </div>

        <button v-if="year !== ''" v-on:click="addComment" class="btn btn-primary">Adicionar</button>
        <button v-on:click="removeComment" class="btn btn-danger">Remover</button>
        <button id="save" v-on:click="save" class="btn btn-primary">Salvar</button>
    </form>
  </div>
</template>

<style scoped>
.heatmap {
  height: 50vh;
  width: 30vw;
}

form button {
  margin-top: 0.5em;
  margin-right: 1em;
}

#save {
  float: right;;
}
</style>
