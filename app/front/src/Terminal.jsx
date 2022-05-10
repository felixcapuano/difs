import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery.terminal';
import 'jquery.terminal/css/jquery.terminal.min.css';
import { useGun } from './GunProvider';
import Commands from './commands';
import GunDb from './db';

const Terminal = () => {
  const terminalRef = useRef();
  const gun = useGun();

  useEffect(() => {
    const gunDb = new GunDb(gun);
    const commands = new Commands(gunDb)._cmds;

    const terminal = $(terminalRef.current).terminal(commands, {
      prompt: '# ',
      checkArity: false,
    });

    terminal.clear();
    return () => terminal.destroy();
  }, []);

  return <div id='terminal' ref={terminalRef} />;
};

export default Terminal;
