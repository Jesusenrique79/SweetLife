"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewComponent = void 0;
var core_1 = require("@angular/core");
var cliente_1 = require("../../models/cliente");
var cliente_service_1 = require("../../services/cliente.service");
var ViewComponent = /** @class */ (function () {
    function ViewComponent(_clienteService) {
        this._clienteService = _clienteService;
        this.clientes = "Clientes Activos:";
        this.hora = "Hora:";
        this.cliente = new cliente_1.Cliente(1, 1, 1);
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent.prototype.onSubmit = function (form) {
        var _this = this;
        //GUARDAR LOS DATOS
        this._clienteService.saveCliente(this.cliente).subscribe(function (response) {
            if (response.cliente) {
                //this.save_cliente = response.cliente;
                _this.status = 'success';
                form.reset();
            }
            else {
                _this.status = 'failed';
            }
        }, function (error) {
            console.log(error);
        });
    };
    ViewComponent = __decorate([
        core_1.Component({
            selector: 'app-view',
            templateUrl: './view.component.html',
            styleUrls: ['./view.component.css'],
            providers: [cliente_service_1.ClienteService]
        })
    ], ViewComponent);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;
