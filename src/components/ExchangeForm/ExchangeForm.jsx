import { RiExchangeDollarFill } from 'react-icons/ri';
import styles from './ExchangeForm.module.css';

export const ExchangeForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.exchange;
    const [amount, from, , to] = value.split(' ');
    console.log({ amount, from, to });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <button className={styles.button} type="submit">
        <RiExchangeDollarFill className={styles.icon} />
      </button>

      <input
        title="Request format 15 USD in UAH"
        name="exchange"
        pattern="^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$"
        className={styles.input}
      />
    </form>
  );
};
