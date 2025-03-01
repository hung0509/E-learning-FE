import Article from '../../component/article/article';

const Articles = () => {
    return (<div className="container">
        <div class="row">
          <div class="col">
            <h1 class="display-4 font-weight-bolder">Bài viết nổi bật</h1>
          </div>
        </div>
        <div className="row px-5">
          <div class="col-md-3 mt-4">
                <Article />
          </div>
          <div class="col-md-3 mt-4">
                <Article />
          </div>
          <div class="col-md-3 mt-4">
                <Article />
          </div>
          <div class="col-md-3 mt-4">
                <Article />
          </div>
          <div class="col-md-3 mt-4">
                <Article />
          </div>
          <div class="col-md-3 mt-4">
                <Article />
          </div>
          <div class="col-md-3 mt-4">
                <Article />
          </div>
          <div class="col-md-3 mt-4">
                <Article />
          </div>
        </div>
      </div>);
}
export default Articles;