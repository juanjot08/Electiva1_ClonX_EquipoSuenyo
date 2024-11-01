const SessionStorageService = {

  setItem: (key, value) => {
    if (!key) {
      console.error("No se ha proporcionado una clave válida.");
      return;
    }
    try {
      const serializedValue = JSON.stringify(value);
      sessionStorage.setItem(key, serializedValue);
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
      const serializedValue = sessionStorage.getItem(key);
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
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error(`Error al eliminar del localStorage: ${error}`);
    }
  },

  clear: () => {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error(`Error al limpiar localStorage: ${error}`);
    }
  },

  exists: (key) => {
    if (!key) {
      console.error("No se ha proporcionado una clave válida.");
      return false;
    }
    return sessionStorage.getItem(key) !== null;
  },
};

export default SessionStorageService;
