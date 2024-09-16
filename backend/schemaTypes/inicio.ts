export default {
    name: 'inicio',
    title: 'Inicio',
    type: 'document',
    groups: [
        {
            name: 'seo',
            title: 'SEO',
        },
        {
            name: 'hero',
            title: 'Hero',
        },
        {
            name: 'intro',
            title: 'Introducción',
        },
        {
            name: 'video',
            title: 'Video',
        },
        {
            name: 'prod',
            title: 'Destacados',
        },
    ],
    fields: [
        {
            name: 'titleseo',
            title: 'Título para posicionar esta página en buscadores',
            type: 'string',
            description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
            group: 'seo',
            validation: rule => rule.max(70).warning('Se han rebasado los 70 caracteres recomendados')
        },
        {
            name: 'descseo',
            title: 'Descripción para posicionar esta página en buscadores',
            type: 'text',
            description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
            group: 'seo',
            validation: rule => rule.max(155).warning('Se han rebasado los 155 caracteres recomendados')
        },
        {
            name: 'keyseo',
            title: 'Palabras clave para posicionar esta página en buscadores',
            type: 'text',
            description: '*Separar palabras con comas',
            group: 'seo'
        },
        {
            name: 'heroH1',
            title: 'Subtítulo de apertura',
            type: 'string',
            group: 'hero'
        },
        {
            name: 'heroH2',
            title: 'Título principal',
            type: 'blockContent',
            group: 'hero',
            description: '*Agregar texto con formato H2. (Opcional: para resaltar palabras importantes se puede poner en negritas)'
        },
        {
            name: 'heroP',
            title: 'Descripción',
            type: 'text',
            group: 'hero'
        },
        {
            name: 'heroBtn',
            title: 'Texto del botón',
            type: 'string',
            group: 'hero'
        },
        {
            name: 'heroProdRef',
            title: 'Banner principal',
            type: 'object',
            group: 'hero',
            fields: [
              {
                title: 'Maltas destacadas en el banner principal',
                name: 'mainProducts',
                type: 'array',
                of: [{type: 'reference', to: [{type: 'products'}]}]
              }
            ]
        },
        {
            name: 'introH3',
            title: 'Subtítulo indicador para la introducción',
            type: 'string',
            group: 'intro'
        },
        {
            name: 'introH2',
            title: 'Título principal para la introducción',
            type: 'string',
            group: 'intro'
        },
        {
            name: 'introRichText',
            title: 'Descripción para la introducción',
            type: 'blockContent',
            group: 'intro'
        },
        {
            name: 'introBtn',
            title: 'Texto del botón',
            type: 'string',
            group: 'intro'
        },
        {
            name: 'introImg1',
            title: 'Imagen principal para la introducción',
            type: 'image',
            group: 'intro',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'videoH2',
            title: 'Frase para el apartado del video',
            type: 'string',
            group: 'video'
        },
        {
            name: 'video',
            title: 'Agregar video corporativo',
            type: 'file',
            group: 'video',
        },
        {
            name: 'videoImg',
            title: 'Imagen de portada para el video',
            type: 'image',
            group: 'video',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'recentProdRef',
            type: 'object',
            group: 'prod',
            fields: [
              {
                title: 'Maltas destacadas',
                name: 'recentProducts',
                type: 'array',  // Cambiado de 'reference' a 'array'
                of: [{type: 'reference', to: [{type: 'products'}]}]  // Especifica que es un array de referencias
              }
            ]
        },
        {
            name: 'recentBlogRef',
            type: 'object',
            group: 'prod',
            fields: [
              {
                title: 'Noticias destacadas',
                name: 'recentBlogs',
                type: 'array',  // Cambiado de 'reference' a 'array'
                of: [{type: 'reference', to: [{type: 'post'}]}]  // Especifica que es un array de referencias
              }
            ]
        }
    ]
  }