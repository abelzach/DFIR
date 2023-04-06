import { Card, Stack, StackDivider, Box, Button, Heading, Text, CardHeader, CardBody, CardFooter, SimpleGrid } from '@chakra-ui/react'
import Link from 'next/link';

export default function evidenceCards() {
    return (
        <>
        <div className="h-27 bg-gradient-to-r from-rose-100 to-teal-100">
        <div className="relative h-32 w-32 ...">
            <div className="absolute left-0 top-0 h-16 w-16 ...">
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    <a href="/">Back to home</a>
                </button>
            </div>
        </div>

        <center>
            <h1>FIR </h1>
            
            </center>
            <form>   
            <label  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search FIR details" required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        
        <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(300px, 4fr))'>
        <Card>
            <CardHeader>
                <Heading size='md'>FIR ID</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Name
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    View a summary of all your clients over the last month.
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Description
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    Check out the overview of your clients.
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    IPC sections
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    See a detailed analysis of all your business clients.
                    </Text>
                </Box>
                </Stack>
            </CardBody>
            </Card>
            <Card>
            <CardHeader>
                <Heading size='md'>FIR ID</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Name
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    View a summary of all your clients over the last month.
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Description
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    Check out the overview of your clients.
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    IPC sections
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    See a detailed analysis of all your business clients.
                    </Text>
                </Box>
                </Stack>
            </CardBody>
            </Card>
            <Card>
            <CardHeader>
                <Heading size='md'>Client Report</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Summary
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    View a summary of all your clients over the last month.
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Overview
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    Check out the overview of your clients.
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Analysis
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    See a detailed analysis of all your business clients.
                    </Text>
                </Box>
                </Stack>
            </CardBody>
            </Card>
            </SimpleGrid>
            <style jsx>{`
                h1{
                    font-size: 70px;
                    font-weight: 800;
                }
                p {
                color: blue;
                }
                h3{
                    font-size: 30px;
                    font-weight: 400;
                    color: #0070f3;
                }
            `}</style>
        </div>
        </>

    )
}