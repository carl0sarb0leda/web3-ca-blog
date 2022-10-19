import { create } from "ipfs-http-client";
import { InfuraProjectId, InfuraApiKey } from "../../lib/config";

/* define the ipfs endpoint */
const auth =
  "Basic " +
  Buffer.from(InfuraProjectId + ":" + InfuraApiKey).toString("base64");

const ipfsClient = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization: auth,
  },
});

export default ipfsClient