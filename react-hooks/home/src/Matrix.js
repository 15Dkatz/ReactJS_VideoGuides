import React, { useState } from 'react';
import MATRIX_FRAMES from './data/matrix';
import { useDynamicTransition } from './hooks';

const minimumDelay = 10;
const minimumIncrement = 1;

function Matrix() {
  const [delay, setDelay] = useState(500);
  const [increment, setIncrement] = useState(5);

  const index = useDynamicTransition({
    delay, increment, length: MATRIX_FRAMES.length
  });

  const updateDelay = event => {
    const delay = Number(event.target.value);

    setDelay(delay < minimumDelay ? minimumDelay : delay);
  }

  const updateIncrement = event => {
    const increment = Number(event.target.value);

    setIncrement(
      increment < minimumIncrement ? minimumIncrement : increment
    );
  }

  return (
    <div className='Matrix'>
      <img src={MATRIX_FRAMES[index]} alt='matrix-animation' />
      <div className='multiform'>
        <div>
          Frame transition delay (seconds):
          <input type='number' onChange={updateDelay} />
        </div>
        <div>
          Frame increment:
          <input type='number' onChange={updateIncrement} />
        </div>
      </div>
    </div>
  )
}

export default Matrix;
