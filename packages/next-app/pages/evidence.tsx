import { Center } from '@chakra-ui/react';
import Link from 'next/link';

export default function Evidence() {
    return (
        <>
        <div className='px-2 font-inter'>
        <nav className="sm:px-4 py-2.5 opacity-100">
        <div className="container flex px-16 flex-wrap items-center justify-between mx-auto">
            <a href="/" className="flex items-center">
                <span className="self-center text-xl font-bold whitespace-nowrap dark:text-black">DFIR</span>
            </a>
        </div>
        </nav>
        
        <div className='flex flex-wrap h-screen flex-row justify-between'>
        
        <div className=' w-3.5/12 bg-gradient-to-l from-gray-700 via-gray-900 to-black'>
            <div className='flex flex-col px-20 gap-6'>
            <center>
            <p className='text-3xl font-bold mt-16 leading-tight text-white'>
            Filed by
            </p>
            <svg className="w-6 h-6" fill="white" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <p className='text-2xl font-bold mt-1 leading-tight text-white'>
            Kakkanad Police Station
            </p>
            </center>
            </div>
        </div>
        
        <div className='w-8/12'>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
        </svg>
        <h1>Evidence Storage</h1>
            <p className='text-2xl font-bold mt-1 leading-tight text-slate-600'>Upload evidences and add description</p>
            <br/>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        CASE ID
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="caseId" type="text"/>
                    </div>
                </div>
                <div>
                    <div className="mb-3 w-96">
                        <label className="form-label inline-block mb-2 text-gray-700">Upload file</label>
                        <input className="form-control
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile" />
                    </div>
                    </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Evidence Description
                    </label>
                    <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="evidenceDesc"></textarea>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                    <button className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Submit
                    </button>
                    </div>
                    <div className="md:w-2/3"></div>
                </div>
                </form>
        </div>
        </div>
        </div>
        <style jsx>{`
            h1{
                font-size: 50px;
                font-weight: 600;
            }
           
        `}</style>
       
        </>
    )

}