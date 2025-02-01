```javascript
//In the App.js file
import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Fix: Add count to dependency array to only run the effect when count changes
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 
    return () => clearInterval(interval); // Cleanup function
  }, []); 

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default App;
```