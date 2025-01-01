import { useCallback, useEffect, useState } from 'react';
import { Sunrise01, Sunrise02, Sunrise03, Sunrise04, Sunrise05, Sunrise06 } from '../../pix';
import './style.css';

const Dawn = () => {
  const picArr = [Sunrise01, Sunrise02, Sunrise03, Sunrise04, Sunrise05, Sunrise06];

  const [idx, setIdx] = useState(0);
  const [pic, setPic] = useState(picArr[idx]);

  const setIndex = useCallback(((prev) => (prev < picArr.length - 1) ? prev + 1 : 0), [picArr.length]);

  useEffect(() => {
    const idxInterval = setInterval(() => {
      setIdx(prev => setIndex(prev))
    }, 20000)
    setPic(picArr[idx])
    return () => clearInterval(idxInterval);
  }, [picArr, idx, setIdx, setIndex])

  return (
    <div id="dawn">
      <img src={pic} alt="Fiery sunrise" id="dawn-pic" />
    </div>
  )
};

export default Dawn;