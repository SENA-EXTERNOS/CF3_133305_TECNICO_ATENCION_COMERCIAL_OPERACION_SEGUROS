<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ventas

    .fondo-1.p-5.mb-5
      .row.mb-5
        .col-lg-6.mb-4.mb-md-0
          img.img-a(src='@/assets/curso/temas/tema_1/img_2.png', alt='Texto que describa la imagen')
        .col-lg-6.text-small
          p Las ventas, son acciones relacionadas con la capacitación, revisión, seguimiento, evaluación y control para el cumplimiento de los objetivos y las metas planteadas en el plan de ventas. En ese sentido, el equipo comercial y los recursos del área, se deben enfocar en la satisfacción del cliente, de manera que se atiendan completamente sus necesidades, inquietudes y sugerencias. Es importante cuando hablamos de ventas, dirigir y capacitar el equipo, asignar recursos, seleccionar medios de comunicación y promoción, monitorear, controlar y evaluar la gestión. También es importante tener en cuenta que deben integrarse elementos éticos en todas las acciones de mercadeo que se lleven a cabo, porque el cliente debe confiar y sentirse respaldado por la empresa. De esta forma, se garantiza el cumplimiento de los objetivos del plan de ventas. 

      p.mb-5 A la hora de vender, se tienen en cuenta las características para identificar el cliente potencial, la forma de negociación y el canal de distribución. A continuación, se presentan algunas de estas características:

      .row.justify-content-center.mb-5
        .col-lg-8
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema_1/img_4.svg', alt='Texto que describa la imagen')

            .tarjeta.bg_tar.p-3(x="50%" y="26%" numero="+")
              p.mb-0 El producto y/o servicio posee un alto valor, los vendedores especializados con gran capacidad para el negocio, crean una relación en el valor por unidad, no importa los intermediarios que se utilicen para su venta. El porcentaje de los costos de venta, se reflejan en el precio del producto.
            .tarjeta.bg_tar.p-3(x="83%" y="61%" numero="+")
              p.mb-0 Productos de servicios especializados de instalación, reparación o mantenimiento, por lo general son vendidos y atendidos directamente por la empresa.
            .tarjeta.bg_tar.p-3(x="75%" y="100%" numero="+")
              p.mb-0 Productos con grandes volúmenes, son muy pesados y demandan una distribución corta, para disminuir costos por concepto de transporte y manipulación.
            .tarjeta.bg_tar.p-3(x="23%" y="100%" numero="+")
              p.mb-0 Productos técnicos que requieren de un conductor directo. El fabricante debe tener vendedores que proporcionen servicio en la preventa y en la posventa.
            .tarjeta.bg_tar.p-3(x="16%" y="61%" numero="+")
              p.mb-0 El producto, caduca o se vence rápidamente; estos productos deben venderse prontamente, para evitar pérdidas.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido.mt-5
      h2 1.1 Técnicas de ventas

    p.mb-5 El equipo de ventas debe disponer de herramientas efectivas para identificar las necesidades de los clientes y relacionar estas con el portafolio de productos o servicios de la empresa. Por esto, se hace oportuno conocer las diferentes <b>técnicas de ventas</b>.

    h3.mb-5 Técnica AIDA

    p Es una herramienta que valora y ayuda a mentalizar al vendedor, a crear cuadros mentales sobre el proceso de venta y su objetivo es realizar una serie de posibles escenarios desarrollados en algunos pasos como son: la atención, el interés, la decisión de deseo y la acción.

    p.mb-5 Se detalla cada uno de los pasos mencionados anteriormente:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row
        .col-md-8.mb-4.mb-md-0
          h3 Atención
          p Con halagos o cumplidos al cliente, se agradece por el tiempo prestado. Hacer que el cliente despierte su curiosidad asesorando y mostrando noticias de la actualidad, puede llamar su atención.
        .col-md-2
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_5.png', alt='Texto que describa la imagen')

      .row.justify-content-center
        .col-md-2.mb-4.mb-md-0
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_6.png', alt='Texto que describa la imagen')
        .col-md-8.text_left
          h2 Interés
          p El cliente identifica o reconoce la necesidad, por lo tanto, se hacen sugerencias al entorno.
          

      .row
        .col-md-8.mb-4.mb-md-0
          h2 Decisión de deseo
          p Establecer un vínculo con los beneficios del producto o servicio, mostrando la necesidad al cliente.
      
        .col-md-2
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_7.png', alt='Texto que describa la imagen')

      .row.justify-content-center
        .col-md-2
          figure
            img.img-a(src='@/assets/curso/temas/tema_1/img_8.png', alt='Texto que describa la imagen')
        .col-md-8.text_left
          h3 Acción
          p Como resultado de lo anterior, concretar la venta.

    h3.mb-5 Técnica SPIN

    p Nombrada con el acrónimo de situación, problema, implicación y necesidad. Es una herramienta que recolecta información de los clientes por medio de la formulación de preguntas en encuestas, con el objetivo de tener atención personalizada donde se toma la información del negocio y de las necesidades del cliente.

    p.mb-5 Para aplicar la técnica SPIN se deben seguir los siguientes pasos:

    .row.mb-5.align-items-stretch.d-flex.h-100
      .col-lg-3.col-xl-3.mb-4.mb-md-0.align-items-stretch.d-flex.h-100
        .tarjeta.bg_1.p-4.h-100.tem_tar
          .row.justify-content-center.mb-5
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_9.svg' alt='AvatarTop')
          h4.text-center.mt-3 Situación
          p.text-center Realizar preguntas abiertas al comprador, con el objetivo de construir un entorno para desenvolverse en la negociación con el cliente.
      .col-lg-3.col-xl-3.mb-4.mb-md-0.align-items-stretch.d-flex.h-100
        .tarjeta.bg_1.p-4.h-100.tem_tar
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_10.svg' alt='AvatarTop')
          h4.text-center Problema
          p.text-center Identificar las necesidades del cliente que no están satisfechas, por medio de una encuesta, para determinar si se puede tener una relación con el producto o servicio ofrecido.
      .col-lg-3.col-xl-3.mb-4.mb-md-0.h-100
        .tarjeta.bg_1.p-4.tem_tar
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_11.svg' alt='AvatarTop')
          h4.text-center Implicación
          p.text-center Contextualizar la mente del cliente con el problema que se ha identificado y tener un plan de acción donde lo importante es solucionar la necesidad a corto o largo plazo.
      .col-lg-3.col-xl-3.mb-4.mb-md-0.h-100
        .tarjeta.bg_1.p-4.tem_tar
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_12.svg' alt='AvatarTop')
          h4.text-center Necesidad
          p.text-center Se debe generar en el cliente la necesidad de permitir presentar el portafolio de la empresa, para mostrar los productos y servicios que se le prestan, para dar solución al inconveniente.
    
    .bg_2.p-4
      .row.align-items-center.mb-5
        .col-lg-6.mb-4.mb-md-0
          img.img-a(src='@/assets/curso/temas/tema_1/img_13.png', alt='Texto que describa la imagen')
        .col-lg-6
          p Después de conocer los tipos de técnicas de ventas, se hace necesario conocer las formas en que un vendedor puede ofrecer un producto o servicio. Para esto, lo invitamos a ver el siguiente video donde se detalla cada uno de los siguientes tipos de ventas:
          ul.lista-ul--color
            li 
              i.fas.fa-angle-right
              | Venta a distancia
            li 
              i.fas.fa-angle-right
              | Ventas por correspondencia
            li 
              i.fas.fa-angle-right
              | Ventas por video
            li 
              i.fas.fa-angle-right
              | Tele-venta
            li 
              i.fas.fa-angle-right
              | Venta por teléfono
            li 
              i.fas.fa-angle-right
              | Venta en máquinas automáticas
            li 
              i.fas.fa-angle-right
              | Venta electrónica
            li 
              i.fas.fa-angle-right
              | Venta personal
            li 
              i.fas.fa-angle-right
              | Venta interna
            li 
              i.fas.fa-angle-right
              | Venta directa
            li 
              i.fas.fa-angle-right
              | Venta en libre servicio
            li 
              i.fas.fa-angle-right
              | Venta en ferias, salones y exhibiciones
            li 
              i.fas.fa-angle-right
              | Venta multinivel.
    p.mb-5 A continuación, se presenta un video en el que se pueden visualizar los tipos de venta:
      figure.mb-5(data-aos="zoom-in-down")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video

      separador
      #t_1_2.titulo-segundo.color-acento-contenido.mt-5
        h2 1.2 Gestión del plan de ventas

      p Para la construcción de cualquier <b>plan de ventas</b>, es necesario cuantificar el volumen de ventas que se realiza al cliente actual o potencial, y verificar las características de la compra y el cumplimiento del plan de ventas. Es importante mantener este registro, pues permite evaluar el logro de las proyecciones o metas y la efectividad de las estrategias en la zona geográfica o segmento.

      p.mb5 Veamos, los términos que hacen parte del plan de ventas:

      .row.mb-5
        .col-lg-7
          TabsA.color-primario.mb-5
            .tarjeta.color-primario--borde.p-4(titulo="Contactos")
              p.mb-0 Es la cantidad de propuestas que se presentarán en cada periodo de tiempo.
            .tarjeta.color-primario--borde.tb.p-4(titulo="Ratio - venta")
              p.mb-0 Refleja un porcentaje de éxito. Es el número de clientes que adquirían el producto y/o servicio, sobre la cantidad de propuestas que se presentarán en cada periodo.    
            .tarjeta.color-primario--borde.tb_1.p-4(titulo="Ventas")
              p.mb-0 Son el resultado de multiplicar contactos por la ratio de ventas. 
            .tarjeta.color-primario--borde.tb_2.p-4(titulo="Precio <br>promedio")
              p.mb-0 Es recomendable utilizar el precio neto, es decir descontando promociones, rebajas, etc.
            .tarjeta.color-primario--borde.tb_3.p-4(titulo="Venta bruta")
              p.mb-0 Es la multiplicación del precio promedio por las ventas.
        .col-lg-5
          img.img-a(src='@/assets/curso/temas/tema_1/img_14.png', alt='Texto que describa la imagen')

    h3 Registro del perfil del cliente y su compra

    p Para que las empresas puedan consolidarse en el área geográfica donde se distribuye su producto o servicio, deben realizar un registro de las ventas, teniendo en cuenta los siguientes factores: ¿cuál es el producto o servicio que más se vende?, ¿a quién se le vende?, ¿cuál es la frecuencia de compra? y ¿cuánta ganancia obtiene por cada compra?
    p.mb-5 Esto permite establecer el comportamiento de los clientes y, de esa manera, es más fácil organizar y distribuir el equipo de asesores comerciales, y los productos o servicios. En la Tabla 1, se presenta un formato de registros diligenciado como ejemplo.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Tabla 1
          p.mb-0
            em Formato de registros

        .color-acento-contenido
          .tabla-b__header
            h5.mb-0 Perfil del cliente
          table
            tr.table_th1.text-center
              th Nombre
              th Cantidad
              th Productos
              th Valor
              th Frecuencia
            tr
              td José Gabriel
              td.text-center 6
              td Jabón, champú, acondicionador
              td.text-center $50.000
              td lunes a jueves
            tr
              td María Alejandra
              td.text-center 8
              td Arroz, pastas, harina
              td.text-center $40.000
              td lunes, miércoles y domingos
            tr
              td Lorena Liseth
              td.text-center 10
              td Aceite, café y chocolate
              td.text-center $70.000
              td sábados y domingos

    p.mb-5 Continuando, las empresas deben revisar periódicamente <b>el cumplimiento del plan de ventas</b>, que puede tener como objetivos conseguir clientes nuevos, vender más a clientes actuales y recuperar cuentas. La idea es hacer un comparativo con las ventas reales por segmentos y el plan de ventas propuesto; de esta manera, se pueden ir asignando recursos y personal para su cumplimiento. En la Tabla 2, se presenta como ejemplo un plan de ventas.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          h5 Tabla 2
          p.mb-0
            em Plan de ventas

        .color-acento-contenido
          .tabla-b__header
            h5.mb-0 Plan de ventas
          table
            tr.table_th1
              th Concepto	
              th.text-center Enero	
              th.text-center Febrero	
              th.text-center Marzo	
              th.text-center Abril
            tr
              th.table_th2 Contactos	
              td.text-center 100	
              td.text-center 200	
              td.text-center 300	
              td.text-center 400
            tr
              th.table_th2 Ratio - ventas %	
              td.text-center 15 %	
              td.text-center 15 %	
              td.text-center 15 %	
              td.text-center 15 %
            tr
              th.table_th2 Ventas	
              td.text-center 15	
              td.text-center 30	
              td.text-center 5	
              td.text-center 60
            tr
              th.table_th2 Precio promedio	
              td.text-center $280.000	
              td.text-center $294.000	
              td.text-center $308.700	
              td.text-center $324.135
            tr
              th.table_th2 Ventas brutas	
              td.text-center $4.200.000	
              td.text-center $8.820.000	
              td.text-center $13.891.500	
              td.text-center $19.448.100

    h3 Evaluación y control de la fuerza de ventas

    p.mb-5 El último paso en la ejecución del plan de ventas es el de controlar y evaluar la fuerza de ventas. Para esto, se debe establecer el cumplimiento individual de cada vendedor y de los equipos, con respecto a los objetivos y las políticas del área. Se deben utilizar medidas cualitativas y cuantitativas, para evaluar cada uno de los aspectos.

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left  
            p.mb-0 Según Ferrel y Hartline (s.f), “El control y la evaluación de la fuerza de ventas, requiere de una comparación de los objetivos de ventas con el desempeño real. Este análisis se puede realizar en el nivel de cada vendedor o para toda la fuerza de ventas. Para evaluar a un vendedor de manera efectiva, es necesario crear normas de desempeño predeterminadas. Estas normas también deben determinar el plan de compensación para la fuerza de ventas”(p. 345).
            i.fas.fa-quote-right

    p.mb-5 En ese sentido, podemos decir que, para implementar un plan de evaluación, control y monitoreo de la fuerza de ventas, podemos establecer los siguientes pasos:    

    .tarjeta.bg_3.p-4.mb-5
      PasosB.color-primario
        .row.justify-content-center(titulo="Paso 1")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema_1/img_15.png', alt='Texto que describa la imagen')
          .col-md-6
            p Establecer criterios y parámetros medibles o que se les pueda dar una valoración.
        .row.justify-content-center(titulo="Paso 2")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema_1/img_16.png', alt='Texto que describa la imagen')
          .col-md-6
            p Socializar con el personal de ventas, cuáles serán las metas, logros y objetivos que se desean alcanzar.
        .row.justify-content-center(titulo="Paso 3")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema_1/img_17.png', alt='Texto que describa la imagen')
          .col-md-6
            p Medir, a través de todo el proceso, los resultados alcanzados frente a los planeados.
        .row.justify-content-center(titulo="Paso 4")
          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema_1/img_18.png', alt='Texto que describa la imagen')
          .col-md-6
            p Comparar los resultados obtenidos con los criterios establecidos, para identificar las desviaciones.
        
    h3 Normas ISO en la venta y la distribución

    p Es importante que tengamos presente las normas ISO, no solo en la producción sino en la distribución de nuestro producto o servicio, cuya aplicación permite lograr impactos positivos en la imagen, eficiencia, satisfacción del cliente y el funcionamiento de la organización. Por esto, debemos mantenernos actualizados en cuanto a las modificaciones que se hagan. La mayoría de las empresas han implementado en sus procesos las normas ISO: 9001, 9004, 14000 y 28000, porque promueven la construcción de procesos eficientes, flexibles, efectivos y eficaces, por medio del aseguramiento de la calidad y la satisfacción del cliente en un contexto donde se conserve el medio ambiente. 

    p.mb-5 Las normas generales que se pueden consultar son:

    .row.mb-5.align-items-stretch.d-flex.h-100
      .col-md-3.col-lg.mb-5.mb-lg-0.align-items-stretch.d-flex.h-100
        .tarjeta.bg_1.p-4.h-100.tem_tar_1
          .row.justify-content-center.mb-5
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_19.svg' alt='AvatarTop')
          p.text-center.mb-0 Certificación Normas ISO 9001.
      .col-md-3.col-lg.mb-5.mb-lg-0.align-items-stretch.d-flex.h-100
        .tarjeta.bg_1.p-4.h-100.tem_tar_1
          .row.justify-content-center.mb-5
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_20.svg' alt='AvatarTop')
          p.text-center.mb-0 Sistema de Gestión para Micros y Pequeñas Empresas (PYMES) NTC 6001
      .col-md-3.col-lg.mb-5.mb-lg-0.align-items-stretch.d-flex.h-100
        .tarjeta.bg_1.p-4.h-100.tem_tar_1
          .row.justify-content-center.mb-5
            .col-8
              img(src='@/assets/curso/temas/tema_1/img_21.svg' alt='AvatarTop')
          p.text-center.mb-0 Certificación de Sistema de Gestión Ambiental ISO 14001.
      .col-lg-3.col-xl-3.align-items-stretch.d-flex.h-100
        .tarjeta.bg_1.p-4.h-100.tem_tar_1
          .row.justify-content-center.mb-5
            .col-8
              img.mt-4(src='@/assets/curso/temas/tema_1/img_22.svg' alt='AvatarTop')
          p.text-center.mb-0 Certificación Sistema de Gestión de Seguridad para la Cadena de Suministro ISO 28000.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido.mt-5
      h2 1.3 Contacto con los clientes

    p Al momento del contacto con el cliente, el equipo comercial debe realizar un estudio del cliente, en aspectos como la personalidad, los comportamientos de compra y las conductas, con el objetivo de enfrentarse a las diferentes situaciones que se presentan en un proceso de venta y negociación. Las preguntas claves para el vendedor en el momento de ofrecer un producto o servicio son: ¿quién compra?, ¿qué compra?, ¿por qué compra?, ¿cómo lo compra?, ¿cuándo compra?, ¿dónde compra?, entre otros.

    p.mb-5 Dentro del primer aspecto, es importante conocer la personalidad que se puede encontrar en los clientes:

    .row.mb-5.bg_4
      .col-lg-6.mb-4.mb-md-0
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Cliente difícil")
            p.mb-0 Persona rigurosa, exigente y difícil de satisfacer con el producto o servicio que adquiere.
          div(titulo="Cliente amigable")
            p.mb-0 Persona cordial, amable, afable y conversadora.
          div(titulo="Cliente tímido")
            p.mb-0 Persona indecisa, introvertida, insegura y poco expresiva.
          div(titulo="Cliente agresivo")
            p.mb-0 Persona caprichosa, irritable, imprudente, grosera y agresiva.
          div(titulo="Cliente errante")
            p.mb-0 Persona que siempre busca las promociones y, por lo general, visita todas las tiendas y almacenes antes de elegir el producto o servicio a comprar.
      .col-lg-6
        img(src='@/assets/curso/temas/tema_1/img_23.png', alt='Texto que describa la imagen')

    p Seguidamente, sigue el segundo aspecto. el cual hace referencia al comportamiento que pueden tomar los clientes al momento de realizar una compra.

    p.mb-5 Los tipos de comportamiento de compras son:

    .row.align-items-center.justify-content-center.mb-2(data-aos="fade-down")
      .col-9.col-lg-5.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema_1/img_24.svg')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5.text-center Compra corriente
              p.mb-0 El consumidor adquiere un producto frecuentemente, en pocas cantidades y sin mucho esfuerzo. Las empresas usualmente utilizan estrategias de cobertura máxima o de distribución intensiva para insertarlos en el mercado.
      .col-9.col-lg-5.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema_1/img_25.svg')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5.text-center Compra reflexiva
              p.mb-0 El consumidor tiene que realizar un gran esfuerzo mental e invertir mucho tiempo comparando los productos para poder tomar una decisión de compra. Esta comparación se hace por marcas, estética, precio, y calidad. Este producto, por lo general, tiene un precio alto y es escaso.

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down")
      .col-9.col-lg-5.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema_1/img_26.svg')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5.text-center Compra especializada
              p.mb-0 El consumidor busca productos con características únicas. Su compra requiere mucho esfuerzo y tiempo, debido a que no existe una gama amplia de estos productos y solo se encuentran en ciertos lugares.
      .col-9.col-lg-5.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema_1/img_27.svg')
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4
              h5.text-center Compra no buscados
              p.mb-0 Son productos que usualmente no son adquiridos por el consumidor, sea porque no los conoce, y si los conoce, no existe un interés espontáneo para su compra. Un ejemplo de ellos son los seguros de vida y las enciclopedias.

  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.fondo-2.cont_top
    p.mt-5 Finalmente, se presenta el tercer aspecto el cual hace referencia a las conductas que se presentan al momento de realizar las compras.

    p.mb-5 A continuación, se presentan estas conductas:
    .row.justify-content-center.align-items-center
      .col-lg-8.mb-4.mb-md-0
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/temas/tema_1/img_30.svg' alt='AvatarTop')
          .tarjeta.bg_5
            .p-4
              h5 Conducta extensiva
              p.mb-0 Situaciones donde el comprador se está enfrentando a marcas nuevas en una clase de productos nuevos para él. Los criterios de elección están a menudo mal definidos y una búsqueda profunda de información es necesaria para identificarlos.
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/temas/tema_1/img_31.svg' alt='AvatarTop')
          .tarjeta.bg_6
            .p-4
              h5 Conducta limitada
              p.mb-0 Se trata de una o varias marcas nuevas en una clase de producto reconocido, cuyos criterios de elección están ya definidos.
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img.img-a(src='@/assets/curso/temas/tema_1/img_32.svg' alt='AvatarTop')
          .tarjeta.bg_5
            .p-4
              h5 Conducta rutinaria
              p.mb-0 El consumidor ha acumulado suficiente experiencia e información y tiene preferencias determinadas hacia una o varias marcas.

      .col-lg-2
        .row.img_z_in
          .col-lg-12
            img(src='@/assets/curso/temas/tema_1/img_29.png', alt='Texto que describa la imagen')





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
