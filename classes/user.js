const LDAP = require('../interfaces/LDAP')
const jwt = require('jsonwebtoken')
const {
    tokensecret
} = require('../conf')
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
                var {
                    sAMAccountName,
                    mail
                } = data[0]
                this.findOne({
                    $or: [{
                        email: mail
                    }, {
                        account: sAMAccountName
                    }]
                }, '_id fio branch type email account').then(user => {
                    if (user) {
                        user.token = jwt.sign({
                            email: user.email,
                            name: user.fio
                        }, tokensecret.length ? tokensecret : 'tokensecret');
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