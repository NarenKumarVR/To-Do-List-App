const user = [];

module.exports = class UserData{

    constructor(u,p,e){

        this.user = u;
        this.pass = p;
        this.email = e;
    }

    save(){
        user.push(this);
    }

    static fetchAll(){
        return user;
    }
}