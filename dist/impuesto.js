"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Impuesto = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Impuesto = /*#__PURE__*/function () {
  function Impuesto(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuesto);

    this.montoBrutoAnual = montoBrutoAnual;
    this.deducciones = deducciones;
  }

  _createClass(Impuesto, [{
    key: "getMontoBrutoAnual",
    value: function getMontoBrutoAnual() {
      return this.montoBrutoAnual;
    }
  }, {
    key: "setMontoBrutoAnual",
    value: function setMontoBrutoAnual(nuevoMonto) {
      this.montoBrutoAnual = nuevoMonto;
    }
  }, {
    key: "getDeducciones",
    value: function getDeducciones() {
      return this.deducciones;
    }
  }, {
    key: "setDeducciones",
    value: function setDeducciones(nuevaDeduccion) {
      this.deducciones = nuevaDeduccion;
    }
  }]);

  return Impuesto;
}();

exports.Impuesto = Impuesto;