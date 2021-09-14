import {useState} from 'react';
const useInput = (initialValue?: string) => {
  const [value, setValue] = useState<string>(initialValue || '');
  const onChangeText = text => setValue(text);
  return {value, onChangeText, setValue};
};
export default useInput;
