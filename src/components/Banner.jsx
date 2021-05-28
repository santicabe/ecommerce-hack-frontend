import "../cozastore/css/main.css";
import "../cozastore/css/util.css";
import React from "react";
import { Link } from "react-router-dom";

function Categorias() {
  return (
    <div className="sec-banner bg0 p-t-80 p-b-50">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <Link to="/categories">
              <div className="block1 wrap-pic-w">
                <img
                  src="https://preview.colorlib.com/theme/cozastore/images/xbanner-01.jpg.pagespeed.ic.Uj5FE94mgU.webp"
                  alt="IMG-BANNER"
                />

                <a
                  href="product.html"
                  className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                >
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      Women
                    </span>

                    <span className="block1-info stext-102 trans-04">
                      Spring 2021
                    </span>
                  </div>

                  <div className="block1-txt-child2 p-b-4 trans-05">
                    <div className="block1-link stext-101 cl0 trans-09">
                      Shop Now
                    </div>
                  </div>
                </a>
              </div>
            </Link>
          </div>

          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <Link to="/categories">
              <div className="block1 wrap-pic-w">
                <img
                  src="https://preview.colorlib.com/theme/cozastore/images/xbanner-02.jpg.pagespeed.ic.MQuZq6F18q.webp"
                  alt="IMG-BANNER"
                />

                <a
                  href="product.html"
                  className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                >
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      Men
                    </span>

                    <span className="block1-info stext-102 trans-04">
                      Spring 2021
                    </span>
                  </div>

                  <div className="block1-txt-child2 p-b-4 trans-05">
                    <div className="block1-link stext-101 cl0 trans-09">
                      Shop Now
                    </div>
                  </div>
                </a>
              </div>
            </Link>
          </div>
          <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
            <Link to="/categories">
              <div className="block1 wrap-pic-w">
                <img
                  src="https://preview.colorlib.com/theme/cozastore/images/xbanner-03.jpg.pagespeed.ic.1rqLomOaMb.webp"
                  alt="IMG-BANNER"
                />

                <a
                  href="product.html"
                  className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3"
                >
                  <div className="block1-txt-child1 flex-col-l">
                    <span className="block1-name ltext-102 trans-04 p-b-8">
                      Accessories
                    </span>

                    <span className="block1-info stext-102 trans-04">
                      New Trend
                    </span>
                  </div>

                  <div className="block1-txt-child2 p-b-4 trans-05">
                    <div className="block1-link stext-101 cl0 trans-09">
                      Shop Now
                    </div>
                  </div>
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categorias;
