import { useState } from 'react';

function ProfileCard({ name, age, dream, emoji, hobby, mbti }) {
  const [likes, setLikes] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  function handleLike() {
    setLikes(likes + 1);
  }

  function handleReset() {
    setLikes(0);
  }
 
  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div style={{   
      border: '2px solid #61dafb',
      borderRadius: '16px',
      padding: '24px',
      width: '280px',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ fontSize: '48px' }}>{emoji}</div>
      <h2>{name}</h2>
      <p>나이: {age}세</p>
      <p>꿈: {dream}</p>
      <p>취미: {hobby}</p>
      <p>MBTI: {mbti}</p>
      
      <div style={{ marginTop: '16px' }}>
        <p style={{ fontSize: '20px' }}>❤️ {likes}</p>
        <button onClick={handleLike} style={{ marginRight: '8px' }}>+ 좋아요</button>
        <button onClick={handleReset}>초기화</button>
      </div>

      <div>
        <button onClick={toggleVisibility}>
          {isVisible ? '자기소개 닫기 ' : '자기소개 열기'}
        </button>
        {isVisible && (
          <div style={{ marginTop: '12px', padding: '8px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
            <p> Hello I am {name}</p>
          </div>
        )}
      </div>
      
    </div>
  );
}

export default ProfileCard;