import navbaritem from "../../data/navBar.json";

function navbar() {
  return (
    <div>
      <div>
        <p>Booking Website</p>
        <button>Register</button>
      </div>
      <div>
        {navbaritem.map((e) => {
          return <div></div>;
        })}
      </div>
    </div>
  );
}
export default navbar;
