import styles from "./styles.module.scss";
import chip from "./assets/chip.png";

export default function CreditCardPaymentForm() {
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.payment}>
        <div className={styles.bg}></div>

        <div className={styles.card}>
          <img src={chip} alt="chip" className={styles.chip} />

          <div className={styles.logo}></div>

          <h2 className={styles.bankName} contentEditable="true">
            Bank Name
          </h2>

          <form>
            <div className={styles.inputBox}>
              <span>Card No.</span>
              <input type="text" placeholder="0123 4567 8901" maxLength="19" />
            </div>

            <div className={styles.inputBox}>
              <span>Card Holder</span>
              <input type="text" placeholder="John Doe" maxLength="19" />
            </div>

            <div className={styles.group}>
              <div className={styles.inputBox}>
                <span>Valid Thru</span>
                <input type="text" placeholder="MM/YY" maxLength="5" />
              </div>

              <div className={styles.inputBox}>
                <span>CCV</span>
                <input type="password" placeholder="***" maxLength="4" />
              </div>
            </div>
          </form>
        </div>

        <button className={styles.btn}>Confirm and Pay</button>
      </div>
    </div>
  );
}
