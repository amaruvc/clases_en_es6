import { Cliente } from "./cliente.js";
import { Impuesto } from "./impuesto.js";

$("#card-result").hide();
$("#calculadorImpuesto").submit(function (ev) {
  ev.preventDefault();
  $("#card-result").hide();
  const nombreCliente = $("#nombre").val();
  const rentaCliente = $("#rentaBrutaAnual").val();
  const deduccionCliente = $("#deducciones").val();

  let impuestoCliente = new Impuesto(rentaCliente, deduccionCliente);
  let clienteNuevo = new Cliente(nombreCliente, impuestoCliente);
  $("#card-result").show();
  $("#resultado").html(`Los impuestos son: ${clienteNuevo.calcularImpuesto()}`);
});
