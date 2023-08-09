import React from 'react'
import Learning from '../assets/Learning.png'

const Hero = () => {
  return (
   <header className='w-full flex justify-center items-center flex-col'>
<nav className='flex justify-between items-center w-full mb-10 pt-3'>
  <img src={Learning} alt='sumz_logo' className='w-28 object-contain rounded-full' />
  <button
  type='button'
  onClick={() => window.open('https://github.com/rcrosby22')}
  className='black_btn'
  >GitHub</button>
  </nav>
  <h1 className='head_text'>
    Summarize Articles with <br 
    className='max-md:hidden'/>
    <span className='orange_gradient'>OpenAi GPT-4</span>
  </h1>
  <h2 className='desc'>
    Simplify your reading with Artificial Learning, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.
    </h2>
   </header>
  )
}

export default Hero