import React, {useState} from 'react'
import Layout from '../components/Layout'
import { Document, Page} from 'react-pdf/dist/esm/entry.webpack'

function Resume() {
  const [numPage, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPage);
    setPageNumber(1);
  }
  return (
    <Layout>
      <div className='h-full bg-gray-500 -mb-20 md:h-fit'>
      <div className='py-16 flex justify-center '>
      <Document file="./pdf/JaseemResume.pdf" onLoadSuccess={onDocumentLoadSuccess} height={1000}>
        <Page className="bg-gray-800 shadow-6xl rounded-md h-fit "  pageNumber={pageNumber} /> </Document>
      </div>
      </div>
    </Layout>
  )
}

export default Resume