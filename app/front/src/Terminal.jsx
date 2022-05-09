import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery.terminal';
import 'jquery.terminal/css/jquery.terminal.min.css';
import commands from './commands';

const Terminal = () => {
  const terminalNode = useRef();

  useEffect(() => {
    const terminal = $(terminalNode.current).terminal(commands, {
      prompt: '# ',
      checkArity: false,
    });
    terminal.clear();

    return () => terminal.destroy();
  }, []);

  return <div id='terminal' ref={terminalNode} />;
};

export default Terminal;
