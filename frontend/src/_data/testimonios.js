const client = require('../utils/sanityClient');
const processContent = require('../utils/contentProcessor');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "testimonios"]{
    title,
    slug,
    empresa,
    photo{
      "media": asset->{url},
      "alt": asset->{altText}
    },
    testimony,
  }`);

  await Promise.all(data.map(processContent));
  return data;
};