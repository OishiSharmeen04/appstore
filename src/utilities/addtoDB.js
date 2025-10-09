// utilities/addtoDB.js

// ✅ Local storage theke app list ane
const getInstalledApp = () => {
  const storedApp = localStorage.getItem("appList");
  if (storedApp) {
    return JSON.parse(storedApp);
  } else {
    return [];
  }
};

// ✅ App install korar function
const addStoredDB = (id) => {
  const AppData = getInstalledApp();

  // Duplicate check
  if (AppData.includes(id)) {
    alert("App already installed!");
    return;
  }

  AppData.push(id);
  localStorage.setItem("appList", JSON.stringify(AppData));
  alert("App installed successfully!");
};

// ✅ App uninstall korar function
const removeStoredDB = (id) => {
  const AppData = getInstalledApp();
  const remaining = AppData.filter((appId) => appId !== id);
  localStorage.setItem("appList", JSON.stringify(remaining));
  console.log("✅ Updated LocalStorage:", remaining);
};

export { getInstalledApp, addStoredDB, removeStoredDB };
