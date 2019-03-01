'use strict';

const _ = require('lodash');

const teamlistStore = {

  teamlistCollection: require('./teamlist-store.json').teamlistCollection,

  getAllTeamlists() {
    return this.teamlistCollection;
  },

  getTeamlist(id) {
   /* let foundTeamlist = null;
    for (let teamlist of this.teamlistCollection) {
      if (id == teamlist.id) {
        foundTeamlist = teamlist;
      }
    }

    return foundTeamlist;*/
    return _.find(this.teamlistCollection, {id: id});
  },
  
   removeMember(id, memberId) {
    const teamlist = this.getTeamlist(id);
     _.remove(teamlist.members, {id:memberId});
    // remove the song with id songId from the playlist
  },
  
  removeTeamlist(id) {
    _.remove(this.teamlistCollection, { id: id });
  },
  
   
};

module.exports = teamlistStore;