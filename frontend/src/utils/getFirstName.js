export const getFirstName = (name = "") => {
  const first = name.trim().split(" ")[0];
  return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
};