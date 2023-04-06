import { Card, Stack, StackDivider, Box, Heading, Text, CardHeader, SimpleGrid } from '@chakra-ui/react'
import {FIR} from './firdata'
import { Contract, providers, utils } from 'ethers';
import CaseStorage from '../abi/CaseStorage.json'
import { useEffect, useState } from 'react';

interface FIRs {
    "fir_no" : number,
    "dor" : string,
    "name_complainant" : string,
    "name_accused" : string,
    "applicant_detail_name" : string,
    "applicant_detail_parentage" : string,
    "applicant_detail_address" : string,
    "applicant_detail_contact_no" : number,
    "applicant_relationship_accussed" : string,
}

interface FIR_Props extends Array<FIRs>{};

var FIRCard: FIR_Props = FIR;
// console.log(FIRCard);

export default function firCards() {

    const [arrFir, setArrFir] = useState<any[]>([])
    useEffect(() => {
        //Runs on the first render
        async function  getFir() {

            const provider = new providers.Web3Provider(window.ethereum)
            const contract = new Contract("0x2050127b520b4a2b796b1ac97A3FA1e4B2bc972C", CaseStorage.abi, provider)
            // console.log(provider)
            const signer = await provider.getSigner();
            
            const array = await contract.connect(signer).casesReturn()
            // setArrFir(array)
            let dataArray = []

            for(let element of array) {
                // console.log(element)
                const ipfs = await contract.connect(signer).getCase(element)
                const resp = await fetch(`https://${ipfs}.ipfs.nftstorage.link/`)
                const data = await resp.json()
                dataArray.push(data)
                // console.log(dataArray)
            }
            // console.log(dataArray)
            setArrFir(dataArray)    
            console.log(arrFir)
        }
        getFir();
        console.log(arrFir)
        //And any time any dependency value changes
      }, [arrFir.length]);

    

    return (
        <div className='font-inter'>
        <div className='flex flex-col'>
            <div className='bg-black h-2/5 w-screen pb-10'>
                <div className='mx-10'>
                    <h1 className='font-bold text-white text-xl mt-5'>
                        DFIR
                    </h1>
                    <a href="/">
                <div className='flex flex-row gap-2 mt-16'>
                <svg className="w-6 h-6" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
                </svg>
                <p className='text-white font-normal'>
                    Back Home
                </p>
                </div>
                </a>
                <h1 className='font-bold text-4xl text-white mt-4'>
                    FIRs
                </h1>
                <p className='font-light text-lg text-gray-500 mt-3'>
                    Search and filter to find required FIRs
                </p>
                <form className="flex items-center mt-7">   
                    <label  className="sr-only">Search</label>
                    <div className="relative w-full ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="gray" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500" placeholder="Search" required />
                    </div>
                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </form>
                </div>
            </div>
            <div className='bg-white h-screen'>
                <div className='mx-10 my-8'>
                <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(300px, 4fr))'>

                    {arrFir.map(evi => (<Card> 
                    <CardHeader>
                        <Heading size='md'>FIR ID {evi.firId}</Heading>
                    </CardHeader>

                    <Stack divider={<StackDivider />} spacing='4'>

                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Police Station
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        Kakkanad Police Station
                        </Text>
                    </Box>


                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Name of the Complainant
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        {evi.nameC}
                        </Text>
                    </Box>


                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Person Accussed
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        {evi.nameA}
                        </Text>
                    </Box>

                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                         DESC
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        {evi.desc}
                        </Text>
                    </Box>

                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Applicant Detail
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        {evi.detName}
                        </Text>
                    </Box>

                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Applicant's Parentage
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        {evi.parent}
                        </Text>
                    </Box>

                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Applicant's Address
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        {evi.address}
                        </Text>
                    </Box>

                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Applicant's Contact detail
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        {evi.contact}
                        </Text>
                    </Box>

                    <Box>
                        <Heading size='xs' textTransform='uppercase'>
                        Applicant's Relationship with Accussed
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                        {evi.rel}
                        </Text>
                    </Box>
                    </Stack>
                 
                </Card>     
                )                
        )
    }


    
    </SimpleGrid>
                </div>
            </div>
        </div>
    </div>
    )

}