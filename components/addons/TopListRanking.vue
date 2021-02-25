<template>
  <div class="box">
    <div class="box-title">
      <h2>{{ category }} Rankings</h2>
    </div>
    <div class="box-content">
      <table class="table table-borderless table-hover ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Jugador</th>
            <th scope="col">Puntos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(x, index) in list" :key="index">
            <td>{{ x.current_rank }}</td>
            <td>{{ x.player_name }}</td>
            <td>{{ x.player_points }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3">
              <NuxtLink
                :to="{ name: 'ranking-id', params: { id: category } }"
                class="bg-dark btn-more text-white"
                >Ver más</NuxtLink
              >
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopListRanking',
  props: {
    category: { type: String, default: null },
    list: { type: Array, default: null }
  }
}
</script>
