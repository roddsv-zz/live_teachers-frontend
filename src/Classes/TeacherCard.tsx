import { Teacher } from './types';

type Props = {
    teacher: Teacher;
}

function formatPrice(price: number) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });

    return formatter.format(price);
}

function TeacherCard({ teacher }: Props){
    return(
        <div className="class-card-container">
            <h3 className="class-card-title">
                <p>
                    {teacher.name}
                </p>
            </h3>
            <img 
            src={teacher.imageUri} className="class-card-image" alt="{teacher.name}"/>
            <h3 className="class-card-price">
                {formatPrice(teacher.hourPrice)}
            </h3>
            <div className="class-card-description">
                <h3>Descrição</h3>
                <p>
                    {teacher.description}
                </p>
            </div>
            
        </div>
    )
}

export default TeacherCard;