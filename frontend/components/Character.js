import React, {useState} from 'react'

function Character({data}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [planetshow, setPlanetShow] = useState(false);
  const toggle = () => setPlanetShow(!planetshow)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div className='character-card' onClick={toggle}>
     <h3 className='character-name'>
     {data.name}
     </h3>
     {planetshow && <p>Planet: <span className='character-planet'>{data.homeworld.name}</span></p>}
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}
export default Character
