export const initialState = {
    isLoading: true,
    isSignedIn: false,
    userToken: null,
};

export default (prevState = initialState, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return {
                ...prevState,
                isLoading: false,
                isSignedIn: true,
                userToken: action.token,
            };
        case 'SIGN_OUT':
            return {
                ...prevState,
                isLoading: false,
                isSignedIn: false,
                userToken: null,
            };
    }
};