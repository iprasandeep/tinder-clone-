import { useState } from 'react'
import './tindercards.css';
import TinderCard from '../TinderCard/TinderCard';

const TinderCards = () => {
    const [ people, setPeople ] = useState([
       {
        name: 'Elom Musk',
        url: '',
       },
       {
        name: 'Jeff Bezos',
        url: '',
       },
       {
        name: 'Bill Gates',
        url: '',
       },
       {
        name: 'Elom Musk',
        url: '',
       }

    ]);

    const swiped = (direction, nameToDelete) =>{
        console.log('removing' + nameToDelete);
    }
    const outOfFrame = (name) =>{
        console.log(name+ 'left the screen!');
    }

  return (
    <div>
    <div className='tinderCards'>
        <div className="TinderCards_cardContainer">
            {people.map((person)=>(
                <TinderCard 
                className='swipe'
                key={person.name}
                preventSwipe={['up', 'down']}
                onSwipe={(dir)=>swiped(dir, person.name)}

                onCardLeftScreen={()=> outOfFrame(person.name)}
                >
                <div className='card' style={{backgroundImage: `url(${person.url})`}} >
                    <h3>{person.name}</h3>
                </div>
                </TinderCard>
            ))}
        </div>
       </div>
    </div>
  )
}

export default TinderCards