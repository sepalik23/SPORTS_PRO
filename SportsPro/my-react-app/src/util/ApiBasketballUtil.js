const API_KEY = "3933b966d2d4a64103c8658592ac48ef";

const getNBATeams = async () => {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");
    myHeaders.append("x-rapidapi-key", API_KEY);
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    try {
      const response = await fetch(
        `https://v1.basketball.api-sports.io/teams?league=12&season=2022-2023`,
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const NbaTeams = await response.json();
      return NbaTeams;
    } catch (error) {
      console.log("Error fetching player statistics:", error);
      throw error;
    }
  };

  const getWNBATeams = async () => {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");
    myHeaders.append("x-rapidapi-key", API_KEY);
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    try {
      const response = await fetch(
        `https://v1.basketball.api-sports.io/teams?league=13&season=2022-2023`,
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const NbaTeams = await response.json();
      return NbaTeams;
    } catch (error) {
      console.log("Error fetching player statistics:", error);
      throw error;
    }
  };

  const getNBATeamStatistics = async (team) => {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");
    myHeaders.append("x-rapidapi-key", API_KEY);
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    try {
      const response = await fetch(
        `https://v1.basketball.api-sports.io/statistics?league=12&season=2022-2023&team=${team}`,
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log(response);
      const NbaTeamsStatistics = await response.json();
      return NbaTeamsStatistics;
    } catch (error) {
      console.log("Error fetching player statistics:", error);
      throw error;
    }
  }

  const getWNBATeamStatistics = async (team) => {
    const myHeaders = new Headers();
    myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");
    myHeaders.append("x-rapidapi-key", API_KEY);
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
  
    try {
      const response = await fetch(
        `https://v1.basketball.api-sports.io/statistics?league=13&season=2023&team=${team}`,
        requestOptions
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const WNbaTeamsStatistics = await response.json();
      return WNbaTeamsStatistics;
    } catch (error) {
      console.log("Error fetching player statistics:", error);
      throw error;
    }
  }

  export { getNBATeams, getWNBATeams, getNBATeamStatistics, getWNBATeamStatistics };