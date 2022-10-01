function Header() {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <div className="container">
                <h1 className="navbar-brand p-0 m-0">Todo App</h1>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menuitems"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menuitems">
                    <ul className="navbar-nav ms-auto">
                        <li className="navbar-item">
                            <a href="/" className="nav-link">
                                github.com/SafetKaric
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
