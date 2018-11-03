 module.exports = {
   port: process.env.PORT ||  8081,
   db: {
     database: process.env.DB_NAME || 'trackingtabs',
     user: process.env.DB_USER || 'trackingtabs',  
     password: process.env.DB_PASS || 'trackingtabs',
     options: {
       dialect: process.env.DIALECT || 'sqlite',
       host: process.env.HOST || 'localhost',
       storage: './trackingtabs.sqlite'
     }
   }
 }
 