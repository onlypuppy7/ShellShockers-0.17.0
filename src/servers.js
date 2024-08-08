var servers = [
    { name: 'US East', address: 'useast2.shellshock.io:443' },
    { name: 'US West', address: 'uswest2.shellshock.io:443' },
    { name: 'US Central', address: 'uscentral2.shellshock.io:443' },
    { name: 'Brazil', address: 'brazil2.shellshock.io:443' },
    { name: 'Germany', address: 'frankfurt2.shellshock.io:443' },
    { name: 'Singapore', address: 'singapore2.shellshock.io:443' },
    { name: 'Sydney', address: 'sydney.shellshock.io:443' },
];

var debug = false;

var servicesServer = 'wss://shellshock.io/services/:443';

if (location.hostname.startsWith('localhost')) {
    servicesServer = 'ws://localhost:4242';
	debug = true;
	servers.push({ name: 'local', address: '127.0.0.1:443' });
    servers.push({ name: 'Dev (US West)', address: 'gamedev.shellshock.io:443' });
}

if (location.hostname.startsWith('staging.shellshock.io')) {
    debug = true;
    servers = [{ name: 'Staging', address: 'staging.shellshock.io:443' }];
    servicesServer = 'ws://staging.shellshock.io:4242/';
}

if (location.hostname.startsWith('dev.shellshock.io')) {
    servers = [{ name: 'Dev (US West)', address: 'gamedev.shellshock.io:443' }];
    servicesServer = 'ws://dev.shellshock.io/services/:443';
}

if (location.hostname.startsWith('localshelldev')) {
    servers = [
        { name: 'Local VM', address: 'localshelldev.bluewizard.com:443' },
    //    { name: 'US West', address: 'uswest2.shellshock.io:443' }
    ];

    servicesServer = 'ws://localshelldev.bluewizard.com:4242/';
}