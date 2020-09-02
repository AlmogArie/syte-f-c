import React from 'react'
import TeamPreview from './TeamPreview'

export default function TeamList(props) {
    const { teams, toggleFav, changingLocalStor } = props
    return (<div className="team-list flex  column  align-center">
        {teams.map(team => <TeamPreview team={team} key={team.name} toggleFav={toggleFav}  changingLocalStor={changingLocalStor}/>)}

    </div>
    )
}
