function stringManipulation() {
    var myStr = 'I am learning javaScript';
    console.log( "Includes", myStr.toUpperCase().includes('AM'));
    console.log("Using CharAt", myStr.charAt(3));
    console.log(myStr.charCodeAt());
    console.log(myStr.concat(" Kabir"));
    console.log(myStr.endsWith("k"));
    console.log(myStr);
}

stringManipulation();