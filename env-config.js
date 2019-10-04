const prod = process.env.NODE_ENV === 'production';
// https://roman-batiuk.herokuapp.com
module.exports = {
    'process.env.BASE_URL': prod ? 'https://portfolio.romios047.now.sh' : 'http://localhost:3000',
    'process.env.NAMESPACE': 'https://portfolio.romios047.now.sh',
    'process.env.CLIENT_ID': 'NF446kLamlii1MZ37Gt3664aY0p5nOaz',
};