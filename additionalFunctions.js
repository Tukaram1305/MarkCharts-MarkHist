// Function helping resize chart object(s) to user browser window dynamically
function reportWindowSize(chart,type) {
	var adjWinW = window.innerWidth-100;
	chart.adjustWindowChartW(adjWinW);
	if (type=='C') chart.plot(dataY,dataX);
	if (type='H') chart.plot(histY,histX);
}

// Redraw after settings change - charts/hists related function
function redraw(){chartObject.plot(dataY,dataX); histObject.plot(histY,histX); }

// Example function to pull data from DB by AJAX to chart-type variables
/* PARAMETERS:
dtype (string) - name of dataset in DB, like 'Temperature'
input (string) - 'dz' or 'dd' - 'dz' = Datetime > TimeSpan (week,month, etc.) / 'dd' = DateTime > DateTime (4.2.2015 > 15.3.2016)
chart (string) - ID of the HTML canvas object to draw the chart on
*/
function getDataToChart(dtype,input,chart){
	var xhr = new XMLHttpRequest();
	var sendReq = "sensorType="+dtype;
	if (input=="dz")
	{
		var dateTime = $("#fDate").val();
		var dataRange = document.querySelector('input[name="nZakres"]:checked').value;
		sendReq+="&startDate="+dateTime+"&Range="+dataRange;
	}
	if (input=="dd")
	{
		var dtStart = $("#dZakresMin").val();
		var dtEnd = $("#dZakresMax").val();
		sendReq+="&startDate="+dtStart+"&endDate="+dtEnd;
	}
	xhr.open("POST", "../smartesp/api/getChartDataFromDB.php", false);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			mJson = JSON.parse(this.responseText);
			console.log('Chart:'+mJson)
			var ile = Object.keys(mJson).length;
			dataY = [];
			dataX = [];
			for (let i=0; i<ile; i++)
				{
					dataY[i] = parseFloat(mJson[i][0]);
					dataX[i] = mJson[i][1];
				}
				chart.plot(dataY,dataX);
				$("#numInfo").html("Zanalzłem ("+ile+") rekordów")
			}
		};
		xhr.send(sendReq);
}

// Example function to pull data from DB by AJAX to hist-type variables
/*PARAMETERS:
dataType (string) - like in chart class - name of our DB data type, like Temperature
inc (int) - incrementator between values - like *inc=4: Temperatur[1set: 0,3.99][2set: 4, 7.99][3set: 8, 11.99][etc.]
hist (string) - ID of the HTML canvas object to draw the histogram on
range (number) - data time span in months
*/
function getHist(dataType,inc,hist,range){
	var xmlhttp = new XMLHttpRequest();		
	var req = "sensorType="+dataType+"&Increment="+inc+"&range="+range
	xmlhttp.open("POST", "../smartesp/api/getHistDataFromDB.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(req);
	xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var json = JSON.parse(this.responseText)
		console.log(json)
		//var ile = Object.keys(json).length;
		for (var i in json)
		{
			histY[i] = json[i][0]
			histX[i] = json[i][1]
		}
		hist.plot(histY,histX)
		}
	};	
}
