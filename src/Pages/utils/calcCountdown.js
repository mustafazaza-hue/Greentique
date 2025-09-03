export function calcCountdown(targetDate){
if (!targetDate) targetDate = new Date().setHours(23,59,59)
    const OneHourMs= 60 * 60 * 1000;
    const OneMinuteMs = 60 * 1000 ;
    const OneSecondMs = 1000;

    const leftTime = targetDate - new Date().getTime()

    if(leftTime>0){
            const hour = Math.trunc(leftTime / OneHourMs) 
    const minute =Math.trunc( (leftTime % OneHourMs )/ OneMinuteMs )
    const second = Math.trunc((leftTime % OneMinuteMs )/ OneSecondMs )
    return { hour, minute, second}
}else{
    return { hour:"", minute:"", second:""}
    
    }


    
    
}