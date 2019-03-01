'use strict';

const express = require('express');
const router = express.Router();

const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = require('./controllers/about.js');
const teamlist = require('./controllers/teamlist.js');

router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/teamlist/:id',teamlist.index);

router.get('/teamlist/:id/deleteMember/:memberid', teamlist.deleteMember);
router.get('/deleteTeamlist/:id', dashboard.deleteTeamlist);


module.exports = router;
