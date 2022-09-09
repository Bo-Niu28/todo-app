import Card from "../shared/Card";

function Header() {
  return (
    <Card className="card__purple">
      <header>
        <div className="header__burger"></div>
        <h1>todo App</h1>
      </header>
    </Card>
  );
}

export default Header;
