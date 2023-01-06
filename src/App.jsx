import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <div>
        <input type="text" placeholder='todoを入力' />
        <button>追加</button>
      </div>

      <div>
        <p>未完了</p>
        <ul>
          <li>
            <div>
              <p>テキスト</p>
          <button>完了</button>
          <button>削除</button>
          </div>
          </li>
        </ul>
      </div>

      <div>
      <p>完了</p>
        <ul>
          <li>
            <div>
              <p>テキスト</p>
          <button>戻す</button>
          </div>
          </li>
        </ul>
      </div>

    </div>
    </>
  );
}

export default App;
