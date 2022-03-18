const LDAP = require('../interfaces/LDAP')
class User {
    static addItem(obj) {
        return new Promise((resolve, reject) => {
            this.create(obj).then(user => {
                resolve(user)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static login(obj) {
        const ldap = new LDAP(obj);
        return new Promise((resolve, reject) => {
            ldap.authorize().then(data => {
                this.findOne({
                    $or: [{
                        email: data.mail
                    }, {
                        account: data.sAMAccountName
                    }]
                }).then(user => {
                    if (user) {
                        resolve(user)
                    } else {
                        reject('User cannot be found!')
                    }
                }).catch(err => {
                    reject(err)
                })
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