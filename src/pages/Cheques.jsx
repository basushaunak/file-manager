import "./Cheques.css";
import SmartDate from "../components/SmartDate";
export default function Cheques() {
  // 	"chequeId"	INTEGER,
  // "chequeNumber"	TEXT NOT NULL,
  // "chequeDate"	TEXT NOT NULL,
  // "chequeDrawnTo"	TEXT NOT NULL,
  // "chequeTreasuryToDate"	TEXT,
  // "chequeTreasuryReturnDate"	TEXT,
  // "chequeDispatchDate"	TEXT,
  // "chequeComments"	TEXT NOT NULL,
  // "userID"	INTEGER NOT NULL,
  // "lastUpdated"	TEXT,

  const blurEvent = (e) => {
    if (e.target.value !== "") {
      e.target.value = Math.round(parseFloat(e.target.value));
    }
  };
  return (
    <div className="cheque-manager">
      <form action="" className="cheque">
        <label htmlFor="cheque-number">Cheque No.</label>
        <input type="text" id="cheque-number" />
        <label htmlFor="cheque-date">Cheque Date</label>
        <SmartDate id="cheque-date" className="date-input" />
        <label htmlFor="drawn-to">Drawn To</label>
        <input type="text" id="drawn-to" />
        <label htmlFor="cheque-amount">Cheque Amount</label>
        <input type="number" id="cheque-amount" onBlur={blurEvent} />
        <label htmlFor="treasury-to">To Treasury</label>
        <SmartDate id="treasury-to" className="date-input" />
        <label htmlFor="treasury-from">From Treasury</label>
        <SmartDate id="treasury-from" className="date-input" />
        <label htmlFor="cheque-dispatch-date">Dispatch Date</label>
        <SmartDate id="cheque-dispatch-date" className="date-input" />
        <label htmlFor="cheque-comments">Comments</label>
        <textarea name="" id="cheque-comments" rows="3"></textarea>
      </form>
      <form action="" id="cheque-list"></form>
    </div>
  );
}
