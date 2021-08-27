const letterGuessed = (state = " ", action) => {
    switch(action.type){
        case 'LETTERGUESSED':
            return state = action.payload;
        default: {
            return state
        }
    }
}
export default letterGuessed;