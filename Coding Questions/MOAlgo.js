arr = [1, 1, 2, 1, 3, 4, 5, 2, 8,6,1,3,5,7];
query = [
    [7, 10],
    [3, 5],
    [0, 2],
    [6, 9]
  ];
counter = 0
query.sort((a, b) => a[1] - b[1]);
console.log(query);
while (counter<query.length){
    min = query[counter][0];
    max = query[counter][1];
    arrSum = 0;
    for(let i = min; i<=max;i++){
        arrSum += arr[i];
    }
    console.log(query[counter],'is', arrSum);
    counter ++;
}
