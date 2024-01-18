

function Navbar(){
    return (
        <>
        <nav>
        <div className='navbar'>
            <div className='logo'>
                <h2>lobe</h2>
                <img src='https://www.lobe.ai/favicon.ico' alt='logo'></img>
            </div>

            <ul className="items">
                <li>Overview</li>
                <li>Examples</li>
                <li>Tour</li>
                <li>Blog</li>
                <li>Help</li>
            </ul>
            <button>Download</button>
        </div>
        </nav>
        </>
    );
}

export default Navbar
