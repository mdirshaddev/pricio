'use client';

import React from 'react';

const WeatherOverview: React.FC = (): JSX.Element => {
  const [coordinate, setCoordinate] = React.useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 0,
    longitude: 0
  });
  const [weatherInfo, setWeatherInfo] = React.useState({});

  React.useEffect(() => {
    const fetchWeatherInfo = async () => {
      navigator.geolocation.getCurrentPosition(function ({ coords }) {
        setCoordinate({
          latitude: coords.latitude,
          longitude: coords.longitude
        });
      });

      await fetch(
        `${process.env.NEXT_PUBLIC_WEATHER_API_URL}?lat=${coordinate.latitude}&lon=${coordinate.longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      ).then(res => res.json());
    };
  }, [coordinate]);
  return <div>{JSON.stringify(coordinate)}</div>;
};

export { WeatherOverview };
