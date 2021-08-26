export const letterGuessed = (letter) => {
    return {
        type: 'LETTERGUESSED',
        payload: [letter]
    };
};