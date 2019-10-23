import * as actionTypes from './actions';

const initialState = {
    top5HoursWatched: null,
    top5PC: null,
    hoursWatchedRanking: null,
    topPCRanking: null,
    gameId: null,
    gameDetails: null,
    savedGames: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOP_5_HOURS_WATCHED:
            const top5HoursWatched = action.payload.data.data;
            return {
                ...state,
                top5HoursWatched: top5HoursWatched
            };
        case actionTypes.TOP_5_PC:
            const top5PC = action.payload.data.data;
            return {
                ...state,
                top5PC: top5PC
            };
        case actionTypes.TOP_PC_RANKING:
            const topPCRanking = action.payload.data.data;
            return {
                ...state,
                topPCRanking: topPCRanking
            }
        case actionTypes.TOP_HOURS_WATCHED_RANKING:
            const hoursWatchedRanking = action.payload.data.data;
            return {
                ...state,
                hoursWatchedRanking: hoursWatchedRanking
            }
        case actionTypes.GAME_ID:
            const gameId = action.payload.data[0].id;
            return {
                ...state,
                gameId: gameId
            }
        case actionTypes.GAME_DETAILS:
            const gameDetails = action.payload
            return {
                ...state,
                gameDetails: gameDetails
            }
        case actionTypes.SAVE_GAME:
            let newSavedGames = [
                ...state.savedGames
            ];
            newSavedGames = [...newSavedGames, action.payload]
            return {
                ...state,
                savedGames: newSavedGames
            }
        case actionTypes.DELETE_GAME:
            let updatedGames = [
                ...state.savedGames
            ];
            updatedGames.splice(
                updatedGames.findIndex(e => e.name === action.payload),
                1
            )
            return {
                ...state,
                savedGames: updatedGames
            }
        default:
            return state;
    }

};



export default reducer;