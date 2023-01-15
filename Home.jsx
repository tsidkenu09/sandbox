import LandingPage from "../LandingPage";
const Home = () => {
  return (
    <div>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Sofia"
        ></link>
      </head>
      <h1 className="card">Sandbox</h1>
      <div className="sandboxImage">
        <img
          src="https://images-ext-2.discordapp.net/external/SPsVvaAv_xxBFllweWnkV0doqDsv_amwZV3OcgOSqjU/https/creazilla-store.fra1.digitaloceanspaces.com/cliparts/3158527/sandbox-clipart-md.png"
          width="350"
          height="241"
          alt="sanboxTool1"
        ></img>
      </div>

      <LandingPage></LandingPage>
      <p className="subtitle">"Sandbox is a Safe Place to Explore"</p>
    </div>
  );
};

export default Home;
