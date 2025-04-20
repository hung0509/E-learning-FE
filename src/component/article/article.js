const Article = ({data}) => {
    return (
    <div class="btn card profile-card-5 cursor-pointer d-flex flex-diration-row flex-row" style={{alignItems: 'center', minHeight: '220px'}}>
        <div class="card-body">
           <h5 class="card-title mt-3 fs-4">{data.title}</h5>
           <p class="card-text">{data.description}</p>
        </div>
        <div class="card-img-block">
           <img style={{height: '200px', width:'180px'}} class="card-img" src={data.image} alt="Card image cap"/>
        </div>
     </div>
   );
}

export default Article;