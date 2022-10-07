function showCreateCardConfirmation(confirmationDiv: HTMLDivElement): void {
  if (confirmationDiv) {
    confirmationDiv.classList.remove('confirmation__div_disabled');
    setTimeout((): void => {
      if (confirmationDiv) {
        confirmationDiv.classList.add('confirmation__div_disabled');
      }
    }, 2500);
  }
}

export default showCreateCardConfirmation;
