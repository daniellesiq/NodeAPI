const mongoose = require("mongoose");
const Customer = mongoose.model("Customer");

module.exports = {
    async index(req, res){
        const {page = 1} = req.query;
        const customers = await Customer.paginate({},{page,limit:10});
        return res.json(customers);
    },

    async show(req, res){
        const customers = await Customer.findById(req.params.id);
        return res.json(customers);
    },

    async store(req, res){
        const customers = await Customer.create(req.body);
        return res.json(customers);
    },

    async update(req, res){
        const customers = await Customer.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.json(customers);
    },

    async destroy(req, res){
       await Customer.findByIdAndDelete(req.params.id);
       return res.send();
    }
};