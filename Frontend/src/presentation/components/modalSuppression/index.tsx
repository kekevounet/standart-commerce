import { FiAlertTriangle } from "react-icons/fi"; 
import type { ProduitsType } from "../../admin/product/type";
interface ModalSuppressionProps {
  onClose: () => void;
  onConfirm: () => void;
  produit: ProduitsType
}

export default function ModalSuppression({
  onClose,
  onConfirm,
  produit
}: ModalSuppressionProps) {
  return (
    <div className="fixed inset-0 z-50 flex h-screen w-full items-center justify-center bg-slate-900/20 backdrop-blur-xs">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        {/* Icône */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <FiAlertTriangle className="h-7 w-7 text-red-600" />              
        </div>

        {/* Contenu */}
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900">
            Supprimer {produit.nom}
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Cette action est irréversible. Le produit ainsi que son image
            seront définitivement supprimés.
          </p>
        </div>

        {/* Boutons */}
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Annuler
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-[0.98]"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}