import * as actionTypes from './actions';

const initialState = {
    hoursWatched:null,
    topPC: null,
    hoursWatchedRanking: null,
    topPCRanking: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HOURS_WATCHED:
            const newHoursWatched = action.payload.data.data;
            return {
                ...state,
                hoursWatched: newHoursWatched
            };
        case actionTypes.TOP_PC:
            const newTopPC = action.payload.data.data;
            return {
                ...state,
                topPC : newTopPC
            };
        case actionTypes.TOP_PC_RANKING:
            const newTopPCRanking = action.payload.data.data;
            return {
                ...state,
                topPCRanking : newTopPCRanking
            }
        case actionTypes.HOURS_WATCHED_RANKING:
            const newHoursWatchedRanking = action.payload.data.data;
            return {
                ...state,
                hoursWatchedRanking : newHoursWatchedRanking
            }
        default:
            return state;
    }
};

export default reducer;