import { useEffect } from 'react';

function useClickOutside(ref, onClickOutside) {
  useEffect(() => {
    function handleClickOutside(event) {
      event.stopPropagation();

      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

export default useClickOutside;
