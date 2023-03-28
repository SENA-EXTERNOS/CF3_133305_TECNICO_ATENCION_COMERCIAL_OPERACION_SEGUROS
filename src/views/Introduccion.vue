<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5.align-items-center.bg_1
      .col-lg-3.mb-4.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_1/img_1.png', alt='Texto que describa la imagen')
      .col-lg-9
        .bloque-texto-b.color-secundario.p-4.text-small
          .bloque-texto-b__texto
            p Apreciado aprendiz, bienvenido a este componente formativo, en el que conocerá acerca de las clases de técnicas de ventas, las cuales serán utilizadas por el equipo comercial, con la finalidad de ofrecer el producto y garantizar la satisfacción del cliente, de manera que se atiendan completamente sus necesidades, inquietudes y sugerencias. También se abordarán los diferentes canales de comunicación que se dan en las organizaciones y que se deben tener presentes para comunicarse adecuadamente dentro de una empresa y respetar la jerarquía establecida. Finalmente, se presentará cómo elaborar una propuesta comercial y los puntos importantes que esta debe de contener. 

    p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    p.mb-5 ¡Muchos éxitos en este proceso de aprendizaje!

    figure.mb-5(data-aos="zoom-in-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rEbnRdCQtiw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
