const bein = require("./providers/beIN");
const osn = require("./providers/osn");
const mbc = require("./providers/mbc");
const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();
const https = require("https");

app.get('/channel', async (req, res) => {
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

app.get('/schedule', async (req, res) => {
    let jsonResponse = {};
    let channel = req.query.channel;
	if (channel != null && osn.channels[channel] != null)
        jsonResponse = osn.getSchedule();
    else if (channel != null && (bein.channels[channel] != null || bein.sports_channels[channel] != null))
        jsonResponse = bein.getSchedule();
    else if (channel != null && mbc.channels[channel] != null)
        jsonResponse = mbc.getSchedule();
    else
        jsonResponse = {"message": "Channel not implemented", "code": 400};

    res.setHeader('Content-Type', 'application/json');
	res.send(JSON.stringify(jsonResponse));
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