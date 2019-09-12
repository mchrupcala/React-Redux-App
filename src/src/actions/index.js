import axios from 'axios';

export const FETCH_COIN_START = 'FETCH_COIN_START';
export const FETCH_COIN_SUCCESS = 'FETCH_COIN_SUCCESS';
export const FETCH_COIN_FAILURE = 'FETCH_COIN_FAILURE';


export const getCoins = () => dispatch => {
    dispatch({ type: FETCH_COIN_START });
    axios
        .get('https://www.coingecko.com/en/api/v3/coins/markets')
        .then(res =>
            dispatch({type: FETCH_COIN_SUCCESS, payload: res}))
            .catch(err => dispatch({type: FETCH_COIN_FAILURE, payload: err}));
};