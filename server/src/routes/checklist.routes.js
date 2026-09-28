import { Router } from 'express';
import {
  getChecklistItems,
  createChecklistItem,
  updateChecklistItem,
  deleteChecklistItem,
} from '../controllers/checklist.controller.js';

const router = Router();

router.get('/', getChecklistItems);
router.post('/', createChecklistItem);
router.patch('/:id', updateChecklistItem);
router.delete('/:id', deleteChecklistItem);

export default router;
