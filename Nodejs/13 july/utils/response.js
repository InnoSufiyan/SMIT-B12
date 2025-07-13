export const sendSuccess = (status, message, data) => {
  return {
    status,
    message,
    data,
  }; 
}
export const sendError = (status, message, error) => {
  return {
    status,
    message,
    error,
  };
};