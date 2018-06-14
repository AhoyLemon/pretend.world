function randomNumber(min,max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

/*
function getRandomInt(max,min) {
  if (min) {
    return Math.floor(Math.random() * max) + min;
  } else {
    return Math.floor(Math.random() * max);
  }
}
*/


function workThisArray(myArray) {

  let r = Math.floor(Math.random()*(myArray.length));
  let message = '';

  myArray[r].forEach(function(k) {
    //console.log(typeof k);
    if (typeof k == "object") {
      //console.log(k)
      var z = Math.floor(Math.random()*(k.length));

      if (typeof k[z] == "object") {
        k[z].forEach(function(a) {
          if (typeof a == "object") {
            message += a[(Math.floor(Math.random()*(a.length)))];
          } else {
            message += a;
          }
        });
      } else {
        message += k[z];
      }
    } else {
      message += k;
    }
  });

  return message;

}


function stringInArray(s, a) {
  let n = a.indexOf(s);
  if (n > -1) {
    return true;
  } else {
    return false;
  }
}

function randomFrom(array) {
  return array[Math.floor(Math.random()*(array.length))];
}

function shuffle(o){
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

function similarity(s1, s2) {
  var longer = s1;
  var shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  var longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  let costs = [];
  for (let i = 0; i <= s1.length; i++) {
    var lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
}