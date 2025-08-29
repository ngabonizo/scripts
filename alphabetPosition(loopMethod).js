function alphabetPosition(text){
  let result = [];

  for(let i=0; i<text.length; i++) {
    let char = text[i].toLowerCase();

    if(char >= 'a' && char <='z'){
      let position = char.charCodeAt(0) -96;
      result.push(position);
    }
  }
  return result.join(' ');
}