import { lazy } from "react"
//children is default wrapper that holds children compoentnt

// lazy loading compiontes

export default function Main({children}) {
  return (
    <div className="main-block">
      {children}
    </div>
    
  )
}
