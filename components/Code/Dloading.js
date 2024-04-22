import Link from "next/link"
import styles from "./Dloading.module.css"
import RotateCard from "../Myswiper/RotateCard"
const Dloading = () => {
  return (<RotateCard className={'w-80 h-96'}>
  <div className=" flex flex-col justify-center items-center content-center">
<div className={`${styles.aniroot} mx-auto`}> 

  <div className={styles.pl}>
	<div className={styles.pl__dot}></div>
    <div className={styles.pl__dot}></div>
    <div className={styles.pl__dot}></div>
    <div className={styles.pl__dot}></div>
    <div className={styles.pl__dot}></div>
    <div className={styles.pl__dot}></div>
    <div className={styles.pl__dot}></div>
    <div className={styles.pl__dot}></div>
    <div className={styles.pl__dot}></div>
    <div className={styles.pl__dot}></div>
    <div className={styles.pl__dot}></div>
    <div className={styles.pl__dot}></div>
	<div className=" -rotate-45">Loading…</div>

  </div>
</div>
<div className=" mt-8">
  <Link  target="_blank" href='https://goldeye0351.github.io/notion-plugin/3dloading/3dloading.html'> 
  CSS3 3D 加载进度动画
  </Link>
</div>
</div>

</RotateCard>
)}
export default Dloading