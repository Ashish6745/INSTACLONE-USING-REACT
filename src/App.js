import React from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";
import Suggestions from "./components/Suggestions";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
     <div class="text-center bg-gray-300">

<h1 class="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black">INSTAGRAM CLONE USING REACTJS + TAILWIND CSS </h1>
</div>
     <Header/>
    
     <Feed/>
     <div class="mt-6">

     <Title/>
     </div>
     <Suggestions/>

     
    </div>
  );
}

export default App;
