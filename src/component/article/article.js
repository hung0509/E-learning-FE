const Article1 = ({ data, index }) => {
   return (
      <div className={`w-75 btn card profile-card-5 cursor-pointer d-flex flex-row ${index % 2 !== 0 ? 'float-end' : ''
         }`} style={{ alignItems: 'center', minHeight: '220px' }} >
         <div class="card-body">
            <h5 class="card-title mt-3 fs-4">{data.title}</h5>
            <p class="card-text" style={{webkitLineClamp: '3', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{data.description}</p>
         </div>
         <div class="card-img-block">
            <img style={{ height: '200px', width: '180px' }} class="card-img" src={data.image} alt="Card image cap" />
         </div>
      </div>
   );
}

export default Article1;