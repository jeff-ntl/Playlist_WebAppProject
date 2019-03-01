'use strict';

const logger = require('../utils/logger');
const teamlistStore = require('../models/teamlist-store');

const teamlist = {
  index(request, response) {
    const teamlistId = request.params.id;
    logger.debug('Teamlist id = ', teamlistId);
    const viewData = {
      title: 'Teamlist - NBA Teams',
      teamlist: teamlistStore.getTeamlist(teamlistId),
    };
    response.render('teamlist', viewData);
  },
   deleteMember(request, response) {
    const teamlistId = request.params.id;
    const memberId = request.params.memberid;
    logger.debug(`Deleting Member ${memberId} from Teamlist ${teamlistId}`);
    teamlistStore.removeMember(teamlistId, memberId);
    response.redirect('/teamlist/' + teamlistId);
  },
};

module.exports = teamlist;