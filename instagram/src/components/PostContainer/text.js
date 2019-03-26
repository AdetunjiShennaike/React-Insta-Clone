

function autocorrect(input){
  const text = "your sister";
  let arr = input.split(' ');
  
  for (let i = 0; i < arr.length; i++) {
   arr[i] === 'u' || 'you' ? arr[i] = text : null ;
   arr[i].startsWith('youu') ? arr[i] = text : null ;

   console.log(input)
 }
 
 
 autocorrect("youuuuuu should become your siste Hey u, I think you should go out with me, Hey your sister, I think your sister should go out with me")