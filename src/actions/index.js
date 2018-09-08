export function complete(id) {
  return {
    type: "INCOMPLETE_TO_COMPLETE",
    id
  };
}

export function Add(text, length) {
  return {
    type: "ADD_TODO",
    text,
    length
  };
}
