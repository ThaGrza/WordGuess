const themeChange = (state = 0, action) => {
    switch(action.type){
        case 'THEMECHANGE':
            return state = action.payload;
        default: {
            return state
        }
    }
}
export default themeChange;