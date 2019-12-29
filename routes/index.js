const db = require ('./models/workout1.js')
const router = require ('express').Router()

router.get('/api/alltransaction', (request, response){
    db.find(({})).then(function(records){
        response.json(records)
    })
    .catch((error){
        response.send(error)
    })
})

router.get('/api/alltransaction', (request, response){
    db.find(({})).then(function(records){
        response.json(records)
    })
    .catch((error){
        response.send(error)
    })
})
