import type { NextPage } from "next";

import { useState } from "react";
// import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { getCookie, setCookie, removeCookie } from "typescript-cookie";

// npm i --save-dev @types/js-cookie

const Home: NextPage = () => {
  const router = useRouter();
  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    //console.log("Inside Function requestAccount");

    if (window.ethereum) {
      //console.log("Detected Metamsk");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts);
        setWalletAddress(accounts[0]);

        // 0x1d1eFC63bf932c1daF23c01FD1e18dD1bBe1E78a
        if (
          accounts[0] ==
            "0x6855cc76b0f1f87a92f204346647adb557b28860".toLowerCase() ||
          accounts[0] ==
            "0x52bB3A42564c0Df72ECB111D24BE82C614497A22".toLowerCase() ||
          accounts[0] ==
            "0x1d1efc63bf932c1daf23c01fd1e18dd1bbe1e78a".toLowerCase() ||
          accounts[0] ==
            "0xd76560aEfA91CBFE9a1Efd1D856bfC2001928C97".toLowerCase() ||
          accounts[0] ==
            "0x6855Cc76b0F1F87a92f204346647aDB557b28860".toLowerCase()
        ) {
          console.log("congrats");
          var inTenMinutes = new Date(new Date().getTime() + 10 * 60 * 1000);

          setCookie("loggedin", "true", { expires: inTenMinutes });
          // console.log(req.cookies.get("loggedin"));
          // router.push("/fir");
          console.log(getCookie("loggedin"));
          router.push("/fir");
        } else {
          console.log("sorry.. wrong address");

          removeCookie("loggedin");
        }
      } catch (error) {
        console.log("Error connecting");
      }
    } else {
      alert("Please install metamask");
    }

    // 0x52bB3A42564c0Df72ECB111D24BE82C614497A22
  }

  // async function connectWallet() {
  //   if(typeof window.ethereum !== 'undefined')
  //   {
  //     await requestAccount();
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     await provider.send("eth_requestAccounts", []);

  //   }
  // }

  return (
    <div className="pl-2 font-poppins">
      {/* <nav classNameName="flex items-center justify-between flex-wrap bg-teal-500 p-4">
      <div classNameName="flex items-center flex-shrink-0 text-white mr-10">
        <span classNameName="font-bold text-xl tracking-tight">DeFIR</span>
      </div>
      <div classNameName="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div classNameName="text-sm lg:flex-grow">
          <a href="/fir" classNameName="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white mr-10">
            FIR Registeration Portal
          </a>
          <a href="/evidence" classNameName="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white mr-10">
            Evidence Storage
          </a>
          <a href="/firCards" classNameName="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white  mr-10">
            FIR
          </a>
          <a href="/evidenceCards" classNameName="block mt-4 lg:inline-block lg:mt-0 text-teal-50 hover:text-white  mr-10">
            Evidences
          </a>
        </div>
        <Button onClick={requestAccount} size='lg' colorScheme='blue' mt='6px'>
          Connect
        </Button>
      </div>
    </nav>

    <div classNameName="h-27 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">   
    
    <center>
    <StatGroup>
      <Stat>
        <StatLabel>FIRs REGISTERED</StatLabel>
        <StatNumber>345,670</StatNumber>
        <StatHelpText>
          <StatArrow type='increase' />
          23.36%
        </StatHelpText>
      </Stat>

      <Stat>
        <StatLabel>Evidences Stored</StatLabel>
        <StatNumber>45</StatNumber>
        <StatHelpText>
          <StatArrow type='decrease' />
          9.05%
        </StatHelpText>
      </Stat>
    </StatGroup>
    </center>

    
      <main classNameName={styles.main}>

      <Heading size='lg' fontSize='50px'>
        Decentralized FIR 
      </Heading>
        <br/> */}

      {/* <Link href="/fir">FIR REGISTERATION PORTAL</Link> */}
      {/* <Link href="/evidence">Evidence Storage</Link> */}
      {/* <Link href="/evidenceCards">Evidence Cards</Link> */}

      {/* <Heading noOfLines={1}>
          Address : {walletAddress}
        </Heading>
      </main>

      <footer classNameName={styles.footer}>
        <p>Decentralized FIR system - Main project</p>
      </footer>
    </div> */}
      {/* <nav className="sm:px-4 py-2.5 opacity-100">
        <div className="container flex px-16 flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-bold whitespace-nowrap dark:text-black">
              DFIR
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-row">
              <li className="mt-2">
                <a href="/fir" className="mx-5 my-5">
                  FIR Registeration Portal
                </a>
              </li>
              <li className="mt-2">
                <a href="/dashboard" className="mx-5 my-5">
                  Dashboard
                </a>
              </li>
              <li className="mt-2">
                <a href="/evidence" className="mx-5 my-5">
                  Evidence storage
                </a>
              </li>
              <li className="mt-2">
                <a href="/firCards" className="mx-5 my-5">
                  FIR
                </a>
              </li>
              <li className="mt-2">
                <a href="/evidenceCards" className="mx-5 my-5">
                  Evidences
                </a>
              </li>
              <li>
                <button
                  onClick={requestAccount}
                  className="block py-2 pl-3 pr-4 text-black border-2 border-black translate-x-6"
                >
                  {walletAddress === ""
                    ? "Connect Wallet"
                    : "Logged in as " +
                      walletAddress.substring(0, 8) +
                      "..."}{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className="flex flex-wrap h-screen flex-row justify-between">
        <div className="flex flex-col w-6/12">
          <div className="flex flex-col justify-center px-20 gap-5">
            <p className="font-black text-2xl py-4">DFIR</p>
            <h1 className="text-7xl font-semibold text-[#131321] mt-16 leading-[90px]">
              <span className="font-black text-[#3661EB]">Robust</span> crime{" "}
              <span>
                <div className="h-2">
                  <img src="/Line-8.png" className=""  alt="line"/>
                </div>
              </span>
              management system
            </h1>
            <p className="text-2xl w-full text-[#888B94] font-normal">
              Built in dashboards, FIR management and evidence storage using
              IPFS
            </p>
            <button
              className="bg-[#3661EB] w-full h-14 mt-4 text-slate-100 font-normal rounded-md"
              onClick={requestAccount}
            >
              Connect wallet
            </button>
            <button className="bg-[#e9ecee] w-full h-14 text-[#80858B] font-medium rounded-md">
              Learn more about metamask policies
            </button>
          </div>
        </div>
        <div className="w-6/12 bg-[#F3F5F9] h-screen overflow-hidden">
          <img src="cover.png" className="h-full object-contain"  alt="cover"/>
        </div>
      </div>
    </div>
  );
};

export default Home;
