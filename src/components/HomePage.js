import { useUser } from "../provider/UserContext";
const LoggedInUser = () => {
  const { user } = useUser();
  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const { user } = useUser();
  return (
    <div>
      <h2>First react app</h2>
      <p>Hello World</p>
      <p>Written By {user.name}</p>
    </div>
  );
};

function HomePage() {
  return (
    <div>
      <Header />
      <Page />
    </div>
  );
}
export default HomePage;
