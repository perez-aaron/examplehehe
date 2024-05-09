import '../App.css';

function Header(props) {
    let menus = props.data;
    let title = props.title;
    return (
        <div className='flex heading'>
            <div className = 'header-title'>{title}</div>
            <div className=''> {menus[0].name} </div>
            <div className=''> {menus[1].name}</div> 
            <div className=''> {menus[2].name} </div>  
        </div>
    );
}


export default Header;