const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "category"]{
  titleseo,
  descseo,
  keyseo,
  title,
  slug,
  imgMarca{
    "media": asset->{url},
    "alt": asset->{altText}
  },
  description,
  attribute1,
  attribute2,
  attribute3,
  attribute4,
  "products": *[_type == "products" && references(^._id)]{
    title,
    slug,
    "categories": categories[]->title,
    "categoriesSlug": categories[]->slug,
    "categoriesColorLight": categories[]->catcolorlight{"color": hex},
    "categoriesColorDark": categories[]->catcolordark{"color": hex},
    tbImage{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    tbIcon{
      "media": asset->{url},
      "alt": asset->{altText}
    },
  },
  catcolorlight{
    "color": hex
  },
  catcolordark{
    "color": hex
  },
}`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};