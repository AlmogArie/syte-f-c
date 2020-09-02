import React from 'react'
import TeamList from '../cmps/TeamsList'
import HttpService from '../services/HttpService'
import storageService from '../services/storageService'


export default class TeamsPage extends React.Component {

    state = {
        teams: []
    }


    componentDidMount() {
        this.loadTeams()
    }

    // Load all teams and setting state.
    loadTeams = async () => {
        const teams = await HttpService.query()

        this.setState({ teams })
    }


    // Toggeling favorit icon state.
    toggleFav = (name) => {
        const { teams } = this.state
        const newTeams = teams.map(team => {
            const isFav = team.isFav
            if (team.name === name) return { ...team, isFav: !isFav }
            return team
        })
        this.setState({ teams: newTeams })


    }

    // Changing local after toggeling favorit icon state.
    changingLocalStor = (name) => {
        const localTeams = storageService.load('teams')
        const changedTeams = localTeams.map(team => {
            const isFav = team.isFav
            if (team.name === name) return { ...team, isFav: !isFav }
            return team
        })
        
        storageService.store('teams', changedTeams)
    }


    render() {
        const { teams } = this.state
        return !teams.length ? <p>Loading.....</p> : <section className="main-section">
            <TeamList teams={teams} toggleFav={this.toggleFav} changingLocalStor={this.changingLocalStor} />
        </section>

    }
}

