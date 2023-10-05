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
        button.setAttribute("id",json[i].id)
        button.innerHTML = "DELETE"
        li.innerHTML = json[i].title.rendered
        body.appendChild(div)
        div.appendChild(li)
        div.appendChild(button)

    }


}


getData()



async function deleteArticle(){

    const id = ""
    const data = await fetch(`http://localhost/wordpressn/wp-json/wp/v2/posts/${id}`,{
    method: "DELETE",
    headers:{
        Authorization : `Basic ${btoa("FajnyKuba784:Paruwkatoja150")}`


    }
})
    const json =  await data.json()
}