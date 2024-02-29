class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password =password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User("mitul", "abc2gmail.com", "567")
console.log(user.encryptPassword());
console.log(user.changeUsername());

// behind the scene

function Userinfo(username, email, password){
    this.username = username
    this.email = email
    this.password =password
}

Userinfo.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Userinfo.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const userdata = new Userinfo("mitul", "def@gmail.com", "456")
console.log(userdata.encryptPassword());
console.log(userdata.changeUsername());