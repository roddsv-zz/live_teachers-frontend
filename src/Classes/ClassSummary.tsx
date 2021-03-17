import { Teacher } from './types';
import { formatPrice } from './helpers';
import TeacherCard from './TeacherCard';


type Props = {
    amount: number;
    totalPrice: number;
    onSubmit: () => void;
}

function ClassSummary({ amount, totalPrice, onSubmit}: Props) {
    return (
        <div className="class-summary-container">
            <div className="class-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <strong className="amount-selected">{ amount }</strong>
                    AULA(S) SELECIONADA(S)
                </span>
                    <span className="class-summary-total">
                        <strong className="amountSelected">
                        { formatPrice(totalPrice) }
                        </strong>
                    {` VALOR TOTAL `}
                </span>
                </div>
                <button onClick={onSubmit} className="class-summary-confirm-class">
                    CONFIRMAR AULA
                </button>
            </div>
        </div>
    )
}

export default ClassSummary;