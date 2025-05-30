import { useSearchParams } from "react-router-dom";

function Success() {
  const [search] = useSearchParams();
  const status = search.get("status");
  const transaction_uuid = search.get("transaction_uuid");
  const total_amount = search.get("total_amount");  

  if (!status || !transaction_uuid || !total_amount) {
    return (
      <div className="text-red-500 text-center mt-10">
        Payment data is incomplete or missing.
      </div>
    );
  }

  return (
    <div className="shadow-2xl space-y-3.5 shadow-gray-700 w-96 m-auto my-10 p-5">
      <h1 className="text-center text-2xl underline">Payment is Success</h1>
      <h1>
        Status: <span className="text-orange-500 underline">{status}</span>
      </h1>
      <h1>
        Transaction UUID:{" "}
        <span className="text-orange-300 underline">{transaction_uuid}</span>
      </h1>
      <h1>
        Total Amount:{" "}
        <span className="text-orange-500 underline">Rs. {total_amount}</span>
      </h1>
    </div>
  );
}

export default Success;
