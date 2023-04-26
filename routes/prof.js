import  express from 'express'
import { getAllProf, postProf } from '../controllers/prof.js';

const router = express.Router();

router.get('/', getAllProf)
router.post('/', postProf)

export default router