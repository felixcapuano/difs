import $ from 'jquery';

const newCommand = (callback) => {
  return (...args) => {
    const opts = $.terminal.parse_options(args);
    return callback(opts);
  };
};

const commands = {
  ls: newCommand((opts) => {
    return 'ls';
  }),
  cd: newCommand((opts) => {
    return 'cd';
  }),
};

export default commands;
