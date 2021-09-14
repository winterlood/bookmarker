import {useEffect, useState} from 'react';
import {isSiteLink} from '../lib/regex';

const useLinkRegex = (value: string) => {
  const [isValid, setIsValid] = useState<boolean>(false);
  useEffect(() => {
    setIsValid(isSiteLink(value));
  }, [value]);

  return isValid;
};

export default useLinkRegex;
