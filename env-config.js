const prod = process.env.NODE_ENV === 'production';
module.exports = {
    'process.env.BASE_URL': prod ? 'https://roman-batiuk.herokuapp.com' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://roman-batiuk.herokuapp.com',
    'process.env.CLIENT_ID': 'NF446kLamlii1MZ37Gt3664aY0p5nOaz',
};