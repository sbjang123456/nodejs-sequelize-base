const app = require('./app');
const { sequelize } = require('./sequelize');
const http = require('http');
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const commConfig =
    yaml.load(fs.readFileSync(path.join(__dirname, 'config', 'config.yaml'), 'utf8'));
const config = commConfig[process.env.NODE_ENV || "development"];

const PORT = config.comm.nodePort || 8080;
(async () => {
    try {
        await sequelize.authenticate();
        try {
            await sequelize.sync({ force: false });
            console.log(`✓ DB connection success.`);
            console.log(`  Press CTRL-C to stop\n`);
        } catch (err) {
            console.error(`✗ DB connection error. Please make sure DB is running.`);
            console.error(err.message);
            process.exit();
        }
        console.log(`Database connection OK!`);

        const httpServer = http.createServer(app);
        httpServer.listen(PORT, (err) => {
            if (err) {
                console.error(`Express Server has failed on port: ${PORT}`);
                throw err;
            }
            console.log(`Express server has started on port ${PORT}`);

            if (process.send) {
                process.send('ready');
            }
        });
    } catch (err) {
        console.error('Unable to connect to the database:');
        console.error(err.message);
        process.exit(1);
    }
})();
