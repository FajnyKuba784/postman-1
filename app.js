async function getData(){

    const data = await fetch("http://localhost/wordpressn/wp-json/wp/v2/posts")

    const json = await data.json()

    console.log(json)

    
    const ul = document.createElement("ul")
    for(let i=0;i<= json.length-1; i++){
        
        const li = document.createElement("li")
        const div = document.createElement("div")
        const body = document.getElementById("body")
        const button = document.createElement("button")
        //button.setAttribute("id",json[i].id)
        div.setAttribute("id",json[i].id)
        button.addEventListener("click", ()=>{
            deleteArticle(json[i].id)})
            button.innerHTML = "DELETE"
            li.innerHTML = json[i].title.rendered
            body.appendChild(div)
            div.appendChild(li)
            div.appendChild(button)
            
        }
        const body = document.getElementById("body")
        const tytul = document.createElement("input")
        tytul.setAttribute("id","tytul")
        const tekst = document.createElement("input")
        tekst.setAttribute("id","tekst")
        const wyslij = document.createElement("button")
        wyslij.innerHTML = "Stwórz nowy"
        wyslij.addEventListener("click",()=>{
            stworz()
        })
        body.appendChild(tytul)
        body.appendChild(tekst)
        body.appendChild(wyslij)

}


getData()



async function deleteArticle(id){

    const data = await fetch(`http://localhost/wordpressn/wp-json/wp/v2/posts/${id}`,{
    method: "DELETE",
    headers:{
        Authorization : `Basic ${btoa("FajnyKuba784:Paruwkatoja150")}`


    }
})
    const json =  await data.json()

    console.log(json)


    if(json.status == "trash"){
    document.getElementById(json[i].id).remove()
    }

}

async function stworz(){

    const tytul = document.getElementById("tytul").value
    const tekst = document.getElementById("tekst").value

    const data = await fetch(`http://localhost/wordpressn/wp-json/wp/v2/posts?title=${tytul}&status=publish&content=${tekst}`,{
    
    method: "POST",
    headers:{
        Authorization: `Basic ${btoa("FajnyKuba784:Paruwkatoja150")}`

    }

    })

    const json = await data.json()

    console.log(json)



}