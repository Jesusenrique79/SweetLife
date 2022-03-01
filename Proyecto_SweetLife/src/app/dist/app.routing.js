"use strict";
exports.__esModule = true;
exports.routing = exports.appRoutingProviders = void 0;
var router_1 = require("@angular/router");
var view_component_1 = require("./components/view/view.component");
var appRoutes = [
    { path: '', component: view_component_1.ViewComponent },
    { path: 'vista-clientes', component: view_component_1.ViewComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
