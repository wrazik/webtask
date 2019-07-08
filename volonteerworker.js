function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}

function randInt(a,b){return a+Math.floor(Math.random()*(++b-a))}

function workers(name) {
  return [
    'U5MLSPNAX', 'U64HNPURG', 'U2WLHAD8T', 'U64HS7CTC', 'U03JBDLBP', 'U02T78DCS', 'U072GEAH3',
    'U7BQUU3AN', 'U0BNBBR37', 'U1P4R0K36', 'U91BPGAUC', 'U0546735Y', 'U04MJ7NK1', 'U04497GD6',
    'U03BA6HU5', 'U6W8B26UA', 'U58FSE7B4', 'U8N1QN45D', 'U50HZAX08', 'UAS1X5CGL', 'UBK1HB4BG',
    'UBHD8D532', 'UDNSNRSMS', 'UAGM1BDPW', 'UFVJ3U18V', 'UFWFAKXNK', 'UFWDK3PV5', 'UH9V60VLZ',
    'UHHRD20HK', 'UJATY01UP', 'UK6KDDL04', 'UL11FCWAU', 'UKPK1GCLB', 'UL12AFJMB', 'UL79MDBT7'
  ];
}

module.exports = function(context, cb) {
  var users = workers();
  var request = context.body.text;
  var response = ", you are nominated " + request;
   if (request === "list") {
      cb(null, { 
        text: "List requested, here it is: " + users.map(function(user) { return "\n  >" + user + " aka <@" + user + ">"}).toString(),
        response_type: "in_channel"
    });
   }
   else {
     if (request.startsWith("to ")) {
       response = ", could you please " + request.substring(3, request.lentgh) + "? Thank you from the mountain!";
     }
     
     cb(null, { 
       text: "<@" + users[randInt(0, users.length-1)] + ">" + response,
       response_type: "in_channel"
     });
   }
};
