export function openSnackbar(data) {
  return {
    type: 'OPEN_SNACKBAR',
    ...data,
  };
}
