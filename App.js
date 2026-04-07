// src/App.js

import ProfileCard from './ProfileCard';

function App() {
  return (
    <div style={{
      display: 'flex',
      gap: '40px',
      justifyContent: 'center',
      marginTop: '100px',
      flexWrap: 'wrap'
    }}>
      <ProfileCard name="박민규" age={23} dream="프론트엔드 개발자" emoji="🧑‍💻" hobby="잠" mbti="INTJ" />
      
    </div>
  );
}

export default App;