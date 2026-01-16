import React from 'react';
import { MathEditor } from './components/Editor/MathEditor';
import 'katex/dist/katex.min.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* ヘッダー */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            数式エディタ
          </h1>
          <p className="text-gray-600 text-lg">
            日本語入力で数式を簡単に作成できるエディタです
          </p>
        </header>

        {/* エディタ */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            エディタ
          </h2>
          <MathEditor />
        </div>

        {/* 使い方ガイド */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            使い方
          </h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">📝 基本的な使い方</h3>
              <p className="text-sm">
                日本語で数学用語を入力すると、自動的に候補が表示されます。
                例：「ぶんすう」と入力すると分数のLaTeXコードが候補に表示されます。
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">⌨️ キーボード操作</h3>
              <ul className="text-sm space-y-1 list-disc list-inside">
                <li><code className="bg-gray-100 px-1 rounded">↑</code> / <code className="bg-gray-100 px-1 rounded">↓</code>: 候補の選択</li>
                <li><code className="bg-gray-100 px-1 rounded">Enter</code> / <code className="bg-gray-100 px-1 rounded">Tab</code>: 候補の確定</li>
                <li><code className="bg-gray-100 px-1 rounded">Esc</code>: 候補リストを閉じる</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">🔤 入力例</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-blue-600 font-mono">ぶんすう</span> → 分数
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-blue-600 font-mono">るーと</span> → 平方根
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-blue-600 font-mono">しぐま</span> → 総和記号
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-blue-600 font-mono">せきぶん</span> → 積分
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-blue-600 font-mono">あるふぁ</span> → α
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <span className="text-blue-600 font-mono">むげんだい</span> → ∞
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
