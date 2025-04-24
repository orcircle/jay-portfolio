import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delay?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1000,
  className = ''
}) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const shouldDelete = isDeleting;
    const shouldMoveToNextWord = !shouldDelete && text === currentWord;
    const shouldMoveToPreviousWord = shouldDelete && text === '';

    // 如果正在暂停，不执行任何操作
    if (isPaused) {
      return;
    }

    const timeout = setTimeout(() => {
      if (shouldMoveToNextWord) {
        // 完成一个单词后暂停
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, delay);
      } else if (shouldMoveToPreviousWord) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(
          shouldDelete
            ? currentWord.substring(0, text.length - 1)
            : currentWord.substring(0, text.length + 1)
        );
      }
    }, shouldDelete ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, delay]);

  return (
    <span className={`inline-block h-[1em] ${className}`}>
      {text}
      <span className="inline-block w-2 h-4 bg-primary animate-pulse ml-0.5"></span>
    </span>
  );
};

export default Typewriter; 