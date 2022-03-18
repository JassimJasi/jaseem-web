import React from 'react'
//import {useState} from 'react'
import Layout from '../components/Layout'
// import { Document, Page} from 'react-pdf/dist/esm/entry.webpack'

function Resume() {
  // const [numPage, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // function onDocumentLoadSuccess({numPages}){
  //   setNumPages(numPage);
  //   setPageNumber(1);
  // }
  return (
    <Layout>
      <div className=' bg-gray-500 -mb-20'>
        <div className='py-14 flex justify-center flex-col '>
          <div className='m-auto'>
          {/* <Document file="./pdf/JaseemResume.pdf" onLoadSuccess={onDocumentLoadSuccess} >
        <Page className="bg-gray-800 shadow-6xl rounded-md h-fit " height={580} pageNumber={pageNumber} /> </Document> */}
            <img src="./image/JaseemResume.jpeg" alt="Please reload" className='h-full '/>
          <a href="./image/JaseemResume.jpeg" download className='grid mt-4 md:m-3 place-items-center'>
            <button className='cursor-pointer border-2 bg-gray-500 text-white py-1 px-4 rounded hover:bg-black'>Download</button>
          </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Resume