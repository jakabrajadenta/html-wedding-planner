async function loadChecklist() {
  try {
    const response = await fetch(`./data/checklist.json?v=${Date.now()}`, {
      cache: 'no-cache'
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Failed to load checklist.json:', error);
  }
}

loadChecklist();
