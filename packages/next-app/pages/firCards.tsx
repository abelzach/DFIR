import {
  Card,
  Stack,
  StackDivider,
  Box,
  Heading,
  Text,
  CardHeader,
  SimpleGrid,
  CardBody,
} from "@chakra-ui/react";
import { Contract, providers, utils } from "ethers";
import CaseStorage from "../abi/CaseStorage.json";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { render } from "react-dom";
import useFirStore from "../stores/firStore";

interface FIRs {
  fir_no: number;
  dor: string;
  name_complainant: string;
  name_accused: string;
  applicant_detail_name: string;
  applicant_detail_parentage: string;
  applicant_detail_address: string;
  applicant_detail_contact_no: number;
  applicant_relationship_accussed: string;
}

interface FIR_Props extends Array<FIRs> {}

export default function FirCards() {
  // const [arrFir, setArrFir] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const firData = useFirStore((state) => state.firArr);
  const setFirArr = useFirStore((state) => state.setFir);

  useEffect(() => {
    //Runs on the first render
    async function getFir() {
      const provider = new providers.Web3Provider(window.ethereum);
      const contract = new Contract(
        "0x194df8b92A61973403918D7428CaDA647591CbDa",
        CaseStorage.abi,
        provider
      );
      // console.log(provider)
      const signer = await provider.getSigner();

      const array = await contract.connect(signer).casesReturn();
      // setArrFir(array)
      let dataArray = [];

      for (let element of array) {
        // console.log(element)
        const ipfs = await contract.connect(signer).getCase(element);
        const resp = await fetch(`https://${ipfs}.ipfs.nftstorage.link/`);
        const data = await resp.json();
        dataArray.push(data);
        // console.log(dataArray)
      }
      // console.log(dataArray)
      // setArrFir(dataArray);
      setFirArr(dataArray);
      // console.log(arrFir);
    }
    getFir();
    // console.log(arrFir);
    console.log("this is zustand");
    console.log(firData);

    //And any time any dependency value changes
  }, [firData.length]);

  const searchFilter = (array) => {
    return array.filter((el) =>
      Object.keys(el).some((parameter) =>
        el[parameter].toString().toLowerCase().includes(query)
      )
    );
  };
  const filtered = searchFilter(firData);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Layout>
      <div className="font-poppins ml-64">
        <div className="flex flex-wrap h-screen flex-row justify-between">
          <div className="w-10/12">
            <div className="ml-10 mt-14">
              <h1 className="text-4xl font-bold mt-4">FIR Search</h1>
              <p className="text-xl font-light mt-2 text-[#98999E]">
                Search for saved FIR data
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
                    placeholder="Search FIRs..."
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
                    templateColumns="repeat(auto-fill, minmax(300px, 4fr))"
                  >
                    {filtered.map((evi) => (
                      <Card key={evi.firId}>
                        <CardHeader>
                          <Heading size="md">FIR ID {evi.firId}</Heading>
                        </CardHeader>
                        <CardBody>
                          <Box overflowX="auto" overflowY="auto" height="200px">
                            <Stack divider={<StackDivider />} spacing="4">
                              <Box>
                                <Heading size="xs" textTransform="uppercase">
                                  Police Station
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                  Kakkanad Police Station
                                </Text>
                              </Box>

                              <Box>
                                <Heading size="xs" textTransform="uppercase">
                                  Name of the Complainant
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                  {evi.nameC}
                                </Text>
                              </Box>

                              <Box>
                                <Heading size="xs" textTransform="uppercase">
                                  Person Accussed
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                  {evi.nameA}
                                </Text>
                              </Box>

                              <Box>
                                <Heading size="xs" textTransform="uppercase">
                                  DESC
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                  {evi.desc}
                                </Text>
                              </Box>

                              <Box>
                                <Heading size="xs" textTransform="uppercase">
                                  Applicant Detail
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                  {evi.detName}
                                </Text>
                              </Box>

                              <Box>
                                <Heading size="xs" textTransform="uppercase">
                                  Applicant`&apos;`s Parentage
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                  {evi.parent}
                                </Text>
                              </Box>

                              <Box>
                                <Heading size="xs" textTransform="uppercase">
                                  Applicant`&apos;`s Address
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                  {evi.address}
                                </Text>
                              </Box>

                              <Box>
                                <Heading size="xs" textTransform="uppercase">
                                  Applicant`&apos;`s Contact detail
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                  {evi.contact}
                                </Text>
                              </Box>

                              <Box>
                                <Heading size="xs" textTransform="uppercase">
                                  Applicant`&apos;`s Relationship with Accussed
                                </Heading>
                                <Text pt="2" fontSize="sm">
                                  {evi.rel}
                                </Text>
                              </Box>
                            </Stack>
                          </Box>
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
