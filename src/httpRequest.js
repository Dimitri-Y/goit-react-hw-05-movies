import axios from 'axios';
const BaseURL = 'https://api.themoviedb.org/3';
const APIKEY = '00cb515606c3767771985834ed87ee26';
const TrendURL = `${BaseURL}/trending/all/day`;
const SearchURL = `${BaseURL}/search/movie`;
const DetailsURL = `${BaseURL}/movie`;
const CreditsURL = `${BaseURL}/movie`;
const ReviewsURL = `${BaseURL}/movie`;

const fetchRequest = async (condition, { searchQuery, page, movie_id }) => {
  let RequestURL = '';
  switch (condition) {
    case 'trend':
      RequestURL = TrendURL + `?api_key=${APIKEY}&page=${page}`;
      break;
    case 'search':
      RequestURL =
        SearchURL + `?api_key=${APIKEY}&page=${page}&query=${searchQuery}`;
      break;
    case 'details':
      RequestURL = DetailsURL + `/${movie_id}?api_key=${APIKEY}`;
      break;
    case 'credits':
      RequestURL = CreditsURL + `/${movie_id}/credits?&api_key=${APIKEY}`;
      break;
    case 'reviews':
      RequestURL = ReviewsURL + `/${movie_id}/reviews?api_key=${APIKEY}`;
      break;
    default:
      break;
  }
  const response = axios.get(RequestURL);
  return response;
};
export default fetchRequest;
