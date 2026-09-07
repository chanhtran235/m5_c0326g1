
import React from 'react';
import './home.css';

const Home = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-12">

                        {/* Logo / Brand */}
                        <h1 className="brand-title">
                            <span className="brand-ai">A.I-NATIVE</span>
                            <span className="brand-bootcamp"> BOOTCAMP</span>
                        </h1>

                        {/* Main title */}
                        <h2 className="hero-title">
                            KIẾN TẠO THẾ HỆ LẬP TRÌNH VIÊN MỚI
                        </h2>

                        {/* Description */}
                        <p className="hero-description">
                            Phương pháp học tập mới, mục tiêu học tập mới và
                            <br className="d-none d-md-block" />
                            nội dung học tập mới giúp bạn trở thành những lập
                            <br className="d-none d-md-block" />
                            trình viên tiên phong trong thời đại AI.
                        </p>

                        {/* Button */}
                        <button className="btn hero-button">
                            KHÁM PHÁ NGAY
                        </button>

                    </div>
                </div>
            </div>

            {/* Floating buttons */}
            <div className="floating-buttons">

                {/* Messenger */}
                <a
                    href="#messenger"
                    className="floating-button messenger-button"
                    aria-label="Messenger"
                >
                    <i className="bi bi-messenger"></i>
                </a>

                {/* Phone */}
                <a
                    href="tel:0123456789"
                    className="floating-button phone-button"
                    aria-label="Gọi điện"
                >
                    <i className="bi bi-telephone-fill"></i>
                </a>

            </div>
        </section>
    );
};

export default Home;