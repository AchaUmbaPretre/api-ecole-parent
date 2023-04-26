import  express from 'express'
import { getAllPresence, postPresence } from '../controllers/presences.js';

const router = express.Router();

router.get('/', getAllPresence)
router.post('/', postPresence)

export default router