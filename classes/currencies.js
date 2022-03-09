class Currency {
    static getName() {
        return 'Currency'
    }

    static addItem(obj) {
        return new Promise((resolve, reject) => {
            this.create(obj).then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static getItems() {
        return new Promise((resolve, reject) => {
            this.find().then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

module.exports = Currency;