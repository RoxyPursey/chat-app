import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
        <Contact 
         name = "Erika Barnes"
         avatar = "https://randomuser.me/api/portraits/women/76.jpg"
         online = "true"
          />
           <Contact 
         name = "Derrick Nichols"
         avatar = "https://randomuser.me/api/portraits/men/95.jpg"
         online = "false"
          />
           <Contact 
         name = "Ben Myers"
         avatar = "https://randomuser.me/api/portraits/men/88.jpg"
         online = "true"
          />
    </div>
  );
}

export default App;
