import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import CaseStorage from '../abi/CaseStorage.json'
import {useState} from 'react';
import { NFTStorage, File } from 'nft.storage'
import {sha256} from 'js-sha256'

export default function FIR() {
    const[firId,setFirId] = useState<string>();
    const[nameC,setNameC] = useState<string>();
    const[nameA,setNameA] = useState<string>();
    const[detName,setdetName] = useState<string>();
    const[parent,setParent] = useState<string>();
    const[address,setAddress] = useState<string>();
    const[contact,setContact] = useState<string>();
    const[rel,setRel] = useState<string>();
    const[desc,setDesc] = useState<string>();
    const[ipc,setIpc] = useState<string>();

    const client =  new NFTStorage({ token: process.env.TOKEN })

    const { config } = usePrepareContractWrite({
        address: '0x628f0887dF785315a560d2248a579627FCa65056',
        abi: CaseStorage.abi,
        functionName: 'setCase',

      }as any)

      const { data, isLoading, isSuccess, write } = useContractWrite(config)
    
    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const obj = {
            name:"",
            description:"",
            image: new Blob,
            firId,
            nameA,
            nameC,
            detName,
            parent,
            address,
            contact,
            rel,
            desc,
            ipc
        } 
        const metadata = await client.store(obj as any)
        console.log('Metadata URI: ', metadata)

        //sha256(firId),metadata.ipnft
        config.args = ["6B86B273FF34FCE19D6B804EFF5A3F5747ADA4EAA22F1D49C01E52DDB7875B4B", "dgff"] 
        write?.()

        console.log(isSuccess)
    }

    return (     
    <div className='font-inter'>    
    <div className='flex flex-wrap h-screen flex-row justify-between'>
      <div className=' w-2/12 bg-[#131313]'>
        <p className="font-bold text-white text-xl ml-10 mt-5">
            DFIR
        </p>
        <div className='flex flex-col items-center'>
            <h1 className='mt-48 text-2xl font-extralight text-gray-100'>
                Filed by
            </h1>
            <p className='mt-4 text-base font-normal text-gray-200'>
                Kakkanad Police Station
            </p>
        </div>
      </div>
      <div className='w-10/12'>
        <div className='ml-10 mt-14'>
                <a href="/">
                <div className='flex flex-row gap-2'>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"></path>
                </svg>
                <p>
                    Home
                </p>
                </div>
                </a>
        <h1 className='text-4xl font-bold mt-4'>FIR Registration</h1>
             <p className='text-xl font-normal mt-2 text-slate-500'>Fill in the details regarding the report</p>
             <br/>
             <form className="w-ful" onSubmit={handleSubmit}>
              <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                        FIR ID
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="firId" type="text" value={firId} onChange={(e)=>setFirId(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                        NAME OF COMPLAINTENT
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID" type="text" value={nameC} onChange={(e)=>setNameC(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                        NAME OF ACCUSED
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID1" type="text" value={nameA} onChange={(e)=>setNameA(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                        APPLICANT DETAILED NAME
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID2" type="text" value={detName} onChange={(e)=>setdetName(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                    APPLICANT DETAILED PARENTAGE
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID3" type="text" value={parent} onChange={(e)=>setParent(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                    APPLICANT ADDRESS
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID4" type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                    APPLICANT CONTACT NUMBER
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID5" type="text" value={contact} onChange={(e)=>setContact(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                    APPLICANT RELATIONSHIP WITH ACCUSED
                    </label>
                    <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID6" type="text" value={rel} onChange={(e)=>setRel(e.target.value)}/>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2">
                        FIR Description
                    </label>
                    <textarea className=" no-resize appearance-none block w-11/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="Desc" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2" >
                        IPC SECTIONS
                    </label>
                    <input className="appearance-none block w-11/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ipc" type="text" value={ipc} onChange={(e)=>setIpc(e.target.value)}/>
                    </div>
                </div>

                <div className="flex justify-end md:flex md:items-center">
                    <div className="mr-24">
                    <button className="shadow bg-gradient-to-br from-teal-200 via-teal-400 to-teal-800 w-48 h-12 mt-4 text-slate-100focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Submit
                    </button>
                    </div>
                    <div className=""></div>
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>
    )

}