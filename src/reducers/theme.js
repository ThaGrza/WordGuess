const themeChange = (state = null, action) => {
    switch(action.type){
        case 'THEMECHANGE':
            return state + 1
        default: {
            return state
        }
    }
}
export default themeChange;