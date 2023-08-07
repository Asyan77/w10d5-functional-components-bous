import pokemon from '../../images/bulbasaur.jpg'
import './Showcase.css'

const Showcase = () => {
    const favPokemon = 'Pikachu'
    const pokeCharacteristics = {
        type: 'electric mouse',
        move: 'thunder bolt to your face!'
    }
    const {type} = pokeCharacteristics
    const {move} = pokeCharacteristics
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 40
            }}
        >
            <h1>{favPokemon} Showcase component</h1>
            <img 
                src={pokemon} 
                alt='pikabulbachu'
                style={{paddingTop: 80, paddingBottom: 80}}
            />
            <h4>Pikachu's type is 
                <span style={{backgroundColor: 'pink', color: 'white'}}> {type} </span> 
                and it's best move is 
                <span style={{backgroundColor: 'green', color: 'white'}}>{move}</span> 
            </h4>
            <p>type: {pokeCharacteristics.type}</p>
            <p>Move: {pokeCharacteristics.move}</p>
        </div>
    )
}

export default Showcase