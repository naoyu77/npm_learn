const kuromoji = require('kuromoji');

kuromoji.builder({ dicPath: 'node_modules/kuromoji/dict' }).build((err, tokenizer) => {
  if (err) {
    console.error('エラー:', err);
    return;
  }

  // 1. 基本的な形態素解析
  console.log('=== 形態素解析 ===');
  const text1 = '今日は良い天気です';
  const tokens1 = tokenizer.tokenize(text1);
  console.log(`「${text1}」\n`);
  tokens1.forEach(t => {
    console.log(`${t.surface_form}\t${t.pos}\t${t.reading || ''}`);
  });

  // 2. 有名な早口言葉
  console.log('\n=== 早口言葉 ===');
  const text2 = 'すもももももももものうち';
  const tokens2 = tokenizer.tokenize(text2);
  console.log(`「${text2}」\n`);
  tokens2.forEach(t => {
    console.log(`${t.surface_form}\t${t.pos}`);
  });

  // 3. 名詞だけ抽出
  console.log('\n=== 名詞だけ抽出 ===');
  const text3 = '東京タワーから富士山が見えました';
  const tokens3 = tokenizer.tokenize(text3);
  const nouns = tokens3.filter(t => t.pos === '名詞').map(t => t.surface_form);
  console.log(`「${text3}」`);
  console.log(`名詞: ${nouns.join(', ')}`);

  // 4. 動詞の原形を取得
  console.log('\n=== 動詞の原形 ===');
  const text4 = '走って泳いで飛んだ';
  const tokens4 = tokenizer.tokenize(text4);
  console.log(`「${text4}」\n`);
  tokens4.filter(t => t.pos === '動詞').forEach(t => {
    console.log(`${t.surface_form} → 原形: ${t.basic_form}`);
  });

  // 5. 読み仮名を取得
  console.log('\n=== 読み仮名 ===');
  const text5 = '日本語は難しい';
  const tokens5 = tokenizer.tokenize(text5);
  const reading = tokens5.map(t => t.reading || t.surface_form).join('');
  console.log(`「${text5}」`);
  console.log(`読み: ${reading}`);
});
