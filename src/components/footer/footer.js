import "./footer.css";
import "./footer.responsive.css";
import Navigation from "@nav/nav.js";
import footerData from "@data/footerData";

const footer = `
  <!-- FOOTER -->
  <div class="footer">
    <div class="footer__row">
        <div class="footer__item">
        <i class="fab fa-vk footer__item__title"></i>
        <i class="fab fa-odnoklassniki footer__item__title"></i>
        <i class="fab fa-facebook-f footer__item__title"></i>
        <i class="fab fa-instagram footer__item__title"></i>
        <i class="fab fa-twitter footer__item__title"></i>
        <i class="fab fa-youtube footer__item__title"></i>
        <i class="fab fa-telegram-plane footer__item__title"></i>
        </div>
    </div>
        ${new Navigation().renderFooterItems(footerData)}
  </div>
  <!-- FOOTER END -->
`;

export default footer;
