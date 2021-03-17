import { formatPrice } from './helpers';
import { Teacher } from './types';

type Props = {
    teacher: Teacher;
    onSelectTeacher: (teacher: Teacher) => void;
    isSelected: boolean;
}

function TeacherCard({ teacher, onSelectTeacher, isSelected }: Props){
    return(
        <div 
        className={`class-card-container ${isSelected ? 'selected': ''}`}
        onClick={() => onSelectTeacher(teacher)}
        >
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