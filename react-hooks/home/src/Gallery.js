import React, { useState } from 'react';
import PICTURES from './data/pictures';
import { useDynamicTransition } from './hooks';

const SECONDS = 1000;
const minimumDelay = 1 * SECONDS;
const minimumIncrement = 1;

function Gallery() {
  const [delay, setDelay] = useState(3 * SECONDS);
  const [increment, setIncrement] = useState(1);

  const index = useDynamicTransition({
    delay, increment, length: PICTURES.length
  });

  const updateDelay = event => {
    const delay = Number(event.target.value) * SECONDS;

    setDelay(delay < minimumDelay ? minimumDelay : delay);
  }

  const updateIncrement = event => {
    const increment = Number(event.target.value);

    setIncrement(increment < minimumIncrement ? minimumIncrement : increment);
  }

  return (
    <div className='Gallery'>
      <img
        src={PICTURES[index].image}
        alt='gallery'
      />
      <div className='multiform'>
        <div>
          Gallery transition delay (seconds):
          <input type='number' onChange={updateDelay} />
        </div>
        <div>
          Gallery increment:
          <input type='number' onChange={updateIncrement} />
        </div>
      </div>
    </div>
  )
}

export default Gallery;
