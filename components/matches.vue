<template>
  <article :class="resultMatch(match.match_result)">
    <div class="row">
      <div class="col-md-3">
        <ul class="text-left">
          <li>
            <time
              ><i class="fas fa-calendar-day"></i> {{ match.match_Date }}</time
            >
          </li>
          <li>
            <i class="fas fa-trophy"></i> <span> {{ tournamentName }}</span>
          </li>
          <li><i class="fas fa-flag-checkered"></i> {{ match.match_round }}</li>
        </ul>
      </div>
      <div class="col-md-6">
        <div class="match text-center">
          <h2 class="title-match">
            {{ match.player1 }}<span class="vs">vs</span>{{ match.player2 }}
          </h2>
          <ul>
            <li>prob de ganar: {{ match.prob }}</li>
          </ul>
        </div>
      </div>
      <div class="col-md-3">
        <div class="match-result">
          <span>{{ match.pred_set }}</span>
          <p><small>Predicción Set</small></p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Matches',
  props: {
    match: { type: Object, default: null },
    tournamentName: { type: String, default: null }
  },
  methods: {
    resultMatch(value) {
      if (value === 'WIN') {
        return 'result-1'
      } else if (value === 'LOSS') {
        return 'result-2'
      }
    }
  }
}
</script>

<style scoped></style>
