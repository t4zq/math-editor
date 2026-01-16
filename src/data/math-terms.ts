// 数学用語の型定義
export interface MathTerm {
  keyword: string;        // 日本語キーワード
  latex: string;          // LaTeXコード
  description: string;    // 説明
  category: string;       // カテゴリ
}

// 数学用語辞書
export const mathTerms: MathTerm[] = [
  // 基本演算
  {
    keyword: 'ぶんすう',
    latex: '\\frac{分子}{分母}',
    description: '分数',
    category: '基本演算'
  },
  {
    keyword: 'るーと',
    latex: '\\sqrt{}',
    description: '平方根',
    category: '基本演算'
  },
  {
    keyword: 'へいほうこん',
    latex: '\\sqrt{}',
    description: '平方根',
    category: '基本演算'
  },
  {
    keyword: 'るーとn',
    latex: '\\sqrt[n]{}',
    description: 'n乗根',
    category: '基本演算'
  },
  {
    keyword: 'じょう',
    latex: '^{}',
    description: 'べき乗',
    category: '基本演算'
  },
  
  // 総和・積分
  {
    keyword: 'しぐま',
    latex: '\\sum_{i=1}^{n}',
    description: '総和記号',
    category: '総和・積分'
  },
  {
    keyword: 'そうわ',
    latex: '\\sum_{i=1}^{n}',
    description: '総和記号',
    category: '総和・積分'
  },
  {
    keyword: 'いんてぐらる',
    latex: '\\int',
    description: '積分',
    category: '総和・積分'
  },
  {
    keyword: 'せきぶん',
    latex: '\\int',
    description: '積分',
    category: '総和・積分'
  },
  {
    keyword: 'ていせきぶん',
    latex: '\\int_{a}^{b}',
    description: '定積分',
    category: '総和・積分'
  },
  {
    keyword: 'びぶん',
    latex: '\\frac{d}{dx}',
    description: '微分',
    category: '総和・積分'
  },
  
  // ギリシャ文字
  {
    keyword: 'あるふぁ',
    latex: '\\alpha',
    description: 'α (アルファ)',
    category: 'ギリシャ文字'
  },
  {
    keyword: 'べーた',
    latex: '\\beta',
    description: 'β (ベータ)',
    category: 'ギリシャ文字'
  },
  {
    keyword: 'がんま',
    latex: '\\gamma',
    description: 'γ (ガンマ)',
    category: 'ギリシャ文字'
  },
  {
    keyword: 'でるた',
    latex: '\\delta',
    description: 'δ (デルタ)',
    category: 'ギリシャ文字'
  },
  {
    keyword: 'いぷしろん',
    latex: '\\epsilon',
    description: 'ε (イプシロン)',
    category: 'ギリシャ文字'
  },
  {
    keyword: 'しーた',
    latex: '\\theta',
    description: 'θ (シータ)',
    category: 'ギリシャ文字'
  },
  {
    keyword: 'らむだ',
    latex: '\\lambda',
    description: 'λ (ラムダ)',
    category: 'ギリシャ文字'
  },
  {
    keyword: 'みゅー',
    latex: '\\mu',
    description: 'μ (ミュー)',
    category: 'ギリシャ文字'
  },
  {
    keyword: 'ぱい',
    latex: '\\pi',
    description: 'π (パイ)',
    category: 'ギリシャ文字'
  },
  {
    keyword: 'おめが',
    latex: '\\omega',
    description: 'ω (オメガ)',
    category: 'ギリシャ文字'
  },
  
  // 極限・その他
  {
    keyword: 'りみっと',
    latex: '\\lim_{x \\to a}',
    description: '極限',
    category: '極限・その他'
  },
  {
    keyword: 'きょくげん',
    latex: '\\lim_{x \\to a}',
    description: '極限',
    category: '極限・その他'
  },
  {
    keyword: 'むげんだい',
    latex: '\\infty',
    description: '無限大',
    category: '極限・その他'
  },
  {
    keyword: 'べくとる',
    latex: '\\vec{}',
    description: 'ベクトル',
    category: '極限・その他'
  },
  
  // 追加の記号・演算
  {
    keyword: 'かけざん',
    latex: '\\times',
    description: '掛け算記号',
    category: '基本演算'
  },
  {
    keyword: 'わりざん',
    latex: '\\div',
    description: '割り算記号',
    category: '基本演算'
  },
  {
    keyword: 'ぷらすまいなす',
    latex: '\\pm',
    description: 'プラスマイナス',
    category: '基本演算'
  },
  {
    keyword: 'いこーる',
    latex: '=',
    description: '等号',
    category: '基本演算'
  },
  {
    keyword: 'のっといこーる',
    latex: '\\neq',
    description: 'ノットイコール',
    category: '基本演算'
  },
  {
    keyword: 'しょうなり',
    latex: '\\leq',
    description: '以下',
    category: '基本演算'
  },
  {
    keyword: 'だいなり',
    latex: '\\geq',
    description: '以上',
    category: '基本演算'
  },
  {
    keyword: 'しぐまおおもじ',
    latex: '\\Sigma',
    description: 'Σ (シグマ大文字)',
    category: 'ギリシャ文字'
  },
  {
    keyword: 'でるたおおもじ',
    latex: '\\Delta',
    description: 'Δ (デルタ大文字)',
    category: 'ギリシャ文字'
  },
];
