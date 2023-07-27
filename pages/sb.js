import Container from "@/components/Container"
import TouchMeCard from "@/components/Myswiper/TouchMeCard"
export default function Iwatch(props) {

  
	return (<Container >
<div className="flex flex-row">

       <div className="  w-[1000px]  rounded-3xl p-16 bg-slate-300">
			<div className="  ">1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div>
			<div className="  ">1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div><div>1</div>

	   </div>
	   <div className=" rounded-3xl mx-8 space-y-3">
	   		<div className="  w-56 h-96 rounded-xl bg-red-800  "></div>
			<div className="  sticky top-56 w-56  rounded-xl bg-red-100  space-y-3 ">
				<div className="  w-56 h-8 rounded-xl bg-green-500  "></div>
				<div className="  w-56 h-8 rounded-xl bg-gray-500  "></div>
				<TouchMeCard/>
			</div>

	   </div>

</div>
</Container>

        
	
		
	)
};
