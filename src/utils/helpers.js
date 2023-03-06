export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function validateName(name) {
    const re = /^[A-Za-z]+/;
    if (re.test(name)) {
      return true;
    }
    return false;
  }
  
  export function validateMessage(message) {
    const re = /^[A-Za-z0-9]+/;
    if (re.test(message)) {
      return true;
    }
    return false;
  }
  