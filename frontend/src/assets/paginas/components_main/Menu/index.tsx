import './styles.css'

function Menu() {
    return(
        <nav className='nav nav-color'>
            <a href='http://127.0.0.1:5173/o-que-fazemos' className='imgfund_1 color1'>O Que Fazemos</a>
            <a href='http://127.0.0.1:5173/como-fazemos' className='imgfund_2 color2'>Como Fazemos</a>
            <a href='http://127.0.0.1:5173/crescemos' className='imgfund_3 color3'>Crescemos</a>
            <a href='http://127.0.0.1:5173/onde-estamos' className='imgfund_4 color4'>Onde Estamos</a>
            <a href='http://127.0.0.1:5173/dicas' className='imgfund_5 color5'>Dicas</a>
        </nav>
    )
}

export default Menu