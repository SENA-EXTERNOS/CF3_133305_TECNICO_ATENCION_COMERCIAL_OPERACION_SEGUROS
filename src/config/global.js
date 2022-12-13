export default {
  global: {
    componenteFormativo:
      'Técnicas de ventas, comunicación y propuesta comercial',
    descripcionCurso:
      'En el área de ventas de una organización, es importante crear estrategias que se encuentren consolidadas en un plan de ventas. Para hacerlo, es necesario dirigir y capacitar el equipo de ventas, asignar recursos y seleccionar medios de comunicación y promoción. De esta forma, el vendedor tendrá un excelente recurso que podrá incluir, en la propuesta comercial, para ofrecerle al cliente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Técnicas de ventas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Gestión del plan de ventas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Contacto con los clientes',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Canales de comunicación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Propuesta comercial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Técnicas de venta',
      referencia:
        'Aprendiz Libros. (2021). Los que conocen estas técnicas de ventas, venden más [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=JHxICWE25HU',
    },
    {
      tema: 'Técnicas de venta',
      referencia: 'Luengo, M., & Gómez, F. (2006). Operaciones de venta. ',
      tipo: 'Libro',
      link:
        'https://books.google.com.co/books?id=Mn86kxWxq3sC&printsec=copyright#v=onepage&q&f=false',
    },
    {
      tema: 'Canales de comunicación',
      referencia:
        'Profe Marilin. (2021). ¿Qué es la comunicación? Proceso y elementos de la comunicación [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=KujFJsEOPTs',
    },
    {
      tema: 'Propuesta Comercial ',
      referencia:
        'Asesor Empresario - ASESUISA El Salvador. (2022). Metodología - "Que debe de incluir una propuesta comercial exitosa" [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iACzc6PyxYE',
    },
  ],
  glosario: [
    {
      termino: 'Comunicación',
      significado:
        'el origen del vocablo comunicación es latino, y proviene de “communicare” que significa compartir alguna cosa. Se entiende por comunicación, a la relación existente entre un emisor y un receptor, que se transmiten señales a través de un código común.',
    },
    {
      termino: 'Emisor',
      significado:
        'es un término que puede hacer referencia a diferentes tipos de palabras. Como adjetivo y sustantivo (de acuerdo a cómo se utilice el término), sirve para acompañar a aquel o aquellas entidades que se encargan de conectarse con otro punto para emitir una señal. Como verbo, significa manifestar una opinión o noticia, producir y poner en circulación billetes, valores o títulos y lanzar ondas hercianas para hacer oír noticias, música o señales.',
    },
    {
      termino: 'Estrategia',
      significado:
        'conjunto de fases o actividades a ser ejecutadas que permiten alcanzar objetivos planeados con efectividad, involucra la prevención en cada una de ellas.',
    },
    {
      termino: 'Mercado',
      significado: 'todos aquellos compradores de un producto o un servicio.',
    },
    {
      termino: 'Objetivo',
      significado:
        'representa los resultados que la empresa espera obtener, son fines por alcanzar, establecidos cuantitativamente y determinados para realizarse transcurrido un tiempo específico.',
    },
    {
      termino: 'Plan',
      significado: 'comprende una guía para abordar una situación específica.',
    },
    {
      termino: 'Política',
      significado:
        'son guías para orientar la acción; son lineamientos generales a observar en la toma de decisiones, sobre algún problema que se repite una y otra vez dentro de una organización.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'son programas en los que se les asignan cifras a las actividades; implican una estimación de capital, de los costos, de los ingresos, y de las unidades o productos requeridos para lograr los objetivos.',
    },
    {
      termino: 'Programa',
      significado:
        'esquema en donde se establece la secuencia de actividades específicas que habrán de realizarse para alcanzar los objetivos, y el tiempo requerido para efectuar cada una de sus partes y todos aquellos eventos involucrados en su consecución.',
    },
    {
      termino: 'Receptor',
      significado:
        'en el ámbito de las comunicaciones, receptor es el dispositivo o el individuo que recibe una señal o un mensaje, enviado por un transmisor o un emisor. Los signos que acarrea el mensaje deben ser decodificados e interpretados por el receptor para su comprensión. Si nos centramos en lo tecnológico, el receptor es el aparato que posibilita la captación y decodificación de señales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ferrel, O. C. y Hartline, M. D. (2012). Estrategia de marketing.',
      link:
        'http://www.elmayorportaldegerencia.com/Libros/Mercadeo/%5BPD%5D%20Libros%20-%20Estrategia%20de%20Marketing.pdf',
    },

    {
      referencia:
        'Kotler, P. y Armstrong, G. (2013). Fundamentos de Marketing.',
      link:
        'https://frrq.cvg.utn.edu.ar/pluginfile.php/14584/mod_resource/content/1/Fundamentos%20del%20Marketing-Kotler.pdf',
    },

    {
      referencia:
        'Tilve, M.V. (2010). Introducción al Marketing Estratégico. San Francisco: Creative Commons Attribution',
      link:
        'https://books.google.com.pe/books?id=u__jNFaVDc0C&printsec=copyright#v=onepage&q&f=false',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
