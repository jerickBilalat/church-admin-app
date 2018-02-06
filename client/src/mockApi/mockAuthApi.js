
import delay from './delay';

const user = {
    _id: "fsdfjsdjk73746362",
    googleId: "435734758347593457834",
    name: "Jerick Bilalat",
    title: "Chairman",
    accountType: "admin",
    __v: 0
};



class UserApi{
    static fetchUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign({}, user));
              }, delay);
        })
    }
}

export default UserApi;