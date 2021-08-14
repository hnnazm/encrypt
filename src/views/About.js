import '../css/About.css'

function About() {
  return (
    <div id="page-about">
      <h1>About</h1>
      <div>
        <a href="https://github.com/hnnazm/encrypt">
          <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/32/github-icon.png" alt="Github logo" />
        </a>
        <h1>Encryption Application</h1>
        <p>This website is created solely for the purpose of coding assessment
          at INVOKE.
        </p>

        <h2>Technology Stack</h2>
        <ol>
          <li>NodeJS</li>
          <li>DigitalOcean App</li>
        </ol>

        <h2>Dependencies</h2>
        <ol>
          <li>Core React Library</li>
          <li>react-router-dom</li>
        </ol>

        <h2>Code Explaination</h2>
        <p>The detailed code explaination will be on README.md file located at
          the repository
        </p>

        <h2>References</h2>
        <ul>
          <li><a href="https://reactjs.org">React Documentation</a></li>
          <li><a href="https://reactrouter.com">react-router-dom documentation</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Caesar_cipher">Caesar cipher</a></li>
          <li><a href="https://www.asciitable.com">ASCII table</a></li>
          <li><a href="https://stackoverflow.com/a/33085029">StackOverflow Question</a></li>
        </ul>
      </div>
    </div>
  )
}

export default About
