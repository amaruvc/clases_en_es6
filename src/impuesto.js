export class Impuesto {
  constructor(montoBrutoAnual, deducciones) {
    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }
  getMontoBrutoAnual() {
    return this.montoBrutoAnual;
  }
  setMontoBrutoAnual(nuevoMonto) {
    this.montoBrutoAnual = nuevoMonto;
  }
  getDeducciones() {
    return this.deducciones;
  }
  setDeducciones(nuevaDeduccion) {
    this.deducciones = nuevaDeduccion;
  }
}
