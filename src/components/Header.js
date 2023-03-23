import React from 'react'

function Header() {
  return (
    <div class="shadow-sm border-b bg-white static top-0 z-50">
        <div class="flex justify-between bg-slate-100 max-w-6xl mx-5 lg:mx-auto ">
          <div class="relative w-24  hidden lg:inline-grid mt-4">
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png' alt='logo'class="object-fit"/>
          </div>


      {/*INSTA LOGO */}
   <div class="w-10  relative lg:hidden flex-shrink-0 mt-4">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQxNuHuwMi7ZUdIg8hDuB1uPgpZtH_Zh0HQ&usqp=CAU' alt='logo' class="objectFit:contain" />
          </div>

           {/*INPUT FORM */}
           <div class="max-w-xs">
     <div class="mt-1 relative p-3 rounded-md ">
     <div class="absolute inset-y-0 py-3 flex items-center pointer-events-none">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
   </svg>

     </div>
        <input type="text" placeholder='search' class="bg-color-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"/>
     </div>
     </div>



   {/* ICONS*/ }
   <div class="flex items-center justify-end space-x-4">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="navBtn">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
 </svg>
 <div class="relative navBtn">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="navBtn rotate-[-50deg]">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>
<div class="absolute -top-1 -right-1 text-xs w-5 h-5 bg-purple-500 text-white rounded-full flex items-center justify-center animate-pulse ">3</div>
</div>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="navBtn">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="navBtn">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 md:hidden cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

    <img src='https://e7.pngegg.com/pngimages/949/494/png-clipart-superman-superman-the-flash-aquaman-cyborg-film-superman-heroes-superhero.png' class='w-10 h-10 cursor-pointer rounded-full' alt='/'/>



   </div>
   
 













    </div>
    

    </div>
    
  )
}

export default Header
