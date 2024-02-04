<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div>
    <!-- navbar -->
    <!-- create a component!!! -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Etusivu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Uutiset</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kissat</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Naaraat</a></li>
                        <li><a class="dropdown-item" href="#">Urokset</a></li>
                        <li><a class="dropdown-item" href="#">Kastraatit</a></li>
                        <li><a class="dropdown-item" href="#">Muistoissa</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Pentukori</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pentueet</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">1. pentue</a></li>
                        <li><a class="dropdown-item" href="#">2. pentue</a></li>
                        <li><a class="dropdown-item" href="#">3. pentue</a></li>
                        <li><a class="dropdown-item" href="#">4. pentue</a></li>
                        <li><a class="dropdown-item" href="#">5. pentue</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Kissala</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Kasvattaja</a></li>
                        <li><a class="dropdown-item" href="#">Pentu-info</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        </div>
    </nav>

    <header>
      <h1>Humming hummings</h1>
    </header>

    <main>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="C:\Users\Tomi\Coding\FullStack\HummingFront\hummingfront.client\src\assets\Images\20230721_011959.jpg" class="d-block w-100 carouselImage" alt="...">
          </div>
          <div class="carousel-item">
            <img src="C:\Users\Tomi\Coding\FullStack\HummingFront\hummingfront.client\src\assets\Images\20230817_160944.jpg" class="d-block w-100 carouselImage" alt="...">
          </div>
          <div class="carousel-item">
            <img src="C:\Users\Tomi\Coding\FullStack\HummingFront\hummingfront.client\src\assets\Images\20230901_192112.jpg" class="d-block w-100 carouselImage" alt="...">
          </div>
          <div class="carousel-item">
            <img src="C:\Users\Tomi\Coding\FullStack\HummingFront\hummingfront.client\src\assets\Images\20231206_210954.jpg" class="d-block w-100 carouselImage" alt="...">
          </div>
          <div class="carousel-item">
            <img src="C:\Users\Tomi\Coding\FullStack\HummingFront\hummingfront.client\src\assets\Images\1609504678664.jpg" class="d-block w-100 carouselImage" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </main>

  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

.carouselImage {
  height: 608px;
  width: 608px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
