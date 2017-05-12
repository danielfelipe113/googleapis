"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const winston = require("winston");
const morgan = require("morgan");
const body_parser_1 = require("body-parser");
const routes_1 = require("./routes");
const config = require('./config/config');
const fileUpload = require('express-fileupload');
/**
 * Root class of your node server.
 * Can be used for basic configurations, for instance starting up the server or registering middleware.
 */
class Server {
    constructor() {
        this.app = express();
        new routes_1.default(this.app).routes();
        this.app.use(body_parser_1.json());
        this.app.use(express.static(__dirname + '/public'));
        this.app.set('views', `${config.rootPath}/views`);
        this.app.engine('html', require('ejs').renderFile);
        this.app.set('view engine', 'html');
        this.app.use(morgan('dev'));
        this.app.listen(config.port, () => {
            winston.log('info', '--> Server successfully started at port %d', config.port);
        });
    }
}
exports.Server = Server;
new Server();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBbUM7QUFDbkMsbUNBQW1DO0FBQ25DLGlDQUFpQztBQUNqQyw2Q0FBbUM7QUFNbkMscUNBQThCO0FBQzlCLE1BQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ2pEOzs7R0FHRztBQUVIO0lBR0k7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO1FBQ3JCLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsa0JBQUksRUFBRSxDQUFDLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLDRDQUE0QyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQWhCRCx3QkFnQkM7QUFFRCxJQUFJLE1BQU0sRUFBRSxDQUFDIiwiZmlsZSI6InNyYy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgd2luc3RvbiBmcm9tICd3aW5zdG9uJztcbmltcG9ydCAqIGFzIG1vcmdhbiBmcm9tICdtb3JnYW4nO1xuaW1wb3J0IHsganNvbiB9IGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCB7XG4gICAgRXhwcmVzcyxcbiAgICBSZXF1ZXN0LFxuICAgIFJlc3BvbnNlXG59IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IFJvdXRlcyBmcm9tICcuL3JvdXRlcyc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKCcuL2NvbmZpZy9jb25maWcnKTtcbmNvbnN0IGZpbGVVcGxvYWQgPSByZXF1aXJlKCdleHByZXNzLWZpbGV1cGxvYWQnKTtcbi8qKlxuICogUm9vdCBjbGFzcyBvZiB5b3VyIG5vZGUgc2VydmVyLlxuICogQ2FuIGJlIHVzZWQgZm9yIGJhc2ljIGNvbmZpZ3VyYXRpb25zLCBmb3IgaW5zdGFuY2Ugc3RhcnRpbmcgdXAgdGhlIHNlcnZlciBvciByZWdpc3RlcmluZyBtaWRkbGV3YXJlLlxuICovXG5cbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuICAgIHByaXZhdGUgYXBwOiBFeHByZXNzO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXBwID0gZXhwcmVzcygpO1xuICAgICAgICBuZXcgUm91dGVzKHRoaXMuYXBwKS5yb3V0ZXMoKTtcbiAgICAgICAgdGhpcy5hcHAudXNlKGpzb24oKSk7XG4gICAgICAgIHRoaXMuYXBwLnVzZShleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyAnL3B1YmxpYycpKTtcbiAgICAgICAgdGhpcy5hcHAuc2V0KCd2aWV3cycsIGAke2NvbmZpZy5yb290UGF0aH0vdmlld3NgKTtcbiAgICAgICAgdGhpcy5hcHAuZW5naW5lKCdodG1sJywgcmVxdWlyZSgnZWpzJykucmVuZGVyRmlsZSk7XG4gICAgICAgIHRoaXMuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnaHRtbCcpO1xuICAgICAgICB0aGlzLmFwcC51c2UobW9yZ2FuKCdkZXYnKSk7XG4gICAgICAgIHRoaXMuYXBwLmxpc3Rlbihjb25maWcucG9ydCwgKCkgPT4ge1xuICAgICAgICAgICAgd2luc3Rvbi5sb2coJ2luZm8nLCAnLS0+IFNlcnZlciBzdWNjZXNzZnVsbHkgc3RhcnRlZCBhdCBwb3J0ICVkJywgY29uZmlnLnBvcnQpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbm5ldyBTZXJ2ZXIoKTtcbiJdfQ==
