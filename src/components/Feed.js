import React from 'react'
import Posts from './Posts'
import Stories from './Stories'

function Feed() {
  return (
    <main class="grid-cols-1 grid md:grid-cols-2 md:max-w-3xl lg:grid-cols-3 xl:max-w-6xl mx-auto">
    <section class="col-span-2 " >
      {/* left section stories and post*/ }

      <Stories/>

      <Posts/>

    </section>


    



      {/* RIGHT SECTION MINI PROFILE ND SUGGESTIONS */}









    </main>
  )
}

export default Feed
