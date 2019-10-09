const blog = [5];
var getData = () => {
    var x = "0";
    var count = 1;
  for(var i = 0; i < 5; i++){
      if(i < 10){
          x="0";
          x += (count); 
          blog[i] = {
              "backText" : x
          }
      }
      else{
          blog[i] = {
              "backText" : count
          }
      }
      count++;
  }
    return blog;
}

export function getBlogs () {
    var a = getData();
    return a;
}