
// function component / componente funzionale
function App() {
  let numero = 70
  return (
    <div className="App">
      10+10
      <h1> dovrebbe essere solo 70 {numero}</h1>

         dovrebbe essere 80 {numero + 10}
 
      <div>
        <h1>{numero}</h1>
      </div>

    </div>
  );
}

export default App;
  
function stampaCiao(){
  console.log("ciao")
}