const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrent;
const getIsLoading = state => state.auth.isLoading;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getIsFetchingCurrent,
    getIsLoading,
};

export default authSelectors;