<template>
<div class="container-fluid">
  <h1 class="mb-5">Documentation</h1>
  <div class="row mb-5" style="background-color:rgba(0,0,0,0.04)">
    <div class="col-md-6">
      <h4 class="subtitle">Presentation</h4>
        <a href="https://www.linkedin.com/in/gabriela-perez-aguirre-2023aa130" target="_blank" rel="noopener noreferrer">
          <h5>Gabriela Pérez</h5>
        </a>
        <p>gabrielap2804@gmail.com</p>
        <h5>Valencia- Venezuela</h5>
    </div>
    <div class="col-md-6">
      <h4 class="subtitle">General</h4>
      <h5 class="mb-5">El Hirint Test lo he desarrollado con el Framework de Javacript <strong>Vuejs</strong>, importando las liberias por separadas de Boostrap 4.6.1 en el index.htm para que cualquiera que pueda correr el proyecto pueda ver los estilos en local</h5>
      <h5>Para consultar los datos de la API, he usado la libreria Axios</h5>
    </div>
  </div>
  <div class="row mb-5">
    <div class="col-md-6 offset-md-3">
      <h4 class="subtitle">Objetivos</h4>
      <li>Mostrar listado de Datos de la API de forma responsiva para todo tipo de dispositivo</li>
      <li>Paginar Listado de Datos de la API</li>
      <li>Interfaces Intuitivas para el usuario</li>
      <li>Experiencia de usuario al navegar por la interfaz</li>
    </div>
  </div>
  <div class="row mb-5">
    <div class="col-md-6 offset-md-3">
      <h4 class="subtitle">Mejoras</h4>
      <li>Terminar el Sistema de busqueda para filtarr la informacion de la lista para cualquier dato</li>
      <li>Agregar la paginacion y la Busqueda en componentes para que puedan ser reutilizados en un futuro</li>
      <li>Desplegar proyecto en un Servidor</li>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'home-page'
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
