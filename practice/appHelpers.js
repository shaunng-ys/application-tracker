// addApplication();
export const addApplication = (appArr, newApp) => {
  const newArr = [...appArr];
  newArr.push(newApp);
  return newArr;
};

// updateStatus();
export const updateStatus = (apps, id, newStatus) =>
  apps.map((app) => (app.id === id ? { ...app, status: newStatus } : app));

// removeApplication();
export const removeApplication = (apps, id) =>
  apps.filter((app) => (app.id !== id ? true : false));
