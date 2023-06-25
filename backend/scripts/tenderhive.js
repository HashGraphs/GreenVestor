const {ethers} = require("hardhat");
//1. SupplyShereContractAddress 0xE50A2E68f31e899D6e794314823cD2ac126BD764

async function main(){
    //get the contract
    const TenderSupplyShereContract = await ethers.getContractFactory("Bider");
    //deploy the contract
    const TenderSupplyShereContractDeploy = await TenderSupplyShereContract.deploy({ gasLimit: 8000000 });
    //await deployment
    await TenderSupplyShereContractDeploy.deployed();
    //console the address
    console.log("SupplyShereContractAddress", TenderSupplyShereContractDeploy.address);
}
//call main
main().then(()=>
process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
})