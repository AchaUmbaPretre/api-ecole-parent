import  express from 'express'
import { getAllPub, postPub } from '../controllers/publications.js';

const router = express.Router();

router.get('/', getAllPub)
router.post('/', postPub)

export default router