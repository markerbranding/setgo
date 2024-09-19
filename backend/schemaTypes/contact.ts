export default {
    name: 'contact',
    title: 'Contacto',
    type: 'document',
    groups: [
        {
            name: 'seo',
            title: 'SEO',
        },
        {
            name: 'intro',
            title: 'Introducción',
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
            name: 'contactImg',
            title: 'Imagen principal para la introducción',
            type: 'image',
            group: 'intro',
            options: {
                hotspot: true,
            },
        },
    ]
  }