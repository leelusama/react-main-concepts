import React, { useState, useEffect } from 'react';

function HookExample() {
  const [foo, setFoo] = useState(0);
  useEffect(() => {
    console.log('effect for foo:', foo);
  }, [foo]);

  const [bar, setBar] = useState(0);
  useEffect(() => {
    console.log('effect for bar:', bar);
  }, [bar]);

  useEffect(() => {
    console.log('effect use only one time');
  }, []);

  useEffect(() => {
    console.log('effect use always');
    document.title = `Bar: ${bar} | Foo: ${foo}`;
  });

  return (
    <div>
      <button onClick={() => setFoo(foo + 1)}>Foo: {foo}</button>
      <button onClick={() => setBar(bar + 1)}>Bar: {bar}</button>
    </div>
  );
}

export default HookExample;
