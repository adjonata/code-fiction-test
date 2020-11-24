export default {
  verifyForm(refs) {
    let status = true;
    for (let key in refs) {
      if ("validate" in refs[key] && !refs[key].validate()) status = false;
    }

    return status;
  },

  clearForm(form) {
    for (let key in form) {
      form[key] = null;
    }
    return form;
  },

  deepCopy(val) {
    return JSON.parse(JSON.stringify(val));
  },

  searchPrepare(val) {
    return val.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
};
