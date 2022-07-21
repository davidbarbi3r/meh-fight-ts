import "../../style/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          Made by : @Gnark
          <a href="https://twitter.com/gnark_eth" target={"#"}>
          <i className="devicon-twitter-original"></i>
          </a>
          <a href="https://github.com/davidbarbi3r" target={"#"}>
            <i className="devicon-github-original"></i>
          </a>
        </p>
        <p>
          Assets/Art by : @edwardtheartist
          <a href="https://twitter.com/edwardtheartist" target={"#"}>
            <i className="devicon-twitter-original"></i>
          </a>
          <a href="https://edwardfduffy.com/" target={"#"}>
            <i className="devicon-chrome-plain"></i>
          </a>
        </p>
      </div>
      <p>
        V.0.4.0
      </p>
    </footer>
  );
}
