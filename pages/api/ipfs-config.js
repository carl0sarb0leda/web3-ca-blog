import { create } from "ipfs-http-client";
import { InfuraIpfsProjectId, InfuraIpfsProjectApiKey } from "../../lib/config";

/* define the ipfs endpoint */
const auth =
  "Basic " +
  Buffer.from(InfuraIpfsProjectId + ":" + InfuraIpfsProjectApiKey).toString(
    "base64"
  );

const ipfsClient = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

export default ipfsClient;
