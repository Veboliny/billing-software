// // authService.js
// const { ipcRenderer } = require('electron');

// export async function checkFileExistence(filePath) {
//   try {
//     const exists = await ipcRenderer.invoke('check-file-existence', filePath);
//     return exists;
//   } catch (error) {
//     console.error('Erreur lors de la vérification du fichier :', error);
//     return false;
//   }
// }
