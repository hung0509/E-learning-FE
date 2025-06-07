import { useEffect, useState } from "react";
import DiscountDetail from "../../discount-detail/discount-detail";
import Pagination from "../../pagination/pagination";
import DiscountAddForm from "../../discount-add/discount-add";
import "./discount.css";
import DiscountDto from "../../../dto/discount-dto";
import { useDiscount } from "../../../hook/useDiscount";
import BaseRequestDto from "../../../dto/base-request-dto";

// const discounts = [
//     {
//         discountId: 1,
//         discountCode: 'SAVE10',
//         discountDescription: 'Save 10% on your next purchase',
//         discountRate: 10.00,
//         isActive: 'Y',
//         expiredDate: '2025-12-31'
//     },
//     {
//         discountId: 2,
//         discountCode: 'FREESHIP',
//         discountDescription: 'Free shipping on orders over $50',
//         discountRate: 0.00,
//         isActive: 'N',
//         expiredDate: '2024-06-30'
//     },
//     {
//         discountId: 2,
//         discountCode: 'FREESHIP',
//         discountDescription: 'Free shipping on orders over $50',
//         discountRate: 0.00,
//         isActive: 'N',
//         expiredDate: '2024-06-30'
//     },
//     {
//         discountId: 3,
//         discountCode: 'FREESHIP',
//         discountDescription: 'Free shipping on orders over $50',
//         discountRate: 0.00,
//         isActive: 'Y',
//         expiredDate: '2024-06-30'
//     },
//     {
//         discountId: 4,
//         discountCode: 'FREESHIP',
//         discountDescription: 'Free shipping on orders over $50',
//         discountRate: 0.00,
//         isActive: 'Y',
//         expiredDate: '2024-06-30'
//     }
//     // Add more discount objects as needed
// ];


const Discount = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [page, setPage] = useState(new BaseRequestDto());
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const { handleGetAll } = useDiscount();

    useEffect(() => {
        const fetchData = async () => {
            const result = await handleGetAll(`?page=${currentPage - 1}&pageSize=6`);
            const discounts = result.result.map((item) => DiscountDto.fromJson(item));
            const page = BaseRequestDto.fromBaseRequestResponse(result);

            setData(discounts);
            setPage(page);
        }

        fetchData();
    }, [currentPage]);

    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    const closeModal = () => {
        setEditModalOpen(false); // Đóng modal
    };

    const handleEditClick = () => {
        setEditModalOpen(true); // Mở modal
    };

    const addDiscount = (data) => {
        setData((prev) => [...prev, data]);
    }

    // const handleUpdateDiscount = (updatedDiscount) => {
    //     setData(prev =>
    //         prev.map(discount =>
    //             discount.id === updatedDiscount.id ? updatedDiscount : discount
    //         )
    //     );
    // };

    return (
        <div className="px-5 discount-admin">
            <div class="app-header d-flex align-items-center">
                <div class="d-flex py-2">
                    <a href="">Home</a>
                    <i class="bi bi-chevron-right fs-5 px-2"></i>
                    <a href="">Discount</a>
                </div>
            </div>

            <div className='btn float-right btn-outline-primary my-3 p-2' onClick={() => handleEditClick()} > Thêm phiếu giảm giá</div>


            {isEditModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content w-25">
                        {/* <button className="close-btn btn btn-outline-danger" onClick={closeModal}>×</button> */}
                        <DiscountAddForm
                            closeModal={closeModal}
                            addDiscount={addDiscount}
                        />
                    </div>
                </div>
            )}

            <div className="row py-3">
                {data.map((item) => (
                    <div key={item.discountId} class="col-sm-6">
                        <DiscountDetail discount={item}
                        //  updatedDiscount={handleUpdateDiscount}
                         />
                    </div>
                ))}
                <Pagination
                    currentPage={currentPage}
                    totalPages={page.totalPage}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
}

export default Discount;