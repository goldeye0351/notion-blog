"use client"
import BubbleUI from "@/components/Myswiper/Bb";
import { Sbdata } from "@/components/Sbdata";
import { pngdata } from "@/components/Data";

export default function Iwatch(props) {
	
	const diyizu = pngdata.slice(0, 12)
	const options = {
		size: 180,
		minSize: 50,
		gutter: 8,
		provideProps: true,
		numCols: 8,
		fringeWidth: 160,
		yRadius: 130,
		xRadius: 220,
		cornerRadius: 50,
		showGuides: false,
		compact: true,
		gravitation: 5
	}
  
	return (<>
    <BubbleUI 
        options={options}
        className={"myBubbleUI h-[100VH]"}
      >
	   {/*{diyizu.map((data, i) => (<div>{data.image}</div>))} */}
	   {Sbdata.slice(0,12)}
      </BubbleUI>  

	</>
		
	)
};
