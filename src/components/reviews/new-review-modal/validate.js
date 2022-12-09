export function validateNickname(nickname) {
  if (!nickname || nickname.trim() === '') {
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

export function validateRecommend(recommendation) {
  if (recommendation === null) {
    return false;
  }
  return true;
}

export function validateRating(rating) {
  return !!rating;
}

export function validateCharacteristics(input, expected) {
  return (Object.keys(expected).length === Object.keys(input).length);
}

export function validateBody(body) {
  if (!body || body.length < 50) {
    return false;
  }
  return true;
}

export function validatePhotos(photos) {
  if (photos.length > 5) return false;
  return true;
}
