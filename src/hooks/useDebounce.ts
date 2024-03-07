import { useEffect, useRef, useState } from 'react';

export interface Props {
  value?: string;
  delay: number;
}

export const useDebounce = ({ value, delay }: Props) => {
  const [debouncedValue, setDebouncedValue] = useState<string>();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue;
};
