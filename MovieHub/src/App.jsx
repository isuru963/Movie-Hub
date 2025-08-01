import "./App.css";

function App(){
  return(
    <>
      <Text display="Hello" />
      <Text display="World!" />
    </>
  )

}

function Text({display}) {
  return(
    <div>
      <p>{display}</p>
    </div>
  );
}

export default App;