const NASA_MARS_ROVER_BASE_URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";

function getNasaApiKey() {
    const apiKey = process.env.REACT_APP_NASA_API_KEY;

    if (!apiKey) {
        console.error("NASA API KEY DOESN'T EXIST");
    }

    return apiKey;
}

function getNasaMarsRoverUrl(date) {
    const apiKey = getNasaApiKey();

    if (!apiKey || !date) {
        console.error("Missing required information");
    }

    return NASA_MARS_ROVER_BASE_URL + "?earth_date=" + date + "&api_key=" + apiKey;
}

function getMarsRoverData(date, setError, setIsLoaded, setPhotos) {
    setError(null);
    setIsLoaded(false);
    setPhotos([]);
    return fetch(getNasaMarsRoverUrl(date))
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);

                if (result.photos && result.photos.length > 0) {
                    setPhotos(result.photos);
                } else {
                    setError({ message: "No photos were loaded for the given date: " + date });
                }
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
    );
}

export { getMarsRoverData };