import React from 'react'

export const Upload = () => {
  return (
    <>
      
      <div className='lg:h-[calc(80vh-20px)] lg:mx-20 lg:my-0 my-5 mx-10 lg:flex lg:gap-6 items-center justify-center'>
          <div className='text-white text-left lg:w-1/2 '>
            <img src='./images/upload.png'/>
            {/* <p className='text-xl'>
              No matter what format your files might be we give you guarantee it is supported. <br/> 
              Because you shouldn't be restricted when it's business.</p> */}
          </div>
          
          <div className="items-center justify-center lg:w-1/4">
                  <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 
                  bg-blue-200 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">

                          <svg ariaHidden="true" className="w-12 h-12 mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                            </path>
                          </svg>
                          <p className="mb-2 text-md text-gray-800">
                            <span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-sm text-gray-700 dark:text-gray-400">PDF, DOC, DOCX, PPT</p>
                      </div>
                      <input id="dropzone-file" type="file" className="hidden" />
                  </label>
            </div> 
      </div>
    </>
  )
}

export default Upload;