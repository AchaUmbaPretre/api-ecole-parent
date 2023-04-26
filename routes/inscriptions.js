import  express from 'express'
import { getAllInscrip, getInscrip, postInscrip } from '../controllers/inscriptions.js';

const router = express.Router();

router.get('/', getAllInscrip)
router.get('/:id', getInscrip)
router.post('/', postInscrip)

export default router