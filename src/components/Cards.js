import Card from "./Card";
import Spinner from "./Spinner";

function Cards({loadStatus, characters} ) {
    return (
        <div>
            {loadStatus ? <Spinner/> :
                <section className="cards">
            {characters.map(character =>(
                <Card key={character.char_id} characterData={character} />
                
            ))}
                </section>
        }
        </div>
    )
}

export default Cards
