import React  from 'react';
import './article-admin.css';

const authors = [
    {
        id: 1,
        name: "John Đặng"
    },
    {
        id: 2,
        name: "Tuấn Vũ Đặng"
    }
]

const data = [
    {
      articleId: 1,
      imageUrl: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139e5543f08a.png',
      title: 'Sample Article 1',
      publishedDate: '2025-03-01'
    },
    {
      articleId: 2,
      imageUrl: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613a0bf0926b4.png',
      title: 'Sample Article 2',
      publishedDate: '2025-03-05'
    },
    {
      articleId: 3,
      imageUrl: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/6139fe28a9844.png',
      title: 'Sample Article 3',
      publishedDate: '2025-03-10'
    },
    {
      articleId: 4,
      imageUrl: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613ac64ecffae.png',
      title: 'Sample Article 4',
      publishedDate: '2025-03-15'
    },
    {
      articleId: 5,
      imageUrl: 'https://files.fullstack.edu.vn/f8-prod/blog_posts/65/613a0fd38709e.png',
      title: 'Sample Article 5',
      publishedDate: '2025-03-20'
    }
];

const ArticleAdmin = () => {


    return (
        <div className="article-admin row px-5">
            <div class="app-header d-flex align-items-center">
                <div class="d-flex py-2">
                    <a href="">Home</a>
                    <i class="bi bi-chevron-right fs-5 px-2"></i>
                    <a href="">Article</a>
                </div>
            </div>
            <div className="col-sm-12 col-xl-2 px-2">
                <div className="card p-3 my-3">
                    <div className='d-flex justify-content-between'>
                        <p style={{ fontSize: '12px' }} className="fw-bold">Tìm theo tên</p>
                        <span><i class="bi bi-search"></i></span>
                    </div>
                    <input style={{ fontSize: '12px' }} type="text" name="name-article" id="name-article" className="border-0 border-bottom p-1" />
                </div>

                <div className="card p-3 my-3" style={{ fontSize: '12px' }}>
                    <p className="fw-bold">Tác giả:</p>

                    {authors.map((item) => (
                         <div class="form-check" key={item.id}>
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                {item.name}
                            </label>
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className="col-sm-12 col-xl-10 py-3">
                <table className="table table-hover table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th className='text-center' scope="col">#</th>
                            <th className='text-center' scope="col">Image</th>
                            <th className='text-center' scope="col">Name</th>
                            <th className='text-center' scope="col">Publish Date</th>
                            <th className='text-center' scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {data.map((item) => (
                            <React.Fragment key={item.articleId} >
                                <tr>
                                    <td>{item.articleId}</td>
                                    <td><img src={item.imageUrl} alt="hình ảnh" /></td>
                                    <td>{item.title}</td>
                                    <td>{item.publishedDate}</td>
                                    <td>
                                            <div >
                                                <button type="button" className='mx-2 border-0'><i class="bi bi-three-dots-vertical"></i></button>
                                            </div>
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>);
}

export default ArticleAdmin