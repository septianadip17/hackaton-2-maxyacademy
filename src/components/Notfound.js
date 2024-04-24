import React from 'react'

const Notfound = () => {
  return (
    <div className="text-center justify-content-center" height="100%;">
      <h1 className=''>404 Page Not Found</h1>
      <button className='btn'><a href="/">Back to Home</a></button>
      <button className='btn'><a href="/blog">Go to Blog</a></button>
    </div>
  )
}

export default Notfound