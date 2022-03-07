class Branch {
    static getName() {
        return 'Branch'
    }

    static addBranch(obj) {
        return new Promise((resolve, reject) => {
            this.create(obj).then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
        })
    }

    static getBranches() {
        return new Promise((resolve, reject) => {
            this.find().then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
        })
    }
}

module.exports = Branch;