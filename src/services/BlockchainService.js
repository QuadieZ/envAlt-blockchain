export default class BlockchainService {
  async getBlocks() {
    let host =
      "https://blockchainenvalt.test.iknowplus.co.th/blocks";
    let response = await fetch(host, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    let res = await response.json();
    console.log(res);

    return res;
    }

    async getCarbonfootprint(branch = "b0001") {
        let host =
          "https://blockchainenvalt.test.iknowplus.co.th/carbonfootprint/track/";
        let response = await fetch(host+branch, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
    
        let res = await response.json();
        console.log(res);
    
        return res;
        }
}
