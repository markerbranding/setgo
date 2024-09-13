const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "nosotros"]{
    titleseo,
    descseo,
    keyseo,
    heroH1,
    heroH2,
    heroP,
    heroBtn,
    heroImg{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    introH3,
    introH2,
    introRichText,
    diffH3,
    diffImg1{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    diffTitle1,
    diffDesc1,
    diffImg2{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    diffTitle2,
    diffDesc2,
    diffImg3{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    diffTitle3,
    diffDesc3,
    diffImg4{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    diffTitle4,
    diffDesc4,
  }`);

  await Promise.all(data.map(processContent)); // Procesa todo el contenido en cada objeto
  return data; // Devuelve el array con las imágenes y textos ya procesados
};