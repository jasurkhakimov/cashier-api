const LDAP = require('../interfaces/LDAP')
class User {
    static addItem() {
        return new Promise((resolve, reject) => {
            resolve(1)
        })
    }

    static login(obj) {
        const ldap = new LDAP(obj);
        return new Promise((resolve, reject) => {
            ldap.authorize().then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static getItems() {
        return new Promise((resolve, reject) => {
            resolve(1)
        })
    }
}
module.exports = User;