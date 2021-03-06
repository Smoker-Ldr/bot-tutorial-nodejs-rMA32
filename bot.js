var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/home/;botRegexRules = /^\/rules/
      botRegexAd=/^\/whowho/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexSiege = /^\/siege/; botRegexOW = /^\/ratings/; 
      botRegexRbl = /^\/rbl/; botRegexStop = /^\/stop/;
      botRegexLivegif = /^\/live/;botRegexKys = /^\/kys/; botRegexPlayingthecpu = /^\/cpu-rules/; botRegexBrye = /^\/brye/;
      botRegexGrade = /^\/grade/; botRegexScrotes = /^\/scrotes/; botRegexShaki = /^\/shaki/;
      botRegexDaf = /^\/dafuq/; botRegexAyy = /^\/ayy/; botRegexSchedule = /^\/schedule/; botRegexSteelers = /^\/steelers/; botRegexBengals = /^\/bengals/;
      botRegexSaints = /^\/saints/; botRegexFalcons = /^\/falcons/; botRegexLions = /^\/lions/; botRegexGiants = /^\/giants/;
      botRegexRaiders = /^\/raiders/; botRegexAftershocks = /^\/aftershocks/; botRegexEagles = /^\/eagles/; botRegexTexans = /^\/texans/;
      botRegexJets = /^\/jets/; botRegexSeahawks = /^\/seahawks/; botRegex4thdown = /^\/4thdownrule/; botRegexWeekadvanced = /^\/advance/;botRegexCheer = /^\/goteam/;
  
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexRbl.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/");
    this.res.end();
  } 
  else if(request.text && botRegexStop.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/lg-rules");
    this.res.end();
  } 
  else if(request.text && botRegexLivegif.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/groupme/livegame.gif");
    this.res.end();
  }
  else if(request.text && botRegexKys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.wikihow.com/Tie-a-Noose");
    this.res.end();
  } 
  else if(request.text && botRegexPlayingthecpu.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/lg-rules/playingthecpu.html");
    this.res.end();
  } 
  else if(request.text && botRegexDaf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i3.kym-cdn.com/photos/images/facebook/000/787/356/d6f.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexBrye.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/600x490.jpeg.b31d5153fb474d9bb18dd51b3d650afe.large");
    this.res.end();
  } 
  else if(request.text && botRegexGrade.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/9V6ZnvD.png");
    this.res.end();
  } 
  else if(request.text && botRegexScrotes.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1006x1340.jpeg.730381e4280e4028b8375432af14f39f.large");
    this.res.end();
  } 
  else if(request.text && botRegexShaki.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/305x375.jpeg.a8dd3aa18c7a4963a553e6dc16bcb100.large");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    //postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));
    postMessage("http://daddyleagues.com/rbl/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  
  else if(request.text && botRegexOW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.daddyleagues.com/maddenrating/");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/lg-rules/index.php");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    
    postMessage("http://daddyleagues.com/rbl/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/rbl/players?name="+rep+"&position=all&team=all");
    
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("(☞ﾟヮﾟ)☞");
    this.res.end();
  }
  else if(request.text && botRegexSchedule.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/schedule/index.html");
    this.res.end();
  }
  else if(request.text && botRegexSteelers.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/stream/steelers");
    this.res.end();
  } 
  else if(request.text && botRegexBengals.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/stream/bengals/index.html");
    this.res.end();
  } 
  else if(request.text && botRegexRaiders.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/stream/raiders/index.html");
    this.res.end();
  } 
  else if(request.text && botRegexAftershocks.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/stream/aftershocks/index.html");
    this.res.end();
  } 
  else if(request.text && botRegexEagles.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/stream/eagles/index.html");
    this.res.end();
  } 
  else if(request.text && botRegexTexans.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/stream/texans/index.html");
    this.res.end();
  } 
  else if(request.text && botRegexSaints.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/stream/saints/index.html");
    this.res.end();
  } 
  else if(request.text && botRegexFalcons.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/stream/falcons/index.html");
    this.res.end();
  } 
  else if(request.text && botRegexLions.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/stream/lions/index.html");
    this.res.end();
  } 
  else if(request.text && botRegexGiants.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/stream/giants/index.html");
    this.res.end();
  } 
  else if(request.text && botRegexJets.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/stream/jets/index.html");
    this.res.end();
  } 
  else if(request.text && botRegexSeahawks.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.realballersleague.com/stream/seahawks/index.html");
    this.res.end();
  } 
  else if(request.text && botRegex4thdown.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://realballersleague.com/lg-rules/4thdown/index.html");
    this.res.end();
  } 
  else if(request.text && botRegexWeekadvanced.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://realballersleague.com/advance/index.html");
    this.res.end();
  } 
   else if(request.text && botRegexCheer.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://realballersleague.com/groupmebot/img/fatboycheer.gif");
    this.res.end();
  } 
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
