
export function SmallScreenList() {

  function toggleSearchInput(){
    const mainHeader=document.getElementById('main-header');
    const floatInputHeader=document.getElementById('float-input-header');
    mainHeader.classList.toggle('not-show')
    floatInputHeader.classList.toggle('not-show');
  }
  function toggleFloatHeader(){
    const floatHeaderMenu = document.getElementById('float-header-menu');
    const mainHeader=document.getElementById('main-header');
    floatHeaderMenu.classList.toggle('not-show');
    mainHeader.classList.toggle('main-header-color');
  }
 return (
<>
  <link rel="stylesheet" href="./src/header/headerSmall.css" />
  <link rel="stylesheet" href="./src/main/mainSmall.css" />
  <section className="main-header" id="main-header">
    <aside className="header-title">
      <img src="./src/assets/bx-ghost.svg" alt="logo" />
      <h1>Abstract</h1>
      <p className="or-sign">|</p>
      <p>Help Center</p>
    </aside>
    <aside className="header-buttons">
      <button id="button-search" onClick={toggleSearchInput}>
        <img src="./src/assets/icons8-busca-mas-50.png" alt="search" />
      </button>
      <button onClick={toggleFloatHeader}>
        <img src="./src/assets/icons8-menú-24.png" id="button-menu" alt="menu" />
        <p className="not-show">X</p>
      </button>
    </aside>
  </section>
  <section className="header-menu not-show" id="float-input-header">
    <input type="text" placeholder="Search" />
    <button onClick={toggleSearchInput}><strong>X</strong></button>
  </section>
  <section className="float-header-menu not-show" id="float-header-menu">
  <p>Submit a request</p>
  <p>Sign in</p>
    </section>
</>
  )
}

export function LargeScreenList() {
  return (
    <>
    <section className="main-header"><p>ola</p></section>
      {Array.from({length:10}, (_, i) => i+1).map((number) => <h1 key={number}>{number}</h1>)}
    </>
  )
}
  