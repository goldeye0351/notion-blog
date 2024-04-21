import RotateCard from "../Myswiper/RotateCard"
const Rings =() =>{
    return<div><RotateCard>
    <div className="rings ">
        <i style={{ '--clr': '#00ff0a' }}></i>
        <i style={{ '--clr': '#ff0057' }}></i>
        <i style={{ '--clr': '#fffd44' }}></i>
        <div className=' w-60 h-60 flex justify-center m-auto items-center  '>
            <pre  className='whitespace-pre-wrap '>
                <code>
                    .ring &#123;<br/>
                    position:<br/>
                    display:<br/>
                    &#125;
                </code>
            </pre> 
        </div>
    </div></RotateCard>
    </div>
}
export default Rings