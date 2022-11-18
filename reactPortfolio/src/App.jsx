import { useState } from 'react';
import './App.css';

function App() {
  return  (
    <>
    <header className="text-gray-700 border-b border-gray-200">
      <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
        <a href="/" className='font-medium text-gray-900 mb-4 md:mb-0'>
          <span className='texy-xl ml-3'>Sawa Programming</span>
        </a>
        <nav className='md:ml-auto text-base'>
          <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
          <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
          <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
          <a href="#blog" className='hover:text-blue-400 duration-300'>Blog</a>
        </nav>
      </div>
    </header>

    <section className='text-gray-700' id="home">
      <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
        <div className='md:w-1/2 flex-grow mb-14 lg:pr-24 md:pr-16 text-center md:text-left'>
          <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-4'>Hello
            <br />I am Sawa
            <br />I am studing programming
          </h1>
          <p className='mb-8 leading-reluxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore deleniti cupiditate exercitationem est iste soluta dolorum quibusdam nulla totam saepe.</p>
          <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact</button>
        </div>
        <div className='md:w-1/2 lg:max-w-lg w-5/6'>
          <img src="./img/profile.JPG" alt="" />
        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t border-gray-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='text-center mb-20'>
          <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About Me</h1>
          <p className='pb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis cumque voluptate excepturi deleniti inventore adipisci quisquam a, cupiditate enim corrupti.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores eius eos corrupti officiis culpa quisquam, odio aut molestiae fugit nihil beatae obcaecati, quis quod numquam repellendus eligendi ullam est atque praesentium odit, tempore blanditiis aliquam alias. Accusantium nemo fugit totam sapiente cum quod recusandae? Fugiat quod nisi sequi quidem. Veritatis recusandae fugit corporis saepe laboriosam autem sunt provident incidunt ea dolorem deserunt eum quae excepturi, odio, sed eaque molestias? Nostrum, magni obcaecati ratione iure non, velit, molestias in id ex assumenda laudantium minus quo dolore autem iusto suscipit nihil dolorem quaerat adipisci fuga nulla dolorum? Placeat nostrum et possimus accusantium.</p>
        </div>

        {/* カードのdivタグ */}
        <div className='flex flex-wrap'>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C16.7614 0 19 2.23858 19 5V17C19 20.866 15.866 24 12 24C8.13401 24 5 20.866 5 17V9H7V17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V6H15V17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17V5C9 2.23858 11.2386 0 14 0Z" fill="currentColor" /></svg>
                </div>
                <h2 className='text-gray-500 text-lg font-medium ml-2'>Web Developper</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis distinctio sit aliquam asperiores voluptate expedita beatae quasi maiores aspernatur magnam.</p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>Read More...<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.9865 11.9929L18.7511 16.2426L17.3345 14.8308L19.1488 13.0104L7.0314 13.0519L7.04038 15.0507L1.04044 15.0777L1.01349 9.07773L7.01343 9.05079L7.02242 11.0519L19.1674 11.0103L17.3249 9.17398L18.7367 7.75739L22.9865 11.9929ZM3.02245 11.0687L3.03143 13.0687L5.03141 13.0597L5.02243 11.0597L3.02245 11.0687Z" fill="currentColor" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C16.7614 0 19 2.23858 19 5V17C19 20.866 15.866 24 12 24C8.13401 24 5 20.866 5 17V9H7V17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V6H15V17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17V5C9 2.23858 11.2386 0 14 0Z" fill="currentColor" /></svg>
                </div>
                <h2 className='text-gray-500 text-lg font-medium ml-2'>Web Developper</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis distinctio sit aliquam asperiores voluptate expedita beatae quasi maiores aspernatur magnam.</p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>Read More...<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.9865 11.9929L18.7511 16.2426L17.3345 14.8308L19.1488 13.0104L7.0314 13.0519L7.04038 15.0507L1.04044 15.0777L1.01349 9.07773L7.01343 9.05079L7.02242 11.0519L19.1674 11.0103L17.3249 9.17398L18.7367 7.75739L22.9865 11.9929ZM3.02245 11.0687L3.03143 13.0687L5.03141 13.0597L5.02243 11.0597L3.02245 11.0687Z" fill="currentColor" /></svg>
                </a>
              </div>
            </div>
          </div>
          <div className='md:w-1/3 p-4'>
            <div className='bg-gray-200 rounded-lg p-8'>
              <div className='flex items-center mb-3'>
                <div className='bg-green-500 text-white rounded-full'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C16.7614 0 19 2.23858 19 5V17C19 20.866 15.866 24 12 24C8.13401 24 5 20.866 5 17V9H7V17C7 19.7614 9.23858 22 12 22C14.7614 22 17 19.7614 17 17V5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V6H15V17C15 18.6569 13.6569 20 12 20C10.3431 20 9 18.6569 9 17V5C9 2.23858 11.2386 0 14 0Z" fill="currentColor" /></svg>
                </div>
                <h2 className='text-gray-500 text-lg font-medium ml-2'>Web Developper</h2>
              </div>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis distinctio sit aliquam asperiores voluptate expedita beatae quasi maiores aspernatur magnam.</p>
                <a href="#" className='flex mt-3 text-green-500 items-center'>Read More...<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.9865 11.9929L18.7511 16.2426L17.3345 14.8308L19.1488 13.0104L7.0314 13.0519L7.04038 15.0507L1.04044 15.0777L1.01349 9.07773L7.01343 9.05079L7.02242 11.0519L19.1674 11.0103L17.3249 9.17398L18.7367 7.75739L22.9865 11.9929ZM3.02245 11.0687L3.03143 13.0687L5.03141 13.0597L5.02243 11.0597L3.02245 11.0687Z" fill="currentColor" /></svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className='text-gray-700 border-t border-gray-200'>
      <dir className='container px-5 py-24 mx-auto flex flex-wrap'>
        {/* 左サイド */}
        <div className="mb-10 lg:w-1/2 lg:mb-0 w-full flex justify-center">
          <img src="https://github.com/sawatakahashi/reactPortfolio/blob/master/reactPortfolio/public/img/Skills.JPG?raw=true" alt="" className='rounded'/>
        </div>
        {/* 右サイド */}
        <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
          <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>
            Skills
          </h1>
          <div className='w-full'>
            <h2>HTML</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "85%"}}>85%</div>
            </div>
          </div>
          <div className='w-full'>
            <h2>CSS</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "70%"}}>70%</div>
            </div>
          </div>
          <div className='w-full'>
            <h2>Javascript</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "80%"}}>80%</div>
            </div>
          </div>
          <div className='w-full'>
            <h2>Tailwind</h2>
            <div className='shadow bg-green-100 mt-2 w-full'>
              <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width: "65%"}}>65%</div>
            </div>
          </div>
        </div>
      </dir>
    </section>
    </>
  );
}

export default App;
