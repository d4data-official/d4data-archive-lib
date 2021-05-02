"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deleteUndefinedProperties(obj) {
    const cleanedObject = Object.assign({}, obj);
    Object.entries(obj).forEach(([key, value]) => value === undefined && delete cleanedObject[key]);
    return cleanedObject;
}
exports.default = deleteUndefinedProperties;
