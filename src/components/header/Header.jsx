import './header.css'

 function HeaderApp({nameUser}){
    return (
 <header className='app-header'>
            <div>
                {nameUser}
            </div>
            </header>
    )
}
export default HeaderApp