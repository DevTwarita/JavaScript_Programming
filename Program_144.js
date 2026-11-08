function CheckEven(iNo) //there is no need to specify if its let var or const because it takes parameter
{
    if (iNo % 2 == 0)
    {
        console.log("It is even number");
    }
    else
    {
        console.log("It is odd number");
    }
}

function main()
{
    let iValue = 11;
    
    CheckEven(iValue);
}

main();