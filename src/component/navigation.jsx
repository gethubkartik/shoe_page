const Navigation = () => {
    return (

        <nav className="container">
            <div className='logo'>
                <img src="/img/nike1.jpg" alt="images not found " width={90} height={50} />
            </div>
            <div>
                <ul>

                    <li>Menu</li>
                    <li>Location</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='button'>
                <button>Login</button>
            </div>
        </nav>


    );
};
export default Navigation;
