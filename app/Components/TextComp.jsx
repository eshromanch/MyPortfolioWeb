import React, { useState, useEffect } from 'react';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const sentences = ["Howdy, and welcome to my portfolio!", "Hopefully you are having a awasome day!", " I'm passionate about Front-end development", "and I love creating front-end for any platforms. "];
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (text === sentences[currentSentenceIndex]) {
        setTimeout(() => {
          setCurrentSentenceIndex((currentSentenceIndex + 1) % sentences.length);
          setText('');
        }, 1000); // Pause before clearing text
      } else {
        setText(sentences[currentSentenceIndex].slice(0, text.length + 1));
      }
    }, 250); // Typing speed

    return () => clearInterval(typingInterval);
  }, [text, currentSentenceIndex]);

  return (
    <div className="absolute z-10 top-[35vh] typing-animation bg-transparent">
      <h1 className='text-transparent text-center text-2xl bg-clip-text bg-gradient-to-r from-[#D3CCE3] to-[#E9E4F0]'>{text}</h1>
    </div>
  );
};

export default TypingAnimation;
