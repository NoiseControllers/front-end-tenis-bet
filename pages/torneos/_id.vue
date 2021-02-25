<template>
  <main class="home">
    <div class="row barra">
      <div class="col-md-9">
        <div class="page-title">
          <h1>Torneos {{ category }}</h1>
        </div>
      </div>
      <div class="col-md-3 text-right">
        <div class="page-info">
          <NuxtLink to="/torneos/atp">ATP</NuxtLink> |
          <NuxtLink to="/torneos/wta" class="nav-link">WTA</NuxtLink>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Fecha Comienzo</th>
              <th scope="col">Torneo</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(tournament, index) in list" :key="index">
              <th scope="row">{{ tournament.start_date }}</th>
              <td>{{ tournament.name }}</td>

              <td>
                <span v-if="tournament.ended === 0" class="badge badge-info p-2"
                  ><i class="fas fa-map-marker-alt"></i> Proximamente..</span
                >
                <span
                  v-else-if="tournament.ended === 1"
                  class="badge badge-success p-2"
                  ><i class="fas fa-map-marker-alt"></i> En curso</span
                >
                <span
                  v-else-if="tournament.ended === 2"
                  class="badge badge-danger p-2"
                  ><i class="fas fa-map-marker-alt"></i> Finalizado</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-4"></div>
    </div>
  </main>
</template>
<style>
.page-info > .nuxt-link-active {
  color: #039be5 !important;
}
</style>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      category: this.$route.params.id
    }
  },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    const { data } = await axios.get(
      `http://api.tenis.bet/v1/tournaments/${params.id}`
    )
    return { list: data }
  },
  head() {
    return {
      title: `Torneos ${this.category}`
    }
  }
}
</script>
