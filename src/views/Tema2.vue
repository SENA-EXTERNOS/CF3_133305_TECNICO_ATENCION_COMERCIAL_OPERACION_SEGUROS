<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Canales de comunicación 

    .row.mb-5
      .col-lg-6.mb-4.mb-md-0
        img.img-a(src='@/assets/curso/temas/tema_2/img_1.png', alt='Texto que describa la imagen')
      .col-lg-6.text-small
        p La comunicación es una competencia que todas las personas, en especial las que se encuentran involucradas en las áreas de ventas, deben desarrollar para poder interactuar y responder adecuadamente a las necesidades del cliente. El vendedor cuenta con habilidades y estudios especializados para tener una buena relación con las ventas y esto lo guía a tener herramientas que faciliten su trabajo para concretar una negociación.

    p.mb-5 A continuación, se presentan los hechos más relevantes del marketing a lo largo del tiempo.

    .row.mb-5.tab_1
      .col-lg-8
        TabsA.color-primario.mb-5
          .tarjeta.color-primario--borde.p-4(titulo="Emisor")
            p.mb-0 Es quien envía el mensaje a otra parte. 
          .tarjeta.color-primario--borde.tb.p-4(titulo="Codificación")
            p.mb-0 Proceso de dar a las ideas forma simbiótica o estructura para darse a entender.   
          .tarjeta.color-primario--borde.tb_1.p-4(titulo="Mensaje")
            p.mb-0 Conjunto de símbolos, palabras, frases etc., que el emisor transmite. 
          .tarjeta.color-primario--borde.tb_2.p-4(titulo="Medios")
            p.mb-0 Canales de comunicación a través de los cuales el mensaje viaja del emisor al receptor.
          .tarjeta.color-primario--borde.tb_3.p-4(titulo="Decodificación")
            p.mb-0 Proceso por el cual el receptor asigna significado a los símbolos codificados por el emisor.
          .tarjeta.color-primario--borde.tb_4.p-4(titulo="Receptor")
            p.mb-0 Quien recibe el mensaje enviado por la otra parte.
          .tarjeta.color-primario--borde.tb_5.p-4(titulo="Respuesta")
            p.mb-0 Relaciones del receptor después de estar expuesto al mensaje.
          .tarjeta.color-primario--borde.tb_6.p-4(titulo="Retroalimentación")
            p.mb-0 Parte de las respuestas del receptor que se comunica con el emisor.
          .tarjeta.color-primario--borde.tb_7.p-4(titulo="Ruido")
            p.mb-0 Estática o distorsión no planeada durante la comunicación. El receptor recibe un mensaje diferente al enviado por el emisor.
      .col-lg-4
        img.img-a(src='@/assets/curso/temas/tema_2/img_2.png', alt='Texto que describa la imagen')

    h3.mb-5 La comunicación verbal y no verbal
    p La comunicación verbal y no verbal es primordial en todo proceso de venta, debido a que permite establecer lazos de confianza y de respeto entre el asesor comercial y el comprador. Estos lazos ayudan a realizar una venta personalizada enfocada en satisfacer las necesidades reales del cliente. 
    p.mb-5 A continuación, se presentan algunos ejemplos de comunicación verbal y no verbal.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4").align-items-stretch.d-flex.h-100
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-4
          .col-8.mt-4
            img(src='@/assets/curso/temas/tema_2/img_3.svg' alt='AvatarTop')
        h5.text-center Movimiento del cuerpo, gestos
        p.text-center Son expresiones faciales, movimiento de ojos, contacto físico y cualquier otro movimiento del cuerpo o de las extremidades.

      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema_2/img_4.svg' alt='AvatarTop')
        h5.text-center Características personales físicas
        p.text-center Forma parte del cuerpo, complexión, postura, aliento y olor corporal, peso, estatura, color de pelo y de la piel.

      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema_2/img_5.svg' alt='AvatarTop')
        h5.text-center Paralenguaje
        p.text-center Se encuentra en la calidad de la voz, volumen, velocidad de habla, tono, ripios, risa, bostezos, etc.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema_2/img_6.svg' alt='AvatarTop')
        h5.text-center Ambiente físico
        p.text-center Ambiente, diseño del edificio y salón, mobiliario y otros objetos.
      .tarjeta.bg_1.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema_2/img_7.svg' alt='AvatarTop')
        h5.text-center Tiempo
        p.text-center Importante en el momento de estar a tiempo o tarde, hacer esperar a otros, diferencias culturales en la percepción del tiempo y la relación entre tiempo y estatus.

    p Ahora bien, #[b la comunicación verbal] puede ser de #[b forma oral], la cual se realiza por medio de signos sonoros (fonemas) y se recibe e interpreta con el oído; también, puede ser de #[b forma escrita], la cual se realiza mediante el uso de signos gráficos (grafemas), los cuales son percibidos con la vista.

    p.mb-5 Por otra parte, la comunicación no verbal se puede presentar de la siguiente manera:

    .row.mb-5.tab_1
      .col-lg-8
        TabsA.color-primario.mb-5
          .tarjeta.color-primario--borde.p-4(titulo="Kinestésica")
            p.mb-0 Son los movimientos corporales. Se refiere a la postura, los gestos, los movimientos de cabeza, hombros, piernas y otros ademanes en general. 
          .tarjeta.color-primario--borde.tb.p-4(titulo="Proxémica")
            p.mb-0 Es la manera en que cada sociedad o cultura, en particular, percibe los espacios físicos. 
          .tarjeta.color-primario--borde.tb_1.p-4(titulo="Paralingüística")
            p.mb-0 Se refiere a las cualidades de la voz como volumen, ritmo, tono, entonación, textura, dicción, acento, emisión de sonidos, etc.
          
      .col-lg-4
        img.img-a(src='@/assets/curso/temas/tema_2/img_8.png', alt='Texto que describa la imagen')

    .fondo-3.p-4.mb-5
      p.mb-5 En una organización, la comunicación entre el empleado y el empleador se puede dar de diferentes maneras, según sea el cargo o nivel jerárquico que se ocupe. 

      p.mb-5 De acuerdo con esto, se presentan los diferentes tipos de comunicación organizacional.

      .row.align-items-center.justify-content-center.mb-2(data-aos="fade-down")
        .col-9.col-lg-5.mb-3
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema_2/img_10.svg')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .p-4
                h5.text-center Comunicación formal
                p.mb-0 Es aquella donde los mensajes siguen los caminos oficiales dictados por la jerarquía y especificados en el organigrama de la organización.
        .col-9.col-lg-5.mb-3
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema_2/img_11.svg')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .p-4
                h5.text-center Comunicación descendente
                p.mb-0 Sirve para enviar los mensajes de los superiores a los subordinados.

      .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down")
        .col-9.col-lg-5.mb-3
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema_2/img_12.svg')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .p-4
                h5.text-center Comunicación ascendente
                p.mb-0 Es la que va del subordinado hacia los superiores.
        .col-9.col-lg-5.mb-3
          .tarjeta.tarjeta-foto-hover
            .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema_2/img_13.svg')
            .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
            .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
              .p-4
                h5.text-center Comunicación horizontal
                p.mb-0 Se desarrolla entre personas del mismo nivel jerárquico.

    p Del mismo modo, una de las mejores formas de comunicarse es mediante #[b la comunicación asertiva], la cual hace referencia en dar a entender clara y concretamente el punto de vista y lo que se quiere lograr. El mensaje transmitido debe ser descifrado tal y como se quiere que sea interpretado, se trata de transmitir de forma clara, concisa, rápida, directa y con contundencia lo que se quiere, sin titubeos. 

    p.mb-5 Para que la comunicación sea asertiva se necesita trabajar en:

    .row.justify-content-center.mb-5
      .col-lg-10
        img.img-a(src='@/assets/curso/temas/tema_2/img_14.svg' alt='AvatarTop')

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.fondo-2.cont_top
    p Aunque muchas veces se quiere comunicar asertivamente y de la mejor manera, para generar una buena comprensión y transmisión del mensaje, es común caer en errores que pueden afectar al receptor y hacer que no quiera seguir comunicándose.

    p.mb-5 Algunos de estos errores son:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4").align-items-stretch.d-flex.h-100
      .tarjeta.bg_7.p-4.h-100
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/temas/tema_2/img_15.svg' alt='AvatarTop')
        p.text-center Brindar poca atención a los interlocutores.

      .tarjeta.bg_7.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema_2/img_16.svg' alt='AvatarTop')
        p.text-center Interrumpir la conversación. 

      .tarjeta.bg_7.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema_2/img_17.svg' alt='AvatarTop')
        p.text-center Reaccionar impulsivamente ante cualquier discrepancia.

      .tarjeta.bg_7.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema_2/img_18.svg' alt='AvatarTop')
        p.text-center Tratar temas delicados y polémicos que pueden crear enemistad. 
      .tarjeta.bg_7.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema_2/img_19.svg' alt='AvatarTop')
        p.text-center  Desviar la conversación hacia donde se desea, ignorando el interés del otro.
      .tarjeta.bg_7.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema_2/img_20.svg' alt='AvatarTop')
        p.text-center Mostrar con nuestro tono de voz, apatía o agresividad.
      .tarjeta.bg_7.p-4.h-100
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema_2/img_21.svg' alt='AvatarTop')
        p.text-center Criticar a gente ausente o rechazar con tacto las opiniones que no se comparten. 



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
