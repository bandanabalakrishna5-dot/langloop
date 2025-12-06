const http = require('http');

http.get('http://localhost:3000', (res) => {
    console.log('Headers:', res.headers);
    if (res.headers['content-security-policy'] && res.headers['x-dns-prefetch-control']) {
        console.log('Security headers present.');
    } else {
        console.log('Security headers missing.');
    }
});
