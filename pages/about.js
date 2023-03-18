import { css } from "@emotion/css";
import Image from "next/image";

function About() {
  return (
    <div>
      <h2>Project Details</h2>
      <p>
        This is a decentralised application which uses smart contracts to
        create, store and edit blogs using the ethereum network.
      </p>
      <ul>
        <li className={list}>
          To create new contracts and use all features of this Dapp you will be
          required to connect to a crypto wallet. The easy way to do this is to
          download the Metamask browser extension.
        </li>
        More info:
        <div className={externalLink}>
          <a
            href="https://www.youtube.com/watch?v=AJvzNICwcwc"
            target="_blank"
            rel="noopener noreferrer"
          >
            What is Ethereum gas
          </a>
        </div>
        <div className={externalLink}>
          <a
            href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Metamask chrome extension
          </a>
        </div>
        <li className={list}>
          <p>
            Once you have created a metamask account, you can join a polygon
            test network and add test MATIC tokens (Polygon native
            cryptocurrency) in order to execute transactions.
          </p>
          More info:
          <div className={externalLink}>
            <a
              href="https://wiki.polygon.technology/docs/develop/network-details/network/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Setup a PoS Testnet
            </a>
          </div>
          <div className={externalLink}>
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
            className={externalLink}
          >
            Hardhat
          </a>
        </li>
        <li>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={externalLink}
          >
            Next
          </a>
        </li>
        <li>
          <a
            href="https://infura.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={externalLink}
          >
            Infura
          </a>
        </li>
        <li>
          <a
            href="https://metamask.io/"
            target="_blank"
            rel="noopener noreferrer"
            className={externalLink}
          >
            Metamask
          </a>
        </li>
        <li>
          <a
            href="https://polygon.technology/"
            target="_blank"
            rel="noopener noreferrer"
            className={externalLink}
          >
            Polygon
          </a>
        </li>
      </ul>
      <h2>Project Architecture</h2>
      <Image
        src="/dapp_v1.0.0.png"
        width={700}
        height={500}
        alt="Blog Dapp architecture"
      />
      <h3>More information</h3>
      <a
        href="https://github.com/carl0sarb0leda/web3-ca-blog"
        target="_blank"
        rel="noopener noreferrer"
        className={externalLink}
      >
        Github repository
      </a>
      <p className={version}>v1.0.0 - ©carl0sarb0leda</p>
    </div>
  );
}

const externalLink = css`
  &:hover {
    color: blue;
  }
`;
const list = css`
  padding: 1rem 0;
`;
const version = css`
  color: #999999;
`;

export default About;
