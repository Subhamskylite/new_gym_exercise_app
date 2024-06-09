export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'fd6ab61107mshe4141f85ee6d011p1aa3dbjsn2af780649075',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
