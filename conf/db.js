const env = process.env.NODE_ENV

let MYSQL_CONF,REDIS_CONF

if (env === 'dev') {
    MYSQL_CONF = {
        host: '127.0.0.1',
        user: 'root',
        password: '123123',
        port: '3306',
        database: 'myblog'
    }

    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
} else {
    //生产环境
    MYSQL_CONF = {
        host: '127.0.0.1',
        user: 'root',
        password: '123123',
        port: '3306',
        database: 'myblog'
    }
    
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}