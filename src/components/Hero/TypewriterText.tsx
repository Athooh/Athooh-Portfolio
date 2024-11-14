import React, { useState, useEffect } from 'react';

const TypewriterText = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const roles = ['Full Stack Developer', 'Software Engineer', 'Problem Solver'];
  const period = 2000;
  const delta = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  });

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  return (
    <h2 className="text-xl md:text-2xl font-medium text-gray-400">
      <span>{text}</span>
      <span className="animate-pulse">|</span>
    </h2>
  );
};

export default TypewriterText;