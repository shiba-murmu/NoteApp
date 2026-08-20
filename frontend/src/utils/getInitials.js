// ==========================================
// Get First Letter of User Name
// ==========================================

export const getInitial = (name = "") => {
  if (!name.trim()) return "?";

  return name.trim().charAt(0).toUpperCase();
};