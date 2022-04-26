import React from 'react';
import ExBoolean from 'src/components/ex-boolean'
import ExFetch from "src/components/ex-fetch";
import ExCounter from "src/components/ex-counter";

function App() {
  console.log('init app');
  return (
    <div className="App">
      <ExBoolean/>
      <ExFetch/>
      <ExCounter/>
    </div>
  );
}

export default App;
