export const themeChange = (themeTitle, themeBck, themeWords) => {
    return {
        type: 'THEMECHANGE',
        payload: [{themeTitle,}]
    };
};