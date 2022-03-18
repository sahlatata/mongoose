const Contact = require("../Model/Contact")
exports.AddContact = async(req,res)=>{
    try {
    const NewContact = new Contact(req.body)
    const founded = await Contact.findOne({email:req.body.email})
    if(founded){
    return res.status(400).send('Email already exist')
    }
    await NewContact.save()
    res.status(200).send({NewContact,Msg :'contact added '})  
    } catch (error) {
    res.status(500).send('could not add contact') 
    }
}

exports.GetContact = async(req,res)=>{
try {
const Contacts = await Contact.find()
res.status(200).send({Contacts,Msg:'List of contact'})    
} catch (error) {
res.status(500).send('could not show')       
    }
}
exports.DeleteContact = async(req,res)=>{
    try {
    const {id}=req.params
    const Delcontact = await Contact.findByIdAndDelete(id)
    res.status(200).send('Contact deleted')    
    } catch (error) {
    res.status(500).send('could delete')       
        }
    }

exports.UpdateContact =async(req,res)=> {
    try {
    const {id} = req.params
    const upContact = await Contact.findByIdAndUpdate(id,{$set : req.body})
    res.status(200).send('contact updated')
    } catch (error) {
        res.status(500).send('could update')  
    }
}