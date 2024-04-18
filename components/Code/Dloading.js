import Image from "next/image"
import mycover from '@/public/mycover.jpg'
import styles from "./Dloading.module.css"

const Dloading = () => {
  return (
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
</div>
)}
export default Dloading