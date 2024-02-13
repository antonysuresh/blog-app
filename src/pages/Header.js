const Header = ({title}) => {
  return (
    <header>
      <div className="container mx-auto from-blue-300 to-blue-700 bg-gradient-to-tr">
        <h1 className="font-bold text-blue-700">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
