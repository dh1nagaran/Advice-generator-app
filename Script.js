
async function advice()
{
    try{
        const url="https://api.adviceslip.com/advice"
        const res=await fetch(url)
        console.log(res)
        if(res.ok)
        {
            console.log("Success")
        }
        else
        {
            console.log("Fail")
        }

        const slip=await res.json()
        const advice=slip.slip.advice
        const id=slip.slip.id
        const p=document.getElementById("p")
        p.textContent=advice
        const adviceid=document.getElementById("advice-id")
        adviceid.textContent="ADVICE # "+slip.slip.id

        
        
    }
    catch(error)
    {
        console.log(error)

    }

        
}

advice()
