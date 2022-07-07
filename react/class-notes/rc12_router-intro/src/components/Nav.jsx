import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul className="container d-flex justify-content-around mt-4">
        <li>
          <link to="/">Home</link>
        </li>
        <li>
          <link to="/instructors">instructors</link>
        </li>
        <li>
          <link to="/contact">Contact</link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
