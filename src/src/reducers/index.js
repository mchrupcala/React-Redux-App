import { FETCH_COIN_START } from "../actions";

export const initialState = {
    coinData: [],
    isFetching: false,
    error: ''
};

export function reducer(state = initialState, action) {
    console.log('Reducer says', action);
    switch(action.type) {
        case FETCH_COIN_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };

        default:
            return state;
    }
}