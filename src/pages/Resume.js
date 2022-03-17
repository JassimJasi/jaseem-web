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
      <div className='h-full bg-gray-500 -mb-20 md:h-screen'>
        <div className='py-14 flex justify-center h-full'>
          {/* <Document file="./pdf/JaseemResume.pdf" onLoadSuccess={onDocumentLoadSuccess} >
        <Page className="bg-gray-800 shadow-6xl rounded-md h-fit " height={580} pageNumber={pageNumber} /> </Document> */}

          <embed src="./pdf/Jaseem--1.pdf" type="" className='h-[70rem] w-screen md:h-screen md:w-screen' />
        </div>
      </div>
    </Layout>
  )
}

export default Resume