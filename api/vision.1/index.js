"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller = require("./vision.controller");
const colors = require('colors/safe');
class default_1 {
    constructor() {
        this.router = express_1.Router();
    }
    routes() {
        this.router.get('/', controller.analyzeImage);
        return this.router;
    }
}
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcGkvdmlzaW9uLjEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxQ0FBaUM7QUFDakMsa0RBQWtEO0FBQ2xELE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUV0QztJQUVFO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Q0FDRDtBQVhGLDRCQVdFIiwiZmlsZSI6InNyYy9hcGkvdmlzaW9uLjEvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCAqIGFzIGNvbnRyb2xsZXIgZnJvbSAnLi92aXNpb24uY29udHJvbGxlcic7XG5jb25zdCBjb2xvcnMgPSByZXF1aXJlKCdjb2xvcnMvc2FmZScpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gIHJvdXRlcjogUm91dGVyO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJvdXRlciA9IFJvdXRlcigpO1xuICB9XG5cbiAgcm91dGVzKCkge1xuICAgIHRoaXMucm91dGVyLmdldCgnLycsIGNvbnRyb2xsZXIuYW5hbHl6ZUltYWdlKTtcblxuICAgIHJldHVybiB0aGlzLnJvdXRlcjtcbiAgfVxuIH0iXX0=
