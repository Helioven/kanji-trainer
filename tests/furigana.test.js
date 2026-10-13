// Ejecutar con: node tests/furigana.test.js
// Pruebas estáticas: no modifican progreso ni necesitan navegador.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const examplesCode = fs.readFileSync(path.join(root, 'kanji_ejemplos.js'), 'utf8');
const match = app.match(/const KANJI_FURIGANA=(\{[^;]+\});/);
assert.ok(match, 'No se encontró el diccionario de furigana');
const readings = JSON.parse(match[1]);
const context = { window: {} };
vm.runInNewContext(examplesCode, context);
const examples = context.window.KANJI_EXAMPLES;
assert.equal(Object.keys(examples).length, 20, 'Se esperaban 20 fichas');
const items = Object.values(examples).flat();
assert.equal(items.length, 40, 'Se esperaban 40 ejemplos');
const words = Object.keys(readings).sort((a, b) => b.length - a.length || a.localeCompare(b));
function segments(sentence) {
  const found = [];
  for (let i = 0; i < sentence.length;) {
    const word = words.find(w => sentence.startsWith(w, i));
    if (word) { found.push([word, readings[word]]); i += word.length; }
    else {
      assert.ok(!/[\u3400-\u9fff]/.test(sentence[i]), 'Kanji sin furigana: ' + sentence[i] + ' en ' + sentence);
      i++;
    }
  }
  return found;
}
for (const item of items) {
  assert.ok(item.word && item.reading && item.meaning && item.sentence && item.translation, 'Ejemplo incompleto');
  segments(item.sentence);
}
assert.ok(segments('駅に売店があります。').some(([w,r]) => w === '売店' && r === 'ばいてん'), '売店 debe leerse ばいてん');
assert.ok(segments('薬を飲んだ方がいいですよ。').some(([w,r]) => w === '飲' && r === 'の'), '飲 debe leerse の');
assert.ok(segments('毎晩本を読みます。').some(([w,r]) => w === '読' && r === 'よ'), '読 debe leerse よ');
assert.ok(segments('駅前で友達に会いました。').some(([w,r]) => w === '駅前' && r === 'えきまえ'), '駅前 debe leerse えきまえ');
console.log('OK: 20 fichas, 40 ejemplos, cobertura de kanjis y 4 lecturas críticas');
