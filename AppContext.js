// AppContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Membuat context
export const AppContext = createContext();

// Membuat provider untuk context
export const AppProvider = ({ children }) => {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('homeData');
        if (storedData) {
          setHomeData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error('Failed to load home data:', error);
      }
    };

    loadHomeData();
  }, []);

  const saveHomeData = async (data) => {
    try {
      await AsyncStorage.setItem('homeData', JSON.stringify(data));
      setHomeData(data);
      console.log('Data tersimpan:', data);
    } catch (error) {
      console.error('Failed to save home data:', error);
    }
  };

  return (
    <AppContext.Provider value={{ homeData, saveHomeData }}>
      {children}
    </AppContext.Provider>
  );
};