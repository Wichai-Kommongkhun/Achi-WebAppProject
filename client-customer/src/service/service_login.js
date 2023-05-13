import Api from './api';

// Module code by Wichai
export default {
    async login(object_login) {
        try {
            const login = await Api().post('http://localhost:4000/login-post', object_login);
            document.cookie = "token_login="+login.data.token;
            return login;
        } catch (err) {
            console.log("Error at login service");
            console.log(err);
        }
    },
    async logout() {
        try {
            var date = new Date();
            document.cookie = "token=; expires=" + date; // unsetCookie by time_out
            localStorage.removeItem('username');
        } catch (err) {
            console.log("Error at logout");
            console.log(err);
        }
    },
    //set_LocalStore_Expiry ref https://www.sohamkamani.com/javascript/localstorage-with-ttl-expiry/
    async set_LocalStore_Expiry(key, value, ttl) {
        const now = new Date()
        // `item` is an object which contains the original value
        // as well as the time when it's supposed to expire
        const item = {
            value: value,
            expiry: now.getTime() + ttl,
        }
        localStorage.setItem(key, JSON.stringify(item))
    },
    async getWithExpiry(key) {
        const itemStr = localStorage.getItem(key)
        // if the item doesn't exist, return null
        if (!itemStr) {
            return null
        }
        const item = JSON.parse(itemStr)
        const now = new Date()
        // compare the expiry time of the item with the current time
        console.log(now.getTime(), item.expiry);
        if (now.getTime() > item.expiry) {
            // If the item is expired, delete the item from storage
            // and return null
            localStorage.removeItem(key)
            return null
        }
        return item.value
    }

};
