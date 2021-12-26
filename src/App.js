import { csvParse } from "d3";

function App() {
  // fetch(url).then(response=>{
  //   response.text().then(text=>{
  //     console.log(text);
  //   })
  // })

  const fetchText = async (url) => {
    const response = await fetch(url);
    return await response.text();
  };
  const csvUrl =
    "https://gist.githubusercontent.com/DERRICKSONNDAMBUKI/0b8dc7015f24a458432a36312f1f7573/raw/sensei_named_css_colors.csv";
  fetchText(csvUrl).then((text) => {
    const data = csvParse(text);
    let message = ''
    message=message+Math.round(text.length / 1024) + " kB\n";
    message=message+data.length + " rows\n";
    message=message+data.columns.length + " columns\n"

    document.getElementById('messageContainer').textContent=message

  });

  return (
    <div className="App">
      <h1>Sensei CSS Colors</h1>
      <pre id='messageContainer'>

      </pre>
    </div>
  );
}

export default App;
