import EmployeeModel from "../model/Employe.js";
import uplode from '../middleware/uplode.js';
class EmployeeController{

    static createDoc = async (req, res) =>{
        console.log(req.file);
       try {
            // const {name, price, file} = req.body;
            const doc = new EmployeeModel({
                name: req.body.name,
                price: req.body.price,
                image: req.file.filename
            })
            console.log(doc);

            // Save Dat
            const result = await doc.save()
             console.log(result);
            res.redirect('/employee')
       } catch(error) {

       }
    }

    static getAllDoc = async (req, res) =>{
        try{
            const result = await EmployeeModel.find()
            // console.log(result);
            res.render("index", {data : result})
        } catch (err) {
            console.log(err)
        }
        
    }

    static deleteDocById = async (req, res) =>{
        // console.log(req.params.id);
        try {
            const result = await EmployeeModel.findByIdAndDelete(req.params.id)
            res.redirect("/employee")
        }
        catch (err) {
            console.log(err);
        }
        
    }
}

export default EmployeeController