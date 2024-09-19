export default {
    name: 'social',
    title: 'Social Media',
    type: 'document',
    fields: [
      {
        name: 'facebook',
        title: 'URL cuenta de Facebook',
        type: 'string'
      },
      {
        name: 'instagram',
        title: 'URL cuenta de Instagram',
        type: 'string'
      },
      {
        name: 'linkedin',
        title: 'URL cuenta de LinkedIn',
        type: 'string'
      },
      {
        name: 'metaPixel',
        title: 'Pixel de Meta',
        description: '*Pegar el código completo, incluidas las etiquetas <script></script>',
        type: 'text'
      },
      {
        name: 'googleTag',
        title: 'Google Tag',
        description: '*Pegar el código completo, incluidas las etiquetas <script></script>',
        type: 'text'
      },
    ],

    preview: {
        select: {
          title: 'Social Media',
        },
      },
    
  }