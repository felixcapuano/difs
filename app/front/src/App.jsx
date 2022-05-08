import React, { useState, useEffect } from 'react';
import { useGun } from './GunProvider';
import Terminal from './Terminal';

const App = () => {
  const gun = useGun();

  const [cmd, setCmd] = useState('');

  useEffect(() => {
    console.log('useEffect');
  }, []);

  const clickHandler = () => {
    if (cmd === '') return;
    // setCmdHistory((ch) => {
    //   return ch + Commands['ls']() + '\n';
    // });

    // const time = moment().unix();
    // todos.get(time).put({ message: text });
    // setText('');
  };

  return (
    <div className='App'>
      <Terminal />
      {/* <ul>
        {todosList.map(({ message, id }) => (
          <div key={id}>{message}</div>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
