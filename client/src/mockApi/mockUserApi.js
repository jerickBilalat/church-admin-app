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
        
        user._id = generate_id(user);
        users.push(user);

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
