const SandboxPage = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Sofia"
      ></link>

      <h1 className="sandbox-title">Sandbox</h1>

      <div className="display">
        <textarea rows="10" cols="60"></textarea>
      </div>

      <div class="textBox">
        <textarea rows="5" cols="60"></textarea>
      </div>

      <div className="enter-Button">
        <button type="button">Enter</button>
      </div>

      <div className="palmImage">
        <img
          src="http://clipartmag.com/images/tree-with-birds-clipart-29.png"
          width="327"
          height="600"
        ></img>
      </div>
    </div>
  );
};

export default SandboxPage;
