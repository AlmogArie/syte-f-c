import storageService from './storageService'

const axios = require('axios');
const PORT = 'https://raw.githubusercontent.com/AlmogArie/kaduregel/master/db.json'

var gTeams = []
_createTeams()

//  Creating teams from local.
function _createTeams() {
    gTeams = storageService.load('teams')
    storageService.store('teams', gTeams)
}


// Get data from API
async function query() {
    var tempTeams = storageService.load('teams')
    if (tempTeams.length) return tempTeams
    const teams = await axios.get((`${PORT}`))
            storageService.store('teams', teams.data)
            return teams.data
}


export default {
    query,
}