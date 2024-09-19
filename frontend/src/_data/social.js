const client = require('../utils/sanityClient');

module.exports = async function() {
  const data = await client.fetch(`*[_type == "social"]{
    facebook,
    instagram,
    linkedin,
    metaPixel,
    googleTag,
  }`);

  return await Promise.all(data.map(async item => {
    return {
      ...item,
    };
  }));
};