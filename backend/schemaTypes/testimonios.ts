import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonios',
  title: 'Testimonios',
  type: 'document',
  fields: [
    defineField({
        name: 'title',
        title: 'Nombre de la persona',
        type: 'string',
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96,
        },
    }),
    defineField({
        name: 'empresa',
        title: 'Nombre de la empresa',
        type: 'string',
    }),
    defineField({
        name: 'photo',
        title: 'Imagen de la persona o empresa',
        type: 'image',
        description: '*Imagen de 70x70 pixeles en JPG',
        options: {
            hotspot: true,
        },
    }),
    defineField({
        name: 'testimony',
        title: 'Testimonio',
        type: 'text',
        description: '*Poner comentarios sin las comillas',
    }),
  ],
})
