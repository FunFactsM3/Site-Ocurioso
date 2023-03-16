export function Decrypt(str:Storage|string){
  let result = '';
  for (let i=0; i<str.length; i++) {
  const char = str.charCodeAt(i) - 5;
  result += String.fromCharCode(char);
  }
  return result;
}

export function Encrypt(str:Storage){
  let result = '';
  for (let i=0; i<str.length; i++) {
  const char = str.charCodeAt(i) + 5;
  result += String.fromCharCode(char);
  }
  return result;
}