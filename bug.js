```javascript
//In the App.js file
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the count changes on every render, and the effect runs after every render
    setCount(count + 1);
  }, []); //this will cause an error 

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
```