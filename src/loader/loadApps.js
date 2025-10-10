
export const loadApps = async () => {
  const res = await fetch("/appsData.json");
  if (!res.ok) throw new Error("Failed to load apps data");
  return res.json();
};


