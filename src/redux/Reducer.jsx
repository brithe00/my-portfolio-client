/* ===== ACTIONS ==== */

const changeToken = (newToken) => ({
    type: 'CHANGE_TOKEN',
    newToken,
});

/* ==== REDUCER ===== */

const typeReducer = (state = { token: null }, action) => {
    switch (action.type) {
        case 'CHANGE_TOKEN':
            return {
                ...state,
                token: action.newToken,
            };
        default:
            return state;
    }
};

export default typeReducer;
export { changeToken }