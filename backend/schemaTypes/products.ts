import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'products',
  title: 'Maltas',
  type: 'document',
  groups: [
    {
        name: 'seo',
        title: 'SEO',
    },
    {
        name: 'product',
        title: 'Malta',
    },
    {
      name: 'desc',
      title: 'Características',
    },
    {
      name: 'more',
      title: 'Otras maltas',
    },
  ],
  fields: [
    defineField({
      name: 'titleseo',
      title: 'Título para posicionar esta página en buscadores',
      type: 'string',
      description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 70)',
      group: 'seo',
      validation: rule => rule.max(70).warning('Se han rebasado los 70 caracteres recomendados')
    }),
    defineField({
      name: 'descseo',
      title: 'Descripción para posicionar esta página en buscadores',
      type: 'text',
      description: '*Quedará oculto a la vista del usuario, exclusivo para SEO (Max caracteres 155)',
      group: 'seo',
      validation: rule => rule.max(155).warning('Se han rebasado los 155 caracteres recomendados')
    }),
    defineField({
      name: 'keyseo',
      title: 'Palabras clave para posicionar esta página en buscadores',
      type: 'text',
      description: '*Separar palabras con comas',
      group: 'seo'
    }),
    defineField({
      name: 'title',
      title: 'Nombre de la malta',
      type: 'string',
      group: 'product'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: '*Siempre que se agregue o cambie el nombre del producto, dar clic al botón lateral: Generate',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'product'
    }),
    defineField({
      name: 'tbImage',
      title: 'Imagen de previsualización de la malta',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'product'
    }),
    defineField({
      name: 'tbIcon',
      title: 'Icono de previsualización de la malta',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'product'
    }),
    defineField({
      name: 'categories',
      type: 'array',
      title: 'Marca de la malta',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      options: {
        layout: 'tags'
      },
      group: 'product'
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      group: 'product'
    }),
    defineField({
      name: 'gallery',
      title: 'Imágenes para carrusel',
      type: 'array',
      description: '*Subir imágenes de 700 x 700 pixeles',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
      group: 'product'
    }),
    defineField({
      name: 'body',
      title: 'Descripción general de la malta',
      type: 'blockContent',
      group: 'product'
    }),
    defineField({
      name: 'charateristics',
      title: 'Características de la malta',
      description: '*Agregar información como lista, con bullets',
      type: 'blockContent',
      group: 'desc'
    }),
    defineField({
      name: 'quantity',
      title: 'Presentación',
      description: '*Agregar información como lista, con bullets',
      type: 'blockContent',
      group: 'desc'
    }),
    defineField({
      name: 'colorEbc',
      title: 'Color EBC',
      type: 'string',
      group: 'desc'
    }),
    defineField({
      name: 'colorL',
      title: 'Color ºL',
      type: 'string',
      group: 'desc'
    }),
    defineField({
      name: 'humedad',
      title: 'Porcentaje de humedad',
      type: 'string',
      group: 'desc'
    }),
    defineField({
      name: 'extractoDb',
      title: 'Porcentaje de extracto DB',
      type: 'string',
      group: 'desc'
    }),
    defineField({
      name: 'proteinas',
      title: 'Porcentaje de proteínas',
      type: 'string',
      group: 'desc'
    }),
    defineField({
      name: 'fiabilidad',
      title: 'Fiabilidad',
      type: 'string',
      group: 'desc'
    }),
    defineField({
      name: 'glucanos',
      title: 'Beta-Glucanos mg/l',
      type: 'string',
      group: 'desc'
    }),

    defineField({
      name: 'moreProds',
      type: 'object',
      group: 'more',
      fields: [
        {
          title: 'Maltas relacionadas',
          name: 'relativeProducts',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'products'}]}]
        }
      ]
    }),



  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})