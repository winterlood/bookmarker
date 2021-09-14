const generateUUID = (): string => {
  const DIGIT = 32;
  let str: string =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
  let uuid: string[] = [];
  for (let i = 0; i < DIGIT; i++) {
    uuid.push(str[Math.floor(Math.random() * str.length)]);
  }
  return uuid.join('');
};

export default generateUUID;
