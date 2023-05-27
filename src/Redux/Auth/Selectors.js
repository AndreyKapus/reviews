const getIsLoggedIn = state => state.auth.isLogedIn;
const getUserName = state => state.auth.user.name;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
};

export default authSelectors;