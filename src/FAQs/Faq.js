import React, {useState} from 'react'
import classes from './faq.module.css';

const data = [
  {
    question: "Do i need to pay to list my house for rent with Easyrent?",
    answer:
      "No. Publishing your property with Easyrent is totally free. We create your listing at no cost to you.",
  },
  {
    question: "What type of houses can i list on Easyrent?",
    answer:
      "You can list only available apartments or houses you wish to rent. You can’t buy and sell properties on this platform.",
  },
  {
    question: "What are the benefits i can gain from using Easyrent?",
    answer:
      "Easyrent connects you to clients very fast and you tend to remove agency ridiculous prices on customers while earning.",
  },
  {
    question: "How do i earn my 5% as a landlord?",
    answer:
      "You include your 5% earning in the price you post. Please note that Easyrent doesn’t give the 5% earned.",
  },
];

const Faq = () => {
  const [selected, setSelected] = useState([]);

  const toggle = (i) => {
    if (selected.includes(i)) {
      setSelected(selected.filter((item) => item !== i));
    } else {
      setSelected([...selected, i]);
    }
  };

  return (
    <div className={classes.main}>
      <div className={classes.accordion}>
        <div className={classes.upper}>
          <h2>Frequently Asked Questions</h2>
        </div>
        {data.map((item, i) => (
          <div className={classes.item} key={i}>
            <div className={classes.title} onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <h1>{selected.includes(i) ? "-" : "+"}</h1>
            </div>
            <div
              className={
                selected.includes(i)
                  ? `${classes.content} ${classes.show}`
                  : classes.content
              }
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
