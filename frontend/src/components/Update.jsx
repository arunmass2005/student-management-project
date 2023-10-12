export default function Update(){
    async function update(e){
        e.preventDefault();
        const inputv =document.querySelector('input')
        const formData =new FormData();
        formData.append('name',inputv.value)
        const api = await fetch('http://localhost:8000/students/ASASD',{
            method:'PUT',
            // headers:{
            //     'content-type':'form-data'
            // },
            body:formData})

    }
    return(
        <><input type="text" />
        <button onClick={update}>click</button></>
    )
}