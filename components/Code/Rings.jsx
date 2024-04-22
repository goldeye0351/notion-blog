import RotateCard from "../Myswiper/RotateCard"
const Rings =() =>{
    return<div>
        <RotateCard className={'w-80 h-96 flex flex-col'}>
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
            </div>

    </RotateCard>
    <div className=" flex justify-center items-center mt-8">
                <a  download href='https://goldeye0351.github.io/notion-plugin/rings/rings.html' > 
                CSS 发光 飘带
                </a>
            </div>
    </div>
}
export default Rings