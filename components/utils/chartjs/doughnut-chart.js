import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    matches: Array
  },
  data() {
    return {
      datainfo: {
        datasets: [
          {
            data: [this.countMatches(), this.countWins(), this.countLosses()],
            backgroundColor: ['#3684cf', '#09CB13', '#ee0f00']
          }
        ],
        labels: ['Pendientes', 'Ganadas', 'Perdidas']
      },
      options: {
        responsive: true,
        maintainAspectRatio: true
      }
    }
  },
  methods: {
    countMatches: function() {
      let total = 0
      this.matches[0].matches.forEach(function(item) {
        if (item.match_result === 'IN PROGRESS') {
          total++
        }
      })
      return total
    },
    countWins: function() {
      let total = 0
      this.matches[0].matches.forEach(function(item) {
        if (item.match_result === 'LOSS') {
          total++
        }
      })
      return total
    },
    countLosses: function() {
      let total = 0
      this.matches[0].matches.forEach(function(item) {
        if (item.match_result === 'WIN') {
          total++
        }
      })
      return total
    }
  },
  mounted() {
    this.renderChart(this.datainfo, this.options)
  }
}
