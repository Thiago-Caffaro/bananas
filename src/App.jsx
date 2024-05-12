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
          src={'/big.png'}
          title={"Banana Inflavel"}
          />
          <Banana 
          src={'/9k.png'}
          title={"Banana havaiana"}
          />
          <Banana 
          src={'/02_1.png'}
          title={"Banana azul"}
          desc={bananas['azul']}
          />
          <Banana 
          src={'/Cavendish_Banana_DS.png'}
          title={"Banana cavendish"}
          desc={bananas['cavendish']}
          />
          <Banana 
          src={'/dwarf-cavendish-banana-tree.png'}
          title={"Banana anã cavendish"}
          desc={bananas['anaCavendish']}
          />
          <Banana 
          src={'/foto_large.png'}
          title={"Banana-da-terra"}
          desc={bananas['terra']}
          />
          <Banana 
          src={'/platano.png'}
          title={"Banana plátano havaiano"}
          desc={bananas['platHavaiano']}
          />
          <Banana 
          src={'/Z.png'}
          title={"Banana Prata"}
          desc={bananas['prata']}
          />
          <Banana 
          src={'/Zdsd.png'}
          title={"Banana vermelha"}
          desc={bananas['vermelha']}
          />
          <Banana 
          src={'/Zf.png'}
          title={"Banana maça"}
          desc={bananas['maca']}
          />
          <Banana 
          src={'/banana-saba-2kg-per-hand-fruits-vegetables-fresh-produce-586230_1024x.png'}
          title={"Banana saba"}
          desc={bananas['saba']}
          />
        </main>
        
    </>
  )
}

export default App
