async function getMatchData(){
    let url = "https://api.cricapi.com/v1/currentMatches?apikey=0f95d0d2-ca37-462f-a6a1-3b9f1fcbb662&offset=0"
    return await fetch(url)
    .then(data => data.json())
    .then(data => {
        if(data.status != "success") return;

        const matchesList = data.data;
        if(!matchesList) return[];
        const relevantData = matchesList.filter(match => match.series_id == "{your_api_key}").map(match => `${match.name}, ${match.status}`);

        console.log({relevantData});

        document.getElementById("matches").innerHTML = relevantData.map(match => `<li>${match} </li>`).join('');

        return relevantData;

    })
    .catch(e => console.log(e));
}

getMatchData();