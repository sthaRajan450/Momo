import { useSearchParams } from "react-router-dom";

function Success() {
  const [search] = useSearchParams();
  const encodedData = search.get("data");

  if (!encodedData) {
    return (
      <div className="text-red-500 text-center mt-10">
        Payment data is missing.
      </div>
    );
  }

  let parsedData = null;

  try {
    const jsonString = atob(encodedData); 
    parsedData = JSON.parse(jsonString);
  } catch (error) {
    return (
      <div className="text-red-500 text-center mt-10">
        Failed to decode payment data.
      </div>
    );
  }

  const { status, transaction_uuid, total_amount } = parsedData;

  if (!status || !transaction_uuid || !total_amount) {
    return (
      <div className="text-red-500 text-center mt-10">
        Some payment fields are missing.
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
