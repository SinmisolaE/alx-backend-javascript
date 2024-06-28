export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = name;
    }

    if (typeof length !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._length = length;
    }

    if (!Array.isArray(students)) {
      throw new TypeError('Students must be an array');
    } else {
      this._students = students;
    }
  }

  get name() {
    return (this._name);
  }

  set name(na) {
    if (typeof na !== 'string'){
      throw new TypeError('Name must ba sa string');
    } else {
      this._name = na
    }
  }

  get length() {
    return (this._length);
  }

  set length(len) {
    if (typeof len !== 'string') {
      throw new TypeError('Length must ba a string');
    } else {
      this._length = len;
    }
  }

  get students() {
    return (this._students);
  }

  set students(studnt) {
    if (!Array.isArray(studnt)){
      throw new TypeError('Students must be an array');
    } else {
      this._students = studnt;
    }
  }
}
