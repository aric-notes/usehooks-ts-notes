import React from 'react';
import ExBoolean from 'src/components/ex-boolean'
import ExFetch from "src/components/ex-fetch";

function App() {
  console.log('init app');
  return (
    <div className="App">
      <ExBoolean/>
      <ExFetch/>
    </div>
  );
}

export default App;
