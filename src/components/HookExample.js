import React, { useState } from 'react';

function HookExample() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Вы нажали {count} раз.</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}

export default HookExample;
