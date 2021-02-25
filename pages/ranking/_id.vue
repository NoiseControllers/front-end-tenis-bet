<template>
  <main class="home">
    <div class="row barra">
      <div class="col-md-9">
        <div class="page-title">
          <h1>{{ category }} Ranking</h1>
        </div>
      </div>
      <div class="col-md-3">
        <div class="page-info text-right">
          <NuxtLink to="/ranking/atp">ATP</NuxtLink> |
          <NuxtLink to="/ranking/wta">WTA</NuxtLink>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Anterior</th>
              <th scope="col">Jugador</th>
              <th scope="col">Puntos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(x, index) in list" :key="index">
              <th scope="row">
                {{ x.current_rank }}
                <i
                  v-if="x.current_rank < x.prev_rank"
                  class="fas fa-arrow-up"
                  style="color:green"
                ></i>
                <i
                  v-if="x.current_rank > x.prev_rank"
                  class="fas fa-arrow-down"
                  style="color:red"
                ></i>
              </th>
              <td>{{ x.prev_rank }}</td>
              <td>{{ x.player_name }}</td>
              <td>{{ x.player_points }}</td>
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
      category: this.$route.params.id.toUpperCase()
    }
  },
  async asyncData({ params }) {
    // We can use async/await ES6 feature
    const { data } = await axios.get('http://api.tenis.bet/v1/rankings')
    return { list: data[0][params.id.toUpperCase()] }
  },
  head() {
    return {
      title: 'TITULO ' + this.category
    }
  }
}
</script>

<style scoped></style>
