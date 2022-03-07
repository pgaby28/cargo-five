<template>
 <div>
   <table class="table table-striped">
    <thead class="thead-dark">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">NAME</th>
        <th scope="col">COUNTRY</th>
        <th scope="col">CONTINENT</th>
        <th scope="col">COORDINATES</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" v-bind:key="item.id">
        <th data-title="ID:" scope="row">{{ item.id }}</th>
        <td data-title="NAME:">{{ item.name }}</td>
        <td data-title="COUNTRY:">{{ item.country }}</td>
        <td data-title="CONTINENT:">{{ item.continent }}</td>
        <td data-title="COORDINATES:">{{ item.coordinates }}</td>
      </tr>
    </tbody>
  </table>
 </div>
</template>

<script>
export default {
  name: 'table-section',
  props: ['items']
}
</script>

<style scoped>
@media ( max-width: 643px ) {
  table tr{
    display: flex;
    flex-direction: column;
    border: 1px solid #031b4e;
    margin-bottom: 1em;
  }

  table td[data-title] {
    display: flex;
  }
  table td[data-title]::before{
    content: attr( data-title );
    width: 10em;
    font-weight: 800;
    font-size: 0.7rem;
    color: gray;
  }
  table td, table th{
    border: none;
  }

  table thead {
    display: none;
  }
}
</style>
