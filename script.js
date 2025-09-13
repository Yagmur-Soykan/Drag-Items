let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");
let toplamDivLeft = document.getElementById("toplamDivLeft");
let toplamDivRight = document.getElementById("toplamDivRight");

/*TOPLAM HESAPLAMA*/

function CalculateLeft()
{
    let sum1=0;
    for(let i=0; i<leftBox.children.length; i++)
    {
        if(leftBox.children[i].getAttribute("draggable") === "true")
        {
            sum1 += Number(leftBox.children[i].innerHTML);
        }
        
    }

    toplamDivLeft.innerHTML = sum1;
}

function CalculateRight()
{
    let sum2=0;
    for(let i=0; i<rightBox.children.length; i++)
    {
        if(rightBox.children[i].getAttribute("draggable") === "true")
        {
            sum2 += Number(rightBox.children[i].innerHTML); 
        }    
    }

    toplamDivRight.innerHTML = sum2;
}

/*SÜRÜKLEME İŞLEMLERİ*/

/*list.addEventListener("dragstart", ...) kodu, her öğe sürüklenmeye başlandığında selected değişkenine sürüklenen öğeyi atar.*/

for(list of lists)
/*list kolelksiyonundaki her bir öğeyi list değişkenine atar */
{
    list.addEventListener("dragstart",function(e){
            let selected = e.target;

            rightBox.addEventListener("dragover",function(e){
                e.preventDefault();
                /*preventDefault metodu, tarayıcıların varsayılan davranışlarını engellemek için kullanılır. */
                /*Tarayıcılar, dragover olayında varsayılan olarak bir öğenin başka bir öğeye bırakılmasını engeller. */
            })

            rightBox.addEventListener("drop",function(e){
                rightBox.appendChild(selected);
                selected = null;
                CalculateLeft();
                CalculateRight();
            })

            leftBox.addEventListener("dragover",function(e){
                e.preventDefault();
                /*preventDefault metodu, tarayıcıların varsayılan davranışlarını engellemek için kullanılır. */
                /*Tarayıcılar, dragover olayında varsayılan olarak bir öğenin başka bir öğeye bırakılmasını engeller. */
            })

            leftBox.addEventListener("drop",function(e){
                leftBox.appendChild(selected);
                selected = null;
                CalculateLeft();
                CalculateRight();
            })
    })
}

/*e(event) Olay hakkında bilgi verir.Örneğin, bir kullanıcı bir düğmeye tıkladığında, e bu tıklama olayıyla ilgili bilgileri içerir.
e.target  oayın gerçekleştiği HTML öğesidir */

CalculateLeft();
CalculateRight();