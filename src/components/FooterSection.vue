<template>
  <footer class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-10 py-4">
          <h6> ©{{ year }} CargoFive Hiring Test |&nbsp;
            <a href="https://www.linkedin.com/in/gabriela-perez-aguirre-2023aa130" target="_blank" rel="noopener noreferrer">
              By Gabriela Perez
             </a>
          </h6>
        </div>
        <dv class="col-md-2 py-4">
          <img src="@/assets/logo-white.svg" alt="CargoFive" height="25px">
        </dv>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-section',
  props: ['footer'],
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
footer {
  background-color: #031b4e;
  color: white;
  height: 100px;
  bottom: 0;
  width: 100%;
  height: 100%;
}
a {
  color: #42b983;
}
</style>
