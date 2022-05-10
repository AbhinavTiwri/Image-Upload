import express from 'express';
const router = express.Router();
import EmployeeController from '../controller/employeeController.js';
import uplode from '../middleware/uplode.js';

router.get('/', EmployeeController.getAllDoc);
router.post('/',uplode.single('image'), EmployeeController.createDoc);
router.post('/delete/:id', EmployeeController.deleteDocById);

export default router;