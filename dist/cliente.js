"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cliente = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);

    this.nombre = nombre;
    this.impuesto = impuesto;
  }

  _createClass(Cliente, [{
    key: "getNombre",
    value: function getNombre() {
      return this.nombre;
    }
  }, {
    key: "setNombre",
    value: function setNombre(nuevo_nombre) {
      this.nombre = nuevo_nombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var montoBrutoAnual = this.impuesto.getMontoBrutoAnual();
      var deducciones = this.impuesto.getDeducciones();
      return (montoBrutoAnual - deducciones) * 0.21;
    }
  }]);

  return Cliente;
}();

exports.Cliente = Cliente;