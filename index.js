// prototype concept

let user = {
  name: 'Anonymos',
  access: ['Home', 'Dashbaord', 'userList'],

  set SetName(value) {
    this.name = value;
  },

  get getName() {
    return this.name;
  },
};

// console.log(user);

let admin = {
  isAdmin: true,
  __proto__: user,
};
admin.SetName = 'Admin 2';
admin.access = user.access;

console.log(admin);
console.log(user);
