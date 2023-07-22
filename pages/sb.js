"use client"
import BubbleUI from "@/components/Myswiper/Bb";
import { Sbdata } from "@/components/Sbdata";
import { pngdata } from "@/components/Data";

export default function Iwatch(props) {

	const options = {
		size: 180,
		minSize: 20,
		gutter: 8,
		provideProps: true,
		numCols: 6,
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
        className={"myBubbleUI"}
      >
        {Sbdata.map((data, i) => (
		 <div className="bbuichild" key={i}>
      {data}
    </div>
	))}
      </BubbleUI>  </>
		
	)
};
