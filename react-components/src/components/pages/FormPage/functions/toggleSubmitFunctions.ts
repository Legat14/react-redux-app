export function enableSubmit(submitInput: HTMLInputElement): void {
  if (submitInput) {
    submitInput.disabled = false;
  }
}

export function disableSubmit(submitInput: HTMLInputElement): void {
  if (submitInput) {
    submitInput.disabled = true;
  }
}
