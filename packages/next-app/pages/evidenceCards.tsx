import {
  Card,
  Stack,
  Image,
  Heading,
  Text,
  CardBody,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CaseStorage from "../abi/CaseStorage.json";
import { Contract, providers, utils } from "ethers";
import Layout from "../components/Layout";
import useEvidenceStore from "../stores/evidenceStore";

interface Evidence {
  case_no: number;
  case_desc: string;
}

interface Evidences_Props extends Array<Evidence> {}

// for await (const upload of client.list()) {
//     console.log(`${upload.name} - cid: ${upload.cid} - size: ${upload.dagSize}`)
//   }
// const [evidence, setEvidence] = useState([]);

// const getEvidence = async () => {
//     client.list()
//     .then(({data}) => {
//         setEvidence(data)
//     })
//     .catch((err) => {
//         alert("Something went wrong. please try again.!");
//       });

// }
// useEffect (() = > {
//     getEvidence();
// }[]);

export default function EvidenceCards() {
  // let content = []

  //     (async () => {
  //         for await (const upload of client.list()) {
  //             content.push(upload.name)
  //           }
  //     })();

  // console.log(content)

  const evidenceData = useEvidenceStore((state) => state.evidenceArr);
  const setEvidenceArr = useEvidenceStore((state) => state.setEvidence);
  const [arrEvi, setArrEvi] = useState<any[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    //Runs on the first render
    async function getEvi() {
      const provider = new providers.Web3Provider(window.ethereum);
      const contract = new Contract(
        "0x194df8b92A61973403918D7428CaDA647591CbDa",
        CaseStorage.abi,
        provider
      );
      // console.log(provider)
      const signer = await provider.getSigner();

      const array = await contract.connect(signer).evidencesReturn();
      console.log(array);
      let dataArray = [];

      for (let element of array) {
        // console.log(element)
        const ipfs = await contract.connect(signer).getEvidence(element);
        console.log(ipfs);
        // const resp = await fetch(`https://${ipfs.cid}.ipfs.nftstorage.link/`)

        dataArray.push(ipfs);
        // console.log(dataArray)
      }
      // console.log(dataArray)
      setEvidenceArr(dataArray);
      // console.log(arrEvi);
    }
    getEvi();
    console.log(evidenceData);
    //And any time any dependency value changes
  }, [evidenceData.length]);

  const searchFilter = (array) => {
    return array.filter((el) =>
      Object.keys(el).some((parameter) =>
        el[parameter].toString().toLowerCase().includes(query)
      )
    );
  };
  const filtered = searchFilter(evidenceData);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Layout>
      <div className="font-poppins ml-64">
        <div className="flex flex-wrap h-screen flex-row justify-between">
          <div className="w-10/12">
            <div className="ml-10 mt-14">
              <h1 className="text-4xl font-bold mt-4">Evidences Search</h1>
              <p className="text-xl font-light mt-2 text-[#98999E]">
                Search for evidences
              </p>
              <br />
              <div className="pt-4 mt-4 space-y-2 border-t border-slate-300"></div>
              <form>
                <label
                  htmlFor="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    onChange={handleChange}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search saved evidences..."
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                  >
                    Search
                  </button>
                </div>
              </form>
              <div className="bg-white h-screen">
                <div className="mx-10 my-8">
                  <SimpleGrid
                    spacing={10}
                    templateColumns="repeat(auto-fill, minmax(250px, 4fr))"
                  >
                    {filtered.map((evi) => (
                      <Card maxW="sm" key={evi.cid}>
                        <CardBody>
                          <Image
                            maxW={{ base: "100%", sm: "250px" }}
                            maxH={{ base: "100%", sm: "250px" }}
                            src={`https://${evi.cid}.ipfs.w3s.link/image.png`}
                            alt="Green double couch with wooden legs"
                            borderRadius="lg"
                          />
                          <Stack mt="6" spacing="3">
                            <Heading size="md">Case ID : {evi.caseId} </Heading>
                            <Text>{evi.desc}</Text>
                          </Stack>
                        </CardBody>
                      </Card>
                    ))}
                  </SimpleGrid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
