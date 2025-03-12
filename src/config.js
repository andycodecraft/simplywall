const apiPath = process.env.NODE_ENV === 'production'
  ? '/api/v1' // Replace with your production API URL
  : 'http://localhost:5000/api/v1';

module.exports = {
  apiPath,
  stripePubkey: 'pk_test_51R11KI2KkKkXH28wZwtfNJQd0TMkfVwLjmLIHS8URlbbcoCTDTgEG6DvVuCWYSWBhl5ff4bzHDC7uckhPOQisTFc00KskZZwLW',
  premiumPriceId: 'price_1R1Cnh2KkKkXH28wSONhaOXB',
  unlimitedPriceId: 'price_1R1Co12KkKkXH28wTMpjbAj0'
}