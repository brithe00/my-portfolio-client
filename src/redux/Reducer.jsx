/* ===== ACTIONS ==== */

const changeToken = (newToken) => ({
    type: 'CHANGE_TOKEN',
    newToken,
});

const dataId = (newDataId) => ({
    type: 'DISPLAY_DATAID',
    newDataId
});

/* ==== REDUCER ===== */

const typeReducer = (state = { token: null, dataProjectId: null }, action) => {
    switch (action.type) {
        case 'CHANGE_TOKEN':
            return {
                ...state,
                token: action.newToken,
            };
        case 'DISPLAY_DATAID':
            return {
                ...state,
                dataProjectId: action.newDataId
            };
        default:
            return state;
    }
};

export default typeReducer;
export { changeToken, dataId }