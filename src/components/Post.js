import React from 'react'

function Post() {
  return (
    <div class="mt-[30px] w-128 h-[600px] ml-[250px] bg-gray-200">
    <div class=' flex items-center justify-start ml-3 mr-3 border-2 border-r-yellow-300 border-l-pink-400 border-t-green-400 border-b-blue-500 mt-4'>
       <img  class="w-18 h-14 rounded-full mt-3" src='data:image/jpeg;base64,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' alt='/'/>
        <div>
            <span class="ml-3 font-mono font-semibold text-2xl text-blue-500">KITTY</span>
        </div>
    </div>
    {/* POST  */}
       
       <div class="flex items-center justify-center border-2 border-gray-300 p-2 m-3">
        <img alt='super' src='https://www.pngall.com/wp-content/uploads/2016/03/Marvel-Superman-PNG.png' class="w-[300px] h-[300px] hover:scale-125 transition-all duration-150 ease-in animate-pulse"/>
       </div>
       <div class="flex items-center ml-4  ">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:scale-125 transition-all duration-150 ease-out text-purple-800 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 animate-pulse text-purple-800 hover:text-green-700 ml-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>


       </div>
       <div class="flex items-center ">
       <img alt='super' src='https://www.pngall.com/wp-content/uploads/2016/03/Marvel-Superman-PNG.png' class="w-8 h-8 rounded-full ml-3 mt-2"/>
        <span class="pt-2 text-md font-mono ml-2 text-red-700">Nice Pic!! &#128512;</span>
       </div>
       <div class="flex items-center ">
       <img alt='super' src='https://www.pngall.com/wp-content/uploads/2016/03/Marvel-Superman-PNG.png' class="w-8 h-8 rounded-full ml-3 mt-2"/>
        <span class="pt-2 text-md font-mono ml-2 text-red-700">Awesome!! &#128516;</span>
       </div>
       <div class="flex items-center ">
       <img alt='super' src='https://www.pngall.com/wp-content/uploads/2016/03/Marvel-Superman-PNG.png' class="w-8 h-8 rounded-full ml-3 mt-2"/>
        <span class="pt-2 text-md font-mono ml-2 text-red-700">Fab &#128151;</span>
       </div>
       

      
    </div>
  )
}

export default Post
