const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "products"]{
    titleseo,
    descseo,
    keyseo,
    title,
    slug,
    publishedAt,
    "categories": categories[]->title,
    "categoriesSlug": categories[]->slug,
    "categoriesColorLight": categories[]->catcolorlight{"color": hex},
    "categoriesColorDark": categories[]->catcolordark{"color": hex},
    gallery[]{
      "media": asset->{url},
      "alt": asset->{alt},
    },
    body[]{
      ...,
      _type == 'image' => {
        "image": asset->{
          url,
          "alt": altText
        }
      }
    },
    charateristics[]{
      ...,
      _type == 'image' => {
        "image": asset->{
          url,
          "alt": altText
        }
      }
    },
    quantity[]{
      ...,
      _type == 'image' => {
        "image": asset->{
          url,
          "alt": altText
        }
      }
    },
    colorEbc,
    colorL,
    humedad,
    extractoDb,
    proteinas,
    fiabilidad,
    glucanos,
    tbImage{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    tbIcon{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    moreProds{
      "relativeProducts": relativeProducts[]->{
        title,
        slug,
        publishedAt,
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
      }
    },
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};