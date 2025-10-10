export const loadAllApps = async () => {
  const res = await fetch("/allAppsData.json");
  if (!res.ok) throw new Error("Failed to load all apps data");
  return res.json();
};