"use strict";

var _cliente = require("./cliente.js");

var _impuesto = require("./impuesto.js");

$("#card-result").hide();
$("#calculadorImpuesto").submit(function (ev) {
  ev.preventDefault();
  $("#card-result").hide();
  var nombreCliente = $("#nombre").val();
  var rentaCliente = $("#rentaBrutaAnual").val();
  var deduccionCliente = $("#deducciones").val();
  var impuestoCliente = new _impuesto.Impuesto(rentaCliente, deduccionCliente);
  var clienteNuevo = new _cliente.Cliente(nombreCliente, impuestoCliente);
  $("#card-result").show();
  $("#resultado").html("Los impuestos son: ".concat(clienteNuevo.calcularImpuesto()));
});