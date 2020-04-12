
// Render the Chart
function renderChart(data, dates) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [
                {
                    label: 'Casos Activos',
                    data: data,
                    borderColor: '#ffba49',
                    backgroundColor: '#040403',
                },
            ]
        },
    });
}

//Convert Date to short veresion

function shortDate(longDate) {
    return Date.parse(longDate).getDay();
}



const delay = seconds => {
    return new Promise(
        resolve => setTimeout(resolve, seconds * 1000)
    )
};


//Getting Live Covid Data 

var myHeaders = new Headers();

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};


(async (country) => {
    try {

        //Get the data
        var response = await fetch(`https://api.covid19api.com/total/dayone/country/${country}/status/confirmed`, requestOptions)
        var json = await response.json();
        var data = json.map(logRecord => [logRecord.Date,logRecord.Cases]);
        var dates = json.map(logRecord => logRecord.Date);
        var cases = json.map(logRecord => logRecord.Cases);
        console.log(data);
        //Launch the Chart
        renderChart(cases, dates);

    } catch (e) {
        console.log('error', e);
    }
})('costa-rica'); // Anonymous function call 




