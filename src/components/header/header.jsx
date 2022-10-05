export function SiteHeader({children}) {
  return (
    <div className='bg-slate-200/25 h-full'>
      <div id='header-container' className='lg:mx-20 md:mx-15 sm:mx-0 my-0 p-0'>
        <div
          id='title'
          className='text-center bg-gray-500 text-white my-0 p-1 shadow-lg'
        >
          <h1>Grades App</h1>
        </div>
      </div>
			{children}
    </div>
  );
}
