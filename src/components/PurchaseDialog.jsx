import React, { useState } from "react";

const PurchaseConfirmationModal = ({ open, price = 100 }) => {
  const [isModalOpen, setIsModalOpen] = useState(open);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const confirmPurchase = () => {
    console.log("AQUI");
    alert("Compra confirmada! Gracias por tu compra.");
    closeModal();
  };

  return isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Confirmación de Compra</h2>
        <p className="text-gray-700 mb-4">
          ¿Estás seguro de que deseas comprar el producto "Nombre del Producto" por {price}€?
        </p>

        <div className="flex justify-end space-x-4">
          <button
            onClick={closeModal}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            onClick={confirmPurchase}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseConfirmationModal;
