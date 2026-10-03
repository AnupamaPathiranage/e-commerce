let productCount = 0;

const displayProductCount = () => {

  return  productCount > 0 ? productCount : 'Zero';
}

let style = {
   fontWeight: 'bold',
   'font-size':16
}

let isAvailable = 'Unavailable';
let badgeClass = 'badge ms-3';
badgeClass += isAvailable === 'Available' ? ' bg-warning' : ' bg-danger';

function Products() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">

                    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
                        <div className="row g-0 align-items-center">

                            {/* Product Image */}
                            <div className="col-md-5 bg-light text-center p-4">
                                <img
                                    src="/milk.jpg"
                                    className="img-fluid rounded-3"
                                    alt="Fresh Milk"
                                    style={{ maxHeight: "250px", objectFit: "contain" }}
                                />
                            </div>

                            {/* Product Details */}
                            <div className="col-md-7">
                                <div className="card-body p-4">

                                    <span className="badge bg-success mb-2">
                                        Fresh Product
                                    </span>

                                    <h3 className="card-title fw-bold mb-2">
                                        Fresh Milk
                                    </h3>

                                    <p className="text-muted small mb-3">
                                        Dairy &nbsp;•&nbsp; 1 Liter
                                    </p>

                                    <p className="card-text text-secondary">
                                        Enjoy the rich and creamy taste of fresh milk, carefully
                                        sourced and processed to preserve its natural nutrients.
                                        Perfect for drinking, tea, coffee, cereals, and everyday
                                        cooking.
                                    </p>

                                    {/* Rating */}
                                    <div className="mb-3">
                                        <span className="text-warning">★★★★★</span>
                                        <span className="text-muted ms-2 small">
                                            4.8 (124 reviews)
                                        </span>
                                    </div>

                                    {/* Price */}
                                    <div className="d-flex align-items-center mb-4">
                                        <h4 className="fw-bold text-success mb-0">
                                            $120.00
                                        </h4>

                                        <del className="text-muted ms-3">
                                            $140.00
                                        </del>

                                        <span className={badgeClass}>
                                            {isAvailable}
                                        </span>
                                    </div>

                                    {/* Buttons */}
                                    <div className="d-flex justify-content-end gap-2">

                                        <button className="btn btn-success">
                                            -
                                        </button>
                                        <span style={style}>{displayProductCount()}</span>
                                        <button className="btn btn-success ">
                                            +
                                        </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Products;