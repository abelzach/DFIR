import CaseStorage from "../abi/CaseStorage.json";
import { useState } from "react";
import { NFTStorage, File, Blob } from "nft.storage";
import { Contract, providers, utils } from "ethers";
import Layout from "../components/Layout";

export default function FIR() {
  const [firId, setFirId] = useState<string>();
  const [nameC, setNameC] = useState<string>();
  const [nameA, setNameA] = useState<string>();
  const [detName, setdetName] = useState<string>();
  const [parent, setParent] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [contact, setContact] = useState<string>();
  const [rel, setRel] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const [ipc, setIpc] = useState<string>();

  const client = new NFTStorage({ token: process.env.TOKEN });

  // const { config } = usePrepareContractWrite({
  //     mode: 'recklesslyUnprepared',
  //     address: '0x628f0887dF785315a560d2248a579627FCa65056',
  //     abi: CaseStorage.abi,
  //     functionName: 'setCase',

  //   }as any)

  //   const contract = useContract({
  //     address: '0x628f0887dF785315a560d2248a579627FCa65056',
  //     abi: CaseStorage.abi,
  //     signerOrProvider : signer,
  //   }as any)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const obj = {
      // name:firId,
      // description:"fir_desc",
      // image: new Blob,
      firId,
      nameA,
      nameC,
      detName,
      parent,
      address,
      contact,
      rel,
      desc,
      ipc,
    };
    // const someData = new Blob([firId,nameA,nameC,detName,parent,address,contact,rel,desc,ipc])
    // const cid  = await client.storeBlob(someData)
    // console.log(cid);

    const jsonData = {
      firId: firId,
      nameA: nameA,
      nameC: nameC,
      detName: detName,
      parent: parent,
      address: address,
      contact: contact,
      rel: rel,
      desc: desc,
      ipc: ipc,
    };
    const blob = new Blob([JSON.stringify(jsonData)], {
      type: "application/json",
    });
    const cid = await client.storeBlob(blob);
    console.log(cid);

    // const { root, car } = await packToBlob({ input: [new TextEncoder().encode(obj as any)] })
    // const expectedCid = root.toString()
    // console.log(expectedCid)
    // const cid = await client.storeCar(car)
    // console.log(cid)

    // const metadata = await client.store(obj as any)
    // console.log('Metadata URI: ', metadata)

    // config.args = [sha256(firId),metadata.ipnft]
    // write?.()
    // console.log(isSuccess)

    const provider = new providers.Web3Provider(window.ethereum);
    const contract = new Contract(
      "0x2050127b520b4a2b796b1ac97A3FA1e4B2bc972C",
      CaseStorage.abi,
      provider
    );
    // console.log(provider)
    const signer = await provider.getSigner();

    const tx = await contract.connect(signer).setCase(firId, cid);
    console.log(utils.id(firId));
    const receipt = await tx.wait();
    console.log(receipt);

    const ab = await contract.connect(signer).getCase(firId);
    console.log(ab);
  };

  return (
    <Layout>
      <div className="ml-64 font-poppins">
        <div className="flex flex-wrap h-screen flex-row justify-between">
          <div className="w-10/12">
            <div className="ml-10 mt-14">
              <h1 className="text-4xl font-bold text-[#212121] mt-4">
                FIR Registration
              </h1>
              <p className="text-xl font-light mt-2 text-[#98999E]">
                Fill in the details regarding the report
              </p>
              <br />
              <div className="pt-4 mt-4 space-y-2 border-t border-slate-300"></div>
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6 mt-2">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-base font-normal mb-2">
                      FIR ID
                    </label>
                    <input
                      className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="firId"
                      type="text"
                      value={firId}
                      onChange={(e) => setFirId(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-base font-normal mb-2">
                      NAME OF COMPLAINTENT
                    </label>
                    <input
                      className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="ID"
                      type="text"
                      value={nameC}
                      onChange={(e) => setNameC(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-base font-normal mb-2">
                      NAME OF ACCUSED
                    </label>
                    <input
                      className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="ID1"
                      type="text"
                      value={nameA}
                      onChange={(e) => setNameA(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-base font-normal mb-2">
                      APPLICANT DETAILED NAME
                    </label>
                    <input
                      className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="ID2"
                      type="text"
                      value={detName}
                      onChange={(e) => setdetName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-base font-normal mb-2">
                      APPLICANT DETAILED PARENTAGE
                    </label>
                    <input
                      className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="ID3"
                      type="text"
                      value={parent}
                      onChange={(e) => setParent(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-base font-normal mb-2">
                      APPLICANT ADDRESS
                    </label>
                    <input
                      className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="ID4"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-base font-normal mb-2">
                      APPLICANT CONTACT NUMBER
                    </label>
                    <input
                      className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="ID5"
                      type="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-base font-normal mb-2">
                      APPLICANT RELATIONSHIP WITH ACCUSED
                    </label>
                    <input
                      className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="ID6"
                      type="text"
                      value={rel}
                      onChange={(e) => setRel(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-base font-normal mb-2">
                      FIR Description
                    </label>
                    <textarea
                      className=" no-resize appearance-none block w-11/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                      id="Desc"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-500 text-base font-normal mb-2">
                      IPC SECTIONS
                    </label>
                    <input
                      className="appearance-none block w-11/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="ipc"
                      type="text"
                      value={ipc}
                      onChange={(e) => setIpc(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex justify-end md:flex md:items-center">
                  <div className="mr-24">
                    <button
                      className="shadow bg-[#3661EB] w-48 h-12 my-4 text-slate-100focus:shadow-outline focus:outline-none text-white font-normal py-2 px-4 rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
