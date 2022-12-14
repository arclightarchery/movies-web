
const apiConfig = {
  baseURL: 'https://api.themoviedb.org/3/',
  apiKey: 'd63ad08dae016665068d99abd37b48be',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;