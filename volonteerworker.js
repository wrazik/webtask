function isNormalInteger(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n >= 0;
}

function randInt(a,b){return a+Math.floor(Math.random()*(++b-a))}

function workers(name) {
return [[ 'anonim0', 'U5MLSPNAX' ],
  [ 'anonim1', 'U64HNPURG' ],
  [ 'anonim2', 'U2WLHAD8T' ],
  [ 'anonim3', 'U64HS7CTC' ],
  [ 'anonim4', 'U03JBDLBP' ],
  [ 'anonim5', 'U02T78DCS' ],
  [ 'anonim6', 'U072GEAH3' ],
  [ 'anonim7', 'U7BQUU3AN' ],
  [ 'anonim8', 'U0BNBBR37' ],
  [ 'anonim9', 'U1P4R0K36' ],
  [ 'anonim10', 'U91BPGAUC' ],
  [ 'anonim11', 'U0TNZC926' ],
  [ 'anonim12', 'U0546735Y' ],
  [ 'anonim13', 'U04MJ7NK1' ],
  [ 'anonim14', 'U072FS75W' ],
  [ 'anonim15', 'U04497GD6' ],
  [ 'anonim16', 'U03BA6HU5' ],
  [ 'anonim17', 'U6W8B26UA' ],
  [ 'anonim18', 'U58FSE7B4' ],
  [ 'anonim19', 'U8N1QN45D' ],
  [ 'anonim20', 'U072GC8ER' ],
  [ 'anonim22', 'U1P4R3UA0' ],
  [ 'anonim23', 'U50HZAX08' ],
  [ 'anonim24', 'UAS1X5CGL'],
  [ 'anonim25', 'UBK1HB4BG'],
  [ 'anonim26', 'UBHD8D532'],
  [ 'anonim27', 'UAGM1BDPW']];
}

module.exports = function(context, cb) {
  var users = workers();
  var request = context.body.text;
  var response = ", you are nominated " + request;
   if (request === "list") {
      cb(null, { 
        text: "List requested, here it is: " + users.map(function(user) { return "\n  >" + user[1] + " aka <@" + user[1] + ">"}).toString(),
        response_type: "in_channel"
    });
   }
   else {
     if (request.startsWith("to ")) {
       response = ", could you please " + request.substring(3, request.lentgh) + "? Thank you from the mountain!";
     }
     
     cb(null, { 
       text: "<@" + users[randInt(0, users.length-1)][1] + ">" + response,
       response_type: "in_channel"
     });
   }
};
