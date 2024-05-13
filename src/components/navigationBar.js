const NavigationBar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark fixed-top" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand"><img src={props.logo} className="rounded" alt="" width={200} height={75} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light fw-bold" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fw-bold">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fw-bold">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light fw-bold">Contact Us</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <img src={props.img} className="w-100" height={900} alt="" srcset="" />
        </>
    )
}

export default NavigationBar;