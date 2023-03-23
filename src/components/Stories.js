import React from 'react'


function Stories() {
  return (
    <div class='ml-32'>
    <div class="w-[800px] overflow-x-scroll  border-2 border-r-red-500 border-l-green-500 border-t-cyan-500 border-b-yellow-500 mt-4">
         <ul class="flex space-x-6 ">
            <li class="flex flex-col items-center space-y-1  ">
            <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href='https' class="block bg-white p-1 rounded-full hover:-rotate-6 transform transition ">
                <img  class="w-24 h-14 rounded-full" src='data:image/jpeg;base64,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' alt='/'/>
                </a>
                <button class="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700">+</button>
                </div>
                <a href='https'>Superman</a>
            </li>



            <li class="flex flex-col items-center space-y-1  ">
            <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href='https' class="block bg-white p-1 rounded-full hover:-rotate-6 transform transition ">
                <img  class="w-24 h-14 rounded-full" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXV4DNW_JKpCjMwlyginDdmSPUMoWN8Aaww&usqp=CAU' alt='/'/>
                </a>
                <button class="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700">+</button>
                </div>
                <a href='https'>Superman</a>
            </li>
          
            <li class="flex flex-col items-center space-y-1  ">
            <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href='https' class="block bg-white p-1 rounded-full hover:-rotate-6 transform transition ">
                <img  class="w-24 h-14 rounded-full" src='https://i.pinimg.com/originals/33/70/29/33702949116bc77168dd93bdecc9f955.png' alt='/'/>
                </a>
                <button class="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700">+</button>
                </div>
                <a href='https'>Superman</a>
            </li>


            <li class="flex flex-col items-center space-y-1  ">
            <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href='https' class="block bg-white p-1 rounded-full hover:-rotate-6 transform transition ">
                <img  class="w-24 h-14 rounded-full" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXV4DNW_JKpCjMwlyginDdmSPUMoWN8Aaww&usqp=CAU' alt='/'/>
                </a>
                <button class="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700">+</button>
                </div>
                <a href='https'>Superman</a>
            </li>
            
            <li class="flex flex-col items-center space-y-1  ">
            <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href='https' class="block bg-white p-1 rounded-full hover:-rotate-6 transform transition ">
                <img  class="w-24 h-14 rounded-full" src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhUYGRgYGBoaGhwaGBwcGhoYGBgZGhoYGhgcIS4lHB4rIRgaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQhJSQ0NDQ0NDE0NDQ0NDQ0Njc0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDE0NDQxNP/AABEIAOYA2wMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAABAAIDBAUGBwj/xAA7EAABAwIDBAcHAgYDAQEAAAABAAIRAyEEEjEFQVFhBiIycYGRoQcTQrHB0fBy8RQVYpKy4SNSokMz/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAIDBAEF/8QAJxEAAgIBBAICAgIDAAAAAAAAAAECEQMEEiExQVETIhRxYYEyQpH/2gAMAwEAAhEDEQA/APX3uzWCTXQIOv3Sc0NuNUmtBEnVAAa3Lc91ki2Tm3fZJpzWcgSQco0+6AHOObTdxSBgZd+nmk4ZdEg0RO/XxHJAAb1dd/BLLfNu1Sb1u1u8EJM5d2nggAu62m7iiTIy79PJB/V7O9EtEZt+vnyQAmnLY7+CGWDmOn3RaM2qaHEmDp9kAFzc1x3XRc7MIGqDjlsNEXNAEjVACY7LYoNblue6yLWh1zqmsJdZ2iAEWycw0+yc502HqmucQYGiq7TxzaDQ7VxsBOv+kspKK3Po6k26RcBgRv8Av+6DBl138Fg4TbLnOBcGwSJibc1vNvqkxZY5E3HwdlBx7Flvm3apO62m7jzQJM5d2ngi7q9nf4qooc1su/RBvV138EcojNv18UG9btbvBACDYObdr5pOGa49UA4kxu08uaLzl0QAXOkQNfsm+4PJOc0ASNfum+9d+BABa3Lc91ki3N1h+Qk0k9rTyQJIMN080AOLs1h33SBgZd/3/dJwA7OvnZIAESdfyLIAp7RxgoML3X3AcSuYo9JnudmluukCPv6qv0+x7s7Kd4DcxGl3SB6Bctga8mCOVl52fLPdUXSRrxYltt+T0zZu2W1iGmA7dwPLkVsZrRv05LzXBvyGZPfvXb7I2m2q2D2wPPmBx5K2DPu+suyWSFco0m9XXfwSDYObdrzuk2/a8NyAJmD2fpuutZELhmuN3FEukZd/2Qdbs/dFwAEjX8myAE12Wx77INbluUWgHta+VkASTB08kAJzc1x6ol2aw77oOJHZ080XADs6+dkABpix/JXn+2sdnrugy1pyt4QN/iZK6jpJtAU6OvXd1RxA3mO63iuCpOMjvXna3JdQX7Zr08O5M6XACwldgetYbuK5DZruyF17rdnx3p9F0/6J5+0HNaN+nK6Derrv4cv3RAET8X17kG37XhuW4gLJfNu15pOGbTdxQkzHw/TvRdbs+O9ABJkZd+nK37INOWx38ESBEjtfXfZJontfZAADYObd907344FMaSTB0/IupMjeXmgBhdmtpvRDsvV/LpOAHZ15Xsk0COtrzQAA3Lc33JFs9b8t+yTZPa052ukSZgaenO6APKul1YvxdQ7gQ3+0AfMFUsMQIO/uVjaImvVJv/yP/wAiqFWpBMLyX9pN/wAnoLiKRrsrSrWDxZY4XIEyOR48lgUam8n1V5zs7I3+qVqjlHo+zdpCsA0kBwHg4cR9lpZpt4eS8q2bjCB2iHNOu+RvXb7L281zf+SGuHxbj3jcVsw6lP6y4fsz5MLXMTeBy2N5SDYv+XVMbUoxLqjfzkFC7btEG75HJrvDctLywXbX/SWyXpmkRmuLbkS7NZY7+kFIdnN/bv8AFQV+kbR2WHvJ+inLUYl5GWKT8G+HRbVVsViW0WlziI0A3k8AucqbfqO0yjwv6rNxLnVDL3EnvUMmuil9eWUjp5XyU9q411V5e7foNwA0AVCjd1tFpHAtOpKH8Hk7K8xyb5fLNqpKkaeAqQWrtAMvOV5xgMQS6CNF6FgquZjXHe0eehXoaCXa/Rj1EemS5fi8fJI9bS0fX9kJMx8PpHei63Z8YuvRMwc3w+CE5dbyjAifi9Z7kG37XhNkAKI63j5/ukRmuLQgCZg9n0jddF1uz6XQAi6er+WS9weKLgItr687JuZ3PyQAcuW+u5LLm62n+kmT8WnPik6Z6unJACzZrab0c0dX17/3SdHw68uCQiL6+vJAHkmPEV6gn/6P/wAysTaYLLgldXt/DFuIqAi5cXf3db6rA2tRlk/krylxkaZ6F3FMwaeOdMWW/s6o4gSuRe8sfO71C67ZWKa9gMg/MfYqmaP1tCRlzQsWCx+a/NX6GNlsg7tFVxrwRHH6Juzdnue6XWb81klVWy6NbBVnOBcT3K/TZKiDRopGEhToGyUNhNeVGanIoPehxFsDnpMrKNzZUDyQRKSh+zSpPVlqoYZ86LSw7OCrGNk5OmRuww13rR2Rjsh928w0mWu3NJ1B4A8eKhLICbYqkG8ct0RJJTVM6zP8PhPel2ec/T91zeDxj6dgMzNwOo/Sd3ctjBbQa+xs7cHb+4716WPURnx0/RllilEuZPi8YSjNyhC8/wBPpCL/AOnxhaCYpnq+E937JTltrKJiLdr1nek3+r1QAMuXrenej7/l6pomb9n05J/U5IAbmzW03pZsvV1/2i4g9nXlayTSI62vO6ABly313JZZ63p3fsk0EdrTne6jrvygu+EX5d0d643XIHFdN3NFZjtCWgG/AmJWFVyvZc6rT6QPD39eDMysDC4JrHOh5cw6NnQ71485Jzcj0IRexI57a+zy0yLgrP2XWfTfmaCWzDhyXb1aLSEtnbGDSSG9rVU/ISjTOfHzYcNh/egEC2slbIYGtgblJSoZRAEBAhZm93Iz9DYUb3HRSPcqr38/BCAsMEnXTxTvdk8Co6AJv+0LRayBKtFJk5NooupRqoarZELWyArNxlMhJKJ2MiHBPvdbuEdaVzrHGZAV2ntFjB16jGAa53taPUrmNc0dn1Zul/Heq1QEHksLGdMMEwXxDDyZLv8AEFZdX2j4Jgt7x/6WR/kQtHwzfSJqcV2dqwqRq8yxHtSYD/x4ZxH9Tw30aD81m4r2pYl3Yo0WDmHOP+QHourS5GDzRPbqG0nNEO6zePxAfValKqMoc05g4SCvmjE9P8e7/wC+UcGsYPWJ9V23sV23Vq4muytVfUmkHtD3lwBbUaDlBMDtDTgtuGGSKqTszzcX0eyZY63jHf8AulGa+kIAGZPZ9I3WRdfs+llYQWbN1fyyPuOaTiItr687puV3PzQA4ty313JBs9b8smtBF3aeaRBJkaeSACDmsbb1lbdxGVoYN9z3fufRaziDpr5WXLbfqHOQdwhZ9VLbjf8AJXDG5HI7bq3mYhZ2AcCbFLpLiGsBc4kNBEkAnUwNFgYXpdh6QgMqPO8w0Tykn6LzYYpzjcVZulOMe2dzgsNJkhbDWABeaP8AaVFmYYci6pPoGj5rOre0PGOswU2TplYSf/RKpHR5H3wRlnXg9YceCgeN/wB14/jek20IGerUaHTHUDJ4wQ0TqPNQ7EwuIx+IZhxXOapmg1XuLeq1zjMSdGncrR0bfbRN516PV8VtGm276rG972N+ZWY/pTg2mXV29zA53q0FcL006I1NnPpsqVGv94wulgIAh0EX13HxXVdNvZrRweCOJp1qlRzXMnMGhuR5yzAEzJbvTrRR8tivO/CLFb2h4Rtmtqu7mNA/9OB9FQxHtPGjMMe91SP/ACG/VeblpESDfTn3JitHTY4+BHlkzua3tMxZs1lFo/SSfV0eiyMV0zxtSc1cgcGta31An1XOpKixwXhC7pey5W2jWf2qr3d73H6qLDUw57WudlDnNBdrAJAJjfC9D6LdBsNXw9Os99UlwMgOaGggkEdmd3FQdL+g5Y6kMHQe6Q7PBLrjLlkkwNT5JFmx7tq4OuEqsm6fezhmz8K2uys+q41WsdLWtaGua45gBJ1aBrvWxsHobs+tskYgsH8Q+hVyudVcP+ZudrYbmAPWaLQVzXRzpjWpY5p2jWq1KdMvbUY8l4a8NcAQycshwFwqHtA6QUcVjf4jDBzGhjB1mhpzMJuACbRl8lYQw9obFxFBrX1qFSm1xIaXsczMRcgBwB3rOXddO/aCdpUqdM4YUsj84PvC8nqlpHZbAuD4LiaVJzjDWlx4AEnyCAI17/7LuhlKjTp4xtV7n1aQkQ0NAeAS3eTBHHcuS9kvR8mtV/isESz3bXMdWonKHNeLNL2xJB3f9V7Hgm5f+NrQ1o7IbAAHAAafukcvskMlwX5nq+Hl+yROWwvKJIiB2vrvug1wFna+dk4oS2Ot+XQ9+eCDQQZOn5FlJ7xv4EAMa7NY99knOy9UfkoucHWGqTXACDqgAObluO66836d9IGYWHuY52dzgMpAggSJn8svRj1QSeBXn+3MGysctRjXtacwDgCAYiY8SsmqlFUpcothT5o83qdJW41ww76WRtV7WlwdLheWx1YmYHit/C9BcIAMzXv/AFOI/wAYW9QwFNkZKbG/pY0fIK/TYVhlm/1x3Ffs07OLlyzLw3RrCMFsPTP6m5vV8rUoYVrewxjR/S1rfkFapMU2QJqcu3ZO0ujmOk/RluMFMOeWZC4yG5iQ4CRc20C87xeGq7Nx84eXOohr2uc3NZ1O5cBuu7yXtTSJUr6OZrm7nNIPc4QtGLJKHHaJzSfJ570T6U4fG1Kr9sOov921vuM7QGtzF3vGta0daYZrOnermzsDjGYl20XVH1Nm03VarGmsXh2GipkyUXG2VpENIEZd0LkOkXs/qYTDOrvrMflLQWsDvidlnM6N5G5S7P8AaJiWYJuBZRpOZ7upTLnNe57mvLpgBwAgOjQ6LcpJq0Ro6zaGHo9IqoOHe/DjDNyuNSm1xeKjiW5WtfaMh1PxBeYdJ9kfwmKq4fNn926A6MuYEBwMSYsRvWj0bftLDuccIyswvAa4ilIIBkXc0geCnxHRfaOJqOq1my90FznvbJgBokAk2AA0XHOK7YU/RyC6jojsZ7q7DVouNIgyXMOXsktN9bx5rRwvs3rnt1qTf053H/ED1Xf7PwBpU6dOZLGtZMROUBsxu0WfPnSjUebK48du2aWz8Oym1rWNDWiYa1oAE3Nhbmr7DyVWkIVtgXnq2aGcdtL2eYevXqVn1KgNRxcWsygAnUSQVJhvZ/gWEZqT383vd6hpAXVvfCYzEjiArb8jVJsSoLwZdLothGdZuHpjmWB0f3ArTwrAwgNaG/pAA9E5uPY03c2O9XcKKbzLHtPcQYRU32FxRoMdZKoTZw1BnySDYSLt29XXRC+S09//AF7RAJO5oP1vYKWhREc953k8SVBgRAncCZ8f3CsuGbRaocqxGIOk5d32TvcDiUHOBEDX7JvunfhTnBz25bhJrZEnX7INblue6yBbmOYafZAFPaeJimZ32H53SuSfcyuh6R15DWid5PjYfVc4HQvL1crnXo14Y1GxjWyVbptVIVIdorjKqz40rKS6LDQntBUTHeSka8LVEgwVKDjwVhjICY16caiZHCPE4dj2lr2Ne0xIcA5pIMixtYgFVDRY2zGBvJoA+SuEg/umGnPJDVqgTopOpHgmtoOOoWkymnl0blL4ht5RZhiNUzIJV145qItuuSjQ0ZApMJVoMI7lFT7lKKlrpoRFlIyds7QZQZme43sJ3ngvPdo9J3Ocb5RwB+fFdJ0+6zARfLfxXlGJxAJOsrbCCRGUmzpndJQOyCe9Gh0qew5gAOcm3kuRoMOu5XmUc4LQQDxOniqbUKe49BukZxlJ2eM7Dcje06FdHOXVef8As1ayk1zGva9xAzubx/6yu7rtLrhxA5R9VnyRroZE1Cs7NlEDNvcLAiSLK65lRuj2nvZb0csuvShshzpF9Ru8FotokCRVfe47LhHMFqpidqjkkSMzC7mt/U028Wn7lS+/PJINg5jp90/345qyFGMJdZ2iTnEGBonOdmsO+6ixFbIx3EA+Z0Q3SsDltr1sz3EaAwO4WWc9ylrlUg+8LxcknKTbN8VSoZVN1YoPsqlWZupKLoSw4Z2XReDypWv3wmUzKcaS0IiyVtRStdxVQtIOicyonTFaLcjcnsH5Cq5ykcQUyZyi058Jpqyoc+9NNQcF2zlE9zvVesSDr8k73qrPfdLMaKLDWuMQ/wD2mOziIIIkz9IVfMRvKZVc8g5H3OhOgjXwRCRySKO2afvGZXCCToTwK832rswh5LQJF9PlK9MxT39bqsNuodDmi45d64va7xOWIm9iYk6gnetcZEmjkgwz1tVLhGyTbetL+DntDuvuU+BwoFxxJ8E7YUdb0OYKTYNiTJPPku8pVnOENPmNV5/sJpzCDexvwPBd9gW248lnnIZIsuqENOYeIVrA1HFoLTnAADmmzm2+E7+4+ar1D1T3KzQwpNNjmkB7WxJ0cNcruI+SMV2wl0XcPXD9DbQ2ggjcRuKn9038Kr0XBw7OVxgOkXlu4neNYKk9weS1omOcAOzr5rM2y/qAfETfuH4FpBuW+u5c/wBIK0u7mi3P8hRzy2wY+NXIwsQeapub+SrFR8qq94XjSfJuSHvaCNb8EaAvBkFQtKc2d8oTBo1GUxZWBTVGg+BrZWmvG6VphJEJImyc1XqMhSh6JeFThi8kLCg9nAlPyjkgDx9EUdIQ86J+ZF7BqogSudHSLE1OBiN6yae1qc5S+5MDmtiph5B58Vym1NitkuygSDprfXRMkn2Lz4Oip4pjwIeDPAjROc2IjQLz1+x3tIyuLQNADu5lSNqYmkCWvc7NudpERN0yxrwzjbOo2vXYxsudEEkda4M6QuExO2ZccjCQZieJvKTMM9/aLj37jqp/5S+RDDxKvFKPZN2zIxFWq/i0EAQLC29TYHBOkEvcY3AlaX8sfNwY4810OwtiBx66aU0kCize6GYTMwl7bg2J1jvXW0gWwRu+SpYDDZGhrRotJml1lk7ZSh72ZoHEgea2A3KAG6ARx0ss7BMzOHL5rTHVtrK04Y8WTk/AXAASNfybJmd3PyTgzL1vy6Pv+SuINaT8WnOy43alfM4uGkm3yXWY6v1HW3fOy47F8lg1kuomjAu2UKrrKg90dyu5VVqheeakGnfkpzA5qi2pBVik+bfVKdaLVF8dytMcBqqAJ4eiss8FSMmJJF4HgnBpVakeJVhg4rTFkWPdT3qMlTS3mo3tncmYqIHOTVK6ioXGEjGRKHcVDVoByaSUg9B0rVNnKD+B3OE2haeYpByLaAyqGzWg6JVNnkmANPktdhEaKVg5Lu9nKRz38rcSABC38FgwxvFWWNGpTwu7mzlElIq4HSFTptVinqhM5RrYBkNJ+Im3H81Vtt+162UGF7IdwtH53qaM19IXoY/8VRCXYBM37PpyUmVvLzTM2bq+vcl7jn6JzhT2vl92YjUaLk67F2GPo9R35vn6LlqrYK8/VxuX9GjC+DLqMUD6ZWnUphQFkb4WJxaLqRjPYU1gvqtLE0ZuPRVA0JGVUrJ6U8vDf4K1SbxVKk6NxV6nB1suxEkSkxaU+fFAUxHFSNHctESLCzuUzXDvVRwIM2jknsqaJ1KhWiy5s8goKrBuSdXhNfUEWQ5IEiEhAJspw0SWOKL2Ty6AmMdZEao3BRNS0upJULQpQiwHsNlMzRQtTi9F0comD0+gbyVXaVYpBCds7VI2tnvkxu1P55K67+n0WZs/tAcQR9fotMnLbWV6OB3EzTVSC6It2vXmmdfmnZcvW/Lpe/5eqsINLDBDtCCL31XKYlt4XWtdmse9cnjHdd0bifmsmq8FsXkhyJhp7lKBO+E7Isu2yl0UnYUcYUL8KOC0XUjxQFMpZQQykZDXNFt6nardTCtN8irtogHeEmyju4LI0goAkGw+qm0/1ZIyN6okK2AOB0MHgojTtMqxYpjGjQLtWcspVHEaotqq2+gCq1SgQErizqY33g0Ty9QuYQonOKVnUXWOATmG6zi8zKlp1DxS2FGhKfnCzS8qSi0ldsKLuclSMamsYp2lMlYXQ9jVMwIMapmNTKIrZYwk52962W27XrdY2HMOb+ofNbIGa5tC3af/ABZHJ2AAzJ7Ppysn5m8vJNDp6v5ZH3A4laCY2rUGUkbhJ3WGq4s1JcTOpXaVKYAO+bGeBWZS2DT7Uu1J1Hlos2fHKdUVxyUbsxGt4JwpuXQDZlJx7MW+EkfVNdsxgMAu3b/9KawSR3emYTWc0ohblXZLB8TvT7Jv8maWzndpyQ8Mg3oxnNMWTHMW7Q2Qz/s+3MfZO/ljJi/CZv38EfBJhvRznu0DC6UbLptFxmJ3u+kQpTs2lE5Gm2hEi/ehaeQfIjkHW58ITXsJM6dy7Gls6kR/+bB3NCAwNMmMjR3CDZd/Hl7OfIjlGO5JESbLqK2zKQtk/wDTh8io6+xKcSC4eI+oXPgkd3o5StTHFV/cALtMFsWk0EkFxO90H0iFM3A0ib06fg0Sj8aT8h8iRwIYAdEZncu4qbJoTHum+o+RTX7Cw7bhm/8A7O+6R6SXtDfMjjWsUzSF1f8AIqJEw4a6OP1lQs6P0ybOcP7T9Fz8Wa9B8sTCptVli1BsNodGd2vAKV+x2iOu70TLBNeDjnEzWNVljVfGy2hs5nacvsnUsCD8R9E3wSF3Iq4cDO2ePyC1XCez9lWo4UB2p3j/AGrLjlsPVaMMHFOxJO2FxBEDX8m6bkd+FOLYEjX7pvvzyVRRUhdKqLyikgB1Y2SaYCSSAG0QgRfxRSQAayM9XwSSQAKSaBfxRSQAqwTnmQkkgBUTZMpC8opIAFUXT6xsgkgA09ITaQukkgBOF0aqSSACD1fBNpb0kkAADreKdWQSQAXHqpUkkkANYIKmlJJAH//Z' alt='/'/>
                </a>
                <button class="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700">+</button>
                </div>
                <a href='https'>Superman</a>
            </li>

            <li class="flex flex-col items-center space-y-1  ">
            <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href='https' class="block bg-white p-1 rounded-full hover:-rotate-6 transform transition ">
                <img  class="w-24 h-14 rounded-full" src='https://e7.pngegg.com/pngimages/45/416/png-clipart-crying-cat-meme-memes-mixed-memes-thumbnail.png' alt='/'/>
                </a>
                <button class="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700">+</button>
                </div>
                <a href='https'>Superman</a>
            </li>

            <li class="flex flex-col items-center space-y-1  ">
            <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href='https' class="block bg-white p-1 rounded-full hover:-rotate-6 transform transition ">
                <img  class="w-24 h-14 rounded-full" src='data:image/jpeg;base64,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' alt='/'/>
                </a>
                <button class="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700">+</button>
                </div>
                <a href='https'>Superman</a>
            </li>

            <li class="flex flex-col items-center space-y-1  ">
            <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href='https' class="block bg-white p-1 rounded-full hover:-rotate-6 transform transition ">
                <img  class="w-24 h-14 rounded-full"src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUXV4DNW_JKpCjMwlyginDdmSPUMoWN8Aaww&usqp=CAU' alt='/'/>
                </a>
                <button class="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700">+</button>
                </div>
                <a href='https'>Superman</a>
            </li>
            <li class="flex flex-col items-center space-y-1  ">
            <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href='https' class="block bg-white p-1 rounded-full hover:-rotate-6 transform transition ">
                <img  class="w-24 h-14 rounded-full" src='https://p.kindpng.com/picc/s/493-4939546_doge-meme-gif-hd-png-download.png' alt='/'/>
                </a>
                <button class="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700">+</button>
                </div>
                <a href='https'>Superman</a>
            </li>
            <li class="flex flex-col items-center space-y-1  ">
            <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href='https' class="block bg-white p-1 rounded-full hover:-rotate-6 transform transition ">
                <img  class="w-24 h-14 rounded-full" src='https://png.pngitem.com/pimgs/s/258-2580201_animal-figure-canidae-buff-doge-hd-png-download.png' alt='/'/>
                </a>
                <button class="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700">+</button>
                </div>
                <a href='https'>Superman</a>
            </li>
            <li class="flex flex-col items-center space-y-1  ">
            <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href='https' class="block bg-white p-1 rounded-full hover:-rotate-6 transform transition ">
                <img  class="w-24 h-14 rounded-full" src='https://e7.pngegg.com/pngimages/45/416/png-clipart-crying-cat-meme-memes-mixed-memes-thumbnail.png' alt='/'/>
                </a>
                <button class="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700">+</button>
                </div>
                <a href='https'>Superman</a>
            </li>
            <li class="flex flex-col items-center space-y-1  ">
            <div class=" relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a href='https' class="block bg-white p-1 rounded-full hover:-rotate-6 transform transition ">
                <img  class="w-24 h-14 rounded-full"src='https://w7.pngwing.com/pngs/193/795/png-transparent-spider-man-back-in-black-miles-morales-iron-man-desktop-el-heroes-superhero-fictional-character.png' alt='/'/>
                </a>
                <button class="absolute bottom-0 right-1 bg-blue-500 h-8 w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700">+</button>
                </div>
                <a href='https'>Superman</a>
            </li>
         </ul> 
    



</div>

    </div>
  )
}

export default Stories