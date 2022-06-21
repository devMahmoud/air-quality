const baseUrl = 'https://api.waqi.info/feed';
const TOKEN = '5965a036e70f28e1f978828b2d1ec4f9ad314f51';
const getData = async (city) => fetch(`${baseUrl}/${city}/?token=${TOKEN}`);

export default getData;
