import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  console.log(location.state);
  const [amount, setAmount] = useState(location.state);
  const [taxAmount, setTaxAmount] = useState(10);

  const secretKey = "8gBm/:&EnhH.1/q";

  let total_amount = location.state;

  let transaction_uuid = uuidv4();
  const Message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;

  var hash = CryptoJS.HmacSHA256(Message, secretKey);
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">eSewa Payment</h2>
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <label className="block mb-2 font-medium">Amount</label>
        <input
          type="number"
          name="amount"
          value={total_amount}
          required
          className="w-full border rounded px-2 py-1 mb-4"
        />

        <label className="block mb-2 font-medium">Tax Amount</label>
        <input
          type="number"
          name="tax_amount"
          value="0"
          required
          className="w-full border rounded px-2 py-1 mb-4"
        />

        <input type="hidden" name="total_amount" value={total_amount} />
        <input type="hidden" name="transaction_uuid" value={transaction_uuid} />
        <input type="hidden" name="product_code" value="EPAYTEST" />
        <input type="hidden" name="product_service_charge" value="0" />
        <input type="hidden" name="product_delivery_charge" value="0" />
        <input
          type="hidden"
          name="success_url"
          value="https://developer.esewa.com.np/success"
        />
        <input
          type="hidden"
          name="failure_url"
          value="https://developer.esewa.com.np/failure"
        />
        <input
          type="text"
          id="signed_field_names"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
          required
        />

        <input type="hidden" name="signature" value={hashInBase64} />

        <button
          type="submit"
          className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Pay with eSewa
        </button>
      </form>
    </div>
  );
};

export default Payment;
