class Demo
{
    constructor(A , B)
    {
        this.No1 = A;
        this.No2 = B;
        console.log("Inside constructor");
    }
}

//if you want characteristics we need to write it in constructor

function main()
{
    dobj = new Demo(51, 101);
    console.log(dobj.No1);
    console.log(dobj.No2);
}

main();