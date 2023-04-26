import  express from 'express'
import { getAllEleves, getEleves,postEleves } from '../controllers/eleves.js';

const router = express.Router();

router.get('/', getAllEleves)
router.get('/:id', getEleves)
router.post('/posts', postEleves)

export default router