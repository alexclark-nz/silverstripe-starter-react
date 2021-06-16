(window as any).axios = require('axios');

(window as any).axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
