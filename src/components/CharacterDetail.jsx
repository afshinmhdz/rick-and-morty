import {character} from '../../data/data';
function CharacterDetail(){
    return(
        <div style={{flex:1}}>
            <div className="character-detail">
                <img src={character.image} alt="" className='character-detail__img' />
                <div className="character-detail__info">
                    <h3 className="name">
                        <span>{character.gender==='Male'?"👨":"👩‍🦰"}</span>
                        <span>&nbsp;{character.name}</span>
                    </h3>
                    <div className="info">
                        <span className={`status ${character.status==='Dead'?"red":""}`}></span>
                        <span>&nbsp;{character.status}</span>
                        <span> - &nbsp;{character.species}</span>
                    </div>
                    <div className="location">
                        <p>Last know location:</p>
                        <p>{character.location.name}</p>
                    </div>
                    <div className="actions"><button className='btn btn--primary'>Add to Favorite</button></div>
                </div>
            </div>
        <div className="character-episodes"></div>
        </div>
    )
}
export default CharacterDetail;