import { Outlet } from "react-router-dom";
import PostList from "../components/PostList";
function App() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default App;

