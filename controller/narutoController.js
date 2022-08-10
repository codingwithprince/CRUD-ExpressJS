import { narutoModel } from '../model/Naruto.js'

class narutoController{

    static indexPage = async(req, res) => {
        try {
            const result = await narutoModel.find()
            res.render('index', { title: 'Home', data: result})
        } catch (error) {
            console.log(error);
        }
    }

    static insertDocument = async(req, res) =>{ 
        try {
            console.log(req.body.active)
            const { name, age, clan, cn, active} = req.body;
            const shinobiDoc = narutoModel({
                name: name,
                age: age,
                clan: clan,
                cn: cn,
                active: active
            })
            await shinobiDoc.save()
            res.redirect('/shinobi')
        } catch (error) {
            console.log(error);
        }
    }

    static deleteDocument = async(req, res) => {
        try {
            await narutoModel.findByIdAndDelete(req.params.id)
            res.redirect('/shinobi')
        } catch (error) {
            console.log(error);
        }
    }

    static editDocument = async(req, res) => {
        try {
            const result = await narutoModel.findById(req.params.id)
            res.render('update', {title: 'Update', data: result})
        } catch (error) {
            console.log(error);
        }
    }

    static updateDcument = async(req, res) => {
        try {
            await narutoModel.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/shinobi')
        } catch (error) {
            console.log(error);
        }
    }
}


export default narutoController;