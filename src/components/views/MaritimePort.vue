<template>
  <div class="container">
    <h1 class="mb-5">List of Maritime Ports</h1>
    <div>
      <form class="form-inline py-3 my-lg-0">
        <input class="form-control mr-sm-2"
          type="search"
          v-model="search"
          v-on:keyup.enter="searchPort">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit" v-on:click="searchPort">
          Search
        </button>
      </form>
    </div>
    <table-section class="mb-5" :items="items"></table-section>
    <div>
      <nav aria-label="pagination">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a class="page-link" v-on:click="changePage(page - 1)">Previous</a>
          </li>
          <li class="page-item active" aria-current="page">
            <a class="page-link">{{ page }}</a></li>
          <li class="page-item">
            <a class="page-link" v-on:click="changePage(page + 1)">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import TableSection from '@/components/TableSection.vue'
import axios from 'axios' // importando la libreria axios para consultar los datos de la API

export default {
  name: 'maritime-port',
  components: {
    TableSection
  },
  props: ['item'],
  data () {
    return {
      items: [],
      page: 1, // num actual de la paginacion
      last_page: 1, // contiene el numero total de paginas d ela API
      search: ''
    }
  },
  created () {
    this.fetch() // desplegara los datos tan pronto cargue esta pagina
  },
  methods: {
    fetch () {
      const params = {
        page: this.page, // recibe el valor actual d ela pagina
        name: this.search // aqui quise pasar name como Qry a traves de la url de la API
      }

      let ports = 'http://apitest.cargofive.com/api/ports' // creando la variable donde se encuentra la url de la APi
      axios.get(ports, { params }).then((res) => { // hago uso del metodo get haciendo referencia a data = paquete de datos obtenidos de la libreria de axios. { params } envia parametros tipo Qry en la url de la api para la paginacion
        this.items = res.data.data // el 2do data hace referencia a la instancia que regresa info la consulta a la API
        this.last_page = res.data.meta.last_page // meta hace referencia al objeto que contiene la informacion de las paginas
      })
        .catch((err) => { // en caso de que algo este mal se imprimira el error
          console.log(err)
        })
    },
    changePage (page) {
      this.page = (page <= 0 || page > this.last_page) ? this.page : page // validacion ternaria para paginacion
      this.fetch() // reconsultar los datos de la API deforma paginada
    },
    searchPort () {
      this.page = 1 //  deberia permitir la busqueda desde el inicio de las paginas
      this.fetch() // consultar a la API y reiniciar los valores
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
