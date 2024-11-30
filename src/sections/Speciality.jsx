import Card from "../components/Card"
import { hero4 , hero1 , hero3, jinidosa, oniondosa, maisoredosa, pannerdosa, noodledosa } from "../assets"

const Speciality = () => {
  return (
    <div className="flex flex-col pl-10 mb-10 md:px-20 gap-y-10 md:flex-row lg:flex-row justify-evenly w-full gap-x-10 flex-wrap">
        <Card name={"Edli Vada"} alt={"idli-vada-img"} price={"40(4piece)"} src={hero3}/>
        <Card name={"Onion Dosa"} alt={"Dosa-img"} price={"60/-"} src={hero4}/>
        <Card name={"Edli"} alt={"idli-img"} price={"40(4piece)"} src={hero1}/>
        <Card name={"Jini Dosa"} alt={"idli-img"} price={"60/-"} src={jinidosa}/>
    </div>
  )
}

export default Speciality