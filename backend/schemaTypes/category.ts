import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Marcas',
  type: 'document',
  groups: [
    {
        name: 'seo',
        title: 'SEO',
    },
    {
        name: 'category',
        title: 'Marca',
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
      title: 'Nombre de la marca',
      type: 'string',
      group: 'category'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      group: 'category'
    }),
    defineField({
      name: 'imgMarca',
      title: 'Logo de la marca',
      type: 'image',
      description: '*Imagen de 200 x 100 pixeles en formato SVG (vectorial) o PNG',
      group: 'category',
      options: {
          hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Historia de la marca',
      type: 'blockContent',
      group: 'category',
    }),
    defineField({
      name: 'attribute1',
      title: 'Primer atributo de la marca',
      type: 'string',
      group: 'category'
    }),
    defineField({
      name: 'attribute2',
      title: 'Segundo atributo de la marca',
      type: 'string',
      group: 'category'
    }),
    defineField({
      name: 'attribute3',
      title: 'Tercer atributo de la marca',
      type: 'string',
      group: 'category'
    }),
    defineField({
      name: 'attribute4',
      title: 'Cuarto atributo de la marca',
      type: 'string',
      group: 'category'
    }),
    defineField({
      name: 'imgMain',
      title: 'Imagen grande para dividir descripción y catálogo',
      type: 'image',
      description: '*Imagen de 1920 x 900 pixeles en JPEG',
      group: 'category',
      options: {
          hotspot: true,
      },
    }),
    defineField({
      name: 'catcolorlight',
      title: 'Color claro de la marca',
      type: 'color',
      group: 'category'
    }),
    defineField({
      name: 'catcolordark',
      title: 'Color oscuro de la marca',
      type: 'color',
      group: 'category'
    }),
  ],
})