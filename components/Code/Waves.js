import Image from "next/image"
import styles from "./waves.module.css"

const Waves = () => {
  return (
  <div className=" flex flex-col justify-center items-center content-center">
<div className={`${styles.aniroot} mx-auto`}> 
  <div className={styles.aniwrapper}>
    <div className={styles.aniitems}>
      <div className={`${styles.aniitem} rounded-3xl overflow-hidden`}  tabindex="0"><Image src="https://picsum.photos/900/300.webp?random=1" alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} rounded-3xl overflow-hidden`}  tabindex="0"><Image src="https://picsum.photos/900/300.webp?random=2" alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} rounded-3xl overflow-hidden`}  tabindex="0"><Image src="https://picsum.photos/900/300.webp?random=3" alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} rounded-3xl overflow-hidden`}  tabindex="0"><Image src="https://picsum.photos/900/300.webp?random=4" alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} rounded-3xl overflow-hidden`}  tabindex="0"><Image src="https://picsum.photos/900/300.webp?random=5" alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} hidden lg:block rounded-3xl overflow-hidden`}  tabindex="0"><Image src="https://picsum.photos/900/300.webp?random=6" alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} hidden lg:block rounded-3xl overflow-hidden`}  tabindex="0"><Image src="https://picsum.photos/900/300.webp?random=7" alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} hidden lg:block rounded-3xl overflow-hidden`}  tabindex="0"><Image src="https://picsum.photos/900/300.webp?random=8" alt='' fill className=" object-cover" /></div>
      <div className={`${styles.aniitem} hidden lg:block rounded-3xl overflow-hidden`}  tabindex="0"><Image src="https://picsum.photos/900/300.webp?random=9" alt='' fill className=" object-cover" /></div>
    </div>
  </div>
</div>
</div>
)}
export default Waves