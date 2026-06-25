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
  const chequeList = [
    {
      chequeID: 1,
      chequeNo: 917201,
      chequeDate: "01/01/2026",
      drawnTo: "Mollok horridus",
    },
    {
      chequeID: 2,
      chequeNo: 917202,
      chequeDate: "01/10/2026",
      drawnTo: "Bufo melanostictus",
    },
    {
      chequeID: 3,
      chequeNo: 917203,
      chequeDate: "01/01/2026",
      drawnTo: "Homo erectus",
    },
    {
      chequeID: 4,
      chequeNo: 917204,
      chequeDate: "01/01/2026",
      drawnTo: "Rana americana",
    },
    {
      chequeID: 5,
      chequeNo: 917205,
      chequeDate: "01/01/2026",
      drawnTo: "Equus caballus",
    },
    {
      chequeID: 6,
      chequeNo: 917206,
      chequeDate: "01/01/2026",
      drawnTo: "Bos taurus",
    },
  ];
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
        <div class="checkbox alert-input">
          <label htmlFor="isCancelled" class="alert-input-label">
            Cancelled
          </label>
          <input type="checkbox" id="isCancelled" />
        </div>
      </form>
      <form action="" id="cheque-list">
        <select size={10} style={{ fontSize: "var(--menu-font-size)" }}>
          {chequeList.map((chequeItem) => (
            <option key={chequeItem.chequeID} value={chequeItem.chequeID}>
              {`${chequeItem.chequeNo} : ${chequeItem.chequeDate} : 
              ${chequeItem.drawnTo}`}
            </option>
          ))}
        </select>
      </form>
      <div class="btn-cheques-div">
        <button className="btn-cheques">Add</button>
        <button className="btn-cheques">Edit</button>
        <button className="btn-cheques">Delete</button>
      </div>
    </div>
  );
}
