import React from 'react'



export default class TeamPreview extends React.Component {


// Getting props from TeamPage and rendering the team.
    onFavoritChange = () => {
        const { toggleFav, changingLocalStor, team } = this.props
        toggleFav(team.name)

        changingLocalStor(team.name)
    }





    render() {
        const { team } = this.props

        return <div onClick={this.onFavoritChange} className="team-prev">

            <button class={team.isFav ? "fas fa-heart" : "far fa-heart"}></button>

            <div className="square" >
                <img className="crest-img" src={team.crestLink} alt="" />
            </div>

            <p className="team-name">{team.name}</p>
            <p className="year-founded">{team.yearFounded}</p>




        </div>

    }

}

