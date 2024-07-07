// function callbackPrac(arr, callbackHell){
//     arr.push(100);

//     callbackHell();
// }

// var arr = [1,2,3,4]
// callbackPrac(arr, function(){
//     console.log('Array has been modified', arr);
// })

function iterateFor100Times() {
    for (let i = 0; i <= 100; i++) {
        console.log((i % 3 === 0 && i % 5 === 0) ? 'fuzbuz' : i % 3 === 0 ? 'fuz' : i % 5 === 0 ? 'buz' : i);
      }
      
    //   if (i % 3 === 0 && i % 5 === 0) {
    //     console.log('fuzbuz');
    //   } else if (i % 3 === 0) {
    //     console.log('fuz');
    //   } else if (i % 5 === 0) {
    //     console.log('buz');
    //   } else {
    //     console.log(i);
    //   }
    // }
  }
  

// iterateFor100Times();


function anagrams(word){
    for(let i = 0; i<= word.length/2;i++){
        for(let j = word.length/2;j>=0;j--){
            if(word[i] !== word[j]){
                console.log('Not an anagram');
            }
        }
    }
}

// anagrams('mom')


//~~~~~~~~~used .split() and reverse() function

// function reverseString(word){
//     const reversedArray = word.split("").reverse();
//     var reversedString = '';
//     for (let i = 0; i<= reversedArray.length - 1; i++){
//         reversedString += reversedArray[i];
//     }
//     console.log(reversedString);
// }

//without any inbuilt function

// function reverseString(word){
//     const reversedArray = word.split("");
//     var reversedString = '';
//     for (let i = reversedArray.length -1 ; i>=0; i--){
//         reversedString += reversedArray[i];
//     }
//     console.log(reversedString);
// }


function reverseString(word){
    let reversedString = '';
    for (let i = word.length -1 ; i>=0; i--){
        reversedString += word[i];
    }
    console.log(reversedString);
}

// reverseString('Apple');


function palindrome(word){
    for(let i = 0; i<= word.length-1;i++){
        if(word[i] !== word[word.length-1 - i]){
            console.log(false);
            return;
        }
    }
    console.log(true);
}

palindrome('A man, a plan, a canal, Panama');



class WeatherService {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://api.weather.com/';
    }

    async getWeatherForCity(city) {
        //Declare variables like url and params
        try {
            //Fetch the data
        } catch (error) {
            //Log Error
        }
    }
}
  
  // Example usage

    const weatherService = new WeatherService(apiKey);

    weatherService.getWeatherForCity(city)
    .then(weatherData => {
        if (weatherData) {
            //Log the data
        }
    })
    .catch(error => {
        //Log the error
    });







const WeatherService = require('./WeatherService');

describe('WeatherService', () => {
  let weatherService;

  beforeEach(() => {
    // Mocking the fetch function for testing
    global.fetch = jest.fn();
    weatherService = new WeatherService('mockApiKey');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('fetches weather data for a city', async () => {
    // Mocking the response from the weather API
    const mockResponse = { temperature: 25, condition: 'sunny' };
    fetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse)
    });

    const city = 'New York';
    const weatherData = await weatherService.getWeatherForCity(city);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(
      `https://api.weather.com/?city=${city}&apiKey=mockApiKey`
    );
    expect(weatherData).toEqual(mockResponse);
  });

  it('handles errors when fetching weather data', async () => {
    // Mocking a failed response from the weather API
    fetch.mockRejectedValueOnce(new Error('Failed to fetch data'));

    const city = 'Chicago';
    try {
      await weatherService.getWeatherForCity(city);
    } catch (error) {
      expect(error.message).toBe('Failed to fetch data');
    }
  });



});



it('handles errors when fetching weather data', async () => {
    // Mocking a failed response from the weather API
    fetch.mockRejectedValueOnce(new Error('Failed to fetch data'));
    const city = 'Chicago';
    try {
        await weatherService.getWeatherForCity(city);
        } catch (error) {
        expect(error.message).toBe('Failed to fetch data');
        }
    }
);




