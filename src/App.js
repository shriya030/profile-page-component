import ProfileCard from './ProfileCard';
import userImage from './images/image-victor.jpg';
import './App.css';

function App() {
  return (
    <div className="app">
      <ProfileCard 
        name='Victor Crist'
        age='26'
        location='London'
        followers='80K'
        likes='803K'
        photos='1.4K'
        avatar={userImage}
      />
    </div>
  );
}

export default App;
