const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '../app_config.json');
const capConfigPath = path.join(__dirname, '../capacitor.config.json');

console.log('Reading app configuration...');
const appConfig = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const capConfig = JSON.parse(fs.readFileSync(capConfigPath, 'utf8'));

// Inject the specific app details into the Capacitor wrapper
capConfig.appId = appConfig.bundleId;
capConfig.appName = appConfig.appName;

fs.writeFileSync(capConfigPath, JSON.stringify(capConfig, null, 2));

console.log('✅ Capacitor config successfully updated!');
console.log(`📦 App Name: ${appConfig.appName}`);
console.log(`🆔 Bundle ID: ${appConfig.bundleId}`);
