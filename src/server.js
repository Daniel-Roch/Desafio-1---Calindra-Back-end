const app = require('./app')

app.listen(
    process.env.PORT || 5000,
    ()=> console.log(`${process.env.NODE_ENV}: http://localhost:${process.env.PORT}`) 
)