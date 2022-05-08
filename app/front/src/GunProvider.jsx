import Gun from 'gun';
import React, { useContext } from 'react';

const GunContext = React.createContext(null);

export const useGun = () => useContext(GunContext);

const GunProvider = ({ children }) => {
  const gun = Gun('http://localhost:8080/gun');
  window.gun = gun;

  return <GunContext.Provider value={gun}>{children}</GunContext.Provider>;
};

export default GunProvider;
