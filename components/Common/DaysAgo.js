export default function DaysAgo(postTime) {
    const currentTime = Date.now();
    const timeDifference = currentTime - postTime;
  
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365;
    const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30;
    const millisecondsInDay = 1000 * 60 * 60 * 24;
    
    if (timeDifference > millisecondsInYear) {
        const yearsAgo = Math.floor(timeDifference / millisecondsInYear);
        return `${yearsAgo}年前` ;
    } else if (timeDifference > millisecondsInMonth) {
        const monthsAgo = Math.floor(timeDifference / millisecondsInMonth);
        return `${monthsAgo}月前`;
    } else {
        const daysAgo = Math.floor(timeDifference / millisecondsInDay);
        return `${daysAgo}天前`;
    }
  }