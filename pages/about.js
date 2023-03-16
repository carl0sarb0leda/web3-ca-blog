import { css } from "@emotion/css";

function About() {
  return (
    <div>
      <h2>Project Info</h2>
      <p>
        This is a decentralised application which uses smart contracts to
        create, store and edit blogs using the ethereum network.
      </p>
      <ul>
        <li>
          To use this Dapp you will be required to connect to a crypto wallet.
          The easy way to do this is to download the Metamask browser extension.
        </li>
        <div className={externalLink}>
          →
          <a
            href="https://www.youtube.com/watch?v=AJvzNICwcwc"
            target="_blank"
            rel="noopener noreferrer"
          >
            What is Ethereum gas
          </a>
        </div>
        <div className={externalLink}>
          →
          <a
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Metamask chrome extension
          </a>
        </div>
        <li>
          Once you have created a metamask account, you can join a polygon test
          network and add test MATIC tokens (Polygon native cryptocurrency) in
          order to execute transactions.
          <div className={externalLink}>
            →
            <a
              href="https://wiki.polygon.technology/docs/develop/network-details/network/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Setup a PoS Testnet
            </a>
          </div>
          <div className={externalLink}>
            →
            <a
              href="https://faucet.polygon.technology/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Test Tokens
            </a>
          </div>
        </li>
      </ul>
      <h2>Project Stack</h2>
      <ul>
        <li>
          <a
            href="https://hardhat.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hardhat
          </a>
        </li>
        <li>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next
          </a>
        </li>
        <li>
          <a
            href="https://infura.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Infura
          </a>
        </li>
        <li>
          <a
            href="https://metamask.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Metamask
          </a>
        </li>
        <li>
          <a
            href="https://polygon.technology/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Polygon
          </a>
        </li>
      </ul>
      <p className={version}>v1.0.0 - ©carlosaepn</p>
    </div>
  );
}

const externalLink = css`
  padding-bottom: 0.2rem;
`;
const version = css`
  color: #999999;
`;

export default About;
