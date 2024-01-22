class User {
  constructor(iduser, username, password, name, address, phone, email) {
    this.iduser = iduser;
    this.username = username;
    this.password = password;
    this.name = name;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }
  static createUser(iduser, username, password, name, address, phone, email) {
    return new User(iduser, username, password, name, address, phone, email);
  }
}

export default User;
