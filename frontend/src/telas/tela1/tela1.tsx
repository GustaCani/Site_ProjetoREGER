

import './tela1.css'
import Footer from '../../assets/paginas/components_main/Footer'
import Header from '../../assets/paginas/components_main/Header'
import Menu from '../../assets/paginas/components_main/Menu'
import Body from '../../assets/paginas/components_main/Body'
import SlideShow from '../../assets/paginas/components_main/SlideShow'


function Tela1() {
  return (
    <>
      <div>
        <header>
          <Header />
        </header>
        <body>
          <div>
            <Menu />
            <div>
              <SlideShow/>
            </div>
            <div className='texto_projeto'> 
              <Body/> 
            </div>
            <div className='rodape'>
              <Footer/>
            </div>  
          </div>
        </body>
      </div>
    </>
  )
}

export default Tela1