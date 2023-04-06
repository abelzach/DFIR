import CaseStorage from '../abi/CaseStorage.json'
import {useState} from 'react';
import { Web3Storage } from 'web3.storage'
import { Contract, providers, utils } from 'ethers';
import { AnyNsRecord } from 'dns';


export default function Evidence() {
    const[caseid,setCaseid] = useState<string>();
    const [files, setFiles] = useState([])
    const [desc,setDesc] = useState<string>();
    
    // const client =  new NFTStorage({ token: process.env.TOKEN })
    const client = new Web3Storage({  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDBDODZiOWMyZjMzNWYxNjUwMWQ0OEE2M2IxQmRmRDE1QjFGRjJCMjYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY2NTE3NDUxNDcsIm5hbWUiOiJGSVIifQ.vA-ohq0boeAc_wvjsabh3S1Yf2b53TgJETMb6_bdMTo' })

    async function handleSubmit (event) {
        event.preventDefault()
        const cid = await client.put(files, { 
            name: caseid,
        });
          
        console.log(cid)

        // const res = await client.get(cid);
        // const file = await res.files();
        // for (const f of file) {
        //     console.log(`${f.cid} ${f.name} `);
        // }
        // let content = []
        // for await (const upload of client.list()) {
        //         content.push(upload.name)
        //         content.push(upload.cid)
        // }
        // console.log(content)
        const obj = {caseId:caseid,cid:cid, desc:desc}
        const provider = new providers.Web3Provider(window.ethereum)
        const contract = new Contract("0x2050127b520b4a2b796b1ac97A3FA1e4B2bc972C", CaseStorage.abi, provider)
        // console.log(provider)
        const signer = await provider.getSigner();
        
        const tx = await contract.connect(signer).setEvidence(caseid, obj)
        const receipt = await tx.wait()
        console.log(receipt)
        
        // for await (const upload of client.list()) {
        //     console.log(`${upload.name} - cid: ${upload.cid} - size: ${upload.dagSize}`)
        // }

        const ab = await contract.connect(signer).getEvidence(caseid)
        console.log(ab);
          
    }
    // const handleSubmit = async (e:any) => {
    //     e.preventDefault()
        // const obj = {
        //     name:caseid,
        //     description:desc,
        //     image: new File([img], img as any, { type: 'image/png' })
     
        // } 
        // const metadata = await client.store(obj)
        // console.log('Metadata URI: ', metadata)

        // const jsonData = {caseid:caseid,desc:desc,img:img};
        // const blob = new Blob([img]);
        // console.log(img);

        // const cid = await client.storeBlob(blob)
        // console.log(cid)

        // const provider = new providers.Web3Provider(window.ethereum)
        // const contract = new Contract("0x628f0887dF785315a560d2248a579627FCa65056", CaseStorage.abi, provider)
        // console.log(provider)
        // const signer = await provider.getSigner();
        // const tx = await contract.connect(signer).setEvidence(utils.id(caseid), cid)
        // const receipt = await tx.wait()
        // console.log(receipt)
    //}
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
                            CASE ID
                        </label>
                        <input className="appearance-none w-11/12 bg-gray-200 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="ID" type="text" value={caseid} onChange={(e)=>setCaseid(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                     <div className="w-11/12">
                     <label htmlFor='filepicker'>Pick files to store</label>
                    <input type='file' id='filepicker' name='fileList' onChange={e => setFiles(e.target.files as any)} multiple required />
                         
                         </div>
                     </div>
                     <div className="flex flex-wrap -mx-3 my-7">
                        <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-900 text-base font-normal mb-2">
                            EVIDENCE DESCRIPTION
                        </label>
                        <textarea className=" no-resize appearance-none block w-11/12 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="Desc" value={desc} onChange={(e)=>setDesc(e.target.value)}></textarea>
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