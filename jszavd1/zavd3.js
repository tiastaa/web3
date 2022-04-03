/*Намалювати рівнобедрений трикутник із символів ^ . Висоту вибирає
користувач. */
let h = parseInt(prompt("Введіть висоту трикутника : "));
let ke=h-1;
let kf=1;
for(var i=0 ; i<h ; i++)
{
    for(var j=0; j<ke; j++ )
    {
        document.write("*");
    }
    
    for(var j=0; j<kf; j++ )
    {
        document.write("^");
    }
    for(var j=0; j<ke; j++ )
    {
        document.write("*");
    }
    document.write('<br \/>' )
    ke=ke-1;
    kf=kf+2;  
    
    
}
