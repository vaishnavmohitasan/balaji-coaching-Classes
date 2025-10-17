
const QUESTIONS = [
  {id:1, q:'राजस्थान विधानसभा की कुल सीटें कितनी हैं?', opts:['199','200','201','210'], ans:1},
  {id:2, q:'राजस्थान के प्रथम मुख्यमंत्री कौन थे?', opts:['हरिदेव जोशी','हीरालाल शास्त्री','मोहनलाल सुखाड़िया','तिकलाल आहीर'], ans:1},
  {id:3, q:'राजस्थान उच्च न्यायालय का मुख्यालय कहाँ है?', opts:['जयपुर','जोधपुर','बीकानेर','अजमेर'], ans:1},
  {id:4, q:'राजस्थान राज्यपाल का कार्यकाल कितने वर्षों का होता है?', opts:['4','5','6','7'], ans:1},
  {id:5, q:'विधानसभा अध्यक्ष किस द्वारा निर्वाचित होता है?', opts:['मुख्यमंत्री','राज्यपाल','विधानसभा द्वारा निर्वाचित सदस्य','विधान परिषद'], ans:2},
  {id:6, q:'मेवाड़ की राजधानी कौन सी थी?', opts:['जोधपुर','चित्तौड़','जयपुर','बीकानेर'], ans:1},
  {id:7, q:'हल्दीघाटी का युद्ध कब हुआ था?', opts:['1565','1576','1582','1590'], ans:1},
  {id:8, q:'हल्दीघाटी युद्ध में महाराणा प्रताप के सेनापति कौन थे?', opts:['भीमसिंह','हकीम खान सूर','अमर सिंह','तिलोत्तमा देवी'], ans:1},
  {id:9, q:'बिजौलिया आंदोलन का नेतृत्व किसने किया?', opts:['अर्जुनलाल सेठी','विजय सिंह पथिक','गोपाल सिंह खरवा','मथुरा दास माथुर'], ans:1},
  {id:10, q:'राजस्थान की प्रथम महिला स्वतंत्रता सेनानी कौन थीं?', opts:['रुक्मिणी देवी','विद्या देवी','गुलाब देवी','किशोरी देवी'], ans:3},
  {id:11, q:'राजस्थान का क्षेत्रफल भारत का कितना प्रतिशत है?', opts:['8.23%','10.41%','11.12%','9.67%'], ans:1},
  {id:12, q:'राजस्थान का सबसे ऊँचा पर्वत कौन सा है?', opts:['गुरु शिखर','कुंभलगढ़','सिरोही पर्वत','तिलवाड़ा'], ans:0},
  {id:13, q:'थार मरुस्थल मुख्यतः किस दिशा में फैला है?', opts:['उत्तर-पश्चिम','दक्षिण-पूर्व','उत्तर-पूर्व','दक्षिण-पश्चिम'], ans:0},
  {id:14, q:'राजस्थान की सर्वाधिक लंबी नदी कौन सी है?', opts:['लूणी','बनास','चम्बल','घग्गर'], ans:1},
  {id:15, q:'इन्दिरा गाँधी नहर का प्रारंभिक बिंदु कहाँ है?', opts:['श्रीगंगानगर','हनुमानगढ़','हरिके','बीकानेर'], ans:2},
  {id:16, q:'कुम्भलगढ़ दुर्ग किसके द्वारा बनवाया गया था?', opts:['राणा कुंभा','महाराणा प्रताप','सांगा','भूपाल सिंह'], ans:0},
  {id:17, q:'कालबेलिया नृत्य किस जनजाति का प्रसिद्ध नृत्य है?', opts:['भील','गाड़िया लोहार','कालबेलिया','मेघवाल'], ans:2},
  {id:18, q:'पिचवई चित्रकला कहाँ की प्रसिद्ध है?', opts:['जयपुर','उदयपुर','नाथद्वारा','कोटा'], ans:2},
  {id:19, q:'तीर्थराज पुष्कर किस देवता को समर्पित है?', opts:['विष्णु','शिव','ब्रह्मा','गणेश'], ans:2},
  {id:20, q:'“काला मेला” कहाँ आयोजित होता है?', opts:['नागौर','बीकानेर','जोधपुर','भरतपुर'], ans:1},
  {id:21, q:'राजस्थान दिवस कब मनाया जाता है?', opts:['1 मार्च','30 मार्च','15 अगस्त','26 जनवरी'], ans:1},
  {id:22, q:'भीलों का प्रमुख त्यौहार कौन सा है?', opts:['गणगौर','बाणेश्वर मेले','तीजन','होलिका'], ans:1},
  {id:23, q:'“चूना पथ्थर की खानें” राजस्थान के किस जिले में प्रमुख हैं?', opts:['नागौर','कोटा','बूँदी','जयपुर'], ans:1},
  {id:24, q:'राजस्थान की सबसे बड़ी झील कौन सी है?', opts:['सांभर','फतेहसागर','पुष्कर','उदयसागर'], ans:0},
  {id:25, q:'खादी ग्रामोद्योग बोर्ड का मुख्यालय कहाँ है?', opts:['जयपुर','अजमेर','जोधपुर','उदयपुर'], ans:0},
  {id:26, q:'राजस्थान का गठन कब हुआ था?', opts:['1948','1949','1950','1956'], ans:1},
  {id:27, q:'राज्य का प्रतीक चिन्ह कब अपनाया गया?', opts:['1951','1956','1958','1962'], ans:1},
  {id:28, q:'राजस्थान की “मरु-वनस्पति” का उदाहरण कौन सा है?', opts:['खेजड़ी','नीम','आम','जामुन'], ans:0},
  {id:29, q:'बाड़मेर जिले की सीमा किस देश से लगती है?', opts:['नेपाल','पाकिस्तान','भूटान','चीन'], ans:1},
  {id:30, q:'राजस्थान में कुल कितने मंडल हैं?', opts:['6','7','8','9'], ans:2},
  {id:31, q:'“विंटेज कार म्यूज़ियम” कहाँ स्थित है?', opts:['जयपुर','उदयपुर','बीकानेर','अजमेर'], ans:1},
  {id:32, q:'“गजनेर पैलेस” किस राजा से संबंधित है?', opts:['बीकानेर','जयपुर','जोधपुर','उदयपुर'], ans:0},
  {id:33, q:'राजस्थान का सबसे बड़ा कृषि विश्वविद्यालय कहाँ है?', opts:['जोधपुर','बीकानेर','उदयपुर','जयपुर'], ans:1},
  {id:34, q:'जयपुर की स्थापना कब हुई?', opts:['1727','1730','1750','1767'], ans:0},
  {id:35, q:'जयपुर की स्थापना किसने की?', opts:['सवाई माधो सिंह','सवाई जयसिंह द्वितीय','मान सिंह','राणा कुंभा'], ans:1},
  {id:36, q:'राजस्थान लोक सेवा आयोग (RPSC) की स्थापना कब हुई?', opts:['1947','1949','1951','1956'], ans:2},
  {id:37, q:'मुख्यमंत्री सहायता कोष कब स्थापित हुआ?', opts:['1951','1954','1956','1959'], ans:2},
  {id:38, q:'राजस्थान की सबसे पुरानी नगर पालिका कौन सी है?', opts:['जयपुर','अजमेर','उदयपुर','बीकानेर'], ans:1},
  {id:39, q:'राजस्थान की पहली महिला मुख्यमंत्री कौन थीं?', opts:['वसुंधरा राजे','शीला कौल','ममता भारती','रुक्मिणी देवी'], ans:0},
  {id:40, q:'“डिजिटल राजस्थान” योजना किस वर्ष शुरू की गई?', opts:['2015','2016','2017','2018'], ans:1}
];

