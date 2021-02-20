//video 2D array
//if this were a full website, I would want to establish a connection to a database and draw from there, however this is mainly a javascript exercise.
let vidArr = [
  //Wildlife
  [
    "https://player.vimeo.com/external/371858947.sd.mp4?s=d52127c22fa0f443259b8569bff695ce6a2136ee&profile_id=139&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/293348436.sd.mp4?s=5f926db2c1ed01e13c9e59f9965e4ff3ab6ec1d4&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/392328703.sd.mp4?s=98d5a5b0556eb22e7ea4d7d0d03482954bcf9fee&profile_id=139&oauth2_token_id=57447761"
  ],
  //Pets
  [
    "https://player.vimeo.com/external/199433617.sd.mp4?s=457abd2452a52548b8c02c503a91035ce8a713f0&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/203444594.sd.mp4?s=044c575f9076db78fab2ab88d7f62de0348f4b2a&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/210743842.sd.mp4?s=fcf7c509e74a02a35175a2d9294eb2e25d6c74ef&profile_id=164&oauth2_token_id=57447761"
  ],
  //Water
  [
    "https://player.vimeo.com/external/317887716.sd.mp4?s=15a0a7652fca437e299a82df7e9a43a74d6f2ade&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/352930770.sd.mp4?s=75122935c4024494ce2d7ca39deb208fb873753b&profile_id=139&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/272806686.sd.mp4?s=9d61648ef364f406229db03ee5306ddef48ea551&profile_id=164&oauth2_token_id=57447761"
  ],
  //Sky
  [
    "https://player.vimeo.com/external/368745224.sd.mp4?s=81503c465f1569f299737112729c7c5f3b6373d6&profile_id=139&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/210730141.sd.mp4?s=e58a94323301b678e36275c0a85dd4eac34050d0&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/209333087.sd.mp4?s=65842decb1c966bf4751fc9598ea71a81e4d9d31&profile_id=164&oauth2_token_id=57447761"
  ],
  //Cities
  [
    "https://player.vimeo.com/external/303953174.sd.mp4?s=44c6628c9ddb0932b487538254ed624e483d9890&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/180168748.sd.mp4?s=7f656f521d7e265da9db0bd32521b9445de79c71&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/325036154.sd.mp4?s=2df7ed487d51d25c273ec1cc71a7f31c49f65afc&profile_id=164&oauth2_token_id=57447761"
  ],
  //People
  [
    "https://player.vimeo.com/external/413480925.sd.mp4?s=cb37b845a67724b9865756d2371038ae3e14bae6&profile_id=139&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/324296539.sd.mp4?s=806775db4de3140951b439ef4b2a69c8bd91fa0f&profile_id=164&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/420601985.sd.mp4?s=b06bdf71461ba67ae13f1574c53c47754ebda17c&profile_id=139&oauth2_token_id=57447761"
  ]
];

//uses the choice variable to choose a random video and change the color scheme by calling colorChange
function playVid(choice){
  //change the color scheme
  //color schemes generated with: https://mycolor.space/
  //parameters: dark colour, medium colour, light colour, gradient
  switch(choice){
    case 0: //greens
      colorChange('#2f4858', '#125333', '#65E6A6', 'linear-gradient(to right top, #038693, #00929a, #009ea0, #00aba5, #00b7a8, #17bfa9, #28c7aa, #37cfaa, #43d5a9, #4edba9, #5ae0a7, #65e6a6)');
      break;
    case 1: //yellows
      colorChange('#683d00', '#254f27', '#FAE67C', 'linear-gradient(to right top, #fae67c, #fbe88b, #fbea9a, #fbeca9, #fbeeb7, #f6e9b6, #f0e5b6, #ebe0b5, #dfd3a5, #d3c796, #c7ba86, #bbae77)');
      break;
    case 2: //blues
      colorChange('#0a1041', '#12382D', '#C5F8E9', 'linear-gradient(to right top, #005453, #066771, #22798f, #428aae, #689bca, #6eacd8, #76bce5, #7fcdf2, #87dee7, #a8ebd9, #d3f5d0, #fcfcd4)');
      break;
    case 3: //greys
      colorChange('#28312F', '#425D57', '#e6f4f1',  'linear-gradient(to right top, #bfd6d9, #c6dcdd, #cde2e2, #d5e7e6, #dcedeb, #d9eae9, #d5e8e7, #d2e5e5, #c4dadc, #b6ced4, #a9c3cd, #9eb7c5)');
      break;
    case 4: //purples
      colorChange('#1E0E40', '#4F27A0', '#DDCCFF', 'linear-gradient(to right top, #ddccff, #e3cbfe, #eacafd, #f1c8fb, #f7c7f9, #fac6f5, #fdc4f1, #ffc3ed, #ffc2e7, #ffc1e1, #ffc0db, #ffc0d6)');
      break;
    case 5: //reds
      colorChange('#3C000F', '#661800', '#F8C1CF', 'linear-gradient(to right top, #ff5757, #ff5a63, #ff5e6f, #ff627a, #ff6785, #ff668b, #ff6591, #ff6497, #ff5c9a, #ff549e, #ff4ca3, #ff43a8)');
      break;
    default: //the default colors
      colorChange('#23133e', '#6b2756', '#abf1ff', 'linear-gradient(to right top, #eec6dd, #e1cff3, #cddbff, #b7e7ff, #abf1ff, #aff6fd, #b5fafb, #bcfef8, #ccfef5, #dbfff4, #e8fff6, #f4fff9)');
  }

  //play a random video
  document.getElementById("vid").style.display = "block";

  let random = Math.floor(Math.random()*3);
  console.log(random);
  if(choice !== 6){
    document.getElementById("vid").setAttribute("src",vidArr[choice][random]);
  }
  else {
    let categoryRandom = Math.floor(Math.random()*6);
    document.getElementById("vid").setAttribute("src",vidArr[categoryRandom][random]);
  }
  document.getElementById("vid").load();
  document.getElementById("vid").play();
}

//changes the color scheme
function colorChange(d, m, l, grad){

  var dark = document.getElementsByClassName('dark');
  var medium = document.getElementsByClassName('medium');
  var light = document.getElementsByClassName('light');

  //help altering all objects in class from: https://stackoverflow.com/a/9436187
  for(i =0 ; i < dark.length; i++){
    dark[i].style.color = d;
  }
  for(i =0 ; i < medium.length; i++){
    medium[i].style.color = m;
  }
  for(i =0 ; i < light.length; i++){
    light[i].style.backgroundColor = l;
  }

  document.body.style.backgroundImage = grad;
}
