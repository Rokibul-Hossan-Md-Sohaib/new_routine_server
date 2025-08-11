const Routine = require('../models/Routine');

// Create
exports.addRoutine = async (req, res) => {
  try {
    const { teacherIds, teacherNames, ...rest } = req.body;

    // Save teacherIds as string array directly, no conversion
    const routine = await Routine.create({
      ...rest,
      teacherIds: teacherIds,
      teacherNames: teacherNames || [],
    });

    res.status(201).json(routine);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Read
exports.getRoutines = async (req, res) => {
  try {
    const routines = await Routine.find();
    res.json(routines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
exports.updateRoutine = async (req, res) => {
  try {
    const { teacherIds, teacherNames, ...rest } = req.body;

    const updated = await Routine.findByIdAndUpdate(
      req.params.id,
      {
        ...rest,
        teacherIds: teacherIds,
        teacherNames: teacherNames || [],
      },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete
exports.deleteRoutine = async (req, res) => {
  try {
    await Routine.findByIdAndDelete(req.params.id);
    res.json({ message: 'Routine deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Delete all routines
exports.deleteAllRoutines = async (req, res) => {
  try {
    await Routine.deleteMany({});
    res.json({ message: 'All routines deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

