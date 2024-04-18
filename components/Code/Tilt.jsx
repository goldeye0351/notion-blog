import Tilt from 'react-parallax-tilt' 
import Image from 'next/image'
import mycover from '@/public/mycover.jpg'
const Tilts =() =>{
    return<>
    <Tilt className="my3d rounded-2xl w-80 h-80 flex justify-center items-center ring-2 ring-green-400 hover:shadow-[0_0_30px_10px_rgba(0,255,0,0.5)]  "
                          perspective={1500}
                          glareEnable={true}
                          glarePosition={'all'}
                          glareMaxOpacity={0.5}
                          glareColor="#000000"
                          glareBorderRadius="12px"
                          scale={1.01}
                        >
                      <div className=' my3din80 relative   flex justify-center items-center content-center rounded-full '>
                            <Image  src={mycover} width={200} height={100} alt='' className=' rounded-3xl '/>
                      </div>
                      <div className=' my3din300 absolute bottom-6    flex justify-center items-center content-center rounded-full '>
                           '<Tilt className="my3d rounded-xl w-12 h-12 flex justify-center items-center ring-2 ring-green-400 shadow-[0_0_30px_10px_rgba(0,255,0,0.5)]  "
                           perspective={1500}
                          glareEnable={true}
                          glarePosition={'all'}
                          glareMaxOpacity={0.5}
                          glareColor="#000000"
                          glareBorderRadius="12px"
                          scale={1.01}
                        >Tilt</Tilt>'
                      </div>
                  </Tilt>
    </>
}

export default Tilts