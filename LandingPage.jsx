import { Outlet, Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <Link to="/SandboxPage">
       <button className="start-Button" type="button">Begin</button>
       
    </Link>
    
  );
}
