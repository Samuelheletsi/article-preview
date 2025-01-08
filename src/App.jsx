import { createContext, useState, useEffect, React } from 'react';
import Card from './components/Card';

export const DataContext = createContext();

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("./article.json")
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.log(err));
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
