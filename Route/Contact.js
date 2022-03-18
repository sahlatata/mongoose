const express = require ("express")
const { AddContact, GetContact, DeleteContact, UpdateContact } = require("../Controllers/Contact")
const ContactRouter = express.Router()

ContactRouter.post('/addContact',AddContact)
ContactRouter.get('/getContact',GetContact)
ContactRouter.delete('/deleteContact/:id',DeleteContact)
ContactRouter.put('/updateContact/:id',UpdateContact)

module.exports= ContactRouter

