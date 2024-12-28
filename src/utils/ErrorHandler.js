import notify from "../services/notificationServices";

export const handleError = (error, customMessage = "An error occurred") => {
  console.error(error);
  const message =
    error.response?.data?.message || error.message || customMessage;
  notify.error(message);
};
