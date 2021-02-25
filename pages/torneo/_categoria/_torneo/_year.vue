<template>
  <main class="home">
    <div class="row">
      <div class="col-md-9">
        <ContainerMatches
          v-for="(tournament, index) in list"
          :key="index"
          :list="tournament"
          :show-btn-more="false"
        />
      </div>
      <div class="col-md-3">
        <h3>Estadisticas</h3>
        <DoughnutChart :matches="list" />
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import ContainerMatches from '../../../../components/containerMatches'
import DoughnutChart from '../../../../components/utils/chartjs/doughnut-chart'

export default {
  components: { DoughnutChart, ContainerMatches },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    const { data } = await axios.get(
      `http://api.tenis.bet/v1/tournament/${params.categoria}/${params.torneo}/${params.year}`
    )
    return { list: JSON.parse(data) }
  },
  methods: {
    countMatches: function() {
      let total = 0
      this.list.matches.forEach(function(item) {
        if (item.match_result === 'IN PROGRESS') {
          total++
        }
      })
      return total
    }
  },
  head() {
    return {
      title: `Torneo ${this.$route.params.categoria} ${this.$route.params.torneo} ${this.$route.params.year} resultado y prediciones`
    }
  }
}
</script>

<style scoped></style>
