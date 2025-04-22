
function startExperience() {
  document.querySelector('.launch').style.display = 'none';
  document.querySelector('.experience').classList.remove('hidden');

  const characters = [
    { img: '123.png', ja: 'あなたには癒しの才能があるよ', en: 'You have the power to heal.' },
    { img: '124.png', ja: 'そばにいるよ、安心して', en: 'I’m by your side, don’t worry.' },
    { img: '125.png', ja: '焦らなくて大丈夫', en: 'No need to rush.' },
    { img: '126.png', ja: '今日も頑張っててえらい！', en: 'You’re doing great today!' },
    { img: '127.png', ja: 'ひとやすみ、しよう？', en: 'Take a little break, okay?' },
    { img: '128.png', ja: 'ありのままで素敵だよ', en: 'You’re perfect just the way you are.' },
    { img: '129.png', ja: '一緒に笑おう？', en: 'Let’s smile together!' },
    { img: '130.png', ja: 'あなたの味方だよ', en: 'I’m always on your side.' },
    { img: '131.png', ja: '泣いてもいいんだよ', en: 'It’s okay to cry.' },
    { img: '132.png', ja: '夢、あきらめないで', en: 'Don’t give up on your dream.' },
    { img: '133.png', ja: '世界にひとりだけのあなたへ', en: 'To the one and only you.' },
    { img: '134.png', ja: '今は休む時間かも', en: 'Maybe now’s a time to rest.' },
    { img: '135.png', ja: 'がんばりすぎ注意！', en: 'Don’t overdo it!' },
    { img: '136.png', ja: '深呼吸してみよう', en: 'Take a deep breath.' },
    { img: '137.png', ja: 'あなたの笑顔が好き', en: 'I love your smile.' },
    { img: '138.png', ja: '今日はちょっと甘えてもいいよ', en: 'It’s okay to lean on me today.' }
  ];

  const selected = characters[Math.floor(Math.random() * characters.length)];
  document.getElementById('characterImg').src = selected.img;
  document.getElementById('dialogue').textContent = '「' + selected.ja + '」';
  document.getElementById('translation').textContent = '"' + selected.en + '"';
}

document.getElementById('saveBtn').addEventListener('click', () => {
  alert('画像保存機能はここに入ります（html2canvas対応予定）');
});
