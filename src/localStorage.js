export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (err) {
        console.log(err);
    }
};

export const loadTheme = () => {
    try {
        const theme = localStorage.getItem('theme');
        if (theme === null) {
            localStorage.setItem('theme', 'light');
        } 
        return theme;
    } catch (err) {
        return undefined;
    }
}

export const saveTheme = (theme) => {
    try {
        localStorage.setItem('theme', theme);
    } catch (err) {
        console.log(err);
    }
}