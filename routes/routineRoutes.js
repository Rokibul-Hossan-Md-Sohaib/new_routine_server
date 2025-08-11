const express = require('express');
const router = express.Router();
const {
  addRoutine,
  getRoutines,
  updateRoutine,
  deleteRoutine,
  deleteAllRoutines, // 👈 Add this
} = require('../controllers/routineController');

// 👇 Always define fixed routes before dynamic ones
router.delete('/delete-all', deleteAllRoutines); // ✅ must come before /:id

router.post('/', addRoutine);
router.get('/', getRoutines);
router.put('/:id', updateRoutine);
router.delete('/:id', deleteRoutine);

module.exports = router;
