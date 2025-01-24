import SeedSale from "./seedSale.js";

export default function Section4() {
    return (
        <>
            <section id="section4" className="flex items-center justify-center min-h-screen h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/20.jpg')] relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
                <div className="grid grid-flow-row auto-rows-min sm:grid-flow-col justify-around gap-6 relative z-10 px-4 sm:px-6">
                    <div className="text-left">
                        <div className="box-cont h-fit w-fit max-w-[85%] mx-auto px-6 sm:px-10 py-6 shadow-lg bg-gradient-to-r from-neutral-900/90 to-neutral-800/90 rounded-xl border border-neutral-700">
                            <h3 className="text-white font-bold text-xl md:text-2xl mb-4">
                                🚀 6 Steps to buy into <br />
                                AIGOS Presale.
                            </h3>
                            <p className="text-white text-xs md:text-sm mb-2"><strong>1) </strong> Connect Wallet</p>
                            <p className="text-white text-xs md:text-sm mb-2"><strong>2) </strong> Click buy with USDT and Enter AIGOS amount to buy</p>
                            <p className="text-white text-xs md:text-sm mb-2"><strong>3) </strong> Click convert USDT and approve in wallet</p>
                            <p className="text-white text-xs md:text-sm mb-2"><strong>4) </strong> Click convert USDT again to spend USDT</p>
                            <p className="text-white text-xs md:text-sm mb-2"><strong>5) </strong> AIGOS will be credited to wallet when Presale ends</p>
                            <p className="text-white text-xs md:text-sm mb-4"><strong>6) </strong> So you have to sign 2 tx, 1 is for approve and one for spend</p>
                        </div>
                    </div>
                    <SeedSale />
                </div>
            </section>
        </>
    );
}