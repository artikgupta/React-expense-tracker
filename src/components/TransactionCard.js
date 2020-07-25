import React from "react";

const TransactionCard = (props) => {
  return (
    <div>
      {props.transactions.reverse().map((source) => {
        return (
          <div key={source.transactionName}>
            <div className="transaction">
              <p
                className={
                  source.type === "income" ? "income-color" : "expense-color"
                }
              >
                {source.type}
              </p>
              <p>{source.transactionName}</p>
              <p>
                <i className="fas fa-rupee-sign"></i>
                {source.amount}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TransactionCard;
