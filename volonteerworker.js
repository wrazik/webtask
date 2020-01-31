function randInt(a,b){return a+Math.floor(Math.random()*(++b-a))}

function workers(name) { return {
    'U64HNPURG': ['What\' new on tik-tok, young boy?'],
    'U2WLHAD8T': ['Do you have a gun prepared to defend your daughters?'],
    'U64HS7CTC': ['What\' new on tik-tok, young boy?'],
    'U02T78DCS': ['What\'s up with smart care?'],
    'U072GEAH3': ['Have you filled blinker fluid in your BMW?'],
    'U7BQUU3AN': ['Paris still so kind to the world?'],
    'U0BNBBR37': ['Oh, you are still here. We miss you!'],
    'U1P4R0K36': ['How many times have you lost in TLK today?'],
    'U91BPGAUC': ['Still impressed with beatiful SCALA? WHO USED THAT?!'],
    'U0546735Y': ['6 - 4 :heart:'],
    'U04MJ7NK1': ['Have you respond to all recruiters today?'],
    'U04497GD6': ['Do you feel 16% chemistry to our company?'],
    'U03BA6HU5': ['Have you drutted everything for today?'],
    'U6W8B26UA': ['Do you recommend any wine for today?'],
    'U8N1QN45D': ['Mr. Magister, did you fill all excels for today?'], 
    'U50HZAX08': ['Still no DPF mounted?'],
    'UAS1X5CGL': ['How do you feel in ~Nokia~ ~BMW~ any comparny where you are decoration as always?'],
    'UBK1HB4BG': ['Did npm crashed today?'],
    'UBHD8D532': ['How do you feel as JP slave?'],
    'UDNSNRSMS': ['Praised be Jesus Christ, Father Director.'],
    'UAGM1BDPW': ['Still trolling everybody?'],
    'UFVJ3U18V': ['¿Cómo estás?'],
    'UFWFAKXNK': ['Thank you for supplies, you are the best!'],
    'UFWDK3PV5': ['Don\'t ride with Conrado, he doesn\'t drive carefully!'],
    'UH9V60VLZ': ['Antenna expert, how are you today'],
    'UJATY01UP': ['Have you started to love our company?'],
    'UK6KDDL04': ['Do you know already where to put blockchain in Thaumatec?'],
    'UL11FCWAU': ['Are you already on the right track in Thaumatec?'],
    'UKPK1GCLB': ['Have you started to love our company?'],
    'UL79MDBT7': ['Have you start brewing the beer before our next event?'],
    'ULW3E5VK2': ['Any new design pattern for today?'], 
    'US7AK7DJR': ['Hello C-someletter-O! Hope you like Thaumatec!'],
    'US7AL1CH3': ['Hello C-someletter-O, Що сталося?'], 
    'UJATY01UP': ['Hello Santa, how are you?']
  };
}

function rand_id(obj) {
  var keys = Object.keys(obj);
  return keys[randInt(0, keys.length-1)];
}


module.exports = function(context, cb) {
  var users = workers();
  var request = context.body.text;
  var response = ", you are nominated " + request;
   if (request === "list") {
      cb(null, { 
        text: "List requested, here it is: " + Object.keys(users).map(function(user) { return "\n  >" + user + " aka <@" + user + ">"}).toString(),
        response_type: "in_channel"
    });
   }
   else if (request === "full list") {
      cb(null, { 
        text: "List requested, here it is: " + Object.keys(users).map(function(user) { return "\n  >" + user + " aka <@" + user + "> : " + users[user][0]}).toString(),
        response_type: "in_channel"
    });
   }
   else {
     var choosen_user = rand_id(users);
     var customized_msg_arr = users[choosen_user];
     var customized_msg = customized_msg_arr[0];
     if (request.startsWith("to ")) {
       response = "Hello <@" + choosen_user + ">. " + customized_msg + " Could you please " + request.substring(3, request.lentgh) + "? Thank you from the mountain!";
     }
     
     cb(null, { 
       text: response,
       response_type: "in_channel"
     });
   }
};
