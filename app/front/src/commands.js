import $ from 'jquery';

class Commands {
  constructor(_db) {
    this.db = _db;
  }
  newCommand(callback) {
    return (...args) => {
      const opts = $.terminal.parse_options(args);
      return callback(opts);
    };
  }
  _cmds = {
    ls: this.newCommand((opts) => {
      const list = this.db.listAll();
      console.log(list);
      return 'ls';
    }),
    cd: this.newCommand((opts) => {
      return 'cd';
    }),
  };
}

export default Commands;
