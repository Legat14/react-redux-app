function isNotEmpty(obj: Object): boolean {
  if (Object.entries(obj).length > 0) {
    return true;
  }
  return false;
}

export default isNotEmpty;
