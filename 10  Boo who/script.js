
/*
5.Сценарии базового алгоритма: Бу, кто


Проверьте, классифицируется ли значение как логический примитив.
 Вернуть истину или ложь.
Булевы примитивы бывают истинными и ложными.
*/

/*
Basic Algorithm Scripting: Boo who

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.
*/


/*
function booWho(bool) {
  if(bool === true || bool === false){
    return true;
  }else{
    return false;
  }
  return bool;
}

booWho(null);

booWho(true);    //return true.
booWho(false);    //return true.
booWho([1, 2, 3]); //return false.
booWho([].slice);  //return false.
booWho({ "a": 1 });  //return false.
booWho(1);          //return false.
booWho(NaN);        //return false.
booWho("a");       //return false.
booWho("true");    //return false.
booWho("false");    //return false.

*/



function booWho(bool) {
  if(typeof bool === 'boolean'){
    bool = true;
  }else{
    bool = false;
  }
  console.log(bool);
}

booWho(null);

booWho(true);    //return true.
booWho(false);    //return true.
booWho([1, 2, 3]); //return false.
booWho([].slice);  //return false.
booWho({ "a": 1 });  //return false.
booWho(1);          //return false.
booWho(NaN);        //return false.
booWho("a");       //return false.
booWho("true");    //return false.
booWho("false");    //return false.

