export function validateQuestion(body) {
  if (!body || body.trim() === '') {
    return false;
  }
  return true;
}

export function validateNickname(name) {
  if (!name || name.trim() === '') {
    return false;
  }
  return true;
}

export function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return (true);
  }
  return false;
}
