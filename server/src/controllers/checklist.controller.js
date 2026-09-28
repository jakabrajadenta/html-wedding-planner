import prisma from '../lib/prisma.js';

export async function getChecklistItems(req, res) {
  const items = await prisma.checklistItem.findMany({
    orderBy: { createdAt: 'asc' },
  });
  res.json(items);
}

export async function createChecklistItem(req, res) {
  const { title, category, dueDate, notes } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ error: 'title is required' });
  }

  const item = await prisma.checklistItem.create({
    data: {
      title: title.trim(),
      category: category || null,
      dueDate: dueDate ? new Date(dueDate) : null,
      notes: notes || null,
    },
  });

  res.status(201).json(item);
}

export async function updateChecklistItem(req, res) {
  const { id } = req.params;
  const { title, category, isDone, dueDate, notes } = req.body;

  try {
    const item = await prisma.checklistItem.update({
      where: { id },
      data: {
        ...(title !== undefined && { title }),
        ...(category !== undefined && { category }),
        ...(isDone !== undefined && { isDone }),
        ...(dueDate !== undefined && { dueDate: dueDate ? new Date(dueDate) : null }),
        ...(notes !== undefined && { notes }),
      },
    });
    res.json(item);
  } catch (error) {
    res.status(404).json({ error: 'Checklist item not found' });
  }
}

export async function deleteChecklistItem(req, res) {
  const { id } = req.params;

  try {
    await prisma.checklistItem.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'Checklist item not found' });
  }
}
