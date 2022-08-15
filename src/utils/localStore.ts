export const loadFromStore = (key: string): any | undefined => {
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e:any) {
    console.error(e.message);
    return undefined;
  }
};

export const saveToStore = (key: string, value: any): boolean => {
  try {
    if (value !== undefined) {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
      return true;
    }
    return false;
  } catch (e:any) {
    console.error(e.message);
    return false;
  }
};
