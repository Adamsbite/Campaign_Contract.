import { useEffect, useState } from "react";
import { useConnection } from "../context/connection";
import { Contract, ethers } from "ethers";
import { crowdfunding } from "../utils";
import { abi } from "../utils/abi";

const useCampain = () => {
    const [crowdcampain, setcrowdcampain ] = useState([]);
    const [ campaincount,setcount ] = useState();
    const {provider, isActive }= useConnection();
    const crowdfundcontract = new Contract(crowdfunding, abi, provider)

const getcampaincount = async() => {
    try {
        const getId = await crowdfundcontract.id();
        return getId
    } catch (error) {console.log(error)}
}

            
    const allcampaindata = async() => {
        try {
            const crowdfund = await crowdfundcontract.crowd();
            return crowdfund
        } catch (error) {console.log(error)}

        
   const getId = await crowdfundcontract.id();
   setcount(getId)
}
    useEffect(() => {
        if (!isActive){
            return;
        }

        getcampaincount();
    }, [isActive])

    return campaincount;
    
 }

 export default useCampain;