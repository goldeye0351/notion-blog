import Image from "next/image"
import styles from "./waves.module.css"
import mycoverimg from '@/public/mycover.jpg'
import Link from "next/link"
const Waves = () => {
  return (
  <div className=" flex flex-col justify-center items-center content-center">
<div className={`${styles.aniroot} mx-auto`}> 
  <div className={styles.aniwrapper}>
    <div className={styles.aniitems}>
      <div className={`${styles.aniitem} rounded-3xl overflow-hidden`}  tabindex="0"><Image src={mycoverimg} alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} rounded-3xl overflow-hidden`}  tabindex="0"><Image src={mycoverimg} alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} rounded-3xl overflow-hidden`}  tabindex="0"><Image src={mycoverimg} alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} rounded-3xl overflow-hidden`}  tabindex="0"><Image src={mycoverimg} alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} rounded-3xl overflow-hidden`}  tabindex="0"><Image src={mycoverimg} alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} hidden lg:block rounded-3xl overflow-hidden`}  tabindex="0"><Image src={mycoverimg} alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} hidden lg:block rounded-3xl overflow-hidden`}  tabindex="0"><Image src={mycoverimg} alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} hidden lg:block rounded-3xl overflow-hidden`}  tabindex="0"><Image src={mycoverimg} alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} hidden lg:block rounded-3xl overflow-hidden`}  tabindex="0"><Image src={mycoverimg} alt='' fill className=" object-cover" /></div>
    </div>
  </div>
</div>
<div className=" mt-8">
  <Link  target="_blank" href='https://goldeye0351.github.io/notion-plugin/3dwave/3dwave.html'> 
  CSS  3D 波浪相册
  </Link>
</div>

</div>
)}
export default Waves