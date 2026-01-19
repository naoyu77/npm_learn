const natural = require('natural');

// 1. トークン化（単語分割）
console.log('=== トークン化 ===');
const tokenizer = new natural.WordTokenizer();
const text = 'The quick brown fox jumps over the lazy dog.';
console.log(tokenizer.tokenize(text));

// 2. ステミング（語幹抽出）
console.log('\n=== ステミング ===');
const words = ['running', 'cats', 'played', 'happily'];
words.forEach(word => {
  console.log(`${word} → ${natural.PorterStemmer.stem(word)}`);
});

// 3. 文字列の類似度
console.log('\n=== 文字列の類似度 ===');
const pairs = [
  ['hello', 'hallo'],
  ['cat', 'bat'],
  ['javascript', 'java'],
];
pairs.forEach(([a, b]) => {
  const jaro = natural.JaroWinklerDistance(a, b).toFixed(2);
  const lev = natural.LevenshteinDistance(a, b);
  console.log(`${a} vs ${b}: JaroWinkler=${jaro}, Levenshtein=${lev}`);
});

// 4. 感情分析
console.log('\n=== 感情分析 ===');
const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer('English', stemmer, 'afinn');

const sentences = [
  ['I', 'love', 'this', 'amazing', 'product'],
  ['I', 'hate', 'this', 'terrible', 'thing'],
  ['The', 'weather', 'is', 'okay'],
];
sentences.forEach(words => {
  const score = analyzer.getSentiment(words);
  const label = score > 0 ? '😊 Positive' : score < 0 ? '😢 Negative' : '😐 Neutral';
  console.log(`"${words.join(' ')}" → ${score.toFixed(2)} (${label})`);
});

// 5. テキスト分類（スパム判定）
console.log('\n=== テキスト分類（スパム判定） ===');
const classifier = new natural.BayesClassifier();

// 学習データ
classifier.addDocument('buy now discount sale cheap', 'spam');
classifier.addDocument('limited offer free gift prize', 'spam');
classifier.addDocument('meeting tomorrow at the office', 'normal');
classifier.addDocument('can you review the document', 'normal');
classifier.addDocument('lunch plans for today', 'normal');

classifier.train();

// テスト
const testMessages = [
  'Get 80% off buy now!',
  'Team meeting at 3pm',
  'Free prize winner click here',
];
testMessages.forEach(msg => {
  console.log(`"${msg}" → ${classifier.classify(msg)}`);
});
