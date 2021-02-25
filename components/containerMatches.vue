<template>
  <div class="events">
    <div class="pb-4">
      <h1 style="display: inline-block">
        {{ list.category }} {{ list.name }} {{ list.start_date.split('-')[0] }}
      </h1>
      <b-button
        v-b-toggle="list.id"
        variant="light float-right"
        @click="onClick"
      >
        <i :class="isOpen ? 'fas fa-minus' : 'fas fa-plus'"></i>
      </b-button>
      <b-collapse :id="list.id" visible>
        <Matches
          v-for="(match, index) in orderByMatchId"
          :key="index"
          :match="match"
          :tournament-name="list.name"
        />
        <NuxtLink
          v-if="countResult > 0 && showBtnMore"
          :to="
            `/torneo/${list.category}/${list.pattern}/${
              list.start_date.split('-')[0]
            }`
          "
          class="btn btn-block btn-more shadow-none"
          >Ver más</NuxtLink
        >
        <b-alert v-if="countResult === 0" show variant="primary"
          >Estamos recopilando los partidos, en breve estarán disponibles las
          predicciones.</b-alert
        >
      </b-collapse>
    </div>
  </div>
</template>

<script>
import Vue2Filters from 'vue2-filters'
import Matches from './matches'

export default {
  name: 'ContainerMatches',
  mixins: [Vue2Filters.mixin],
  components: { Matches },
  props: {
    list: { type: Object, default: null },
    showBtnMore: { type: Boolean, default: true }
  },
  data() {
    return {
      isOpen: true
    }
  },
  computed: {
    countResult: function() {
      return this.list.matches.length
    },
    orderByMatchId: function() {
      return this.orderBy(this.list.matches, 'match_id', -1)
    }
  },
  methods: {
    onClick() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
