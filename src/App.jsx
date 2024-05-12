import './App.css'
import Banana from './banana/banana'
import vendedorDeBananas from './bananasJason'
const bananas = vendedorDeBananas();

function App() {
  return (
    <>
        <header>
          <p id='headerText'>B A N A N A S</p>
        </header>
        <main>
          <Banana 
          src={'/bananas/big.png'}
          title={"Banana Inflavel"}
          />
          <Banana 
          src={'/bananas/9k.png'}
          title={"Banana havaiana"}
          />
          <Banana 
          src={'/bananas/02_1.png'}
          title={"Banana azul"}
          desc={bananas['azul']}
          />
          <Banana 
          src={'/bananas/Cavendish_Banana_DS.png'}
          title={"Banana cavendish"}
          desc={bananas['cavendish']}
          />
          <Banana 
          src={'/bananas/dwarf-cavendish-banana-tree.png'}
          title={"Banana anã cavendish"}
          desc={bananas['anaCavendish']}
          />
          <Banana 
          src={'/bananas/foto_large.png'}
          title={"Banana-da-terra"}
          desc={bananas['terra']}
          />
          <Banana 
          src={'/bananas/platano.png'}
          title={"Banana plátano havaiano"}
          desc={bananas['platHavaiano']}
          />
          <Banana 
          src={'/bananas/Z.png'}
          title={"Banana Prata"}
          desc={bananas['prata']}
          />
          <Banana 
          src={'/bananas/Zdsd.png'}
          title={"Banana vermelha"}
          desc={bananas['vermelha']}
          />
          <Banana 
          src={'/bananas/Zf.png'}
          title={"Banana maça"}
          desc={bananas['maca']}
          />
          <Banana 
          src={'/bananas/banana-saba-2kg-per-hand-fruits-vegetables-fresh-produce-586230_1024x.png'}
          title={"Banana saba"}
          desc={bananas['saba']}
          />
        </main>
        
    </>
  )
}

export default App
