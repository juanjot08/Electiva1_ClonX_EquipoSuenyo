const LocalStorageService = {

  setItem: (key, value) => {
    if (!key) {
      console.error("No se ha proporcionado una clave válida.");
      return;
    }
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error(`Error al guardar en localStorage: ${error}`);
    }
  },

  getItem: (key) => {
    if (!key) {
      console.error("No se ha proporcionado una clave válida.");
      return null;
    }
    try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
    } catch (error) {
      console.error(`Error al obtener el valor de localStorage: ${error}`);
      return null;
    }
  },

  removeItem: (key) => {
    if (!key) {
      console.error("No se ha proporcionado una clave válida.");
      return;
    }
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error al eliminar del localStorage: ${error}`);
    }
  },

  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error(`Error al limpiar localStorage: ${error}`);
    }
  },

  exists: (key) => {
    if (!key) {
      console.error("No se ha proporcionado una clave válida.");
      return false;
    }
    return localStorage.getItem(key) !== null;
  },
};

export default LocalStorageService;
