import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50, delay: number = 1000) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
      let index = 0;
      
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typeInterval);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return { displayText, isTyping };
};