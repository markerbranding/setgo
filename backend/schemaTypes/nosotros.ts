export default {
    name: 'nosotros',
    title: 'Nosotros',
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
            name: 'diff',
            title: 'Diferenciadores',
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
            name: 'heroImg',
            title: 'Imagen principal',
            type: 'image',
            group: 'hero',
            options: {
                hotspot: true,
            },
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
            name: 'diffH3',
            title: 'Subtítulo indicador para los diferenciadores',
            type: 'string',
            group: 'diff'
        },
        {
            name: 'diffImg1',
            title: 'Icono del diferenciador 1',
            type: 'image',
            group: 'diff',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'diffTitle1',
            title: 'Título del diferenciador 1',
            type: 'string',
            group: 'diff'
        },
        {
            name: 'diffDesc1',
            title: 'Descripción del diferenciador 1',
            type: 'text',
            group: 'diff'
        },
        {
            name: 'diffImg2',
            title: 'Icono del diferenciador 2',
            type: 'image',
            group: 'diff',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'diffTitle2',
            title: 'Título del diferenciador 2',
            type: 'string',
            group: 'diff'
        },
        {
            name: 'diffDesc2',
            title: 'Descripción del diferenciador 2',
            type: 'text',
            group: 'diff'
        },
        {
            name: 'diffImg3',
            title: 'Icono del diferenciador 3',
            type: 'image',
            group: 'diff',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'diffTitle3',
            title: 'Título del diferenciador 3',
            type: 'string',
            group: 'diff'
        },
        {
            name: 'diffDesc3',
            title: 'Descripción del diferenciador 3',
            type: 'text',
            group: 'diff'
        },
        {
            name: 'diffImg4',
            title: 'Icono del diferenciador 4',
            type: 'image',
            group: 'diff',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'diffTitle4',
            title: 'Título del diferenciador 4',
            type: 'string',
            group: 'diff'
        },
        {
            name: 'diffDesc4',
            title: 'Descripción del diferenciador 4',
            type: 'text',
            group: 'diff'
        },
    ]
  }