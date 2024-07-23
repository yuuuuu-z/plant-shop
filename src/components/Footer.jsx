import { Facebook, Instagram, Send, Twitter, Youtube } from "lucide-react";
import "../Style/footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-left">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/flower-plant-6624897-5522944.png?f=webp"
            alt=""
          />
        </div>
        <div className="footer-left-des">
          <p>EarthDX</p>
          <p className="text-muted">
            We help you to save the earth and encourages people to plant more
            trees.We are a team of passionate people whose goal it's to impove
            everyone's through disruptive products. We build great products to
            solve your business problems.
          </p>
        </div>
        <div className="footer-right">
          <p className="fs-5">Email Us</p>
          <p className="text-muted">
            Let's keep in touch in order to keep in touch with us
          </p>
          <div className="footer-right-btn">
            <input type="text" />
            <span className="btn btn-success">
              <Send />
            </span>
          </div>
          <p className="fs-5"> Follow Us</p>
          <p className="text-muted">
            Follow us to see what we are doing in this journey
          </p>
          <div className="footer-right-contact ">
            <span>
              <Twitter />
            </span>
            <span>
              <a
                target="blank"
                href="https://web.facebook.com/sopheak.tra.35977897"
              >
                {" "}
                <Facebook />
              </a>
            </span>
            <span>
              <Instagram />
            </span>
            <span>
              <Youtube size={"30"} />
            </span>
          </div>
        </div>
      </div>
      <article>
        Ⓒ 2024 All Rigths Reserved. Design by <span className="fs-4">Tra</span>
      </article>{" "}
    </footer>
  );
};
