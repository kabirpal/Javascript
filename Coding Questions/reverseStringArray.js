string1 = 'Kabir Pal'
string2 = string1.split(' ');
string3 = string2[0].split('');
modifiedArr = '';
for(let i = string3.length-1; i>=0 ; i--){
    modifiedArr += string3[i]
}

console.log(modifiedArr,string2[1]);
