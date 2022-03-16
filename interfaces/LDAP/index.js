const {
    ldap
} = require('../../conf');
const ldapjs = require('ldapjs');
// const {
//     authErrorMSG,
//     successMSG
// } = require('../../components/responseForm')

class LDAP {

    constructor(obj) {
        this.login = obj.login;
        this.password = obj.password
    }
    // create connection to LDAP server
    connect() {
        return ldapjs.createClient({
            url: ldap
        })
    }

    // authorize given login and password pair
    authorize() {
        const client = this.connect();
        return new Promise((resolve, reject) => {
            this.login = this.sanitize();
            var filterString = '(&(objectClass=user)(|(userPrincipalName=' + this.login + ')(sAMAccountName=' + this.login + ')))';
            client.bind(this.login, this.password, (err) => {
                if (err) {
                    reject(err);
                } else {
                    const opts = {
                        filter: filterString,
                        scope: 'sub',
                        paged: true,
                        sizeLimit: 10000,
                        attributes: ['givenName', 'sn', 'userPrincipalName', 'sAMAccountName', 'mail']
                    };
                    const searchResult = []
                    client.search('DC=IPAKYULIBANK,DC=UZ', opts, (err, res) => {
                        res.on('searchEntry', async (entry) => {
                            searchResult.push(entry.object)
                        });
                        res.on('error', (err) => {
                            reject(err)
                        });
                        res.on('end', (result) => {
                            resolve(searchResult)
                            client.unbind(err => {
                                if (err) {
                                    reject(err)
                                }
                            })
                        });
                    });
                }
            });
        })
    }
    // complete login
    sanitize() {
        var reg = /^[\w-\.]+@ipakyulibank.uz$/
        if (!reg.test(this.login)) {
            return this.login += '@ipakyulibank.uz'
        } else {
            return this.login
        }
    }

}

module.exports = LDAP;