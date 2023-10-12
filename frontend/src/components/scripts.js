import { useState } from "react"

function closeSidebar(){
    const sideBar = document.getElementById('sidebar')
    const topBar = document.querySelector('.topbar-container')
    sideBar.classList.toggle('close')
    console.log(topBar)
    topBar.classList.toggle('topbarClose')
  }

function setToLocal(data){
  localStorage.setItem("stdata",JSON.stringify(data))
}
function getFromLocal(){
  return JSON.parse(localStorage.getItem('stdata'))
}

export {closeSidebar,setToLocal,getFromLocal}