import { Link } from "react-router-dom";
import Search from "../Search/Search";
import MenuItem from "./MenuItem";

export const Logo = (
  <Link to="/">
    <img src="/logo (1).png" alt="remmemberio" width="150px" />
  </Link>
);

export default function Header() {
  return (
    <section>
      <nav>
        <div
          style={{
            display: "flex",
            gap: "3rem",
            alignItems: "center",
          }}
        >
          <div>{Logo}</div>
          <div>
            <Search />
            <MenuItem />
          </div>
        </div>
      </nav>
    </section>
  );
}
