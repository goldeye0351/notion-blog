import { lang } from '@/public/lang'
import { useRouter } from 'next/router';

export default function DaysAgo(postTime) {
    const { locale } = useRouter();
    const t = lang[locale];
    const currentTime = Date.now();
    const timeDifference = currentTime - postTime;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;
    const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30;
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    
    if (timeDifference > millisecondsInYear) {
        const yearsAgo = Math.floor(timeDifference / millisecondsInYear);
        return `${yearsAgo}${t.TIME.Y}` ;
    } else if (timeDifference > millisecondsInMonth) {
        const monthsAgo = Math.floor(timeDifference / millisecondsInMonth);
        return `${monthsAgo}${t.TIME.M}`;
    } else {
        const daysAgo = Math.floor(timeDifference / millisecondsInDay);
        if (daysAgo < 1) 
        return `${t.TIME.TODAY}` 
        else{
        return `${daysAgo}${t.TIME.D}`;}
    }
  }