"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./components/errors/errors");
const index_1 = require("./api/vision/index");
const config = require('./config/config');
class default_1 {
    constructor(app) {
        this.app = app;
        this.errors = new errors_1.default();
        this.visionAPI = new index_1.default();
    }
    routes() {
        // Enable CORS
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Authorization, X-Requested-With');
            res.header('Access-Control-Max-Age', '3600');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            next();
        });
        // Insert routes below
        this.app.use('/api/vision', this.visionAPI.routes());
        // All undefined asset or api routes should return a 404
        this.app.route('/:url(api|auth|components|app|bower_components|assets)/*')
            .get(this.errors['pageNotFound']);
        // All other routes should redirect to the index.html
        this.app.route('*')
            .get((req, res) => {
            res.status(200).sendFile(config.rootPath + '/public/index.html');
        });
    }
}
exports.default = default_1;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1REFBZ0Q7QUFTaEQsOENBQTJDO0FBQzNDLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRTFDO0lBR0UsWUFBb0IsR0FBUTtRQUFSLFFBQUcsR0FBSCxHQUFHLENBQUs7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGdCQUFNLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksZUFBUyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELE1BQU07UUFDSixjQUFjO1FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCO1lBQzNELEdBQUcsQ0FBQyxNQUFNLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDL0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSwrR0FBK0csQ0FBQyxDQUFDO1lBQzVKLEdBQUcsQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDN0MsR0FBRyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsRUFBRSxpQ0FBaUMsQ0FBQyxDQUFDO1lBQzlFLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7UUFFSCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUVyRCx3REFBd0Q7UUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsMERBQTBELENBQUM7YUFDdkUsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUVwQyxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO2FBQ2hCLEdBQUcsQ0FBQyxDQUFDLEdBQVksRUFBRSxHQUFhO1lBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDRjtBQS9CRCw0QkErQkMiLCJmaWxlIjoic3JjL3JvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IEVycm9ycyBmcm9tICcuL2NvbXBvbmVudHMvZXJyb3JzL2Vycm9ycyc7XG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmltcG9ydCB7XG4gICAgRXhwcmVzcyxcbiAgICBSZXF1ZXN0LFxuICAgIFJlc3BvbnNlLFxuICAgIE5leHRGdW5jdGlvblxufSBmcm9tICdleHByZXNzJztcblxuaW1wb3J0IFZpc2lvbkFQSSBmcm9tICcuL2FwaS92aXNpb24vaW5kZXgnO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi9jb25maWcvY29uZmlnJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgZXJyb3JzOiBFcnJvcnM7XG4gIHZpc2lvbkFQSTogVmlzaW9uQVBJO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcDogYW55KSB7XG4gICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzKCk7XG4gICAgdGhpcy52aXNpb25BUEkgPSBuZXcgVmlzaW9uQVBJKCk7XG4gIH1cblxuICByb3V0ZXMoKSB7XG4gICAgLy8gRW5hYmxlIENPUlNcbiAgICB0aGlzLmFwcC51c2UoKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSwgbmV4dDogTmV4dEZ1bmN0aW9uKSA9PiB7XG4gICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuICAgICAgcmVzLmhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdPcmlnaW4sIFgtUmVxdWVzdGVkLVdpdGgsIENvbnRlbnQtVHlwZSwgQWNjZXB0LCBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLCBBdXRob3JpemF0aW9uLCBYLVJlcXVlc3RlZC1XaXRoJyk7XG4gICAgICByZXMuaGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1NYXgtQWdlJywgJzM2MDAnKTtcbiAgICAgIHJlcy5oZWFkZXIoJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnLCAnR0VULCBQT1NULCBQVVQsIERFTEVURSwgT1BUSU9OUycpO1xuICAgICAgbmV4dCgpO1xuICAgIH0pO1xuXG4gICAgLy8gSW5zZXJ0IHJvdXRlcyBiZWxvd1xuICAgIHRoaXMuYXBwLnVzZSgnL2FwaS92aXNpb24nLCB0aGlzLnZpc2lvbkFQSS5yb3V0ZXMoKSk7XG5cbiAgICAvLyBBbGwgdW5kZWZpbmVkIGFzc2V0IG9yIGFwaSByb3V0ZXMgc2hvdWxkIHJldHVybiBhIDQwNFxuICAgIHRoaXMuYXBwLnJvdXRlKCcvOnVybChhcGl8YXV0aHxjb21wb25lbnRzfGFwcHxib3dlcl9jb21wb25lbnRzfGFzc2V0cykvKicpXG4gICAgICAuZ2V0KHRoaXMuZXJyb3JzWydwYWdlTm90Rm91bmQnXSk7XG5cbiAgICAvLyBBbGwgb3RoZXIgcm91dGVzIHNob3VsZCByZWRpcmVjdCB0byB0aGUgaW5kZXguaHRtbFxuICAgIHRoaXMuYXBwLnJvdXRlKCcqJylcbiAgICAgIC5nZXQoKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZEZpbGUoY29uZmlnLnJvb3RQYXRoICsgJy9wdWJsaWMvaW5kZXguaHRtbCcpO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==
