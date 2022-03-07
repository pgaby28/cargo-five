<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="#/">
      <img src="@/assets/logo.svg" alt="CargoFive" height="35rem">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expande
    d="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#/">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/maritime-port">Maritime Ports</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'nav-menu'
}
</script>
<style scoped>
.navbar {
  background-color: #898f94;
  padding: 1rem 1.5rem;
}
.navbar-toggler {
  background-color: #031b4e ;
  border: 1px solid  #031b4e ;
}
a.nav-link {
  font-size: 1.2rem;
  color: white !important;
}
a.nav-link:hover{
color:#031b4e !important;;
}
</style>
