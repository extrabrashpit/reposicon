import React from 'react'
import paisaje from '../../src/imgs/paisaje.jpg'
import cama from '../../src/imgs/cama.jpg'
import pisci from '../../src/imgs/pisci.jpg'
import hotel from '../../src/imgs/hotel.jpg'
import app from '../App'

const Inicio = () => {
    return (
        <div>
            
            <nav class="navbar navbar-dark bg-dark navbar-expand-sm">
      <a class="navbar-brand" href="#">
        <img src="https://www.flaticon.es/svg/static/icons/svg/594/594106.svg" className="mr-3" width="50" height="50" alt="" loading="lazy"/>
          Hotel Don Juan
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <a class="nav-item nav-link text-white " href="/inicio">Inicio </a>
          <a class="nav-item nav-link text-white" href="#">Habitaciones</a>
          <a class="nav-item nav-link text-white" href="/reservaciones">Reservaciones</a>
          <a class="nav-item nav-link text-white" href="#">¿Quienes Somos?</a>
          <a class="nav-item nav-link text-white" href="">¿Contactanos?</a>
        </div>
      </div>
      
    </nav> 
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src="https://cf.bstatic.com/images/hotel/max1024x768/227/227994240.jpg" alt="First slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/94/34/43/img-hotel-s-rio-quente.jpg?w=900&h=-1&s=1" alt="Second slide"/>
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="https://www.visitsarasota.com/sites/default/files/styles/listing_node_full/public/mmg_lfef_images/legacy-hotel-at-img-academy-4209-919feb5fb54457d2247da3f751b7e30f.jpg?itok=8-bhBHhT" alt="Third slide"/>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
</div>
    <div className="container text-center text-white">
      <h2 className="mt-4">Titulo de Seccion</h2>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
      sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
       Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
    <div class="card-group mt-5">
  <div class="card">
    <img class="card-img-top" src={cama} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Habitaciones de Calidad</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    
  </div>
  <div class="card">
    <img class="card-img-top" src={hotel} alt="Card image cap"/>
    <div class="card-body">
    <h5 class="card-title">Habitaciones de Calidad</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
   
  </div>
  <div class="card">
    <img class="card-img-top"  src={paisaje} alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Paisaje</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    
  </div>
</div>
<div className="container text-center text-white">
      <h2 className="mt-4">Titulo de Seccion</h2>
      <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      It has survived not only five centuries, but also the leap into electronic typesetting, 
      remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
      sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
       Aldus PageMaker including versions of Lorem Ipsum.
      </p>
    </div>
<div className="footer-copyright bg-dark text-white text-center py-3">© 2020 Copyright
    <i class="fab ml-3 mr-3 fa-facebook-square"></i>
    <i class="fab mr-3 fa-instagram"></i>
    <i class="fab fa-pinterest"></i>
        </div>
      
  
        </div>
    )
}

export default Inicio
