import React from 'react'
import Layout from '../components/Layout'
import $ from "jquery"

// $("#submit-form").submit((e)=>{
const handleSubmit = (e) => {
  e.preventDefault()
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbwtn1bZudo4MJGyatIqM2Yt8CkFWyne8EA8_2j2/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function (response) {
      alert("Thank you for message.I will contact you as soon as possible")
      window.location.reload()
      //window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something Error")

    }
  })
}
function Contact() {
  return (
    <Layout>
      <div className='grid grid-cols-2 md:grid-cols-1 items-center justify-center'>
        <div className='h-3/4'>
          <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_mwawjro9.json"
            background="transparent"
            speed="1"
            loop
            autoplay></lottie-player>
        </div>
        <div className='w-full flex justify-center'>
          <div className='md:full w-3/4 bg-gray-200 p-10 shadow-2xl rounded'>
            <h1 className='text-2xl font-semibold text-center text-blue-800'>Contact Me</h1>
            <form id='submit-form' onSubmit={handleSubmit} action="">
              <input type="text" name="name" placeholder='Name' className='w-full mt-3  border-2 border-gray-300 rounded p-1 text-blue-700 shadow-lg mt-5 hover:border-gray-500' required />
              <input type="email" name="email" placeholder='Email' className='w-full mt-3  border-2 border-gray-300 rounded p-1 text-blue-700 shadow-lg mt-5 hover:border-gray-500' required />
              <input for="country" name="country" placeholder='Country' className='w-full mt-3  border-2 border-gray-300 rounded p-1 text-blue-700 shadow-lg mt-5 hover:border-gray-500' required />
              <textarea type="text" name="message" placeholder='Query' className='w-full mt-3  border-2 border-gray-300 rounded p-1 text-blue-700 shadow-lg mt-5 hover:border-gray-500' required />
              <input type='submit' className='cursor-pointer border-2 bg-blue-700 text-white py-1 px-4 rounded mt-3 hover:bg-blue-800' value='Submit' />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact