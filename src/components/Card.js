
function Card({characterData}) {
    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={characterData.img} alt=""/>
                </div>
                <div className="card-back">
                    <h1>{characterData.name}</h1>
                    <ul>
                        <li><strong>Actor Name: </strong>{characterData.portrayed}</li>
                        <li><strong>Nickname: </strong>{characterData.nickname}</li>
                        <li><strong>Birthday: </strong>{characterData.birthday}</li>
                        <li><strong>Status: </strong>{characterData.status}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Card
