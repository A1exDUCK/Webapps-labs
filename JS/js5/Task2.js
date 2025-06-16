const citiesData = [
    'Moscow | 55.7558 | 37.6173',
    'New York | 40.7128 | -74.0060',
    'Tokyo | 35.6762 | 139.6503',
    'London | 51.5074 | -0.1278'
];

const cities = [];

for (const cityInfo of citiesData) {
    const [city, latitude, longitude] = cityInfo.split('|').map(item => item.trim());

    const cityObject = {
        city: city,
        latitude: Number(latitude).toFixed(2),
        longitude: Number(longitude).toFixed(2)
    };

    cities.push(cityObject);
}

for (const city of cities) {
    console.log(city);
}
