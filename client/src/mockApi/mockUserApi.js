import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
  {
    _id: 'akdjflndfungas',
    name: 'Jerick Bilalat',
    title: 'Chairman',
    userType: 'admin'
  },
  {
    _id: 'fdsfzmuebibnjk',
    name: 'Mel Bilalat',
    title: 'Secretary',
    userType: 'admin'
  },
  {
    _id: 'dfjlsdjfbunels',
    name: 'John Doe',
    title: 'Clerk',
    userType: 'default'
  },
  {
    _id: 'xmvyeovnjbdh',
    name: 'Jane Doe',
    title: 'Clerk',
    userType: 'default'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generate_id = (user) => {
  return user.firstName.toLowerCase() + '-' + user.lastName.toLowerCase();
};

class userApi {
  static getAllusers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveuser(user) {
    user = Object.assign({}, user); // to avo_id manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-s_ide val_idation
        const minuserNameLength = 3;
        if (user.firstName.length < minuserNameLength) {
          reject(`First Name must be at least ${minuserNameLength} characters.`);
        }

        if (user.lastName.length < minuserNameLength) {
          reject(`Last Name must be at least ${minuserNameLength} characters.`);
        }

        if (user._id) {
          const existinguserIndex = users.findIndex(a => a._id == user._id);
          users.splice(existinguserIndex, 1, user);
        } else {
          //Just simulating creation here.
          //The server would generate _ids for new users in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          user._id = generate_id(user);
          users.push(user);
        }

        resolve(user);
      }, delay);
    });
  }

  static deleteuser(user_id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfuserToDelete = users.findIndex(user => {
          return user.user_id == user_id;
        });
        users.splice(indexOfuserToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default userApi;
