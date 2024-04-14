const API_KEY = "3933b966d2d4a64103c8658592ac48ef";

const getPlayerStatistics = async (fixtureId) => {
  const myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", API_KEY);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures/players?fixture=${fixtureId}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
   
    const playerStats = await response.json();
    return playerStats;
  } catch (error) {
    console.log("Error fetching player statistics:", error);
    throw error;
  }
};

const getFixtureStatistics = async (fixtureId) => {
  var myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", API_KEY);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures/statistics?fixture=${fixtureId}`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const fixtureStats = await response.json();
    return fixtureStats;
  } catch (error) {
    console.log("Error fetching player statistics:", error);
    throw error;
  }
};

const getFixtures = async () => {
  const myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", API_KEY);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures?live=all`,
      requestOptions
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const fixtures = await response.json();
    return Promise.resolve(fixtures);
  } catch (error) {
    console.log("Error fetching player statistics:", error);
    throw error;
  }
};
export { getPlayerStatistics, getFixtures, getFixtureStatistics };
