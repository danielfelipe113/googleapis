"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller = require("./vision.controller");
const colors = require('colors/safe');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
class default_1 {
    constructor() {
        this.router = express_1.Router();
    }
    routes() {
        this.router.post('/', upload.single('image'), controller.analyzeImage);
        return this.router;
    }
}
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvdmlzaW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUNBQWlDO0FBQ2pDLGtEQUFrRDtBQUNsRCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDdEMsTUFBTSxNQUFNLEdBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBRTVDO0lBRUU7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV2RSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0NBQ0Q7QUFYRiw0QkFXRSIsImZpbGUiOiJzcmMvYXBpL3Zpc2lvbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgY29udHJvbGxlciBmcm9tICcuL3Zpc2lvbi5jb250cm9sbGVyJztcbmNvbnN0IGNvbG9ycyA9IHJlcXVpcmUoJ2NvbG9ycy9zYWZlJyk7XG5jb25zdCBtdWx0ZXIgID0gcmVxdWlyZSgnbXVsdGVyJyk7XG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBkZXN0OiAndXBsb2Fkcy8nIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIHJvdXRlcjogUm91dGVyO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvdXRlciA9IFJvdXRlcigpO1xuICB9XG5cbiAgcm91dGVzKCkge1xuICAgIHRoaXMucm91dGVyLnBvc3QoJy8nLCB1cGxvYWQuc2luZ2xlKCdpbWFnZScpLCBjb250cm9sbGVyLmFuYWx5emVJbWFnZSk7XG5cbiAgICByZXR1cm4gdGhpcy5yb3V0ZXI7XG4gIH1cbiB9XG4iXX0=
