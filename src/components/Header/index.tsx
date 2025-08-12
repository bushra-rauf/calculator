const Header = ({pageTitle}: {pageTitle:string}) => {
    return(
        <header className = 'm-10 flex justify-center '>
            <h1 className='font-extrabold text-4xl bg-white p-5 border-10 rounded-2xl' >
            <span className='border-b-4'>{pageTitle}</span>   
            </h1>
        </header>
    )
}

export default Header