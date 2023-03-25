const bein = require("providers/beIN");
const osn = require("providers/osn");
const mbc = require("providers/mbc");
const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const https = require("https");

app.get('/all', async (req, res) => {
	var allChannels = Object.keys(bein.channels);
        
    var osnChannels = Object.keys(osn.channels);
    for (var i = 0; i < osnChannels.length; i++)
        allChannels.push(osnChannels[i]);
    
    var beinSportsChannels = Object.keys(bein.sports_channels);
    for (var i = 0; i < beinSportsChannels.length; i++)
        allChannels.push(beinSportsChannels[i]);
    
    var mbcChannels = Object.keys(mbc.channels);
    for (var i = 0; i < mbcChannels.length; i++)
        allChannels.push(mbcChannels[i]);

	res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(allChannels));
});

app.listen(process.env.PORT || 3000)

function iftttWebhook(jsonData) {
	const data = JSON.stringify(jsonData);

	const postOptions = {
		hostname: 'maker.ifttt.com',
		port: 443,
		path: '/trigger/notification/json/with/key/' + process.env.IFTTT_WEBHOOK_KEY,
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		}
	}

	const req = https.request(postOptions, res => {
		res.on('data', d => {
		})
	});

	req.on('error', error => {
		console.error(error);
		throw error;
	})

	req.write(data)
	req.end()
}

/*
switch(request.method) {
    case "GET":
        var allChannels = Object.keys(bein.channels);
        
        var osnChannels = Object.keys(osn.channels);
        for (var i = 0; i < osnChannels.length; i++)
            allChannels.push(osnChannels[i]);
        
        var beinSportsChannels = Object.keys(bein.sports_channels);
        for (var i = 0; i < beinSportsChannels.length; i++)
            allChannels.push(beinSportsChannels[i]);
        
        var mbcChannels = Object.keys(mbc.channels);
        for (var i = 0; i < mbcChannels.length; i++)
            allChannels.push(mbcChannels[i]);
        
        utils.returnResult(allChannels);
    case "POST":
        var params = request.body || JSON.parse(request.parameters.body) || request.parameters;
        if(params == null){
            try{
                params = JSON.parse(request.rawBody)
            }catch(e){
                log.info("failed to parse body");
                params == null;
            }
        }
        if (params.channel != null && osn.channels[params.channel] != null)
            return osn.getSchedule(request);
        else if (params.channel != null && (bein.channels[params.channel] != null || bein.sports_channels[params.channel] != null))
            return bein.getSchedule(request);
        else if (params.channel != null && mbc.channels[params.channel] != null)
            return mbc.getSchedule(request);
        else
            utils.returnResult("Channel not implemented", 400);
    default:
        log.warn("HTTP method not implemented for params");
        utils.returnResult("HTTP method not implemented", 400);
        return;
}
*/