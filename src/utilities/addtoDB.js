
const getInstalledApp = () => {
  const storedApp = localStorage.getItem("appList");
  if (storedApp) {
    
    return JSON.parse(storedApp).map(Number);
  } else {
    return [];
  }
};


const addStoredDB = (id) => {
  const AppData = getInstalledApp();

  
  if (AppData.includes(id)) {
  
    return false;
  }

  AppData.push(id);
  localStorage.setItem("appList", JSON.stringify(AppData));
  
  return true;
};


const removeStoredDB = (id) => {
  const AppData = getInstalledApp();
  const remaining = AppData.filter((appId) => appId !== id);
  localStorage.setItem("appList", JSON.stringify(remaining));
  console.log("Updated LocalStorage:", remaining);
};

export { getInstalledApp, addStoredDB, removeStoredDB };
