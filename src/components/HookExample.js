import React, { useState, useEffect } from 'react';

function HookExample() {
  const [count, setCount] = useState(0);

  const phrase = `Вы нажали ${count} раз.`;

  // По принципу componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    document.title = phrase;
  });

  return (
    <div>
      <p>{phrase}</p>
      <button onClick={() => setCount(count + 1)}>Нажми на меня</button>
    </div>
  );
}

export default HookExample;
