const {
    createClient
} = require('redis');
const {
    redis,
    tokenTTL
} = require('../../conf');

async function redisConnection() {
    return new Promise(async (resolve, reject) => {
        const client = createClient({
            url: redis
        });

        await client.on('error', (err) => {
            console.log('Redis Client Error', err);
            reject(err)
        });
        await client.connect()
        resolve(client);
    })
}

// ------------------------- STRING ------------------------
// ------------------------- SET ---------------------------
async function set(key, value) {
    return new Promise((resolve, reject) => {
        redisConnection().then(async rd => {
            await rd.SET(key, value, {
                EX: tokenTTL
            }).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        }).catch(err => {
            reject(err)
        })
    })
}
// ------------------------- /SET --------------------------
// ------------------------- GET ---------------------------
async function get(key) {
    return new Promise((resolve, reject) => {
        redisConnection().then(async rd => {
            await rd.GET(key).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        }).catch(err => {
            reject(err)
        })
    })
}
// ------------------------- /GET --------------------------
// ------------------------- EXPIRE ---------------------------
async function expire(key, ex = null) {
    return new Promise((resolve, reject) => {
        redisConnection().then(async rd => {
            await rd.EXPIRE(key, ex == null ? tokenTTL : ex).then(data => {
                resolve(data)
            }).catch(err => {
                reject(err)
            })
        }).catch(err => {
            reject(err)
        })
    })
}
// ------------------------- /EXPIRE --------------------------
// ------------------------- /STRING -----------------------
module.exports = {
    set,
    get,
    expire
}