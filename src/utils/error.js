export const getErrorMessage = (defaultErrorMessage, error = {}) => {
  if (error.message) {
    const message = error.message.toString();
    let errorMessage = message || "";
    if (message.includes("email") && message.includes("duplicate"))
      errorMessage = "Email Already Exist... Please Try another Email..."
    console.log('error => ', errorMessage)
    return errorMessage;
  } else return defaultErrorMessage;
}