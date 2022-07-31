


function checkUrl(){
	let inputUrl = String(document.getElementById('target-url-input').value)
	if (inputUrl){
		
		//debugging
		console.log('URL: '+inputUrl)

		//api call
		const options = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'PUT API KEY from https://rapidapi.com/Amiichu/api/exerra-phishing-check/',
				'X-RapidAPI-Host': 'exerra-phishing-check.p.rapidapi.com'
			}
		};


		function showData(thisData){
			var domData = document.getElementById('domData')
			if (thisData.isScam == true){
				domData.innerHTML = 'This link is a known phising attempt.'
			}else{
				domData.innerHTML = 'This link is not a phising scam.'
			}
		}

		function showError(){
			var domError = document.getElementById('domData')
			domError.innerHTML = 'Invalid link'
		}


		
		let thiss = null
		fetch('https://exerra-phishing-check.p.rapidapi.com/?url='+inputUrl, options)
			.then(response => response.json())
			.then(data => {
				if (data.humanReadable != "Query parameter 'url' is not a valid HTTP(s) link"){
					thiss = data;
					console.log(thiss)
					showData(thiss)
				}else{
					showError()
				}
				
			})
			.catch(err => console.error(err));
	}else{
		console.log('no data')
	}
}