const LDAP = require('../interfaces/LDAP')
class Auth {
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
}

module.exports = Auth;