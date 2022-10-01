function addBeforeUnloadEvent() {
  window.addEventListener('beforeunload', (): void => {
    localStorage.removeItem('searchInput');
  });
}

export default addBeforeUnloadEvent;
