import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'; // Counter App

let countC = 0
function App() {
  // Hello World App
  const greeting = "Hello World! JSX!";
  const styleObject = {
    color: 'white',
    fontSize: '32px'
  };
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'center',
  };
  const boxStyle = {
    width: '33%',
    height: '180px',
    textAlign: 'center',
  };
  const middleBoxStyle = {
    ...boxStyle,
    backgroundColor: 'teal',
  };
  const colors = ['red', 'green', 'yellow', 'purple',  'blue', 'pink', 'gray', 'brown'];

  // Counter App
  const [count, setCount] = useState(0);
  const emojis = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇"];
  const currentEmoji = emojis[count % emojis.length];

  let countB = 0;
  const increment = () => {countB++; countC++;}
  const currentEmojiB = emojis[countB % emojis.length];
  const cnslB = () => console.log("countB=" + countB)

  const currentEmojiC = emojis[countC % emojis.length];
  const cnslC = () => console.log("countC=" + countC);

  // User Form
  //const [formData, setFormData]


  return (
    <>
    <div style={containerStyle}>
      <div style={{ ...boxStyle, backgroundColor: colors[0]}}></div>
      <div style={{ ...boxStyle, backgroundColor: colors[1]}}></div>
      <div style={{ ...boxStyle, backgroundColor: colors[2]}}></div>
      <div style={{ ...boxStyle, backgroundColor: colors[3]}}></div>
      <div style={middleBoxStyle}>
        <h1 style={styleObject}>{greeting}</h1>
        <p>Welcome to my React!</p>
      </div>
      <div style={{ ...boxStyle, backgroundColor: colors[4]}}></div>
      <div style={{ ...boxStyle, backgroundColor: colors[5]}}></div>
      <div style={{ ...boxStyle, backgroundColor: colors[6]}}></div>
      <div style={{ ...boxStyle, backgroundColor: colors[7]}}></div>
    </div>
   
    <div className="App">
      <header className="App-Header">
        <h2>useStateを使用した場合のカウンター</h2>
        <div className="emoji">{currentEmoji}</div>
        <p>You clicked {count} times</p>
        <p>count % emojis.length: {count % emojis.length}</p>

        <h2>useStateを使用しなかった場合のカウンター ローカル変数</h2>
        <div className="emoji">{currentEmojiB}</div>
        <p>You clicked {countB} times</p>
        <p>local variable countB % emojis.length: {countB % emojis.length}</p>

        <h2>useStateを使用しなかった場合のカウンター グローバル変数</h2>
        <div className="emoji">{currentEmojiC}</div>
        <p>You clicked {countC} times</p>
        <p>count % emojis.length: {countC % emojis.length}</p>

        <button onClick={() => {setCount(count + 1); increment(); cnslB(); cnslC();}}>
          Click me
        </button>
      </header>
      <h3>countB</h3>
      <p>ボタンを押すとJavaScript変数としてのcountBは更新される。</p>
      <p>f12を押して、デベロッパーツールでコンソール画面を見ると、確かに増えていることを確認できる。</p>
      <p>しかし、このコンポーネントで再レンダリングの機能が無いため、コミットのきっかけが無く画面への反映が行われない。</p>
      <p>もし、ボタンを押した後に再レンダリングとしたしても、異なるレンダリング間でコンポーネント内のローカルな値は保持されない。</p>
      <p>ゆえに、countBは0にリセットされ、数値は0から変わらない。</p>
      <h3>countC</h3>
      <p>グローバル変数で定義した値、つまりコンポーネントの外にある値は、サーバーが起動してる間保持されるので、当然更新ボタンを押した時に画面に反映されます。</p>
    </div>

    <div className="App">
      <h2></h2>
      <header>
        <div className="emoji">{currentEmojiC}</div>
        <p>You clicked {countC} times</p>
        <p>count % emojis.length: {countC % emojis.length}</p>
        <button onClick={() => {increment(); cnslC();}}>Click me</button>
      </header>
    </div>

    {/* フォームの各フィールド */}

    {/* 送信ボタン */}

    </>
  );
}

export default App;
