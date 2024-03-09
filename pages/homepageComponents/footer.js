import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
    faTelegram,
    faYoutube,
    faTwitter,
    faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function Footer()
{
    return (
        <>
            <footer className="bg-neutral-800 pt-8">
                <div className="flex place-items-center justify-left ml-6">
                    <a href="#" className="flex items-center">
                        <img src="/images/logo.png" className="ml-3 h-6 sm:h-9" alt="Presale Example" />
                    </a>
                </div>
                <div className="grid grid-flow-row auto-rows-min sm:grid-flow-col justify-around gap-30 py-8 px-6">
                    <div className="w-2/3">
                        <h2 className="mb-6 text-lg font-semibold uppercase text-gray-400">About</h2>
                        <p className="mb-6">
                            We started as TMC in 2016 with an ethereum mining company. <br />
                            After more than 2 years of continues succes 
                            Ethereum rewards declined with no bussiness case for our users. <br />
                            Begin 2019 we switched to Prove of Stake and Rebranded to XTMCSWAP 
                            with low fee swapping earning staking rewards for users.<br />
                            This is still the way forward for the future but now we add into AI experience and Gaming to DeFI. <br />
                            We have developed our dEX into a unique cross chain platform
                            where value can be transeffered between EVM's and the Bitcoin protocol.
                        </p>
                    </div>
                    <div>
                        <h2 className="mb-6 text-lg font-semibold uppercase text-gray-400">Company contacts</h2>
                        <ul className="text-gray-400">
                            <li className="mb-4">
                                <a href="https://t.me/Otje86" className="hover:underline"><FontAwesomeIcon icon={faTelegram} className="mr-2" /> Telegram</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://www.youtube.com/channel/UCnLdb-KeO5EvangZl00oyRA" className="hover:underline"><FontAwesomeIcon icon={faYoutube} className="mr-2" /> YouTube</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://twitter.com/xtmcswap/" className="hover:underline"><FontAwesomeIcon icon={faTwitter} className="mr-2" /> Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="https://github.com/tmcinvest2018" className="hover:underline"><FontAwesomeIcon icon={faGithub} className="mr-2" /> Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="py-6 px-4 bg-neutral-900 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-300 sm:text-center">© 2024 <a href="#">AIRACER</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                        <a href="https://t.me/Otje86" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faTelegram} className="mr-2" />
                            <span className="sr-only">Telegram group</span>
                        </a>
                        <a href="https://www.youtube.com/channel/UCnLdb-KeO5EvangZl00oyRA" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faYoutube} className="mr-2" />
                            <span className="sr-only">YouTube channel</span>
                        </a>
                        <a href="https://twitter.com/xtmcswap/" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="https://github.com/tmcinvest2018" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faGithub} className="mr-2" />
                            <span className="sr-only">Github page</span>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}