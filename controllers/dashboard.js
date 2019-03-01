'use strict';

const logger = require('../utils/logger');
const teamlistCollection = require('../models/teamlist-store.js');

const dashboard = {
  index(request, response) {
    logger.info('dashboard rendering');
    const viewData = {
      title: 'Dashboard - NBA Teams',
      teamlists: teamlistCollection.getAllTeamlists(),
    };
    logger.info('about to render', teamlistCollection.getAllTeamlists());
    response.render('dashboard', viewData);
  },
  deleteTeamlist(request, response) {
    const teamlistId = request.params.id;
    logger.debug(`Deleting teamlist ${teamlistId}`);
    teamlistCollection.removeTeamlist(teamlistId);
    response.redirect('/dashboard/');
  },
  
};

module.exports = dashboard;

