(async function () { //IIFE

    const URI = "http://api.openweathermap.org/data/3.0/onecall?lat=42.3&lon=-71.1&exclude=minutely,hourly,daily,alerts&appid=6d13b989d2175d527ad89638956aec97&units=imperial";

    const getData = async () => {
        const rawData = await fetch(URI);
        const parsedData = await rawData.json();
        return parsedData;
    }

    const result = await getData();
    console.log(`${result.current.temp}`);

})();
