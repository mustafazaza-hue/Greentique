export function passwordStrenght(password){
    let strenght = 0;
    let feedBack = {
        text:"",
        bgColor:"",
        width:"",
    }

    if (password.length>= 8){
        strenght++;
    }
    if (password.length>= 12){
        strenght++;
    }
    if (/[a-z]/.test(password)){
        strenght++;
    }
    if (/[A-Z]/.test(password)){
        strenght++;
    }
    if (/[0-9]/.test(password)){
        strenght++;
    }
    if (/[!@#$%^&*()?]/.test(password)){
        strenght++;
    }

switch (strenght){
    case 1:
        feedBack.text = "very weak";
        feedBack.bgColor = "bg-red-500"
        feedBack.width = "w-1/6";
        break
    case 2:
        feedBack.text = "weak";
        feedBack.bgColor = "bg-orange-500"
        feedBack.width = "w-2/6";
        break
    case 3:
        feedBack.text = "fair";
        feedBack.bgColor = "bg-yellow-500"
        feedBack.width = "w-3/6";
        break
    case 4:
        feedBack.text = "good";
        feedBack.bgColor = "bg-lime-500"
        feedBack.width = "w-4/6";
        break
    case 5:
        feedBack.text = "strong";
        feedBack.bgColor = "bg-green-500"
        feedBack.width = "w-5/6";
        break
    case 6:
        feedBack.text = "very strong";
        feedBack.bgColor = "bg-green-700"
        feedBack.width = "w-full";
        break
}
    return feedBack;
}