import { FETCH_COIN_START, FETCH_COIN_SUCCESS, FETCH_COIN_FAILURE } from "../actions";

export const initialState = {
    coinData: [],
    isFetching: false,
    error: ''
};

export function reducer(state = initialState, action) {
    console.log('Reducer says', action);
    switch(action.type) {
        case FETCH_COIN_START:
            console.log("Fetching data!")
            return {
                ...state,
                isFetching: true,
                error: ''
            };

        case FETCH_COIN_SUCCESS:
            console.log("Got that data tho.");
            return {
                ...state,
                coinData: action.payload,
                isFetching: false,
                error: ''
            };

        case FETCH_COIN_FAILURE:
            console.log("Did NOT get that data tho.");
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}