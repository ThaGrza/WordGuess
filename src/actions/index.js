export const themeChange = (themeTitle, themeBck, themeWords) => {
    return {
        type: 'THEMECHANGE',
        payload: [themeTitle, themeBck, themeWords]
    };
};

export const letterGuessed = (letter) => {
    return {
        type: 'LETTERGUESSED',
        payload: [letter]
    };
};