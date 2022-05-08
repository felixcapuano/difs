import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery.terminal';
import 'jquery.terminal/css/jquery.terminal.min.css';

const Terminal = () => {
  const terminalNode = useRef();
  useEffect(() => {
    const terminal = $(terminalNode.current).terminal();
    terminal.clear();
    // console.log(terminal);
    return () => terminal.destroy();
  }, []);

  return <div id='terminal' ref={terminalNode} />;
};

export default Terminal;