let currentQ = 0;
let score = 0;
let studentName = "";
let selectedAnswers = Array(QUESTIONS.length).fill(null);
let timeLimit = 60*60; // 60 minutes in seconds

function startTest(){
  studentName = document.getElementById('studentName').value.trim();
  if(studentName===""){ alert('कृपया अपना नाम दर्ज करें!'); return; }
  showQuestion();
  startTimer();
}

function showQuestion(){
  let q = QUESTIONS[currentQ];
  let container = document.querySelector('.container');
  container.innerHTML = `<div class="card">
    <h2>प्रश्न ${currentQ+1}/${QUESTIONS.length}</h2>
    <p>${q.q}</p>
    ${q.opts.map((o,i)=>`<label><input type="radio" name="opt" value="${i}" ${selectedAnswers[currentQ]===i?'checked':''}/> ${o}</label><br>`).join('')}
    <br>
    <button onclick="prevQ()" ${currentQ===0?'disabled':''}>पिछला</button>
    <button onclick="nextQ()" ${currentQ===QUESTIONS.length-1?'disabled':''}>अगला</button>
    <button onclick="submitTest()">सबमिट</button>
  </div>`;
}

function prevQ(){
  saveAnswer();
  if(currentQ>0){ currentQ--; showQuestion(); }
}
function nextQ(){
  saveAnswer();
  if(currentQ<QUESTIONS.length-1){ currentQ++; showQuestion(); }
}
function saveAnswer(){
  let opts = document.getElementsByName('opt');
  opts.forEach((o)=>{if(o.checked){ selectedAnswers[currentQ]=parseInt(o.value); }});
}

function submitTest(){
  saveAnswer();
  score = 0;
  let resultHTML = `<div class="card"><h2>परिणाम - ${studentName}</h2><p>`;
  QUESTIONS.forEach((q,i)=>{
    let correct = q.ans;
    let sel = selectedAnswers[i];
    if(sel===correct){ score++; }
    resultHTML += `<b>Q${i+1}:</b> आपका उत्तर: ${sel!==null?q.opts[sel]:'नहीं दिया'}, सही उत्तर: ${q.opts[correct]}<br>`;
  });
  let percent = (score/QUESTIONS.length*100).toFixed(2);
  resultHTML += `</p><p>स्कोर: ${score}/${QUESTIONS.length} | प्रतिशत: ${percent}%</p></div>`;
  resultHTML += '<div class="card">डिज़ाइन एवं विकास: मोहित वैष्णव आसन द्वारा तैयार<br>सर्वाधिकार © बालाजी कोचिंग संस्थान, सरेड़ी बड़ी</div>';
  document.querySelector('.container').innerHTML = resultHTML;
  clearInterval(timerInterval);
}

let timerInterval;
function startTimer(){
  let timerDisplay = document.createElement('div');
  timerDisplay.style.margin="10px 0"; timerDisplay.style.fontWeight="bold";
  document.querySelector('.container').prepend(timerDisplay);
  timerInterval = setInterval(()=>{
    let mins = Math.floor(timeLimit/60);
    let secs = timeLimit%60;
    timerDisplay.innerText = `समय शेष: ${mins} मिनट ${secs} सेकंड`;
    timeLimit--;
    if(timeLimit<0){ clearInterval(timerInterval); submitTest(); }
  },1000);
}

document.getElementById('startBtn').addEventListener('click',startTest);
