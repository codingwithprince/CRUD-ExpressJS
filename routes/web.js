import express from 'express'
import narutoController from '../controller/narutoController.js';

const router = express.Router();


router.get('/',narutoController.indexPage);
router.post('/',narutoController.insertDocument);
router.post('/delete/:id', narutoController.deleteDocument);
router.get('/update/:id', narutoController.editDocument)
router.post('/update/:id', narutoController.updateDcument)


export default router;