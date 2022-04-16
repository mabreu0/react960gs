export const PermanentBrowserStorage = {
    permanentStorage : window.localStorage,

    getUserById(_user) {
        return this.permanentStorage.getItem(_user);
    },

    putIntoStore(key, value) {
        this.permanentStorage.setItem(key, value);
    }
};