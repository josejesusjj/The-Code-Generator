function domain() {
  let a = ["nuestro", "mi", "tu"];
  let b = ["piso", "apartamento", "chalet"];
  let c = [".com", ".es", ".net"];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      for (let k = 0; k < c.length; k++) {
        document.write(a[i] + b[j] + c[k]);
        document.write("<br/>");
      }
    }
  }
}
domain();
