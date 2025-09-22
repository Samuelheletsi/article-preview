import React, { createContext, useState, useEffect } from 'react';
import Card from './components/Card';
import articleData from './article.json'; // JSON must be inside src/

export const DataContext = createContext();

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(articleData);
  }, []);

  return (
    <div className="container">
      <DataContext.Provider value={user}>
        {user.map((a, i) => (
          <Card key={i} user={a} />
        ))}
      </DataContext.Provider>
    </div>
  );
}

export default App;