const themeChange = (state = 0, action) => {
    switch(action.type){
        case 'THEMECHANGE':
            return state = action;
        default: {
            return state
        }
    }
}
export default themeChange;