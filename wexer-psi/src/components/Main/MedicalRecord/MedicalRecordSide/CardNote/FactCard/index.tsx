import './style.css'
const FactCard = () => {
    return (
      <div className="cardName factCard">
          <div className='divImgCard factLogo'>
            <img src="/main/pin.svg" width={'28px'} />
            <div>&nbsp;</div>
        </div>
          <button> ... </button>
          <div>
          <h3>Fato relevante</h3>
          <small>22 de setembro de 2022</small>
          </div>
          <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, illum ex quam animi veniam dolorem enim ullam aut veritatis praesentium perspiciatis fuga, in officia cumque eveniet tempora quos unde distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum delectus asperiores, blanditiis Lorem ipsum dolor, sit amet...</p>
          </div>
      </div>
    )
  }
  
  export default FactCard