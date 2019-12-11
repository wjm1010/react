import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(10)
  useEffect(() => {

  })
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>onClick</button>
    </div>
  )
}

export default App