const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    titulo:String,
    preview:String,
    descripción:String,
    body:String,
    index:String
})

postSchema.statics.getAllPost = async function(){
    const allpost = await this.find()
    return (allpost.length != 0) ? allpost : false
}

postSchema.statics.update = async function(newValue){
    const quer = {titulo: "Godzilla vs Mechagodzilla"}
    const nval = {$set:{body: newValue}}
    this.updateOne(quer, nval, (err, resu)=>{
        if(err) throw err
        console.log("Se Cambio correctamente")
    })
}

postSchema.statics.getNews = async function(){
    return await this.find().sort({x:1})
}

postSchema.statics.getPost = async function(val){
    const foundPost = await this.findOne({index:val});
    return foundPost ? foundPost : false;
}

module.exports = mongoose.model('Proyecto', postSchema)