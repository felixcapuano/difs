class GunDb {
  FILE = 1;
  FOLDER = 2;
  constructor(_gun) {
    this.gun = _gun;
    this.root = this.gun.get('root');

    // //temp
    this.root.get('file1').put({ _n: 'file' });
    this.root.get('file2').put({ _n: 'file' });
    // this.root.get('folder1');
    // //temp

    this.relNode = this.root;
  }
  newFileNode(node, name, ext) {
    node.get(name).put({
      _t: this.FILE,
      _n: name,
      _e: ext,
      _d: '',
    });
  }
  newFolderNode(node, name) {
    node.get(name).put({
      _t: this.FOLDER,
      _n: name,
    });
  }

  listAll() {
    const list = [];
    this.relNode.map().once((data, name) => {
      console.log(name);
      list.push(name);
    });
    return list;
  }
  createFolderNode(path) {}
  createFileNode(path) {}
}

export default GunDb;
