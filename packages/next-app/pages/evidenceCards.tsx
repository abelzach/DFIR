import { Card, Stack, Image, Heading, Text, CardBody, SimpleGrid } from '@chakra-ui/react'
import {Evidences} from './evidencedata'



interface Evidence {
   "case_no" : number,
    "case_desc" : string,
}

interface Evidences_Props extends Array<Evidence>{};

var Evi: Evidences_Props = Evidences;
console.log(Evi);

export default function evidenceCards() {
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
                        Evidences
                    </h1>
                    <p className='font-light text-lg text-gray-500 mt-3'>
                        Search and filter to find required evidences  
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

                        {Evi.map(evi => <Card maxW='sm'>
                                            <CardBody>
                                                <Image
                                                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                                alt='Green double couch with wooden legs'
                                                borderRadius='lg'
                                                />
                                                <Stack mt='6' spacing='3'>
                                                <Heading size='md'>Living room Sofa</Heading>
                                                <Text>
                                                {evi.case_desc}
                                                </Text>
                                                <Text color='green.600' fontSize='2xl'>
                                                {evi.case_no}
                                                </Text>
                                                </Stack>
                                            </CardBody>
                                            </Card>
                                                
                                )
                        }


        </SimpleGrid>
                    </div>
                </div>
            </div>
        </div>
    )

}