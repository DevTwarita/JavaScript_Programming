class Demo
{
    constructor()
    {
        this.No1 = 11;
        this.No2 = 21;
        console.log("Inside constructor");
    }
}

//if you want characteristics we need to write it in constructor

function main()
{
    dobj = new Demo();
    console.log(dobj.No1);
    console.log(dobj.No2);
}

main();