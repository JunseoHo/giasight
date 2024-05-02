'use client'

function onClick() {
  var a;
  console.log("Click!");
}

export default function Home() {
  return (
   <div>
    <h1>Welcome to Giasight!</h1>
    <p>This is cute blog service...</p>
    <button onClick={onClick}>Send to backend</button>
   </div>
  );
}
