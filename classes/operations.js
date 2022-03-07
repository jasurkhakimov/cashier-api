class Operation {
    static getName() {
        return 'Operation'
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

module.exports = Operation;