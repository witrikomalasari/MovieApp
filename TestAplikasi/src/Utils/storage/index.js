import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataLocalStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('LocalStorage Gagal menyimpan Data', error);
  }
};

export const getDataLocalStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value !== null) {
      return JSON.parse(value); //data JSON.stringify diubah menjadi JSON.parse (type data objek)
    }
  } catch (error) {
    console.log('Gagal tarik data dari Local Storage', error);
  }
};
