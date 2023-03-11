export default function Header({ title, slogan }) {
    return (
        <header className="header">
            <div className="container d-flex flex-column align-items-center">
                <img className="header__avatar" src="./images/avatar.png" alt="avatar" />
                <h1 className="header__title">{title}</h1>
                <hr className="divider--light" />
                <p className="header__slogan">{slogan}</p>
            </div>
        </header>
    );
}