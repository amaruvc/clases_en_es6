export class Cliente {
  constructor(nombre, impuesto) {
    this.nombre = nombre;
    this.impuesto = impuesto;
  }
  getNombre() {
    return this.nombre;
  }
  setNombre(nuevo_nombre) {
    this.nombre = nuevo_nombre;
  }
  calcularImpuesto() {
    const montoBrutoAnual = this.impuesto.getMontoBrutoAnual();
    const deducciones = this.impuesto.getDeducciones();

    return (montoBrutoAnual - deducciones) * 0.21;
  }
}
