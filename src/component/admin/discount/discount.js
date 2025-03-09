import { useState } from "react";
import DiscountDetail from "../../discount-detail/discount-detail";
import Pagination from "../../pagination/pagination";

const discounts = [
    {
        discountId: 1,
        discountCode: 'SAVE10',
        discountDescription: 'Save 10% on your next purchase',
        discountRate: 10.00,
        isActive: 'VALID',
        expiredDate: '2025-12-31'
    },
    {
        discountId: 2,
        discountCode: 'FREESHIP',
        discountDescription: 'Free shipping on orders over $50',
        discountRate: 0.00,
        isActive: 'INVALID',
        expiredDate: '2024-06-30'
    },
    {
        discountId: 2,
        discountCode: 'FREESHIP',
        discountDescription: 'Free shipping on orders over $50',
        discountRate: 0.00,
        isActive: 'VALID',
        expiredDate: '2024-06-30'
    },
    {
        discountId: 3,
        discountCode: 'FREESHIP',
        discountDescription: 'Free shipping on orders over $50',
        discountRate: 0.00,
        isActive: 'VALID',
        expiredDate: '2024-06-30'
    },
    {
        discountId: 4,
        discountCode: 'FREESHIP',
        discountDescription: 'Free shipping on orders over $50',
        discountRate: 0.00,
        isActive: 'INVALID',
        expiredDate: '2024-06-30'
    }
    // Add more discount objects as needed
];


const Discount = () => {
    const totalPages = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <div className="px-5">
            <div class="app-header d-flex align-items-center">
                <div class="d-flex py-2">
                    <a href="">Home</a>
                    <i class="bi bi-chevron-right fs-5 px-2"></i>
                    <a href="">Discount</a>
                </div>
            </div>
            <div className="row py-3">
                {discounts.map((item) => (
                    <div key={item.discountId} class="col-sm-6">
                        <DiscountDetail discount={item} />
                    </div>
                ))}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
}

export default Discount;