import React, { useState } from 'react';

const PaymentMethods = ({ total, onPaymentSuccess }) => {
  const [selectedMethod, setSelectedMethod] = useState('paypal');
  const [bankDetails, setBankDetails] = useState({
    name: '',
    reference: ''
  });

  const handlePayment = () => {
    // Simulación de pago exitoso
    onPaymentSuccess(`Pago con ${selectedMethod} procesado correctamente`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Método de Pago</h2>
      
      <div className="space-y-4">
        {/* PayPal Option */}
        <div className="flex items-center">
          <input
            type="radio"
            id="paypal"
            name="payment"
            checked={selectedMethod === 'paypal'}
            onChange={() => setSelectedMethod('paypal')}
            className="h-4 w-4 text-amber-600 focus:ring-amber-500"
          />
          <label htmlFor="paypal" className="ml-2 block text-gray-700">
            PayPal
          </label>
        </div>

        {/* Bank Transfer Option */}
        <div className="flex items-start">
          <input
            type="radio"
            id="bank"
            name="payment"
            checked={selectedMethod === 'bank'}
            onChange={() => setSelectedMethod('bank')}
            className="h-4 w-4 text-amber-600 focus:ring-amber-500 mt-1"
          />
          <div className="ml-2">
            <label htmlFor="bank" className="block text-gray-700 mb-1">
              Transferencia Bancaria
            </label>
            {selectedMethod === 'bank' && (
              <div className="mt-2 space-y-2">
                <div>
                  <label className="block text-sm text-gray-600">Banco: Banco Internacional</label>
                  <label className="block text-sm text-gray-600">Cuenta: 1234567890</label>
                  <label className="block text-sm text-gray-600">Titular: Cold Brew S.A.</label>
                  <label className="block text-sm text-gray-600">CLABE: 012180012345678901</label>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Nombre del titular</label>
                  <input
                    type="text"
                    value={bankDetails.name}
                    onChange={(e) => setBankDetails({...bankDetails, name: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Como aparece en tu cuenta"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Número de referencia</label>
                  <input
                    type="text"
                    value={bankDetails.reference}
                    onChange={(e) => setBankDetails({...bankDetails, reference: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Últimos 4 dígitos de tu transferencia"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Manual Payment Option */}
        <div className="flex items-center">
          <input
            type="radio"
            id="manual"
            name="payment"
            checked={selectedMethod === 'manual'}
            onChange={() => setSelectedMethod('manual')}
            className="h-4 w-4 text-amber-600 focus:ring-amber-500"
          />
          <label htmlFor="manual" className="ml-2 block text-gray-700">
            Pago Manual (Efectivo/Depósito)
          </label>
        </div>

        {/* Total and Pay Button */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-lg">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={handlePayment}
            className="w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition"
          >
            Confirmar Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;