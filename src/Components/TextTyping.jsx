import { TypeAnimation } from 'react-type-animation';

const TextTyping = () => {

  return (
    <div>
      
      <TypeAnimation
      sequence={['Java', 650, 'Python', 650, 'JavaScript', 650, 'Ruby', 650]}
      style={{ color: '#2dd4bf', textShadow : '0px 0px 10px #075985', }}
      repeat={Infinity}
      speed={20}
/>
    </div>
  );
};

export default TextTyping;
